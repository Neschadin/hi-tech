import { PropsWithChildren } from "react";
import { KyivstarNumber, LifeNumber } from "../atomic/PhoneNumbers";
import { KyivstarIcon } from "../icons/KyivstarIcon";
import { LifeIcon } from "../icons/LifeIcon";
import { MailIcon } from "../icons/MailIcon";
import { site } from "@/lib/content/site";

const Wrap = ({ children }: PropsWithChildren) => (
  <div className="flex h-16 w-[328px] items-center justify-center gap-4 rounded-lg border border-input-light">
    {children}
  </div>
);

export const Numbers = () => (
  <div className="flex flex-wrap justify-evenly gap-8 text-xl font-medium">
    <Wrap>
      <KyivstarIcon />
      <KyivstarNumber />
    </Wrap>

    <Wrap>
      <LifeIcon />
      <LifeNumber />
    </Wrap>

    <Wrap>
      <MailIcon />
      <a href={`mailto:${site.email}`}>{site.email}</a>
    </Wrap>
  </div>
);
