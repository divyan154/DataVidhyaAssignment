import React from "react";
import Image from "next/image";

import reviewImage from "../public/Frame 2147225194.png";
import avatarImg from "../public/Avatar Image.png";
import linkImg from "../public/linkedin.svg fill.png";

export default function ReviewCard() {
  return (
    <a
      href="https://bento.me/maharram"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="w-full max-w-[394px] mx-auto p-4 bg-white border border-[#D7D7D7] rounded-lg shadow-sm">
        <Image
          className="rounded-t-lg w-full object-cover h-auto"
          src={reviewImage}
          alt="Review Image"
          priority
        />

        <div className="mt-4">
          {/* Styled Review Text */}
          <p
            className="mb-4 text-left text-sm sm:text-[12px] leading-relaxed text-[#333333b3] font-medium tracking-[-0.011em]"
            style={{
              fontFeatureSettings:
                "'cv09' on, 'ss11' on, 'calt' off, 'liga' off",
            }}
          >
            Learn to automate, schedule, and monitor data pipelines with Apache
            Airflow. This course covers the basics, building efficient DAGs, and
            real-world projects on AWS & GCP. Perfect for anyone looking to
            manage modern data workflows easily!
          </p>

          {/* Bottom Row */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <Image
                src={avatarImg}
                alt="Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="leading-tight text-left">
                <p className="font-semibold text-gray-600 text-base">
                  Name Surname
                </p>
                <p className="text-gray-400 text-sm">
                  Position, Company Name
                </p>
              </div>
            </div>

            {/* LinkedIn Icon */}
            <div className="shrink-0">
              <Image src={linkImg} alt="LinkedIn" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
