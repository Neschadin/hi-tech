import { FC, PropsWithChildren } from "react";

type TProps = PropsWithChildren & {
  className?: string;
  component?: keyof JSX.IntrinsicElements;
};

export const Container: FC<TProps> = ({
  className = "",
  component: Component = "div",
  children,
}) => (
  <Component
    className={`container relative mx-auto flex max-w-cont self-center px-5 ${className}`}
  >
    {children}
  </Component>
);
