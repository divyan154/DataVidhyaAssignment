import Image from "next/image";

const CourseGrid = () => {
  return (
    <a
      href="https://bento.me/maharram"
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-[1100px] mx-auto w-full"
    >
      {/* Left Card */}
      <div className="lg:w-full w-auto rounded-[28px] shadow-lg p-4 bg-white flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-2">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Image
                key={index}
                src="/Rectangle.png" // Change to actual image
                width={150}
                height={100}
                alt="Course Thumbnail"
                className="rounded-lg"
              />
            ))}
        </div>
        <div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Data Vidhya <span className="text-blue-600">Courses</span>
          </h3>
          <p className="text-gray-500 text-sm">
            Our extensive course catalogue keeps you in trend with Data
            Engineering.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className="lg:w-full w-auto rounded-[28px] shadow-lg p-4 bg-white flex flex-col justify-between">
        <Image
          src="/prievew.png" // Change to actual image
          width={496}
          height={250}
          alt="Platform Preview"
          className="rounded-lg"
        />
        <div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Data Vidhya <span className="text-blue-600">Platform</span>
          </h3>
          <p className="text-gray-500 text-sm">
            Experience our platform and improve your problem-solving skills with
            our questions.
          </p>
        </div>
      </div>
    </a>
  );
};

export default CourseGrid;
