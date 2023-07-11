import Link from "next/link";

export const NavMenu = () => (
  <nav className="flex w-[510px] flex-col items-center justify-between text-lg font-medium lg:flex-row lg:gap-4">
    <Link className="hover:text-black" href="/">
      Головна
    </Link>
    <Link className="hover:text-black" href={"/lenovo-warranty"}>
      Гарантія Lenovo
    </Link>
    <Link className="hover:text-black" href={"/contacts"}>
      Контакти
    </Link>
    <Link className="hover:text-black" href={"/about-us"}>
      Про Нас
    </Link>
  </nav>
);
