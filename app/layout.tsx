import type { Metadata } from "next";
import { Didact_Gothic, Exo_2 } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { cn } from "@/utils/cn";

const exo2 = Exo_2({ subsets: ["latin", "cyrillic"] });

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-didact-gothic"
});

const rootMeta = pageMetadata({ path: "/" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    template: site.titleTemplate
  },
  description: site.defaultDescription,
  openGraph: rootMeta.openGraph,
  twitter: rootMeta.twitter,
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
        className={cn(
          "antialiased flex flex-col",
          exo2.className,
          didactGothic.variable
        )}
      >
        <a href="#main-content" className="skip-link">
          Перейти до вмісту
        </a>

        <Header />

        <Breadcrumbs />

        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
