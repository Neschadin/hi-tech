import Image from "next/image";

import gpu from "@/public/imgMainPage/section4/gpu.png";
import gpu1 from "@/public/imgMainPage/section4/gpu1.png";
import gpu3 from "@/public/imgMainPage/section4/gpu3.png";

export const VideoCards = () => {
  return (
    <div className="relative hidden lg:block">
      <div className="relative h-[568px] w-[568px] overflow-hidden rounded-full bg-gray-100">
        <Image
          src={gpu1}
          alt="gpu"
          className="absolute left-[420px] top-[30px]"
        />

        <Image
          src={gpu3}
          alt="gpu"
          className="absolute left-[120px] top-[440px]"
        />
      </div>

      <Image
        src={gpu}
        alt="gpu"
        className="absolute left-[-80px] top-[-40px] rotate-[75deg]"
      />
    </div>
  );
};
