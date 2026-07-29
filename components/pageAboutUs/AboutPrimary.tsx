import Image from "next/image";
import hillOfGlory from "@/public/imgAboutUsPage/hillOfGlory.jpg";
import { Container } from "../atomic/Container";

export const AboutPrimary = () => (
  <Container component="section">
    <Container className="h-144 bg-[#F0F1F5]">
      <div className="absolute bottom-0 right-0 hidden h-full lg:block">
        <Image
          className="h-full object-none"
          src={hillOfGlory}
          alt="Пагорб Слави м.Черкас, у якому знаходиться наш сервісний центр"
          role="presentation"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#F0F1F5] to-transparent" />
      </div>

      <div className="relative mx-5 flex max-w-165 flex-col justify-center sm:mx-16">
        <h2 className="font-didact text-3xl sm:text-[40px] sm:leading-h2">
          Сервіс твого міста, перевірений черкащанами та часом
        </h2>

        <p className="mt-10 text-2xl font-medium">
          Команда Hi-Tech, це магазин цифрової техніки, сервісний центр і відділ
          комісійного продажу, який працює у місті Черкаси ще з 2005 року.
        </p>
      </div>
    </Container>
  </Container>
);
