import Link from "next/link";
import { Container } from "@/components/atomic/Container";
import { DropDownSearch } from "@/components/atomic/DropDownSearch";
import { HeroBg } from "@/components/pageMain/HeroBg";

export const LandingHero = () => (
  <section className="relative mx-auto min-h-[520px] max-w-[1920px] overflow-hidden md:min-h-[580px]">
    <HeroBg />

    <Container className="min-h-[280px] flex-col items-center justify-center py-10 md:min-h-[304px] md:py-14">
      <h1 className="font-didact mb-4 text-center text-4xl leading-tight tracking-tight md:mb-6 md:text-[63px] md:leading-[1.1]">
        Ваша техніка — знову працює
      </h1>

      <p className="mb-8 max-w-[659px] text-center text-lg font-medium md:text-2xl">
        Оперативний сервіс з ремонту комп’ютерної техніки у Черкасах.
        Діагностика безкоштовно — ремонт після вашого погодження вартості.
      </p>

      <DropDownSearch />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/status"
          className="inline-flex h-12 min-h-11 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600"
        >
          Перевірити статус ремонту
        </Link>
        <Link
          href="/contacts"
          className="inline-flex h-12 min-h-11 items-center justify-center rounded-full border-2 border-primary px-8 text-base font-semibold text-primary transition hover:border-blue-600 hover:text-blue-600"
        >
          Контакти
        </Link>
      </div>
    </Container>
  </section>
);
