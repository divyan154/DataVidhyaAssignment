import React from "react";
import Image from "next/image";
import reviewImage from "../public/Frame 2147225194.png";
export default function ProjectCard() {
  return (
    <a
      href="https://bento.me/maharram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full max-w-[394px] p-4 bg-white border border-[#D7D7D7] rounded-lg shadow-sm">
        <Image
          className="rounded-t-lg flex items-center w-full"
          src={reviewImage}
          alt="Project image"
        />

        <div>
          <div className="mt-[10px] flex flex-cols justify-between">
            <div>Project Name</div>
            <div>Airflow</div>
          </div>
          <p className="mb-3 mt-2 md:mt-4 font-normal text-left text-gray-700 dark:text-gray-400">
            Learn to automate, schedule, and monitor data pipelines with Apache
            Airflow. This course covers the basics, building efficient DAGs, and
            real-world projects on AWS & GCP. Perfect for anyone looking to
            manage modern data workflows easily!
          </p>
        </div>
      </div>
    </a>
  );
}
