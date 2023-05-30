import { FC } from "react";

import { NavMenu } from "./NavMenu";
import { DropDown, Button, Container } from "../atomic";

export const Header: FC = () => {
  return (
    <header className="fixed z-50 w-screen border-b-2 border-gray-300 backdrop-blur-2xl">
      <Container className="h-[82px] items-center justify-between">
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
