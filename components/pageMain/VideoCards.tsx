import Image from "next/image";

import gpu from "@/public/imgMainPage/section4/gpu.png";
import gpu1 from "@/public/imgMainPage/section4/gpu1.png";
import gpu3 from "@/public/imgMainPage/section4/gpu3.png";

export const VideoCards = () => {
  return (
    <div className="relative hidden lg:block">
      <div className="relative size-142 overflow-hidden rounded-full bg-gray-100">
        <Image
          src={gpu1}
          alt=""
          aria-hidden
          className="absolute left-105 top-7.5"
        />

        <Image
          src={gpu3}
          alt=""
          aria-hidden
          className="absolute left-30 top-110"
        />
      </div>

      <Image
        src={gpu}
        alt=""
        aria-hidden
        className="absolute -left-20 -top-10 rotate-75"
      />
    </div>
  );
};
