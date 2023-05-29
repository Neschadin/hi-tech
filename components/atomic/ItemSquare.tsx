import { FC, PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";

type TItemSquare = PropsWithChildren & {
  className?: string;
  src: StaticImageData;
};

export const ItemSquare: FC<TItemSquare> = ({
  children,
  className = "",
  src,
}) => {
  return (
    <div
      className={`relative flex h-[188px] w-[208px] flex-col items-center justify-between gap-4 rounded-lg border border-gray-300 py-4 ${className}`}
    >
      <Image src={src} alt="src" />

      {children}
    </div>
  );
};
