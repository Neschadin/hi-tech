import { FC } from "react";

import { NavMenu } from "./NavMenu";
import { DropDown, Button, Container } from "../atomic";

export const Header: FC = () => {
  return (
    <header className="border-b">
      <Container className="min-h-[82px] items-center md:flex-row">
        <p className="text-2xl font-bold">Hi-Tech</p>

        <NavMenu />

        <div className="flex gap-3">
          <DropDown />

          <Button>Послуги</Button>
        </div>
      </Container>
    </header>
  );
};
