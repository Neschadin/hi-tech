import type { Metadata } from "next";
import { Container } from "@/components/atomic/Container";
import { ContactNumbers } from "@/components/pageContacts/ContactNumbers";
import { ContactsDecorBg } from "@/components/pageContacts/ContactsDecorBg";
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
    <Container className="flex-col px-0">
      <ContactsDecorBg />

      <HeroContactsPage />

      <ContactNumbers />

      <VisitUs />
    </Container>
  );
}
