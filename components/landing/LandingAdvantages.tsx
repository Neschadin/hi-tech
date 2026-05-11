import { Container } from "@/components/atomic";
import { homeAdvantages } from "@/lib/content/home";
import { didactGothic } from "@/utils";

export const LandingAdvantages = () => (
  <section className="bg-white py-16 md:py-20">
    <Container className="flex-col gap-10">
      <h2 className={`${didactGothic} text-center text-3xl md:text-[40px]`}>
        Наші переваги
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homeAdvantages.map((a) => (
          <article
            key={a.title}
            className="flex flex-col gap-3 rounded-2xl border border-divider-light bg-white p-6 shadow-sm"
          >
            <div
              className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary"
              aria-hidden
            >
              ✓
            </div>
            <h3 className="text-lg font-bold text-neutral-dark">{a.title}</h3>
            <p className="text-sm leading-relaxed text-text-on-white md:text-base">
              {a.body}
            </p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
