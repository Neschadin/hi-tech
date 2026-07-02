import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import laptop from "@/public/imgMainPage/section1/laptop.png";
import printer from "@/public/imgMainPage/section1/printer.png";
import { LogoLenovo } from "@/public/imgMainPage/section3/LogoLenovo";

import { Container } from "@/components/atomic/Container";
import { didactGothic } from "@/utils/fontDidactGothic";

type Card = {
  title: string;
  description: string;
  href: string;
  visual: "image" | "lenovo";
  img?: StaticImageData;
};

const cards: Card[] = [
  {
    title: "Ремонт ноутбуків",
    description: "Матриця, клавіатура, охолодження, залиття, роз’єми та інше.",
    href: "/services/noutbuky",
    visual: "image",
    img: laptop
  },
  {
    title: "Гарантія Lenovo",
    description:
      "Авторизований сервіс: гарантія та післягарантія з оригінальними ЗІП.",
    href: "/services/lenovo",
    visual: "lenovo"
  },
  {
    title: "Принтери та МФУ",
    description: "Ремонт, профілактика, заправка картриджів.",
    href: "/services/printery-mfu",
    visual: "image",
    img: printer
  }
];

export const LandingPriority = () => (
  <section id="poslugy" className="scroll-mt-28 bg-white py-16 md:py-20">
    <Container className="flex-col gap-10">
      <div className="text-center">
        <h2 className={`${didactGothic} text-3xl md:text-[40px]`}>
          Пріоритетні напрями
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-grey">
          Оберіть напрям — на сторінці зібрані орієнтовні ціни, типові
          несправності та відповіді на часті питання.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-divider-light bg-white shadow-sm transition hover:border-primary hover:shadow-md"
          >
            <div className="relative flex h-40 items-center justify-center bg-light-bg">
              {c.visual === "lenovo" ? (
                <div className="scale-90 transition group-hover:scale-95">
                  <LogoLenovo />
                </div>
              ) : c.img ? (
                <Image
                  src={c.img}
                  alt={c.title}
                  className="max-h-32 object-contain"
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <h3 className={`${didactGothic} text-2xl`}>{c.title}</h3>
              <p className="text-base text-text-on-white">{c.description}</p>
              <span className="mt-auto pt-2 text-base font-semibold text-primary">
                Детальніше →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);
