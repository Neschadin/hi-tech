import { didactGothic } from "@/utils/fontDidactGothic";

export const HeroContactsPage = () => (
  <section className="p-5 sm:p-16 flex sm:h-[470px] max-w-[560px] flex-col justify-center text-white">
    <h1 className={`${didactGothic} text-3xl sm:text-[64px] sm:leading-[84px]`}>
      <span className="block">Ми тут,</span>
      <span className="block">аби допомогти</span>
    </h1>

    <span className="mt-4 text-2xl font-medium text-balance">
      Познайомимося? Ми будемо раді вислухати та вирішити проблему з вашим
      пристроєм.
    </span>
  </section>
);
