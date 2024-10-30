import { CSSProperties, FC, PropsWithChildren } from "react";

type TProps = PropsWithChildren & {
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
};

export const Container: FC<TProps> = ({
  className = "",
  component: Component = "div",
  children,
  style
}) => (
  <Component
    style={style}
    id="custom-container"
    className={`container relative mx-auto flex max-w-cont self-center px-5 ${className}`}
  >
    {children}
  </Component>
);
