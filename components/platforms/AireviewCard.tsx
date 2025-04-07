import React from "react";
import Image from "next/image";
import aiImg from "../../public/aiImage.png";

export default function AireviewCard() {
  return (
    <div className="flex lg:flex-row flex-col gap-6 items-center space-x-8"> {/* Horizontal layout with vertical centering */}
      {/* Left Text Card */}
      <div className="lg:w-[344px] w-auto lg:h-[140px] h-auto bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] font-semibold text-gray-900">
            <span className="text-violet-600 font-bold">1/4 .</span> AI Review
            <span className="ml-1">✨</span>
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-[1.4]">
            Engage in real-world coding challenges and get instant feedback to
            enhance your skills.
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex space-x-2 mt-4">
          <span className="w-3 h-3 rounded-full bg-black" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Right Image */}
      <Image src={aiImg} alt="AI Review Illustration" className="object-contain" />
    </div>
  );
}
