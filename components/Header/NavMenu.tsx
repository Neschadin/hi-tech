import Link from "next/link";

export const NavMenu = () => {
  return (
    <ul className="flex w-[510px] items-center  justify-between">
      <li>
        <Link href={""}>Головна</Link>
      </li>
      <li>
        <Link href={""}>Гарантія Lenovo</Link>
      </li>
      <li>
        <Link href={""}>Контакти</Link>
      </li>
      <li>
        <Link href={""}>Про Нас</Link>
      </li>
    </ul>
  );
};
