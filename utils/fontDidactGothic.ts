import { Didact_Gothic } from "next/font/google";

const font = Didact_Gothic({
  subsets: ["cyrillic"],
  weight: "400",
});

export const didactGothic = font.className;
