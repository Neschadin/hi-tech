import { type StaticImageData } from "next/image";
import ipad from "@/public/imgMainPage/heroBg/ipad.png";
import iphone from "@/public/imgMainPage/heroBg/iphone.png";
import laptop from "@/public/imgMainPage/heroBg/laptop.png";
import tvremote from "@/public/imgMainPage/heroBg/tvremote.png";
import { cn } from "@/utils/cn";

/** Design canvas — hero device layout (1920×600). */
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

/**
 * Rendered as a CSS background (not <Image>) on purpose: purely decorative
 * sprites must never become LCP candidates. Browsers only score <img>/<video>
 * elements for LCP, so background-image sidesteps the metric entirely
 * instead of playing whack-a-mole with `priority`/`fetchPriority` per sprite.
 */
const HeroSprite = ({ src, left, top, rotate, flip }: HeroSprite) => (
  <div
    className="absolute bg-contain bg-top bg-no-repeat"
    style={{
      left: pct(left, CANVAS_W),
      top: pct(top, CANVAS_H),
      width: pct(src.width, CANVAS_W),
      aspectRatio: `${src.width} / ${src.height}`,
      backgroundImage: `url(${src.src})`,
      transform: spriteTransform(rotate, flip)
    }}
  />
);

const LightOverlay = ({ className = "" }: { className?: string }) => (
  <div
    className={cn(
      "absolute inset-0 bg-linear-to-b from-white/70 to-transparent",
      className
    )}
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
        className="absolute left-1/2 top-[6%] w-[min(88vw,380px)] bg-contain bg-top bg-no-repeat"
        style={{
          aspectRatio: `${laptop.width} / ${laptop.height}`,
          backgroundImage: `url(${laptop.src})`,
          transform: "translateX(-50%) rotate(-40deg) scaleX(-1)"
        }}
      />
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
