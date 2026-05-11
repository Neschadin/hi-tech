import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Статус ремонту",
  description:
    "Перевірте стан звернення до сервісного центру Hi-Tech за номером акту та телефоном, вказаним при здачі техніки.",
  alternates: { canonical: `${site.url}/status` }
};

export default function StatusLayout({ children }: PropsWithChildren) {
  return children;
}
