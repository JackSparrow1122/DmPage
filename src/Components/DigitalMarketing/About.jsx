import React, { useEffect, useRef, useState } from "react";
import funnelImage from "/public/dmpage/funnel.png";

const revenueData = [
  {
    title: "Drive website traffic",
    items: [
      "SEO Services",
      "Local SEO Services",
      "Ecommerce SEO Services",
      "Content Marketing Services",
    ],
    borderColor: "bg-blue-500",
  },
  {
    title: "Create and manage powerful ad campaigns",
    items: [
      "PPC Management Services",
      "Social Advertising Services",
      "Programmatic Advertising Services",
      "Geofencing Advertising Services",
    ],
    borderColor: "bg-blue-300",
  },
  {
    title: "Collect, analyze, and deploy marketing data",
    items: [
      "RevenueCloudFX",
      "Nutshell",
      "Website Call Tracking",
      "Lead Management",
    ],
    borderColor: "bg-green-400",
  },
  {
    title: "Improve brand messaging and conversion",
    items: [
      "Website Design Services",
      "CRO Services",
      "Landing Page Design Services",
      "Social Media Management Services",
    ],
    borderColor: "bg-yellow-400",
  },
];

const RevenueSection = () => {
  const rowsContainerRef = useRef(null);
  const [rowsHeight, setRowsHeight] = useState(0);

  useEffect(() => {
    if (rowsContainerRef.current) {
      setRowsHeight(rowsContainerRef.current.offsetHeight);
    }
  }, []);

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12 relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          How We Drive Revenue
        </h2>
      </div>

      {/* Funnel Image */}
      <div
        className="absolute left-0 z-10 hidden sm:block"
        style={{ top: "100px", height: rowsHeight }}
      >
        <img
          src={funnelImage}
          alt="Funnel"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Content Rows */}
      <div className="relative z-0" ref={rowsContainerRef}>
        {revenueData.map((section, index) => (
          <div key={index} className="relative">
            {/* Colored Bar Behind Content */}
            <div
              className={`absolute left-0 right-0 bottom-0 h-[2px] ${section.borderColor} z-0`}
            ></div>

            {/* Row Content */}
            <div className="lg:ml-[250px] px-4 sm:px-6 lg:px-8 pt-8 pb-10 grid grid-cols-1 sm:grid-cols-3 items-start min-h-[170px] relative z-10 gap-y-6 sm:gap-x-12">
              {/* Title */}
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 text-left sm:text-right leading-tight">
                {section.title}
              </div>

              {/* Items */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 text-left">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer"
                  >
                    <span>{item}</span>
                    <span className="font-bold"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RevenueSection;
