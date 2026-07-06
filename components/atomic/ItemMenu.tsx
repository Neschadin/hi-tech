import { FC, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type TProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
};

export const ItemMenu: FC<TProps> = ({ children, onClick, className }) => {
  return (
    <div
      className={cn(
        "flex h-[38px] items-center rounded-lg border border-divider-light px-4 text-base font-medium text-gray-700 transition duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
