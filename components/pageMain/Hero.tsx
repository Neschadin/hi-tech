import { FC } from "react";
import { HeroBg } from "./HeroBg";
import { HeroContent } from "./HeroContent";

export const Hero: FC = () => {
  return (
    <section className="relative min-h-[600px] max-w-[1920px]">
      <HeroBg />

      <HeroContent />
    </section>
  );
};
