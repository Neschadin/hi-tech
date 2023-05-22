import { FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  const btnStyles = `
    inline-block
    flex justify-center items-center
    px-[26px]
    h-[42px]
    bg-blue-500
    rounded-full
    text-white text-lg font-semibold
    ${className}
  `;

  return (
    <button className={btnStyles} onClick={onClick}>
      {children}
    </button>
  );
};
