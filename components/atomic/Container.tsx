import { FC, ReactNode } from "react";

type ContainerProps = {
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({
  className = "",
  component: Component = "div",
  children,
}) => (
  <Component
    className={`container mx-auto flex max-w-cont flex-col justify-between self-center px-5 ${className}`}
  >
    {children}
  </Component>
);
