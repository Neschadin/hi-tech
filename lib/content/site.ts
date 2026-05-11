import type { OpeningHours, PhoneContact } from "./types";

export const site = {
  name: "Hi-Tech",
  titleTemplate: "%s | Hi-Tech сервіс",
  defaultTitle: "Hi-Tech сервіс — сервісний центр з ремонту техніки в Черкасах",
  defaultDescription:
    "Ремонт ноутбуків, принтерів та МФУ, авторизований сервіс Lenovo у Черкасах. Безкоштовна діагностика, прозорі ціни після погодження, гарантія на роботи.",
  url: "https://hi-tech.ck.ua",
  locale: "uk_UA",
  city: "Черкаси",
  address: {
    streetAddress: "вул. Сумгаїтська, 24/1",
    addressLocality: "Черкаси",
    addressRegion: "Черкаська область",
    addressCountry: "UA"
  },
  email: "support@hi-tech.ck.ua",
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
    weekdays: "Пн–Пт: 9:00–18:00",
    saturday: "Сб: 10:00–16:00",
    sunday: "Нд: вихідний"
  } satisfies OpeningHours,
  social: {
    instagram: "https://www.instagram.com/hi_tech.ck.ua/"
  },
  /** Disclaimer near any price teaser */
  priceDisclaimer:
    "Вартість залежить від діагностики. Орієнтовні ціни «від … грн»; остаточна сума — після безкоштовної діагностики та вашого погодження."
} as const;

export function phoneHref(tel: string) {
  return `tel:${tel.replace(/\s/g, "")}`;
}
