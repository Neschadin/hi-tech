import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import { cn } from "@/utils/cn";

import { ChevronDownIcon } from "../icons/ChevronDownIcon";

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
  href = "#"
}) => (
  <div
    className={cn(
      "relative flex h-65 w-52 flex-col items-center justify-between",
      className
    )}
  >
    <div className="flex size-52 items-center justify-center rounded-full bg-gray-200">
      <Image src={img} alt={children} />
    </div>

    <Link
      href={href}
      className="text-lg font-medium text-primary underline underline-offset-8"
    >
      {children}
    </Link>
  </div>
);
