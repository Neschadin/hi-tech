import { didactGothic } from "@/utils";

import { Container, ItemRound, BgLight } from "../atomic";

import tech from "@/public/imgMainPage/section5/tech.png";
import pro from "@/public/imgMainPage/section5/pro.png";
import pc from "@/public/imgMainPage/section5/pc.png";
import tv from "@/public/imgMainPage/section5/tv.png";
import norton from "@/public/imgMainPage/section5/norton.png";
import windows from "@/public/imgMainPage/section5/windows.png";

export const Section5 = () => {
  return (
    <section className="relative min-h-[638px] max-w-[1920px] overflow-hidden">
      <BgLight />

      <Container className="flex-col">
        <h2
          className={`${didactGothic} mb-10 text-center text-[40px] font-normal`}
        >
          Лагодимо техніку, на яку ви розраховуєте
        </h2>

        <p className="mx-auto mb-24 max-w-[815px] text-center text-2xl font-medium">
          В команді Hi-Tech впевнені, що на кожну задачу є своє рішення. Ми
          пропонуємо повний спектр технічних рішень, від діагностики та ремонту
          до встановлення та експертної підтримки.
        </p>

        <div className="container mb-10 flex flex-wrap justify-center gap-7 self-center">
          <ItemRound img={tech}>Ремонт техніки</ItemRound>

          <ItemRound img={pro}>Ремонт монітора</ItemRound>

          <ItemRound img={pc}>Ремонт компʼютера</ItemRound>

          <ItemRound img={tv}>Ремонт телевізора</ItemRound>

          <ItemRound img={norton}>Антивірусний захист</ItemRound>

          <ItemRound img={windows}>Налаштування ПО</ItemRound>
        </div>
      </Container>
    </section>
  );
};
