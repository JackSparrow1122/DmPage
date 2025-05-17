import { useState, useEffect } from "react";
import img1 from '/public/dmpage/br1.jpg';
import img2 from '/public/dmpage/br2.jpg';
import img3 from '/public/dmpage/br3.jpg';
import img4 from '/public/dmpage/br4.jpg';

const events = [
  {
    name: "Dual Expertise",
    bg: img2,
    content: "We bring combined knowledge of event management and digital marketing to deliver unmatched experiences."
  },
  {
    name: "Integrated Event + DM Services",
    bg: img1,
    content: "Our seamless integration of event planning and digital promotions ensures maximum impact and reach."
  },
  {
    name: "Customized for You",
    bg: img3,
    content: "Every campaign is uniquely designed to reflect your brand identity and goals."
  },
  {
    name: "From Campus to Corporates",
    bg: img4,
    content: "Whether it’s a college fest or a corporate conference, we’ve done it all with equal finesse."
  },
];

export default function EventsList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); // NEW STATE for click

  useEffect(() => {
    events.forEach((event) => {
      const img = new Image();
      img.src = event.bg;
    });
  }, []);

  const defaultBg = '';

  return (
    <div className="relative w-full h-auto overflow-hidden py-10">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hoveredIndex !== null ? events[hoveredIndex].bg : defaultBg})`,
          transition: "background-image 0s ease-in-out",
        }}
      />

      {/* Events Section */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 backdrop-brightness-30">
        
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          What Sets <span className="text-[#f2b800]">Gryphon</span> DM Apart? 
        </h1>

        <ul className="w-full">
          {events.map((event, index) => (
            <li
              key={index}
              className="w-full cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(index === selectedIndex ? null : index)} // TOGGLE
            >
              <div className="py-6">
                <div className="flex items-center gap-3 px-4 rounded-lg transition-all duration-300">
                  <span
                    className={`text-4xl font-semibold transition-all duration-300 ${
                      hoveredIndex === index ? "translate-x-7 text-black" : "text-white"
                    }`}
                  >
                    {event.name}
                  </span>
                  <span
                    className={`text-5xl transition-transform transition-opacity duration-300 origin-center pl-4 ${
                      hoveredIndex === index
                        ? "scale-125 opacity-100 translate-x-10"
                        : "scale-100 opacity-0 translate-x-0"
                    }`}
                  >
                    →
                  </span>
                </div>

                {/* Content shown on click */}
                {selectedIndex === index && (
                  <div className="mt-4 px-6 text-white text-lg transition-all duration-500">
                    {event.content}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
