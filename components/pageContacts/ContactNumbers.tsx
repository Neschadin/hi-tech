import { didactGothic } from "@/utils";
import { hoursDisplay } from "@/lib/content/site";

import { Numbers } from "./Numbers";

const style = "underline underline-offset-4";

export const ContactNumbers = () => {
  const hours = hoursDisplay();

  return (
    <section className="min-h-[426px] py-5 text-center sm:py-16 bg-white">
      <h2 className={`${didactGothic} mb-10 text-[40px]`}>
        Давайте поспілкуємося
      </h2>

      <div className="mx-auto mb-20 max-w-[846px] text-xl font-medium">
        Бажаєте зв’язатися по телефону? Звичайно. Наші експерти готові допомогти
        з понеділка по п’ятницю – з{" "}
        <span className={style}>{hours.weekdayOpens}</span> до{" "}
        <span className={style}>{hours.weekdayCloses}</span> та у суботу - з{" "}
        <span className={style}>{hours.saturdayOpens}</span> до{" "}
        <span className={style}>{hours.saturdayCloses}</span>.
      </div>

      <Numbers />
    </section>
  );
};
