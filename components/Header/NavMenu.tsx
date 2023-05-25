import Link from "next/link";

export const NavMenu = () => {
  return (
    <nav className="flex w-[510px] items-center justify-between text-lg font-medium">
        <Link href={""}>Головна</Link>
        <Link href={""}>Гарантія Lenovo</Link>
        <Link href={""}>Контакти</Link>
        <Link href={""}>Про Нас</Link>
    </nav>
  );
};
