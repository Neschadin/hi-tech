import { Didact_Gothic } from "next/font/google";
import { Button, Container } from "../atomic";
import { CheckIcon } from "../icons";
import img from "@/public/img/section2/img.png";
import Image from "next/image";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

const CheckItem = ({ children }: { children: string }) => (
  <div className="inline-flex items-center gap-6 text-xl font-semibold">
    <CheckIcon />
    <span>{children}</span>
  </div>
);

export const Section2 = () => {
  return (
    <section className="relative min-h-[692px] max-w-[1920px]">
      <Container>
        <Image
          src={img}
          alt="img"
          className="z-[-1] absolute max-h-[645px] right-0 top-[57px]"
        />

        <div className="container flex max-w-[568px] flex-col items-start gap-10">
          <h3 className={`${didactGothic.className} text-4xl`}>
            Hi-Tech. Сервiсний центр ремонту технiки
          </h3>

          <span className="text-xl font-medium">
            Ремонт проводиться тільки після безкоштовної діагностики
            компʼютера.Інженер приступає до роботи тільки після узгодження з
            Вами ціни ремонту.
          </span>

          <div className="container flex flex-col gap-6">
            <CheckItem>Офіційні дилери</CheckItem>

            <CheckItem>Гарантія на ремонт</CheckItem>

            <CheckItem>Швидке обслуговування</CheckItem>
          </div>

          <Button size="S" variant="outlined">
            Детальніше про нас
          </Button>
        </div>

        {/* <div className="container flex flex-wrap justify-center gap-7 self-center"></div> */}
      </Container>
    </section>
  );
};
