import type { Metadata } from "next";
import { Container } from "@/components/atomic/Container";
import { ContactNumbers } from "@/components/pageContacts/ContactNumbers";
import { ContactsDecorBg } from "@/components/pageContacts/ContactsDecorBg";
import { HeroContactsPage } from "@/components/pageContacts/HeroContactsPage";
import { VisitUs } from "@/components/pageContacts/VisitUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { fullAddressLine, site } from "@/lib/content/site";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Контакти",
  description: `Контактна інформація ${site.googleBusinessName}. ${fullAddressLine()}. Телефони: ${site.phones.map((p) => p.display).join(", ")}.`,
  path: "/contacts"
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Головна", path: "/" },
  { name: "Контакти", path: "/contacts" }
]);

export default function ContactsPage() {
  return (
    <Container className="flex-col px-0">
      <JsonLd data={breadcrumbLd} />

      <ContactsDecorBg />

      <HeroContactsPage />

      <ContactNumbers />

      <VisitUs />
    </Container>
  );
}
