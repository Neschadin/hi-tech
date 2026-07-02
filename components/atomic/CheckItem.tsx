import { CheckIcon } from "../icons";

export const CheckItem = ({ children }: { children: string }) => (
  <div className="inline-flex items-center gap-6 text-xl font-semibold">
    <CheckIcon />
    <span>{children}</span>
  </div>
);
