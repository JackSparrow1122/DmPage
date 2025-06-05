import { useState } from "react";
import img1 from "/public/dmpage/Dm1.jpg";
import img2 from "/public/dmpage/Dm2.jpg";
import img3 from "/public/dmpage/Dm3.jpg";
import img4 from "/public/dmpage/Dm4.jpg";

const servicesData = {
  college: [
    {
      title: "Landmark Events",
      description: "Annual HR summits that connect campuses to corporates",
      bg: img1,
    },
    {
      title: "Admission Amplification",
      description: "Targeted digital campaigns to boost student enrollment",
      bg: img2,
    },
    {
      title: "Brand Impact",
      description: "Strategies that elevate institutional reputation and visibility",
      bg: img3,
    },
    {
      title: "ROI Acceleration",
      description: "Stronger corporate tie-ups for long-term benefits",
      bg: img4,
    },
  ],
  corporate: [
    {
      title: "Audience Reach",
      description: " Targeted content across high-conversion platforms ",
      bg: img1,
    },
    {
      title: "Audience Reach",
      description: "Targeted content across high-conversion platforms ",
      bg: img2,
    },
    {
      title: "Engagement Amplification",
      description: "Social media, performance & branded content ",
      bg: img3,
    },
    {
      title: "Digital Excellence",
      description: "Website creation, SEO, and precision marketing ",
      bg: img4,
    },
  ],
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("college");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = servicesData[activeTab];
  const defaultBackground = services[0].bg;

  return (
    <div className="w-full py-4 relative overflow-hidden">
      {/* Top Heading */}
      <div className="text-center mb-4 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-relaxed">
          Our <span className="text-[#f2b800]">Digital</span> Ecosystem
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-4">
        {["college", "corporate"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#f2b800] text-black"
                : "bg-white bg-opacity-20 hover:bg-opacity-40"
            }`}
          >
            {tab === "college" ? "For College" : "For Corporate"}
          </button>
        ))}
      </div>

      {/* Dynamic Subheading based on active tab */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          {activeTab === "college"
            ? "Elevating Educational Horizons "
            : "Unleashing Digital Potential "}
        </h2>
      </div>

      {/* Background Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-all duration-700"
          style={{
            backgroundImage: `url(${
              hoveredIndex !== null ? services[hoveredIndex].bg : defaultBackground
            })`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-96 cursor-pointer group overflow-hidden transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div
                    className={`flex flex-col items-center text-center transition-all duration-700 px-2 ${
                      hoveredIndex === index
                        ? "translate-y-[-50%] opacity-100"
                        : "translate-y-[calc(100%-4rem)] opacity-100"
                    }`}
                  >
                    {/* Updated Index and Title */}
                    <div className="text-white font-bold text-4xl text-center leading-snug">
                      <div className="text-[#f2b800]">{index + 1}.</div>
                      <h2 className="mt-1">{service.title}</h2>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-white text-2xl max-w-xs mt-1 transition-all duration-700 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
