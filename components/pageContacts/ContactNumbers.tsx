import { Didact_Gothic } from "next/font/google";
import { Numbers } from "./Numbers";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const ContactNumbers = () => {
  return (
    <section className="min-h-[426px] py-5 text-center sm:py-16">
      <h2 className={`${didactGothic.className} mb-10 text-[40px]`}>
        Давайте поспілкуємося
      </h2>

      <div className="mx-auto mb-20 max-w-[846px] text-xl font-medium">
        Бажаєте зв’язатися по телефону? Звичайно. Наші експерти готові допомогти
        з понеділка по суботу –{" "}
        <span className="underline underline-offset-4">09:00 до 17:00</span>.
      </div>

      <Numbers />
    </section>
  );
};
