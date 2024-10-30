import { Didact_Gothic } from "next/font/google";

import { Button, Container } from "../atomic";

import { LogoLenovo } from "@/public/imgMainPage/section3/LogoLenovo";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const Section3 = () => {
  return (
    <section className="relative flex min-h-[584px] max-w-[1920px] bg-primary">
      <Container className="flex-col items-center justify-between gap-8 py-5 md:flex-row">
        <div className="flex h-auto max-w-[90%] items-center justify-center rounded-3xl bg-white md:h-[336px] md:w-[600px]">
          <LogoLenovo />
        </div>

        <div className="flex max-w-[685px] flex-col items-start gap-10">
          <h3 className={`${didactGothic.className} text-4xl text-white`}>
            Авторизований сервісний центр Lenovo в твоєму місті
          </h3>

          <span className="text-xl font-medium text-white">
            Ми виконуємо гарантійне та післягарантійне обслуговування ноутбуків,
            планшетів, смартфонів та іншої продукції бренду Lenovo,
            використовуючи сертифіковане обладнання та оригінальні комплектуючі
            від виробника.
          </span>

          <Button size="S" variant="filled" className="border-2 border-white">
            Детальніше про гарантію
          </Button>
        </div>
      </Container>
    </section>
  );
};
