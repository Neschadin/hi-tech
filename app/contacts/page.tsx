import { ContactNumbers, HeroContactsPage, VisitUs } from "@/components";
import { Container } from "@/components/atomic";

export const metadata = {
  title: "Контактна інформація | Hi-Tech сервіс",
  description:
    "Контактна інформація сервісного центру Hi-Tech | Де в Черкасах можна терміново відремонтувати та налаштувати комп'ютер, або ноутбук. Куди в Черкасах звернутись по гарантії Lenovo.",
};

export default function Contacts() {
  return (
    <Container className="flex-col">
      <HeroContactsPage />

      <ContactNumbers />

      <VisitUs />
    </Container>
  );
}
