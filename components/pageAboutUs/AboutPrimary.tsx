import Image from "next/image";

import { didactGothic } from "@/utils";

import hillOfGlory from "@/public/imgAboutUsPage/hillOfGlory.jpg";

export const AboutPrimary = () => (
  <section className="relative h-[576px] bg-[#F0F1F5]">
    <div className="absolute bottom-0 right-0 hidden h-full lg:block">
      <Image className="h-full object-none" src={hillOfGlory} alt={""} />

      <div className="absolute inset-0 bg-gradient-to-r from-[#F0F1F5] to-transparent" />
    </div>

    <div className="relative mx-16 flex h-full max-w-[660px] flex-col justify-center">
      <h2 className={`${didactGothic} text-3xl sm:text-[40px] sm:leading-h2`}>
        Сервіс твого міста, перевірений черкащанами та часом
      </h2>

      <p className="mt-10 text-2xl font-medium">
        Команда Hi-Tech, це магазин цифрової техніки, сервісний центр і відділ
        комісійного продажу, який працює у місті Черкаси ще з 2005 року.
      </p>
    </div>
  </section>
);
