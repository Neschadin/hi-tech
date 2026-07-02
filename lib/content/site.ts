import type { BusinessHours, GeoCoordinates, PhoneContact } from "./types";

/** Google Business Profile snapshot (maps.app.goo.gl/d8fUixPNc9WT95nG6) */
export const site = {
  name: "Hi-Tech",
  googleBusinessName: "Hi-Tech - магазин цифрової техніки та сервісний центр",
  titleTemplate: "%s | Hi-Tech сервіс",
  defaultTitle: "Hi-Tech сервіс — сервісний центр з ремонту техніки в Черкасах",
  defaultDescription:
    "Ремонт ноутбуків, принтерів та МФУ, авторизований сервіс Lenovo у Черкасах. Безкоштовна діагностика, прозорі ціни після погодження, гарантія на роботи.",
  tagline: "Магазин цифрової техніки та сервісний центр у м. Черкаси",
  url: "https://hi-tech.ck.ua",
  locale: "uk_UA",
  city: "Черкаси",
  address: {
    streetAddress: "вулиця Ярославська, 26/2",
    addressLocality: "Черкаси",
    addressRegion: "Черкаська область",
    addressCountry: "UA",
    postalCode: "18014",
    district: "Соснівський район"
  },
  geo: {
    lat: 49.434491,
    lng: 32.0114532,
    mapCenter: {
      lat: 49.4345381,
      lng: 32.0103803
    }
  },
  maps: {
    url: "https://maps.app.goo.gl/d8fUixPNc9WT95nG6",
    placeId: "ChIJe_1UdWtM0UARjxSpRvDQuJA",
    cid: "0x40d14c6b7554fd7b:0x90b8d0f046a9148f"
  },
  email: "hitech383880@gmail.com",
  phones: [
    {
      id: "kyivstar",
      label: "Kyivstar",
      display: "(096) 800-33-33",
      tel: "+380968003333"
    },
    {
      id: "vodafone",
      label: "Vodafone",
      display: "(063) 025-77-77",
      tel: "+380630257777"
    }
  ] satisfies PhoneContact[],
  hours: {
    weekday: { opens: "09:00", closes: "18:00" },
    saturday: { opens: "10:00", closes: "16:00" },
    sundayClosed: true
  } satisfies BusinessHours,
  social: {
    instagram: "https://www.instagram.com/hi_tech.ck.ua/"
  },
  /** Disclaimer near any price teaser */
  priceDisclaimer:
    "Вартість залежить від діагностики. Орієнтовні ціни «від … грн»; остаточна сума — після безкоштовної діагностики та вашого погодження."
} as const;

function displayTime(time: string) {
  const [hours, minutes] = time.split(":");
  return `${Number(hours)}:${minutes}`;
}

export function hoursDisplay() {
  const { weekday, saturday, sundayClosed } = site.hours;
  const weekdayOpens = displayTime(weekday.opens);
  const weekdayCloses = displayTime(weekday.closes);
  const saturdayOpens = saturday ? displayTime(saturday.opens) : null;
  const saturdayCloses = saturday ? displayTime(saturday.closes) : null;

  return {
    weekdays: `Пн–Пт: ${weekdayOpens}–${weekdayCloses}`,
    saturday: saturday
      ? `Сб: ${saturdayOpens}–${saturdayCloses}`
      : "Сб: вихідний",
    sunday: sundayClosed ? "Нд: вихідний" : "Нд: за графіком",
    weekdayOpens,
    weekdayCloses,
    saturdayOpens,
    saturdayCloses
  };
}

/** «вул. Ярославська, 26/2 у Черкасах» */
export const visitAddressLine = `вул. ${site.address.streetAddress.replace(/^вулиця\s+/i, "")} у ${site.address.addressLocality}`;

export function fullAddressLine() {
  return `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion}, ${site.address.postalCode}`;
}

export function openingHoursSpecification() {
  const specs: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }[] = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: site.hours.weekday.opens,
      closes: site.hours.weekday.closes
    }
  ];

  if (site.hours.saturday) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: site.hours.saturday.opens,
      closes: site.hours.saturday.closes
    });
  }

  return specs;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ComputerRepair",
    name: site.googleBusinessName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phones.map((p) => p.tel),
    email: site.email,
    image: `${site.url}/imgMainPage/heroBg/laptop.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng
    },
    hasMap: site.maps.url,
    areaServed: { "@type": "City", name: site.city },
    priceRange: "$",
    openingHoursSpecification: openingHoursSpecification()
  };
}

export function markerPosition(): GeoCoordinates {
  return { lat: site.geo.lat, lng: site.geo.lng };
}

export function mapCenter(): GeoCoordinates {
  return site.geo.mapCenter;
}

export function phoneHref(tel: string) {
  return `tel:${tel.replace(/\s/g, "")}`;
}
