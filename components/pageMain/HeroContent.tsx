import { FC } from "react";

import { didactGothic } from "@/utils";

import { Container, DropDownSearch } from "@/components/atomic";

export const HeroContent: FC = () => {
  return (
    <Container className="top-40 min-h-[304px] flex-col items-center justify-start">
      <h1
        className={`${didactGothic} mb-6 text-center text-[63px] leading-[84px]`}
      >
        {"Ваша техніка – знову працює."}
      </h1>

      <p className="max-w-[659px] text-center text-2xl font-medium">
        {
          "Оперативний та професійний сервіс з ремонту комп'ютерної техніки у м.Черкаси"
        }
      </p>

      <DropDownSearch />
    </Container>
  );
};
