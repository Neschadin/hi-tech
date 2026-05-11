import Link from "next/link";

import { NavMenu } from "./HeaderNavMenu";
import { DropDown, Container } from "./atomic";

const btnBase =
  "inline-flex justify-center items-center rounded-full text-lg transition duration-200 ease-out whitespace-nowrap font-medium px-[22px] h-[36px]";

const outlined = `${btnBase} text-primary border-2 border-primary hover:border-blue-600 hover:text-blue-600 focus-visible:border-blue-600 active:text-blue-700 active:border-blue-700`;
const filled = `${btnBase} font-semibold bg-blue-500 text-white hover:bg-blue-600 focus-visible:bg-blue-600 active:bg-blue-700`;

export const Header = () => {
  return (
    <header className="fixed z-50 w-screen border-b-2 border-gray-300 bg-white bg-opacity-30 backdrop-blur-2xl backdrop-filter">
      <Container className="h-[82px] items-center justify-between gap-4 md:gap-8">
        <Link
          href="/"
          className="text-2xl font-bold whitespace-nowrap hover:text-primary"
        >
          Hi-Tech
        </Link>

        <NavMenu />

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <DropDown />

          <Link
            href="/#poslugy"
            className={`${outlined} hidden sm:inline-flex`}
          >
            Послуги
          </Link>

          <Link href="/status" className={`${filled} hidden md:inline-flex`}>
            Статус
          </Link>
        </div>
      </Container>
    </header>
  );
};
