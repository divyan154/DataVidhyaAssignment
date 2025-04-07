import React from "react";
import Image from "next/image";
import linkedinIcon from "../public/linkedin.svg fill.png";
import userPlaceholder from "../public/Avatar Image.png";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Name Surname",
    position: "Position",
    company: "Company name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position",
    company: "Company name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    name: "Name Surname",
    position: "Position",
    company: "Company name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position",
    company: "Company name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position",
    company: "Company name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    name: "Name Surname",
    position: "Position",
    company: "Company name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

const CustomerTestimonials: React.FC = () => {
  // Split testimonials into chunks of 2
  const columns = Array.from({ length: 3 }, (_, i) =>
    testimonials.slice(i * 2, i * 2 + 2)
  );

  return (
    <section className="px-4 md:px-10 py-16 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Customer Testimonials
        </h2>
        <p className="text-gray-600 mb-10">
          This platform transformed my data engineering skills!
        </p>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="flex flex-col gap-6 w-full max-w-[392px]"
            >
              {column.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between space-y-3 text-left"
                >
                  {/* Stars */}
                  <div className="flex space-x-1 text-yellow-500 text-base">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-gray-800 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={userPlaceholder}
                        alt="user"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src={linkedinIcon}
                        alt="LinkedIn"
                        width={18}
                        height={18}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
