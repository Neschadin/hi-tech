import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Exo_2 } from "next/font/google";
import "./globals.css";

import { Header, Footer, Breadcrumbs } from "@/components";
import { site } from "@/lib/content/site";

const exo2 = Exo_2({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    template: site.titleTemplate
  },
  description: site.defaultDescription,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.defaultTitle,
    description: site.defaultDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="uk">
      <body className={`flex flex-col ${exo2.className}`}>
        <Header />

        <Breadcrumbs />

        {children}

        <Footer />
      </body>
    </html>
  );
}
