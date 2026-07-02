import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/atomic/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/content/services";
import { phoneHref, site } from "@/lib/content/site";
import { didactGothic } from "@/utils/fontDidactGothic";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  const url = `${site.url}/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: s.metaTitle,
      description: s.metaDescription
    }
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) notFound();

  const pageUrl = `${site.url}/services/${s.slug}`;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Головна", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Послуги",
        item: `${site.url}/#poslugy`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: s.breadcrumbLabel,
        item: pageUrl
      }
    ]
  };

  const faqLd =
    s.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        }
      : null;

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      {faqLd ? <JsonLd data={faqLd} /> : null}

      <section className="bg-white pb-12 pt-8 md:pt-10">
        <Container className="flex-col gap-8">
          <div className="max-w-3xl">
            <h1
              className={`${didactGothic} text-4xl tracking-tight md:text-5xl`}
            >
              {s.title}
            </h1>
            <p className="mt-2 text-xl font-semibold text-neutral-grey">
              {s.heroLead}
            </p>
            <p className="mt-6 text-lg font-medium leading-relaxed text-text-on-white">
              {s.heroIntro}
            </p>
          </div>

          <aside className="max-w-2xl rounded-2xl bg-light-bg px-6 py-5 text-text-on-white">
            <p className="font-medium">
              Потрібна консультація або діагностика? Зателефонуйте — підкажемо
              наступний крок.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {site.phones.map((p) => (
                <a
                  key={p.id}
                  href={phoneHref(p.tel)}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white bg-white px-5 text-base font-semibold text-primary shadow-sm ring-1 ring-divider-light transition hover:bg-light-bg"
                >
                  {p.display}
                </a>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section id="ciny" className="scroll-mt-28 bg-white py-12">
        <Container className="flex-col gap-6">
          <h2 className={`${didactGothic} text-center text-3xl md:text-4xl`}>
            Орієнтовні ціни
          </h2>
          <p className="mx-auto max-w-3xl text-center text-base text-neutral-grey">
            {site.priceDisclaimer}
          </p>

          <div className="w-full overflow-x-auto rounded-2xl border border-divider-light">
            <table className="w-full min-w-[520px] text-left text-base">
              <thead className="bg-light-bg text-sm font-semibold uppercase tracking-wide text-neutral-dark">
                <tr>
                  <th className="px-4 py-3">Послуга</th>
                  <th className="px-4 py-3">Від</th>
                  <th className="px-4 py-3">Термін</th>
                </tr>
              </thead>
              <tbody>
                {s.startingPrices.map((row) => (
                  <tr
                    key={row.service}
                    className="border-t border-divider-light"
                  >
                    <td className="px-4 py-3 font-medium">{row.service}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {row.fromUah > 0
                        ? `від ${row.fromUah} грн`
                        : "за умовами"}
                    </td>
                    <td className="px-4 py-3 text-neutral-grey">{row.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/status"
              className="inline-flex h-9 items-center justify-center rounded-full border-2 border-primary px-[22px] text-base font-medium text-primary transition duration-200 hover:border-blue-600 hover:text-blue-600"
            >
              Перевірити статус ремонту
            </Link>
          </div>
        </Container>
      </section>

      {s.faq.length > 0 ? (
        <section className="bg-light-bg py-16">
          <Container className="flex-col gap-8">
            <h2 className={`${didactGothic} text-center text-3xl md:text-4xl`}>
              Часті питання
            </h2>
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
              {s.faq.map((item, idx) => (
                <details
                  key={`${idx}-${item.question}`}
                  className="group rounded-xl border border-divider-light bg-white px-5 py-4 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none font-semibold text-neutral-dark outline-none after:float-right after:content-['+'] group-open:after:content-['–']">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-text-on-white">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {s.seoBlocks && s.seoBlocks.length > 0 ? (
        <section className="bg-white py-16">
          <Container className="grid gap-10 md:grid-cols-2">
            {s.seoBlocks.map((block) => (
              <article key={block.heading} className="flex flex-col gap-4">
                <h2 className={`${didactGothic} text-2xl md:text-3xl`}>
                  {block.heading}
                </h2>
                {block.paragraphs.map((p, i) => (
                  <p
                    key={`${block.heading}-${i}`}
                    className="text-base leading-relaxed text-text-on-white"
                  >
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </Container>
        </section>
      ) : null}

      <section className="bg-light-bg py-12">
        <Container className="flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-medium text-neutral-dark">
            Запис або консультація
          </p>
          <Link
            href="/contacts"
            className="text-lg font-semibold text-primary underline underline-offset-4"
          >
            Контакти та карта проїзду
          </Link>
        </Container>
      </section>
    </>
  );
}
