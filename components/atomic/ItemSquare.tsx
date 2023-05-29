import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronDownIcon } from "../icons";
import Link from "next/link";

type TProps = {
  className?: string;
  img: StaticImageData;
  children: string;
  href?: string;
};

export const ItemSquare: FC<TProps> = ({
  children,
  className = "",
  img,
  href = "#",
}) => (
  <div
    className={`relative flex h-[188px] w-[208px] flex-col items-center justify-between gap-4 rounded-lg border border-gray-300 py-4 ${className}`}
  >
    <Image src={img} alt="img" />

    <Link href={href} className="inline-flex items-center gap-[6px]">
      {children} <ChevronDownIcon className="-rotate-90 text-primary" />
    </Link>
  </div>
);
