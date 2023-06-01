import Image from "next/image";

import ipad from "@/public/imgMainPage/heroBg/ipad.png";
import iphone from "@/public/imgMainPage/heroBg/iphone.png";
import laptop from "@/public/imgMainPage/heroBg/laptop.png";
import tvremote from "@/public/imgMainPage/heroBg/tvremote.png";

export const HeroBg = () => (
  <>
    <div aria-label="asd" className="absolute w-full">
      <Image
        src={tvremote}
        alt="TV Remote"
        className="absolute left-[254px] top-[-80px] rotate-[120deg] transform"
      />

      <Image
        src={iphone}
        alt="IPhone"
        className="absolute left-[1030px] top-[-80px] rotate-[-45.67deg] transform"
      />

      <Image
        src={ipad}
        alt="IPad"
        className="absolute left-[385px] top-[210px] rotate-[153.25deg] transform"
      />

      <Image
        src={laptop}
        alt="Laptop"
        className=" absolute left-[572px] top-[-130px] rotate-[-40deg] scale-x-[-1] transform"
      />
    </div>

    <div className="absolute h-full w-full bg-gradient-to-b from-white/70 to-transparent" />
  </>
);
