interface Env {
  ONEC_URL: string;
  ONEC_USER: string;
  ONEC_PASS: string;
}

type RepairStatusRequest = {
  actNumber: string;
  phoneNumber: string;
};

const ACT_NUMBER_RE = /^НФНФ-\d{6}$/;
const PHONE_PREFIXES = ["[679]3", "6[78]", "9[678]", "50", "66", "39"] as const;

function cleanPhone(phone: string): string {
  return phone.replace(/^(\+38|38)/, "").replace(/\D/g, "");
}

function isValidPhone(phone: string): boolean {
  const cleaned = cleanPhone(phone);
  return PHONE_PREFIXES.some((item) =>
    new RegExp(`0${item}\\d{7}$`).test(cleaned)
  );
}

function isValidRequest(data: unknown): data is RepairStatusRequest {
  if (typeof data !== "object" || data === null) return false;
  const { actNumber, phoneNumber } = data as RepairStatusRequest;
  return (
    typeof actNumber === "string" &&
    typeof phoneNumber === "string" &&
    ACT_NUMBER_RE.test(actNumber) &&
    isValidPhone(phoneNumber)
  );
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("Origin");
  if (!origin) return true;

  try {
    const host = new URL(origin).hostname;
    return (
      host === "hi-tech.ck.ua" ||
      host.endsWith(".workers.dev") ||
      host === "localhost"
    );
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    if (!isAllowedOrigin(request)) {
      return new Response("Forbidden", { status: 403 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }

    if (!isValidRequest(body)) {
      return new Response("Invalid request", { status: 400 });
    }

    try {
      const res = await fetch(env.ONEC_URL, {
        method: "POST",
        headers: {
          Accept: "text/plain",
          Authorization: `Basic ${btoa(`${env.ONEC_USER}:${env.ONEC_PASS}`)}`,
          "Content-Type": "text/plain"
        },
        body: JSON.stringify({
          actNumber: body.actNumber,
          phoneNumber: cleanPhone(body.phoneNumber)
        }),
        signal: AbortSignal.timeout(10_000)
      });

      return new Response(await res.text(), {
        status: res.status,
        headers: { "Content-Type": "application/json" }
      });
    } catch {
      return new Response("Upstream unavailable", { status: 502 });
    }
  }
};
