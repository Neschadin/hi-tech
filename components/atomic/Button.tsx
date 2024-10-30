import { FC, PropsWithChildren } from "react";

type TProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  size?: "S" | "M" | "L";
  variant?: "filled" | "outlined";
};

export const Button: FC<TProps> = (props) => {
  const {
    children,
    onClick,
    className = "",
    size = "M",
    variant = "filled",
  } = props;

  const btnStyles = `
    inline-flex justify-center items-center rounded-full text-lg transition duration-200 ease-out whitespace-nowrap
    ${size === "S" ? "font-medium" : "font-semibold"}
    ${size === "S" ? "px-[22px]" : "px-[26px]"}
    ${size === "S" && "h-[36px]"}
    ${size === "M" && "h-[42px]"}
    ${size === "L" && "h-[48px]"}
    ${
      variant === "filled" &&
      "bg-blue-500 text-white hover:bg-blue-600 focus-visible:bg-blue-600 active:bg-blue-700"
    }
    ${
      variant === "outlined" &&
      "text-primary border-2 border-primary hover:border-blue-600 hover:text-blue-600 focus-visible:border-blue-600 active:text-blue-700 active:border-blue-700"
    }
    ${className}
  `;

  return (
    <button className={btnStyles} onClick={onClick}>
      {children}
    </button>
  );
};
