import { Container } from "@/components/atomic/Container";
import { homeHowTo } from "@/lib/content/home";

export const LandingHowTo = () => (
  <section className="bg-light-bg py-16 md:py-20">
    <Container className="flex-col gap-8 md:flex-row md:items-start md:gap-16">
      <div className="md:w-1/2">
        <h2 className="font-didact text-3xl md:text-4xl">{homeHowTo.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-text-on-white">
          {homeHowTo.lead}
        </p>
      </div>
      <ul className="flex flex-1 flex-col gap-4 text-lg font-medium text-neutral-dark">
        {homeHowTo.bullets.map((b) => (
          <li
            key={b}
            className="flex gap-3 rounded-xl border border-divider-light bg-white p-4 shadow-sm"
          >
            <span className="mt-0.5 text-primary" aria-hidden>
              ●
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
