import {
  AboutPrimary,
  HeroAboutUs,
  Section1,
  Specialization,
  SpecializationDetails,
} from "@/components";

export const metadata = {
  title: "Інформація про сервісний центр Hi-Tech",
  description:
    "Команда Hi-Tech, це магазин цифрової техніки, сервісний центр і відділ комісійного продажу, який працює у місті Черкаси ще з 2005 року.",
};

export default function Contacts() {
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
