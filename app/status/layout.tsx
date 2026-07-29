import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Статус ремонту Hi-Tech",
  description:
    "Онлайн-статус ремонту Hi-Tech у Черкасах: перевірте стан звернення за номером акту та телефоном, вказаним при здачі техніки.",
  path: "/status"
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Головна", path: "/" },
  { name: "Статус ремонту", path: "/status" }
]);

export default function StatusLayout({ children }: PropsWithChildren) {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      {children}
    </>
  );
}
