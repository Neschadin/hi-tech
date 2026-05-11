import { Container } from "@/components/atomic";
import { homeFaq } from "@/lib/content/faq";
import { didactGothic } from "@/utils";

export const LandingFaq = () => (
  <section className="bg-light-bg py-16 md:py-20">
    <Container className="flex-col gap-8">
      <h2 className={`${didactGothic} text-center text-3xl md:text-4xl`}>
        Часті питання
      </h2>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        {homeFaq.map((item, idx) => (
          <details
            key={`${idx}-${item.question}`}
            className="group rounded-xl border border-divider-light bg-white px-5 py-4 shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer list-none font-semibold text-neutral-dark outline-none after:float-right after:text-primary after:content-['+'] group-open:after:content-['–']">
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
);
