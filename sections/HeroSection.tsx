import CourseGrid from "@/components/CourseGrid";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" lg:max-w-[1200px] w-auto flex flex-col justify-center items-center text-center space-y-8 pt-10 relative">
      {/* Heading */}
      <div className="flex flex-col lg:w-[980px] w-auto  lg:text-left text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.02em] text-gray-900 font-inter">
          Unlock your{" "}
          <span className="bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-transparent bg-clip-text">
            Data Engineering
          </span>{" "}
          potential today
          <span className="inline-block align-middle ml-2">
            <Image
              src="/image 28.svg"
              height={48}
              width={48}
              alt="image"
              className="h-12 w-12"
            />
          </span>
        </h1>

        {/* Features */}
        <div className="flex flex-col lg:text-left text-center lg:ml-0 ml-10 gap-4  ">
          {[
            "Engage In Real-time Projects",
            "Learn from Industry Experts",
            "Gain Hands-on Experience",
          ].map((text, index) => (
            <p
              key={index}
              className="flex items-center gap-2 text-gray-700 text-base md:text-lg font-medium"
            >
              <Image src="/Check.svg" width={20} height={20} alt="check icon" />
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex lg:justify-end justify-center w-full">
      <div className="flex w-full justify-center lg:justify-end lg:mr-[670px]">
  <div className="flex lg:flex-row flex-col items-center gap-4 w-full max-w-[374px]">
    <button className="w-full max-w-[189px] h-12 flex justify-center items-center rounded-lg px-6 py-3 bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white font-medium">
      Explore Courses
    </button>
    <button className="relative w-full max-w-[189px] h-[48px] flex justify-center items-center rounded-[12px] px-[26px] py-[14px] gap-[6px] text-white font-medium overflow-hidden">
      <span className="absolute inset-0 bg-[#2E2E2E]"></span>
      <span className="absolute inset-0 bg-gradient-to-b from-[rgba(108,108,108,0.15)] to-[rgba(255,255,255,0)]"></span>
      <span className="relative z-10">Solve Questions</span>
    </button>
  </div>
</div>

</div>

      <div className="mr-[5]  ">
        {/* Course Grid */}
        <CourseGrid />
      </div>
    </section>
  );
};

export default HeroSection;
