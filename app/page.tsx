import type { Metadata } from "next";
import { LandingAdvantages } from "@/components/landing/LandingAdvantages";
import { LandingCta } from "@/components/landing/LandingCta";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingHowTo } from "@/components/landing/LandingHowTo";
import { LandingLenovoStrip } from "@/components/landing/LandingLenovoStrip";
import { LandingPricingTeaser } from "@/components/landing/LandingPricingTeaser";
import { LandingPriority } from "@/components/landing/LandingPriority";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaq } from "@/lib/content/faq";
import { localBusinessJsonLd, site } from "@/lib/content/site";

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
