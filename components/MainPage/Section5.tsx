import { Didact_Gothic } from "next/font/google";

import { Container, ItemRound, BgLight } from "../atomic";

import tech from "@/public/img/section5/tech.png";
import pro from "@/public/img/section5/pro.png";
import pc from "@/public/img/section5/pc.png";
import tv from "@/public/img/section5/tv.png";
import norton from "@/public/img/section5/norton.png";
import windows from "@/public/img/section5/windows.png";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const Section5 = () => {
  return (
    <section className="relative min-h-[638px] max-w-[1920px] overflow-hidden">
      <BgLight />

      <Container className="flex-col">
        <h2
          className={`${didactGothic.className} mb-10 text-center text-[40px] font-normal`}
        >
          Лагодимо техніку, на яку ви розраховуєте
        </h2>

        <p className="mx-auto mb-24 max-w-[815px] text-center text-2xl font-medium">
          В команді Hi-Tech впевнені, що на кожну задачу є своє рішення. Ми
          пропонуємо повний спектр технічних рішень, від діагностики та ремонту
          до встановлення та експертної підтримки.
        </p>

        <div className="container mb-10 flex flex-wrap justify-center gap-7 self-center">
          <ItemRound img={tech}>Мобільні пристрої</ItemRound>

          <ItemRound img={pro}>Ноутбуки</ItemRound>

          <ItemRound img={pc}>Інша техніка</ItemRound>

          <ItemRound img={tv}>Принтери та МФУ</ItemRound>

          <ItemRound img={norton}>Відновлення даних</ItemRound>

          <ItemRound img={windows}>Техніка Apple</ItemRound>
        </div>
      </Container>
    </section>
  );
};
