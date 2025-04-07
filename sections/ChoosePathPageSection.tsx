"use client";

import React, { useState } from "react";
import Image from "next/image";

import lineImg from "../public/Vector 772.png";
import lineImg2 from "../public/Vector 771.png";
import ChoosePathCard from "@/components/platforms/ChoosePathCard";
import SolveQuestionsCard from "@/components/platforms/SolveQuestionsCard";
import AireviewCard from "@/components/platforms/AireviewCard";
import GamifiedLearning from "@/components/platforms/GamifiedLearning";

type Tab = "choose" | "solve" | "review" | "learn";

export default function ChoosePathPage() {
  const [activeTab, setActiveTab] = useState<Tab>("choose");

  const getTabClasses = (tab: Tab) =>
    `relative w-[261.19px] h-[45.73px] text-[14.2px] font-semibold   text-center transition-all leading-[17px] flex items-center justify-center z-10
    ${
      activeTab === tab
        ? "bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white"
        : "bg-white text-[rgba(51,51,51,0.4)] border border-[#D7D7D7]"
    }`;

//   const renderDivider = (index: number) => {
//     const isActive = activeTab === ["choose", "solve", "review"][index];
//     return (
//         <div
//         key={`divider-${index}`}
//         className={`relative w-[26.42px] h-[45.73px] -ml-[1px] z-0 overflow-hidden`}
//       >
//         {/* Background fill */}
//         <div
//           className={`absolute inset-0 ${
//             isActive
//               ? "bg-gradient-to-r from-[#2D3BF2] to-[#B832E9]"
//               : "bg-white border border-[#D7D7D7]"
//           }`}
//         />
      
//         {/* Arrow-style shape */}
//         <div
//           className={`absolute left-0 top-0 w-full h-full transform skew-x-[-20deg] origin-left ${
//             isActive
//               ? "bg-gradient-to-r from-[#2D3BF2] to-[#B832E9]"
//               : "bg-white border-r border-[#D7D7D7]"
//           }`}
//         />
//       </div>
      
//     );
//   };

  return (
    <section className="min-h-screen bg-[#f9fafb] w-full flex flex-col gap-2 items-center justify-center px-4 py-16 space-y-10">
      <div className="flex gap-4 flex-col items-center space-y-3 max-w-3xl">
        <h2
          className="  font-bold text-[16px] leading-[140%] tracking-[0.1em] text-center "
          style={{ color: "#8B90A1" }}
        >
          PLATFORM
        </h2>

        <h2 className="text-center font-bold text-[48px] leading-[120%] tracking-[0%] text-[#121212] max-sm:text-[36px]">
  Solve Leet Code like <br />
  <span className="relative inline-block">
    problems
    <span className="absolute left-1/2 -translate-x-1/2 top-[100%]  flex flex-col items-center w-full">
      <Image src={lineImg} alt="Line 1" className="w-[120px]" />
      <Image src={lineImg2} alt="Line 2" className="w-[120px] -mt-1" />
    </span>
  </span>
</h2>



        <p className="text-[18px] leading-[150%] text-[#4B4B4B] font-['Roboto']">
          Our platform empowers you to advance your career with practical skills
          and real-world applications. Join a vibrant community that supports
          your learning journey.
        </p>
      </div>

      {/* Button Group */}
      <div className="flex justify-center flex-col lg:flex-row items-center gap-2 lg:gap-0 rounded-[16px] w-full max-w-[350px] lg:max-w-full h-auto lg:h-[49.8px]">
  <button
    onClick={() => setActiveTab("choose")}
    className={`${getTabClasses("choose")} rounded-t-[16px] lg:rounded-l-[16px] lg:rounded-tr-none`}
  >
    Choose Your Path
  </button>

  <button
    onClick={() => setActiveTab("solve")}
    className={`${getTabClasses("solve")} rounded-none`}
  >
    Solve Questions
  </button>

  <button
    onClick={() => setActiveTab("review")}
    className={`${getTabClasses("review")} rounded-none`}
  >
    AI Review ✨
  </button>

  <button
    onClick={() => setActiveTab("learn")}
    className={`${getTabClasses("learn")} rounded-b-[16px] lg:rounded-r-[16px] lg:rounded-bl-none`}
  >
    Gamified Learning
  </button>
</div>


      {/* Content Area */}
      <div className="w-full max-w-[1166px] p-8 flex flex-col md:flex-row gap-10">
        {activeTab === "choose" && <ChoosePathCard />}
        {activeTab === "solve" && <SolveQuestionsCard />}
        {activeTab === "review" && <AireviewCard />}
        {activeTab === "learn" && <GamifiedLearning />}
      </div>

      {/* Bottom CTA Button */}
      <button className="bg-violet-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-violet-700 transition">
        Try Platform
      </button>
    </section>
  );
}