import type { Metadata } from "next";

import { site } from "@/lib/content/site";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — сервісний центр у Черкасах`
};

/** Shared page metadata: canonical + OG/Twitter with image. */
export function pageMetadata({
  title,
  description,
  path,
  robots
}: {
  title?: string;
  description?: string;
  path: string;
  robots?: Metadata["robots"];
}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const desc = description ?? site.defaultDescription;
  const ogTitle = title ?? site.defaultTitle;

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(robots ? { robots } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: ogTitle,
      description: desc,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: desc,
      images: [ogImage.url]
    }
  };
}
