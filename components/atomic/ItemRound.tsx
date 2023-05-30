import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { ChevronDownIcon } from "../icons";

type TProps = {
  className?: string;
  img: StaticImageData;
  children: string;
  href?: string;
};

export const ItemRound: FC<TProps> = ({
  children,
  className = "",
  img,
  href = "#",
}) => (
  <div
    className={`relative flex h-[260px] w-[208px] flex-col items-center justify-between ${className}`}
  >
    <div className="flex h-[208px] w-[208px] items-center justify-center rounded-full bg-gray-200">
      <Image src={img} alt="img" />
    </div>

    <Link
      href={href}
      className="text-lg font-medium text-primary underline underline-offset-8"
    >
      {children}
    </Link>
  </div>
);
