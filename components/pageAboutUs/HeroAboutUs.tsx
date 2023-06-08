import { Didact_Gothic } from "next/font/google";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const HeroAboutUs = () => (
  <section
    className="bg-fixed bg-top bg-no-repeat"
    style={{
      backgroundImage: "url('/imgAboutUsPage/heroImage.jpg')",
    }}
  >
    <h1
      className={`${didactGothic.className} text-3xl sm:text-[64px] sm:leading-[84px]`}
    >
      Не просто лагодимо ваші пристрої — ми вирішуємо ваші розчарування
    </h1>
  </section>
);
