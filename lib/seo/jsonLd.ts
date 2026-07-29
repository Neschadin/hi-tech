import { homeHowTo } from "@/lib/content/home";
import { site } from "@/lib/content/site";
import type { ServiceCategory } from "@/lib/content/types";

export type Crumb = { name: string; path: string };

/** Absolute URL for a site path (`/` → origin). */
export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path)
    }))
  };
}

export function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: homeHowTo.title,
    description: homeHowTo.lead,
    step: homeHowTo.bullets.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Крок ${i + 1}`,
      text
    }))
  };
}

/** Service + Offer markup from category price table. */
export function serviceJsonLd(s: ServiceCategory) {
  const pageUrl = absoluteUrl(`/services/${s.slug}`);
  const priced = s.startingPrices.filter((r) => r.fromUah > 0);
  const lowPrice =
    priced.length > 0 ? Math.min(...priced.map((r) => r.fromUah)) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "ComputerRepair",
      "@id": `${site.url}/#organization`,
      name: site.googleBusinessName
    },
    areaServed: {
      "@type": "City",
      name: site.city
    },
    ...(priced.length > 0
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "UAH",
            lowPrice: String(lowPrice),
            offerCount: priced.length,
            url: `${pageUrl}#ciny`,
            offers: priced.map((row) => ({
              "@type": "Offer",
              name: row.service,
              price: String(row.fromUah),
              priceCurrency: "UAH",
              availability: "https://schema.org/InStock",
              url: `${pageUrl}#ciny`
            }))
          }
        }
      : {})
  };
}
