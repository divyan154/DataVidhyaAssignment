"use client";
import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is data engineering?",
    answer:
      "Data engineering is the process of designing and building systems for collecting, storing, and analyzing data at scale.",
  },
  {
    question: "Who should take courses?",
    answer:
      "Anyone interested in a career in data engineering, analytics, or data science can benefit from these courses.",
  },
  {
    question: "What is the platform?",
    answer:
      "It's an interactive learning platform tailored to data engineering concepts and hands-on projects.",
  },
  {
    question: "How do I enroll?",
    answer:
      "You can enroll by signing up on the platform and choosing your desired course.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day refund policy after enrollment.",
  },
];

const Accordion: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // collapse
        : [...prev, index] // expand
    );
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = activeIndexes.includes(index)
          ? `${ref.scrollHeight}px`
          : "0px";
      }
    });
  }, [activeIndexes]);

  return (
    <section className="w-full flex justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-center mb-2  ">
          FAQs
        </h2>
        <p className="text-center mb-6 text-[18px] leading-[150%] font-normal font-['Roboto']">
          Find answers to your most pressing questions about our data
          engineering courses and platform.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndexes.includes(index);

            return (
              <div
                key={index}
                className="border rounded-xl overflow-hidden transition-all duration-300 bg-white"
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800   font-bold text-[18px] leading-[150%]"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 text-xl ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="px-4 overflow-hidden transition-all duration-300 text-sm text-gray-600"
                  style={{ maxHeight: isOpen ? "none" : "0px" }}
                >
                  <div className="py-2">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <h3 className="  font-bold text-[32px] leading-[130%] mb-2">
            Still have questions?
          </h3>
          <p className="text-sm text-gray-500 mb-4">We’re here to help you!</p>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
