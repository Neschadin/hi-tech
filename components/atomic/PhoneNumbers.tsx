import { phoneHref, site } from "@/lib/content/site";

const kyivstar = site.phones.find((phone) => phone.id === "kyivstar")!;
const vodafone = site.phones.find((phone) => phone.id === "vodafone")!;

export const LifeNumber = ({ onClick }: { onClick?: () => void }) => (
  <a
    href={phoneHref(kyivstar.tel)}
    className="inline-flex gap-x-2"
    onClick={onClick}
  >
    <span className="text-neutral-grey">{kyivstar.tel.slice(4, 6)}</span>
    <span className="whitespace-nowrap">
      {kyivstar.display.replace(/^\(\d{3}\)\s*/, "")}
    </span>
  </a>
);

export const KyivstarNumber = ({ onClick }: { onClick?: () => void }) => (
  <a
    href={phoneHref(vodafone.tel)}
    className="inline-flex gap-x-2"
    onClick={onClick}
  >
    <span className="text-neutral-grey">{vodafone.tel.slice(4, 6)}</span>
    <span className="whitespace-nowrap">
      {vodafone.display.replace(/^\(\d{3}\)\s*/, "")}
    </span>
  </a>
);
