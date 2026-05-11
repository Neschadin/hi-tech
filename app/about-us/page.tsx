import type { Metadata } from "next";

import {
  AboutPrimary,
  HeroAboutUs,
  Section1,
  Specialization,
  SpecializationDetails
} from "@/components";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Інформація про сервісний центр Hi-Tech",
  description:
    "Команда Hi-Tech, це магазин цифрової техніки, сервісний центр і відділ комісійного продажу, який працює у місті Черкаси ще з 2005 року.",
  alternates: { canonical: `${site.url}/about-us` }
};

export default function AboutUsPage() {
  return (
    <>
      <HeroAboutUs />

      <AboutPrimary />

      <Specialization />

      <SpecializationDetails />

      <Section1 />
    </>
  );
}
