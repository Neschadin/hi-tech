import { FC } from "react";

import { NavMenu } from "./NavMenu";
import { DropDown, Button } from "../atomic";

export const Header: FC = () => {
  return (
    <header className="flex min-h-[82px] justify-center border-b px-2">
      <div className="container flex w-full max-w-cont flex-col  flex-wrap items-center justify-between mx-5 md:flex-row">
        <p className="text-2xl font-bold">Hi-Tech</p>

        <NavMenu />

        <div className="flex gap-3">
          <DropDown />

          <Button>Послуги</Button>
        </div>
      </div>
    </header>
  );
};
