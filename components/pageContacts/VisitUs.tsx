import { Didact_Gothic } from "next/font/google";
import { BgLight } from "../atomic";
import { GoogleMapsMarker } from "./GoogleMapsMarker";

const didactGothic = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const VisitUs = () => {
  return (
    <section className="relative min-h-[764px] overflow-hidden py-5 text-center sm:py-16">
      <BgLight />

      <h2 className={`${didactGothic.className} mb-10 text-[40px]`}>
        Завітайте до нас
      </h2>

      <div className="mx-auto mb-20 max-w-[846px] text-xl font-medium">
        Немає нічого кращого, ніж спілкування наживо. Запрошуємо вас за адресою
        <br />
        <a href="#" className="text-primary underline">
          м.Черкаси, вул. Сумгаїтська 24/1
        </a>
      </div>

      <GoogleMapsMarker />
    </section>
  );
};
