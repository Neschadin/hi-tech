import { FC } from "react";
import { HeroBg } from "./HeroBg";
import { HeroContent } from "./HeroContent";

export const Hero: FC = () => {
  return (
    <section className="relative max-w-[1920px] min-h-[580px] overflow-hidden">
      <HeroBg />

      <HeroContent />
    </section>
  );
};
