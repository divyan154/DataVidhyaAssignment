"use client";
import ProjectCard from "@/components/ProjectCard";
import ReviewCard from "@/components/ReviewCard";
import React, { useState } from "react";
import Image from "next/image";
import lineImg from "../public/Vector 772.png";
import lineImg2 from "../public/Vector 771.png";
const ProjectsSection = () => {
  const [cardState, setCardState] = useState("Projects");

  return (
    <section className="bg-white w-full flex flex-col items-center text-center px-4 py-16 space-y-10">
      {/* Section Heading */}
      <div className="flex flex-col items-center space-y-3 max-w-3xl">
        <h2
          className="font-bold text-[16px] leading-[140%] tracking-[0.1em] text-center "
          style={{ color: "#8B90A1" }}
        >
          PROJECTS
        </h2>

        <h2 className="text-center flex flex-col items-end    font-bold text-[48px] leading-[120%] tracking-[0%] text-[#121212] max-sm:text-[36px]">
          Work on Real Time Projects
          <span className="lg:w-[180px] w-[140px] lg:mr-2 mr-6">
            <Image src={lineImg} alt="Line Image" />
            <Image src={lineImg2} alt="Line Image" />
          </span>
        </h2>

        <p className="text-[18px] leading-[150%] text-[#4B4B4B] font-['Roboto']">
          Gain proficiency with 14+ extensive projects designed to provide
          practical, real-world data engineering experience
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex items-center justify-center gap-2 bg-white">
  <div className="w-full lg:w-[382px] border border-[#D1D5DB] rounded-[16px] flex  lg:flex-row flex-col overflow-hidden">
    {/* Button 1 */}
    <button
      onClick={() => setCardState("Projects")}
      className={`flex-1 h-[45px] px-4 py-3 text-sm font-semibold
        ${
          cardState === "Projects"
            ? "bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white sm:rounded-l-[6px] sm:rounded-tr-none rounded-t-[6px]"
            : "bg-white text-[#333333] opacity-40 hover:bg-[#f2e9ff] sm:rounded-l-[6px] sm:rounded-tr-none rounded-t-[6px]"
        }`}
    >
      Data Vidhya Projects
    </button>

    {/* Button 2 */}
    <button
      onClick={() => setCardState("Reviews")}
      className={`flex-1 h-[45px] px-4 py-3 text-sm font-semibold
        ${
          cardState === "Reviews"
            ? "bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white sm:rounded-r-[6px] sm:rounded-tl-none rounded-b-[6px]"
            : "bg-white text-[#333333] opacity-40 hover:bg-[#f2e9ff] sm:rounded-r-[6px] sm:rounded-tl-none rounded-b-[6px]"
        }`}
    >
      Student Reviews
    </button>
  </div>
</div>


      {/* Cards */}
      <div className="w-full max-w-7xl">
        {cardState === "Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        )}
        {cardState === "Reviews" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        )}
      </div>

      {/* Optional: View All Projects Button */}

      <button className="mt-8 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition shadow-[0px_0px_0.5px_0px_#FFFFFF]">
        View All Projects
      </button>
    </section>
  );
};

export default ProjectsSection;
