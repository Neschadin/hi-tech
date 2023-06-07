import { Didact_Gothic } from "next/font/google";
import { Numbers } from "./Numbers";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

const style = "underline underline-offset-4";

export const ContactNumbers = () => {
  return (
    <section className="min-h-[426px] py-5 text-center sm:py-16">
      <h2 className={`${didactGothic.className} mb-10 text-[40px]`}>
        Давайте поспілкуємося
      </h2>

      <div className="mx-auto mb-20 max-w-[846px] text-xl font-medium">
        Бажаєте зв’язатися по телефону? Звичайно. Наші експерти готові допомогти
        з понеділка по п’ятницю – з <span className={style}>09:00</span> до{" "}
        <span className={style}>17:00</span> та у суботу - з{" "}
        <span className={style}>10:00</span> до{" "}
        <span className={style}>16:00</span>.
      </div>

      <Numbers />
    </section>
  );
};
