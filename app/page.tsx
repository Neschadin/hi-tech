import {
  LandingAdvantages,
  LandingCta,
  LandingFaq,
  LandingHero,
  LandingHowTo,
  LandingLenovoStrip,
  LandingPricingTeaser,
  LandingPriority
} from "@/components/landing";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaq } from "@/lib/content/faq";
import { localBusinessJsonLd, site } from "@/lib/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: site.url }
};

const localBusinessLd = localBusinessJsonLd();

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
};

export default function MainPage() {
  return (
    <main className="pt-[82px]">
      <JsonLd data={localBusinessLd} />
      <JsonLd data={faqLd} />

      <LandingHero />

      <LandingPriority />

      <LandingLenovoStrip />

      <LandingHowTo />

      <LandingPricingTeaser />

      <LandingAdvantages />

      <LandingFaq />

      <LandingCta />
    </main>
  );
}
