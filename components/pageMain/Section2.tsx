import Image from "next/image";

import { didactGothic } from "@/utils";

import { Button, Container } from "../atomic";
import { CheckIcon } from "../icons";

import img from "@/public/imgMainPage/section2/img.png";

const CheckItem = ({ children }: { children: string }) => (
  <div className="inline-flex items-center gap-6 text-xl font-semibold">
    <CheckIcon />
    <span>{children}</span>
  </div>
);

export const Section2 = () => {
  return (
    <section className="relative max-w-[1920px]">
      <Container className="h-auto py-5 md:h-[692px] md:py-0">
        <Image
          src={img}
          alt="img"
          className="absolute -bottom-6 right-0 z-[-1] hidden max-h-[645px] w-[73%] object-contain md:block"
        />

        <div className="container flex max-w-[568px] flex-col items-start gap-10">
          <h3 className={`${didactGothic} text-4xl`}>
            Hi-Tech. Сервiсний центр ремонту технiки
          </h3>

          <span className="text-xl font-medium">
            Ремонт проводиться тільки після безкоштовної діагностики компʼютера.
            <br />
            Інженер приступає до роботи тільки після узгодження з Вами ціни
            ремонту.
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
