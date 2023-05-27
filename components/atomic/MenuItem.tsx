import { FC, PropsWithChildren } from "react";

type MenuItemProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
};

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, onClick, className = "" } = props;

  const btnStyles = `
  flex
  justify-center
  items-center
  px-6
  h-[38px]
  border-1
  border-
  rounded-2
  transition
  ease-in-out
  duration-200
  hover:bg-gray-200
  active:bg-gray-300
  ${className}
  `;

  return (
    <div
      className={`flex h-[38px] items-center rounded-lg border border-divider-light px-4 text-base font-medium text-gray-700 transition duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
