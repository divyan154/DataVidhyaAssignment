import React from "react";
import Image from "next/image";

import leetCodeImg from "../../public/Frame 2147225551.png";

export default function SolveQuestionsCard() {
  return (
    <div className="flex lg:flex-row gap-6 flex-col items-center space-x-8">
      {/* Left Text */}
      <div className="lg:w-[344px] w-auto bg-white rounded-xl shadow-md p-4">
        <p className="text-[18px] font-semibold text-gray-900 mb-2">
          Solve Questions
        </p>
        <p className="text-sm text-gray-700 leading-[1.4]">
          Engage in real-world coding challenges and get instant feedback to
          enhance your skills.
        </p>
      </div>

      {/* Right Image */}
      <Image
        src={leetCodeImg}
        alt="Solve Questions"
        className="object-contain "
      />
    </div>
  );
}
