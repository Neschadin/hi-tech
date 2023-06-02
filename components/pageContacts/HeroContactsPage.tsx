import { Didact_Gothic } from "next/font/google";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const HeroContactsPage = () => (
  <section
    className="bg-fixed bg-top bg-no-repeat"
    style={{
      backgroundImage: "url('/imgContactsPage/Frame.jpg')",
    }}
  >
    <div className="h-[150px] w-full bg-white"></div>

    <div className="mx-16 flex h-[470px] max-w-[550px] flex-col justify-center text-white">
      <h1
        className={`${didactGothic.className} text-3xl sm:text-[64px] sm:leading-[84px]`}
      >
        Ми тут,
        <br />
        аби допомогти
      </h1>

      <span className="mt-4 text-2xl font-medium">
        Познайомимося? Ми будемо раді вислухати та вирішити проблему з вашим
        пристроєм.
      </span>
    </div>
  </section>
);
