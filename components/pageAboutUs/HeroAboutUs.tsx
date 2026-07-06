import { cn } from "@/utils/cn";
import { Container } from "../atomic/Container";

export const HeroAboutUs = () => (
  <Container
    component="section"
    className="h-[300px] items-center justify-center bg-fixed bg-top bg-no-repeat sm:h-[480px]"
    style={{
      backgroundImage: "url('/imgAboutUsPage/heroPC.jpg')"
    }}
  >
    <h1 className="font-didact mx-5 max-w-[1010px] text-3xl text-white sm:mx-16 sm:text-[64px] sm:leading-[84px]">
      Не просто лагодимо ваші пристрої — ми вирішуємо ваші розчарування
    </h1>
  </Container>
);
