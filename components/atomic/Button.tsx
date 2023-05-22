import { FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  size?: "M" | "L";
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, className = "", size } = props;

  const btnStyles = `
    inline-block
    flex justify-center items-center
    px-[26px]
    h-[${size === "L" ? 48 : 42}px]
    bg-blue-500
    rounded-full
    text-white text-lg font-semibold
    transition duration-200 ease-out
    hover:bg-blue-600
    focus-visible:bg-blue-600
    active:bg-blue-700
    ${className}
  `;

  return (
    <button className={btnStyles} onClick={onClick}>
      {children}
    </button>
  );
};
