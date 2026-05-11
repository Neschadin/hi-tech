import Link from "next/link";

export const NavMenu = () => (
  <nav className="hidden w-[510px] flex-col items-center justify-between text-lg font-medium lg:flex lg:flex-row lg:gap-4">
    <Link className="hover:text-black" href="/">
      Головна
    </Link>
    <Link className="hover:text-black" href="/services/lenovo">
      Гарантія Lenovo
    </Link>
    <Link className="hover:text-black" href="/contacts">
      Контакти
    </Link>
    <Link className="hover:text-black" href="/about-us">
      Про нас
    </Link>
    <Link className="hover:text-black" href="/#poslugy">
      Послуги
    </Link>
  </nav>
);
