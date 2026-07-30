const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type SiteverifyResponse = {
  success: boolean;
  "error-codes"?: string[];
  action?: string;
  hostname?: string;
};

export async function verifyTurnstileToken(
  secret: string,
  token: string,
  remoteip: string | null
): Promise<boolean> {
  if (!token) return false;

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
        ...(remoteip ? { remoteip } : {})
      }),
      signal: AbortSignal.timeout(10_000)
    });

    if (!res.ok) return false;

    const result = (await res.json()) as SiteverifyResponse;
    return result.success === true;
  } catch {
    return false;
  }
}
