import React from "react";
import Image from "next/image";
import choosePathImage from "../../public/Frame 2147225549.png";

const ChoosePathCard: React.FC = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-6 items-center space-x-8">
      {/* Left Content */}
      <div className="lg:w-[344px] w-auto bg-white rounded-xl shadow-md p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Choose Your Path
        </h2>
        <p className="text-gray-700 text-sm mb-3">
          Choose your path and have a personalized roadmap. We offer:
        </p>
        <ol className="list-decimal pl-5 text-sm text-gray-800 space-y-1">
          <li>PySpark</li>
          <li>Scala</li>
          <li>DBT</li>
          <li>PostgreSQL</li>
          <li>Python</li>
        </ol>
      </div>

      {/* Right Image */}
      <Image
        src={choosePathImage}
        alt="Choose Path"
        className="object-contain  "
      />
    </div>
  );
};

export default ChoosePathCard;
