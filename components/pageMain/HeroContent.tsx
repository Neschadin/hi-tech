import { Container } from "@/components/atomic/Container";
import { DropDownSearch } from "@/components/atomic/DropDownSearch";

export const HeroContent = () => {
  return (
    <Container className="top-40 min-h-76 flex-col items-center justify-start">
      <h1 className="font-didact mb-6 text-center text-[63px] leading-21">
        Ваша техніка - знову працює.
      </h1>

      <p className="max-w-164.75 text-center text-2xl font-medium">
        Ноутбуки, принтери та МФУ, авторизований сервіс Lenovo. Діагностика
        безкоштовно — ремонт після вашого погодження вартості.
      </p>

      <DropDownSearch />
    </Container>
  );
};
