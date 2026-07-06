import apple from "@/public/imgMainPage/section1/apple.png";
import flashdrive from "@/public/imgMainPage/section1/flashdrive.png";
import iphone from "@/public/imgMainPage/section1/iphone.png";
import laptop from "@/public/imgMainPage/section1/laptop.png";
import printer from "@/public/imgMainPage/section1/printer.png";
import tv from "@/public/imgMainPage/section1/tv.png";
import { Container } from "../atomic/Container";
import { ItemSquare } from "../atomic/ItemSquare";

export const Section1 = () => {
  return (
    <section className="relative min-h-[450px] max-w-[1920px] pt-5 m-auto">
      <Container className="flex-col">
        <h2 className="font-didact text-center text-[40px] font-normal">
          З яким пристроєм у вас виникла проблема?
        </h2>

        <div className="container my-12 flex flex-wrap justify-center gap-7 self-center">
          <ItemSquare img={iphone} href="/contacts">
            Мобільні пристрої
          </ItemSquare>

          <ItemSquare img={laptop} href="/services/noutbuky">
            Ноутбуки
          </ItemSquare>

          <ItemSquare img={tv} href="/contacts">
            Інша техніка
          </ItemSquare>

          <ItemSquare img={printer} href="/services/printery-mfu">
            Принтери та МФУ
          </ItemSquare>

          <ItemSquare img={flashdrive} href="/contacts">
            Відновлення даних
          </ItemSquare>

          <ItemSquare img={apple} href="/contacts">
            Техніка Apple
          </ItemSquare>
        </div>
      </Container>
    </section>
  );
};
