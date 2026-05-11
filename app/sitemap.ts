import type { MetadataRoute } from "next";

import { getAllServiceSlugs } from "@/lib/content/services";
import { site } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "/",
    "/about-us",
    "/contacts",
    "/status",
    ...getAllServiceSlugs().map((slug) => `/services/${slug}`)
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
