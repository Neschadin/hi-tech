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
import { site } from "@/lib/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: site.url }
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "ComputerRepair",
  name: "Hi-Tech сервіс",
  url: site.url,
  telephone: site.phones.map((p) => p.tel),
  email: site.email,
  image: `${site.url}/imgMainPage/heroBg/laptop.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    addressCountry: site.address.addressCountry
  },
  areaServed: { "@type": "City", name: site.city },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00"
    }
  ]
};

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
    <>
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
    </>
  );
}
