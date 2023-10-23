import Image from "next/image";
import { ContactNumbers, HeroContactsPage, VisitUs } from "@/components";
import { Container } from "@/components/atomic";

import bgImage from "@/public/imgContactsPage/frame.jpg";

export const metadata = {
  title: "Контактна інформація | Hi-Tech сервіс",
  description:
    "Контактна інформація сервісного центру Hi-Tech | Де в Черкасах можна терміново відремонтувати та налаштувати комп'ютер, або ноутбук. Куди в Черкасах звернутись по гарантії Lenovo.",
};

export default function Contacts() {
  return (
    <Container className="flex-col">
      <Image
        className="fixed left-1/2 top-0 -z-10 m-auto -translate-x-1/2 px-5"
        alt="bg"
        src={bgImage}
        placeholder="blur"
      />

      <HeroContactsPage />

      <ContactNumbers />

      <VisitUs />
    </Container>
  );
}
