/**
 * Optional: deploy 1:1 as CF Single Redirect rules (needs Zone Rulesets: Edit on API token).
 * Default deploy uses hi-tech-legacy-redirects Worker instead (static-redirects.json).
 * Sunset: lib/seo/legacyRedirects.ts
 */

import staticRedirects from "../workers/legacy-redirects/static-redirects.json";

const API = "https://api.cloudflare.com/client/v4";

type CfRule = {
  id: string;
  version?: string;
  action: string;
  expression: string;
  description: string;
  enabled: boolean;
  action_parameters: {
    from_value: {
      status_code: number;
      target_url: { value: string };
      preserve_query_string: boolean;
    };
  };
};

type Ruleset = {
  id: string;
  rules: CfRule[];
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

async function cf<T>(
  token: string,
  path: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init?.headers
    }
  });
  const body = (await res.json()) as {
    success: boolean;
    errors?: unknown[];
    result: T;
  };
  if (!body.success) {
    throw new Error(`CF API ${path}: ${JSON.stringify(body.errors)}`);
  }
  return body.result;
}

function buildRule(
  host: string,
  id: string,
  path: string,
  destination: string,
  existing?: CfRule
): CfRule {
  return {
    id,
    version: existing?.version,
    action: "redirect",
    expression: `(http.host eq "${host}" and http.request.uri.path eq "${path}")`,
    description: `Legacy 1:1: ${path}`,
    enabled: true,
    action_parameters: {
      from_value: {
        status_code: 301,
        target_url: { value: `https://${host}${destination}` },
        preserve_query_string: true
      }
    }
  };
}

async function main() {
  const token = requireEnv("CLOUDFLARE_API_TOKEN");
  const { zone, redirects } = staticRedirects;
  const host = zone;

  const zones = await cf<{ id: string }[]>(
    token,
    `/zones?name=${encodeURIComponent(zone)}`
  );
  const zoneId = zones[0]?.id;
  if (!zoneId) throw new Error(`Zone not found: ${zone}`);

  let entrypoint: Ruleset | null = null;
  try {
    entrypoint = await cf<Ruleset>(
      token,
      `/zones/${zoneId}/rulesets/phases/http_request_redirect/entrypoint`
    );
  } catch {
    entrypoint = null;
  }

  const legacyIds = new Set(redirects.map((r) => r.id));
  const existingById = new Map(
    (entrypoint?.rules ?? []).map((rule) => [rule.id, rule])
  );

  const legacyRules = redirects.map((item) =>
    buildRule(
      host,
      item.id,
      item.path,
      item.destination,
      existingById.get(item.id)
    )
  );

  const otherRules = (entrypoint?.rules ?? []).filter(
    (rule) => !legacyIds.has(rule.id)
  );

  const rules = [...legacyRules, ...otherRules];

  if (entrypoint) {
    await cf(token, `/zones/${zoneId}/rulesets/${entrypoint.id}`, {
      method: "PUT",
      body: JSON.stringify({ rules })
    });
    console.log(
      `Updated ${legacyRules.length} legacy redirect rule(s) on ${zone}`
    );
    return;
  }

  await cf(token, `/zones/${zoneId}/rulesets`, {
    method: "POST",
    body: JSON.stringify({
      name: "default",
      kind: "zone",
      phase: "http_request_redirect",
      rules: legacyRules
    })
  });
  console.log(
    `Created ${legacyRules.length} legacy redirect rule(s) on ${zone}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
