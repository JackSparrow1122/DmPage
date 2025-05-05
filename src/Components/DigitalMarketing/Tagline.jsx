import React, { useEffect } from "react";

const ScrollingText = () => {
  const words = [
    "SEO",
    "Social Media Marketing",
    "Email Campaigns",
    "Google Ads",
    "Content Strategy",
    "Brand Awareness",
  ];

  // Inject keyframes dynamically in head using useEffect
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll-left {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-gray-300 py-4 mt-2">
      <div
        className="flex gap-16 min-w-[200%]"
        style={{
          animation: "scroll-left 10s linear infinite",
        }}
      >
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="text-5xl font-bold text-white hover:text-[#f2b800] hover:underline cursor-pointer transition-all duration-300"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
