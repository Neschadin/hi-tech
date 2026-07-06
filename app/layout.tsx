import type { Metadata } from "next";
import { Didact_Gothic, Exo_2 } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content/site";
import { cn } from "@/utils/cn";

const exo2 = Exo_2({ subsets: ["latin", "cyrillic"] });

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-didact-gothic"
});

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
      <body
        className={cn("flex flex-col", exo2.className, didactGothic.variable)}
      >
        <Header />

        <Breadcrumbs />

        {children}

        <Footer />
      </body>
    </html>
  );
}
