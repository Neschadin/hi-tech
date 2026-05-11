import { didactGothic } from "@/utils";
import { site } from "@/lib/content/site";
import { BgLight } from "../atomic";
import { GoogleMapsMarker } from "./GoogleMapsMarker";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.streetAddress}, ${site.address.addressLocality}`
)}`;

export const VisitUs = () => {
  return (
    <section className="relative min-h-[764px] overflow-hidden bg-white py-5 text-center sm:py-16">
      <BgLight />

      <h2 className={`${didactGothic} mb-10 text-[40px]`}>Завітайте до нас</h2>

      <div className="mx-auto mb-20 max-w-[846px] text-xl font-medium">
        Немає нічого кращого, ніж спілкування наживо. Запрошуємо вас за адресою
        <br />
        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          м. Черкаси, {site.address.streetAddress}
        </a>
      </div>

      <GoogleMapsMarker />
    </section>
  );
};
