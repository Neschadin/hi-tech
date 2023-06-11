import { didactGothic } from "@/utils";

export const HeroAboutUs = () => (
  <section
    className="min-h-[480px] bg-fixed bg-top bg-no-repeat"
    style={{
      backgroundImage: "url('/imgAboutUsPage/heroImage.jpg')",
    }}
  >
    <h1 className={`${didactGothic} text-3xl sm:text-[64px] sm:leading-[84px]`}>
      Не просто лагодимо ваші пристрої — ми вирішуємо ваші розчарування
    </h1>
  </section>
);
