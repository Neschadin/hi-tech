import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/atomic/Container";

export const metadata: Metadata = {
  title: "Сторінку не знайдено",
  description: "Запитувана сторінка не існує або була переміщена.",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex-col items-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-grey">
          404
        </p>
        <h1 className="font-didact text-4xl md:text-5xl">
          Сторінку не знайдено
        </h1>
        <p className="max-w-md text-lg text-text-on-white">
          Перевірте адресу або поверніться на головну — там є послуги, ціни та
          контакти сервісного центру Hi-Tech у Черкасах.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition hover:bg-blue-600"
          >
            На головну
          </Link>
          <Link
            href="/contacts"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-primary px-8 text-base font-semibold text-primary transition hover:border-blue-600 hover:text-blue-600"
          >
            Контакти
          </Link>
        </div>
      </Container>
    </section>
  );
}
