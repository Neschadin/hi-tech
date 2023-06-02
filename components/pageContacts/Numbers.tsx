import { PropsWithChildren } from "react";
import { KyivstarNumber, LifeNumber } from "../atomic";

const Wrap = ({ children }: PropsWithChildren) => (
  <div className="w-[328px] h-16 items-center justify-center gap-4 rounded-lg border border-input-light">
    {children}
  </div>
);

export const Numbers = () => (
  <div className="flex flex-wrap justify-between gap-8">
    <Wrap>
      <KyivstarNumber />
    </Wrap>

    <Wrap>
      <LifeNumber />
    </Wrap>

    <Wrap>support@hi-tech.ck.ua</Wrap>
  </div>
);
