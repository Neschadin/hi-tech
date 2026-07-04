import type { CSSProperties, FC, JSX, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

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
    className={cn(
      "container relative mx-auto flex max-w-cont self-center px-5",
      className
    )}
  >
    {children}
  </Component>
);
