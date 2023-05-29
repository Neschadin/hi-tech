import { FC } from "react";

import { NavMenu } from "./NavMenu";
import { DropDown, Button, Container } from "../atomic";

export const Header: FC = () => {
  return (
    <header className="fixed w-screen border-b-2 border-gray-300 backdrop-blur-2xl">
      <Container className="z-10 items-center  min-h-[82px] justify-between md:flex-row">
        <p className="text-2xl font-bold">{"Hi-Tech"}</p>

        <NavMenu />

        <div className="flex gap-3">
          <DropDown />

          <Button>Послуги</Button>
        </div>
      </Container>
    </header>
  );
};
