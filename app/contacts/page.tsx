import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/atomic/Container";
import { ContactNumbers } from "@/components/pageContacts/ContactNumbers";
import { HeroContactsPage } from "@/components/pageContacts/HeroContactsPage";
import { VisitUs } from "@/components/pageContacts/VisitUs";
import { fullAddressLine, site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Контактна інформація | Hi-Tech сервіс",
  description: `Контактна інформація ${site.googleBusinessName}. ${fullAddressLine()}. Телефони: ${site.phones.map((p) => p.display).join(", ")}.`,
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
