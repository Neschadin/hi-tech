import Link from "next/link";

import { Container } from "@/components/atomic/Container";
import { phoneHref, site } from "@/lib/content/site";

export const LandingCta = () => (
  <section className="border-t border-divider-light bg-white py-16">
    <Container className="flex-col items-center gap-8 text-center">
      <h2 className="font-didact max-w-2xl text-3xl md:text-4xl">
        Готові допомогти сьогодні
      </h2>
      <p className="max-w-xl text-lg text-text-on-white">
        Зателефонуйте або перевірте статус ремонту онлайн — за номером акту та
        телефону, який ви вказували при здачі техніки.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {site.phones.map((p) => (
          <a
            key={p.id}
            href={phoneHref(p.tel)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600"
          >
            {p.display}
          </a>
        ))}
      </div>
      <Link
        href="/status"
        className="text-lg font-semibold text-primary underline underline-offset-4 hover:text-blue-700"
      >
        Перевірити статус ремонту →
      </Link>
    </Container>
  </section>
);
