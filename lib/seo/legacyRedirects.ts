/**
 * Legacy WP redirects (prod: Cloudflare edge, not Next.js).
 *
 * Перевірка — липень 2027, далі щопівроку:
 * - GSC: Coverage, 404 на старі URL, «Сторінки з переадресацією»
 * - CF Observability: worker `hi-tech-legacy-redirects`
 *   (фільтр /service/*, /ru/*, шляхи з static-redirects.json)
 *
 * Новий legacy URL:
 * - фіксований 1:1 → workers/legacy-redirects/static-redirects.json + deploy:legacy-redirects
 * - патерн /service/:slug → regex тут + deploy:legacy-redirects
 *
 * Видалити весь шар, якщо ~30 днів нуль трафіку на всіх legacy шляхах:
 * workers/legacy-redirects/, цей файл, dev redirects/rewrites в next.config.ts,
 * deploy/smoke у package.json і deploy.yml.
 */
export function resolveLegacyRedirect(pathname: string): string | null {
  const raw = pathname.replace(/\/+$/, "") || "/";
  const path = raw.toLowerCase();

  if (
    path.includes("mizhnarodna-harantiia-lenovo") ||
    path.includes("harantiia-lenovo") ||
    path.includes("garantia-lenovo")
  ) {
    return "/services/lenovo";
  }

  if (path.startsWith("/project-category")) {
    return "/";
  }

  const serviceMatch = path.match(/^\/(?:ru\/)?service(?:\/(.*))?$/);
  if (!serviceMatch) {
    if (path.startsWith("/ru/")) return "/";
    return null;
  }

  const slug = (serviceMatch[1] ?? "").replace(/\/+$/, "");
  if (!slug) return "/services/noutbuky";

  return destinationForLegacyServiceSlug(slug);
}

function destinationForLegacyServiceSlug(slug: string): string {
  if (slug.includes("harantyia-lenovo") || slug.includes("garantia-lenovo")) {
    return "/services/lenovo";
  }

  if (/(?:^|-)lenovo(?:-|$)/.test(slug) || slug.includes("lenovo")) {
    return "/services/lenovo";
  }

  if (
    /prynt|printer|mfu|мфу|kartryd|картридж|lazern|strumenev|zapravka|заправ/.test(
      slug
    )
  ) {
    return "/services/printery-mfu";
  }

  if (
    /noutbuk|laptop|matryts|матриц|okhlazh|охлажд|zalyto|залит|raz-?em|роз-?єм|klaviatur|клавіатур|termopast|термопаст/.test(
      slug
    )
  ) {
    return "/services/noutbuky";
  }

  if (
    /smartfon|iphone|ipad|ima\b|planshet|tablet|vidnovlen|vosstanov|dann|flash|raid|nas|monitor|monytor|televiz|tv\b|hdd|dyskov|zhorst|komp|systemn|monoblok|elektron|fotoram|ustanovka|nastroyka|po\b/.test(
      slug
    )
  ) {
    return "/contacts";
  }

  return "/services/noutbuky";
}
