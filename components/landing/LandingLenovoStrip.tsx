import Link from "next/link";

import { LogoLenovo } from "@/public/imgMainPage/section3/LogoLenovo";

import { Container } from "@/components/atomic/Container";
import { didactGothic } from "@/utils/fontDidactGothic";

export const LandingLenovoStrip = () => (
  <section className="relative bg-primary py-14 md:py-20">
    <Container className="flex-col items-center gap-10 md:flex-row md:justify-between">
      <div className="flex h-48 w-full max-w-md items-center justify-center rounded-3xl bg-white md:h-56">
        <LogoLenovo />
      </div>

      <div className="flex max-w-xl flex-1 flex-col gap-6 text-white">
        <h2 className={`${didactGothic} text-3xl md:text-4xl`}>
          Авторизований сервісний центр Lenovo
        </h2>
        <p className="text-lg font-medium leading-relaxed">
          Гарантійне та післягарантійне обслуговування ноутбуків, планшетів і
          смартфонів Lenovo у Черкасах — з дотриманням вимог виробника та
          прозорим погодженням робіт.
        </p>
        <Link
          href="/services/lenovo"
          className="inline-flex h-11 w-fit items-center justify-center rounded-full border-2 border-white bg-white px-6 text-base font-semibold text-primary transition hover:bg-light-bg"
        >
          Умови та ціни
        </Link>
      </div>
    </Container>
  </section>
);
