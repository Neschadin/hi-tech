import { site } from "@/lib/content/site";
import { BgLight } from "../atomic/BgLight";
import { GoogleMapsMarker } from "./GoogleMapsMarker";

export const VisitUs = () => {
  return (
    <section className="relative min-h-[764px] overflow-hidden bg-white p-5 text-center sm:py-16">
      <BgLight />

      <h2 className="font-didact mb-10 text-[40px]">Завітайте до нас</h2>

      <div className="mx-auto mb-20 max-w-[846px] text-xl font-medium text-balance">
        Немає нічого кращого, ніж спілкування наживо. Запрошуємо вас за адресою
        <br />
        <a
          href={site.maps.url}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          м. {site.address.addressLocality}, {site.address.streetAddress}
        </a>
      </div>

      <GoogleMapsMarker />
    </section>
  );
};
