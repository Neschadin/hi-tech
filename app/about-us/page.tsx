import type { Metadata } from "next";

import { AboutPrimary } from "@/components/pageAboutUs/AboutPrimary";
import { HeroAboutUs } from "@/components/pageAboutUs/HeroAboutUs";
import { Specialization } from "@/components/pageAboutUs/Specialization";
import { SpecializationDetails } from "@/components/pageAboutUs/SpecializationDetails";
import { Section1 } from "@/components/pageMain/Section1";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Інформація про сервісний центр Hi-Tech",
  description:
    "Команда Hi-Tech — магазин цифрової техніки, сервісний центр і відділ комісійного продажу в Черкасах з 2005 року.",
  path: "/about-us"
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Головна", path: "/" },
  { name: "Про нас", path: "/about-us" }
]);

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />

      <HeroAboutUs />

      <AboutPrimary />

      <Specialization />

      <SpecializationDetails />

      <Section1 />
    </>
  );
}
