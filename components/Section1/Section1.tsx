import apple from "@/public/img/section1/apple.png";
import iphone from "@/public/img/section1/iphone.png";
import laptop from "@/public/img/section1/laptop.png";
import flashdrive from "@/public/img/section1/flashdrive.png";
import printer from "@/public/img/section1/printer.png";
import tv from "@/public/img/section1/tv.png";

import { Didact_Gothic } from "next/font/google";
import { ItemSquare, Container } from "../atomic";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const Section1 = () => {
  return (
    <section className="relative min-h-[638px] max-w-[1920px]">
      <Container className="flex-row gap-24">
        <h2
          className={`${didactGothic.className} text-center text-[40px] font-normal`}
        >
          З яким пристроєм у вас виникла проблема?
        </h2>

        <div className="container flex flex-wrap justify-center gap-7 self-center">
          <ItemSquare img={iphone}>Мобільні пристрої</ItemSquare>

          <ItemSquare img={laptop}>Ноутбуки</ItemSquare>

          <ItemSquare img={tv}>Інша техніка</ItemSquare>

          <ItemSquare img={printer}>Принтери та МФУ</ItemSquare>

          <ItemSquare img={flashdrive}>Відновлення даних</ItemSquare>

          <ItemSquare img={apple}>Техніка Apple</ItemSquare>
        </div>
      </Container>
    </section>
  );
};
