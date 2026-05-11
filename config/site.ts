import { site } from "@/lib/content/site";

/** @deprecated Prefer importing `site` from `@/lib/content/site` */
export const siteConfig = {
  social: site.social
} as const;
