import { FC } from "react";
import { Didact_Gothic } from "next/font/google";

import { Container, DropDownSearch } from "../atomic";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const Content: FC = () => {
  return (
    <Container className="top-40 min-h-[304px] items-center justify-start flex-col">
      <h1
        className={`${didactGothic.className} mb-6 text-center text-[63px] leading-[84px]`}
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
