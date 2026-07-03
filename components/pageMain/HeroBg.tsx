import Image, { type StaticImageData } from "next/image";

import effectLight from "@/public/imgMainPage/heroBg/effect_light.png";
import ipad from "@/public/imgMainPage/heroBg/ipad.png";
import iphone from "@/public/imgMainPage/heroBg/iphone.png";
import laptop from "@/public/imgMainPage/heroBg/laptop.png";
import tvremote from "@/public/imgMainPage/heroBg/tvremote.png";

/** Design canvas — matches effect_light.png (1920×600). */
const CANVAS_W = 1920;
const CANVAS_H = 600;

type HeroSprite = {
  src: StaticImageData;
  left: number;
  top: number;
  rotate: number;
  flip?: boolean;
};

const DESKTOP_SPRITES: HeroSprite[] = [
  { src: tvremote, left: 254, top: -80, rotate: 120 },
  { src: iphone, left: 1030, top: -80, rotate: -45.67 },
  { src: ipad, left: 385, top: 210, rotate: 153.25 },
  { src: laptop, left: 572, top: -130, rotate: -40, flip: true }
];

const pct = (value: number, base: number) => `${(value / base) * 100}%`;

const spriteTransform = (rotate: number, flip?: boolean) => {
  const flipPart = flip ? " scaleX(-1)" : "";
  return `rotate(${rotate}deg)${flipPart}`;
};

const HeroSprite = ({ src, left, top, rotate, flip }: HeroSprite) => (
  <div
    className="absolute"
    style={{
      left: pct(left, CANVAS_W),
      top: pct(top, CANVAS_H),
      width: pct(src.width, CANVAS_W),
      transform: spriteTransform(rotate, flip)
    }}
  >
    <Image
      src={src}
      alt=""
      className="h-auto w-full"
      sizes={`(min-width: 768px) ${Math.round((src.width / CANVAS_W) * 100)}vw, 0px`}
    />
  </div>
);

const LIGHT_SIZES = `(min-width: ${CANVAS_W}px) ${CANVAS_W}px, 100vw`;

const LightOverlay = ({ className = "" }: { className?: string }) => (
  <Image
    src={effectLight}
    alt=""
    fill
    className={`object-cover object-top ${className}`}
    sizes={LIGHT_SIZES}
  />
);

/** Decorative hero devices + light wash. Scales with viewport width. */
export const HeroBg = () => (
  <>
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden md:hidden"
    >
      <div
        className="absolute left-1/2 top-[6%] w-[min(88vw,380px)]"
        style={{ transform: "translateX(-50%) rotate(-40deg) scaleX(-1)" }}
      >
        <Image src={laptop} alt="" className="h-auto w-full" sizes="88vw" />
      </div>
      <div className="absolute inset-0">
        <LightOverlay />
      </div>
    </div>

    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 hidden overflow-hidden md:block"
    >
      <div
        className="relative mx-auto w-full max-w-[1920px]"
        style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
      >
        {DESKTOP_SPRITES.map((sprite) => (
          <HeroSprite key={sprite.src.src} {...sprite} />
        ))}
        <div className="absolute inset-0">
          <LightOverlay />
        </div>
      </div>
    </div>
  </>
);
