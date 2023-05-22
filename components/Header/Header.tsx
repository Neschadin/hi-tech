import { FC } from "react";
import { NavMenu } from "./NavMenu";
import { Button } from "../atomic/Button";

export const Header: FC = () => {
  return (
    // <header className="min-h-[82px] border-b-2">
    <header className="flex min-h-[82px]   justify-center border-b px-2">
      <nav className="flex w-full max-w-cont items-center  justify-between">
        <p className="text-2xl font-bold">Hi-Tech</p>

        <NavMenu />

        <Button>Послуги</Button>
      </nav>
    </header>
  );
};
