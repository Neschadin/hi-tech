import Link from "next/link";

import { Container } from "@/components/atomic";
import { serviceCategories } from "@/lib/content/services";
import { site } from "@/lib/content/site";
import { didactGothic } from "@/utils";

/** Flatten a few representative rows per category for the home teaser */
const teaserRows = serviceCategories.flatMap((cat) =>
  cat.startingPrices
    .filter((r) => r.fromUah > 0)
    .slice(0, 2)
    .map((r) => ({
      category: cat.breadcrumbLabel,
      href: `/services/${cat.slug}#ciny`,
      ...r
    }))
);

export const LandingPricingTeaser = () => (
  <section className="bg-white py-16 md:py-20">
    <Container className="flex-col gap-8">
      <div className="text-center">
        <h2 className={`${didactGothic} text-3xl md:text-4xl`}>
          Орієнтовні ціни
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-grey">
          {site.priceDisclaimer}
        </p>
      </div>

      <div className="w-full overflow-x-auto rounded-2xl border border-divider-light">
        <table className="w-full min-w-[480px] text-left text-sm md:text-base">
          <thead className="bg-light-bg text-xs font-semibold uppercase tracking-wide text-neutral-dark md:text-sm">
            <tr>
              <th className="px-3 py-3 md:px-4">Напрям</th>
              <th className="px-3 py-3 md:px-4">Послуга</th>
              <th className="px-3 py-3 md:px-4">Від</th>
              <th className="px-3 py-3 md:px-4">Термін</th>
            </tr>
          </thead>
          <tbody>
            {teaserRows.map((row) => (
              <tr
                key={`${row.href}-${row.service}`}
                className="border-t border-divider-light"
              >
                <td className="px-3 py-3 font-medium md:px-4">
                  <Link
                    href={row.href}
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {row.category}
                  </Link>
                </td>
                <td className="px-3 py-3 md:px-4">{row.service}</td>
                <td className="px-3 py-3 whitespace-nowrap md:px-4">
                  від {row.fromUah} грн
                </td>
                <td className="px-3 py-3 text-neutral-grey md:px-4">
                  {row.eta}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-sm text-neutral-grey">
        Повні таблиці та FAQ — на сторінках{" "}
        <Link
          className="font-semibold text-primary underline"
          href="/services/noutbuky"
        >
          ноутбуків
        </Link>
        ,{" "}
        <Link
          className="font-semibold text-primary underline"
          href="/services/lenovo"
        >
          Lenovo
        </Link>{" "}
        та{" "}
        <Link
          className="font-semibold text-primary underline"
          href="/services/printery-mfu"
        >
          принтерів
        </Link>
        .
      </p>
    </Container>
  </section>
);
