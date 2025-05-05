import { useState } from "react";
import img1 from '/public/dmpage/Dm1.jpg';
import img2 from '/public/dmpage/Dm2.jpg';
import img3 from '/public/dmpage/Dm3.jpg';
import img4 from '/public/dmpage/Dm4.jpg';

const services = [
  {
    title: "SEO",
    description: "Boost your website ranking effectively. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms.",
    bg: img1,
  },
  {
    title: "Social Media",
    description: "Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms.",
    bg: img2,
  },
  {
    title: "PPC Ads",
    description: "Generate instant leads with paid ads. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms.",
    bg: img3,
  },
  {
    title: "Content Marketing",
    description: "Attract and engage customers via content. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms. Grow your brand across social platforms.",
    bg: img4,
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const defaultBackground = img1;

  return (
    <div className="w-full py-4 relative overflow-hidden">
      {/* Top Heading */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-relaxed">
          <span className="text-[#f2b800]">Digital Marketing</span> Services
          <br />
          At A Gryphon Academy
        </h1>
      </div>

      {/* Background Section with services */}
      <div className="relative w-full">
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-all duration-700"
          style={{
            backgroundImage: `url(${
              hoveredIndex !== null ? services[hoveredIndex].bg : defaultBackground
            })`,
          }}
        >
          {/* No black overlay here */}
        </div>

        {/* Content */}
        <div className="relative z-10 ">
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-96 cursor-pointer group overflow-hidden transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Black overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>

                {/* Inner Container */}
                <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                  {/* Content Wrapper */}
                  <div
                    className={`flex flex-col items-center text-center transition-all duration-700 ${
                      hoveredIndex === index
                        ? "translate-y-[-50%] opacity-100"
                        : "translate-y-[calc(100%-4rem)] opacity-100"
                    }`}
                  >
                    {/* Number + Heading */}
                    <div className="flex items-center space-x-2 text-white font-bold text-2xl">
                      <span className="text-[#f2b800]">{index + 1}.</span>
                      <h2>{service.title}</h2>
                    </div>

                    {/* Text */}
                    <p
                      className={`text-white text-sm max-w-xs mt-1 transition-all duration-700 px-4 ${
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
