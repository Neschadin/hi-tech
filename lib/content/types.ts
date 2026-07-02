export type ServiceSlug = "noutbuky" | "lenovo" | "printery-mfu";

export type PhoneContact = {
  id: string;
  label: string;
  display: string;
  /** E.164 without spaces */
  tel: string;
};

export type OpeningHours = {
  weekdays: string;
  saturday: string;
  sunday: string;
};

export type BusinessHours = {
  weekday: { opens: string; closes: string };
  saturday: { opens: string; closes: string } | null;
  sundayClosed: boolean;
};

export type GeoCoordinates = {
  lat: number;
  lng: number;
};

export type StartingPriceRow = {
  service: string;
  /** Minimum price in UAH for display */
  fromUah: number;
  /** Human-readable ETA */
  eta: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: ServiceSlug;
  title: string;
  breadcrumbLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  heroIntro: string;
  /** Short chips for “popular” row on landing */
  popularChips: string[];
  startingPrices: StartingPriceRow[];
  faq: FaqItem[];
  /** Optional SEO prose blocks at bottom of service page */
  seoBlocks?: { heading: string; paragraphs: string[] }[];
};

export type ServiceMenuGroup = {
  id: string;
  title: string;
  href: string;
  items: { label: string; href: string }[];
};
