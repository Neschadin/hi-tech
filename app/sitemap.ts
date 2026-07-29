import type { MetadataRoute } from "next";

import { getAllServiceSlugs } from "@/lib/content/services";
import { site } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentUpdatedAt);
  const paths: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacts", priority: 0.8, changeFrequency: "monthly" },
    { path: "/status", priority: 0.6, changeFrequency: "monthly" },
    ...getAllServiceSlugs().map((slug) => ({
      path: `/services/${slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const
    }))
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority
  }));
}
