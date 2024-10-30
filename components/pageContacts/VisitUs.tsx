import { didactGothic } from "@/utils";
import { BgLight } from "../atomic";
import { GoogleMapsMarker } from "./GoogleMapsMarker";

export const VisitUs = () => {
  return (
    <section className="relative min-h-[764px] overflow-hidden bg-white py-5 text-center sm:py-16">
      <BgLight />

      <h2 className={`${didactGothic} mb-10 text-[40px]`}>Завітайте до нас</h2>

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
