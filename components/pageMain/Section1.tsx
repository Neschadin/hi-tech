import { didactGothic } from "@/utils";

import { ItemSquare, Container } from "../atomic";

import apple from "@/public/imgMainPage/section1/apple.png";
import iphone from "@/public/imgMainPage/section1/iphone.png";
import laptop from "@/public/imgMainPage/section1/laptop.png";
import flashdrive from "@/public/imgMainPage/section1/flashdrive.png";
import printer from "@/public/imgMainPage/section1/printer.png";
import tv from "@/public/imgMainPage/section1/tv.png";

export const Section1 = () => {
  return (
    <section className="relative min-h-[450px] max-w-[1920px] pt-5">
      <Container className="flex-col">
        <h2 className={`${didactGothic} text-center text-[40px] font-normal`}>
          З яким пристроєм у вас виникла проблема?
        </h2>

        <div className="container my-12 flex flex-wrap justify-center gap-7 self-center">
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
