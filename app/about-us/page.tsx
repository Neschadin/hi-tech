import { AboutPrimary, HeroAboutUs } from "@/components";
import { Container } from "@/components/atomic";

export const metadata = {
  title: "Інформація про сервісний центр Hi-Tech",
  description:
    "Команда Hi-Tech, це магазин цифрової техніки, сервісний центр і відділ комісійного продажу, який працює у місті Черкаси ще з 2005 року.",
};

export default function Contacts() {
  return (
    <Container className="flex-col">
      <HeroAboutUs />

      <AboutPrimary />
    </Container>
  );
}
