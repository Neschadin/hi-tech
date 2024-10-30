import { NavMenu } from "./HeaderNavMenu";
import { DropDown, Button, Container } from "./atomic";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed z-50 w-screen border-b-2 border-gray-300 bg-white bg-opacity-30 backdrop-blur-2xl backdrop-filter">
      <Container className="h-[82px] items-center justify-between gap-8">
        <p className="text-2xl font-bold whitespace-nowrap">Hi-Tech</p>

        <NavMenu />

        <div className="flex gap-3">
          <DropDown />

          <Button>
            <Link href="/status">Стан ремонта</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};
