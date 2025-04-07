import React from "react";
import Image from "next/image";
import leaderboardImg from "../../public/leaderboardImg.png";
import ruleImg from "../../public/ruleImage.png";

export default function GamifiedLearning() {
  return (
    <div className="flex lg:flex-row flex-col gap-6 items-center space-x-8">
      {" "}
      {/* Horizontal layout with vertical centering */}
      {/* Left Text Card */}
      <div className="lg:w-[344px] w-auto lg:h-[140px] h-auto bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] font-semibold text-gray-900">
            <span className=" ">Gamified Learning</span>
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-[1.4]">
            Level up skills through challenges, rewards & competition. Making
            learning addictive & effective
          </p>
        </div>

        
      </div>
      {/* Right Image */}
      <Image
        src={ruleImg}
        alt="AI Review Illustration"
        className="object-contain"
      />
      <Image
        src={leaderboardImg}
        alt="AI Review Illustration"
        className="object-contain"
      />
    </div>
  );
}
