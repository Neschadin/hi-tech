import { didactGothic } from "@/utils/fontDidactGothic";

export const HeroContactsPage = () => (
  <>
    <section className="relative">
      <div className="mx-16 flex h-[470px] max-w-[550px] flex-col justify-center text-white">
        <h1
          className={`${didactGothic} text-3xl sm:text-[64px] sm:leading-[84px]`}
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
  </>
);
