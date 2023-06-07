import { PropsWithChildren } from "react";
import { KyivstarNumber, LifeNumber } from "../atomic";
import { KyivstarIcon, LifeIcon, MailIcon } from "../icons";

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
      <a href="mailto:support@hi-tech.ck.ua">support@hi-tech.ck.ua</a>
    </Wrap>
  </div>
);
