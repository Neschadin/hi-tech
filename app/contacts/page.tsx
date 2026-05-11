import type { Metadata } from "next";
import Image from "next/image";

import { ContactNumbers, HeroContactsPage, VisitUs } from "@/components";
import { Container } from "@/components/atomic";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Контактна інформація | Hi-Tech сервіс",
  description:
    "Контактна інформація сервісного центру Hi-Tech | Де в Черкасах можна терміново відремонтувати та налаштувати комп'ютер або ноутбук. Звернення щодо гарантії Lenovo.",
  alternates: { canonical: `${site.url}/contacts` }
};

export default function ContactsPage() {
  return (
    <Container className="flex-col">
      <Image
        className="fixed left-1/2 top-0 -z-10 m-auto -translate-x-1/2 px-5"
        alt=""
        src={"/imgContactsPage/frame.jpg"}
        width={1388}
        height={620}
      />

      <HeroContactsPage />

      <ContactNumbers />

      <VisitUs />
    </Container>
  );
}
