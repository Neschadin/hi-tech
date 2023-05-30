import { Didact_Gothic } from "next/font/google";
import { Button, Container } from "../atomic";
import { CheckIcon } from "../icons";
import img from "@/public/img/section2/img.png";
import Image from "next/image";
import { VideoCards } from "./VideoCards";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const Section4 = () => {
  return (
    <section className="relative max-w-[1920px]">
      <Container className="h-auto items-center gap-16 py-5 lg:my-48 md:h-[692px] xl:gap-36">
        <div className="flex h-auto flex-col items-start gap-10">
          <h3 className={`${didactGothic.className} text-4xl`}>
            Магазин цифрової техніки та сервісний центр у м. Черкаси
          </h3>

          <span className="text-xl font-medium">
            Магазин Hi-Tech пропонує широкий асортимент техніки та комплектуючих
            за доступними цінами. Наші фахівці завжди готові допомогти з вибором
            та забезпечити якісний ремонт у разі потреби.
          </span>

          <Button size="S" variant="outlined">
            Переглянути каталог
          </Button>
        </div>

        <VideoCards />
      </Container>
    </section>
  );
};
