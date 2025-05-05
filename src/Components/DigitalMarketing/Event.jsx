import { useState, useEffect } from "react";
import img1 from '/public/dmpage/br1.jpg';
import img2 from '/public/dmpage/br2.jpg';
import img3 from '/public/dmpage/br3.jpg';
import img4 from '/public/dmpage/br4.jpg';
import img5 from '/public/dmpage/br5.jpg';
import img6 from '/public/dmpage/br6.jpg';
import bg from '/public/dmpage/bg.jpg';

const events = [
  {
    name: "Music Festival",
    bg: img1,
  },
  {
    name: "Art Exhibition",
    bg: img2,
  },
  {
    name: "Tech Conference",
    bg: img3,
  },
  {
    name: "Food Carnival",
    bg: img4,
  },
  {
    name: "Branding Identity",
    bg: img5,
  },
  {
    name: "Digital Project Design",
    bg: img6,
  },
];

export default function EventsList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Preload images
  useEffect(() => {
    events.forEach((event) => {
      const img = new Image();
      img.src = event.bg;
    });
  }, []);

  const defaultBg = bg; // Default background if not hovered

  return (
    <div className="relative w-full h-auto overflow-hidden py-10">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hoveredIndex !== null ? events[hoveredIndex].bg : defaultBg})`,
          transition: "background-image 0s ease-in-out", // Instant change
        }}
      />

      {/* Events Section */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 backdrop-brightness-30">
        
        {/* Heading */}
        <h1 className="text-5xl font-bold text-white mb-12">
          Events of Gryphon Academy
        </h1>

        <ul className="w-full">
  {events.map((event, index) => (
    <li
      key={index}
      className="w-full cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="py-6"> {/* yeh spacing de raha hai visually */}
        <div className="flex items-center gap-3 px-4 rounded-lg transition-all duration-300">
        <span
  className={`text-5xl font-semibold transition-all duration-300 ${
    hoveredIndex === index ? "translate-x-7 text-black" : "text-white"
  }`}
>
  {event.name}
</span>
        <span
  className={` text-5xl transition-transform transition-opacity duration-300 origin-center pl-4 ${
    hoveredIndex === index
      ? "scale-125 opacity-100 translate-x-10"
      : "scale-100 opacity-0 translate-x-0"
  }`}
>
  →
</span>

        </div>
      </div>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}
