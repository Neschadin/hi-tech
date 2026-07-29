import { resolveLegacyRedirect } from "../../../lib/seo/legacyRedirects";
import staticRedirects from "../static-redirects.json";

/** Legacy 301 (1:1 + patterns). Sunset: lib/seo/legacyRedirects.ts */

const staticByPath = new Map(
  staticRedirects.redirects.map((item) => [
    item.path.replace(/\/+$/, "") || "/",
    item.destination
  ])
);

function resolveRedirect(pathname: string): string | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const exact = staticByPath.get(normalized.toLowerCase());
  if (exact) return exact;
  return resolveLegacyRedirect(pathname);
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const dest = resolveRedirect(url.pathname);
    if (!dest) {
      return new Response("Not Found", { status: 404 });
    }

    url.pathname = dest;
    return Response.redirect(url.toString(), 301);
  }
};
