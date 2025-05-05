import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/public/ga-logo.png";

const cards = [
  {
    title: "Admission Campaigns",
    content: "Attract and convert students through tailored digital strategies for colleges.",
  },
  {
    title: "Branding for Institutions",
    content: "Create a memorable identity that resonates with students and stakeholders.",
  },
  {
    title: "Event Management",
    content: "From celebrity events to Synergy Sphere experiences — we craft unforgettable moments for colleges and corporates.",
  },
  {
    title: "Admission Campaigns",
    content: "Attract and convert students through tailored digital strategies for colleges.",
  },
  {
    title: "Branding for Institutions",
    content: "Create a memorable identity that resonates with students and stakeholders.",
  },
  {
    title: "Event Management",
    content: "From celebrity events to Synergy Sphere experiences — we craft unforgettable moments for colleges and corporates.",
  },
  { gryphon: true },
];

const VerticalSlider = ({ reverse = false }) => {
  // Duplicate cards multiple times for infinite loop
  const repeatedCards = [...cards, ...cards, ...cards, ...cards, ...cards];

  return (
    <div className="w-1/3 h-full relative " style={{ transform: "rotate(20deg)" }}>
      <motion.div
        className="absolute top-0 left-0 flex flex-col items-center gap-6 "
        animate={{ y: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {repeatedCards.map((card, idx) => (
          <div
            key={idx}
            className="w-[150px] h-[260px] rounded-xl shadow-md flex flex-col items-center justify-center text-center px-4 py-6 bg-white text-black"
          >
            {card.gryphon ? (
              <>
                <span className="font-bold text-lg mb-2">Gryphon Academy</span>
                <img
                  src={logo}
                  alt="Gryphon Academy Logo"
                  className="w-60 h-60 object-contain mt-2"
                />
              </>
            ) : (
              <>
                <span className="font-semibold text-base mb-2">{card.title}</span>
                <p className="text-sm">{card.content}</p>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ImageSliderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative px-16">
    {/* Toggle Button */}
<div
  className="absolute top-6 right-12 z-50 cursor-pointer"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <div
    className={`w-14 h-14 rounded-full border flex items-center justify-center ${
      menuOpen ? "border-black bg-white" : "border-white"
    }`}
  >
    <span className={`text-6xl ${menuOpen ? "text-black" : "text-white"}`}>
      {menuOpen ? "×" : "="}
    </span>
  </div>
</div>


  {/* Pop-up */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-5 right-11 bg-white text-black shadow-xl rounded-lg p-6 z-30 w-64"
    >
      <h3 className="text-xl font-bold mb-4 pr-8">Branding Insights</h3>
      <p className="text-sm mb-2">🎨 Craft a unique visual identity that sets you apart.</p>
      <p className="text-sm mb-2">🚀 Build brand trust and loyalty through consistent messaging.</p>
      <p className="text-sm mb-2">🌟 Position your institution as a leader in your niche.</p>
      <p className="text-sm">🛠️ End-to-end branding solutions tailored for education & corporates.</p>
    </motion.div>
  )}
</AnimatePresence>


      {/* Main Content */}
      <div className="flex items-center justify-between min-h-screen">
        <div className="w-1/2">
          <h2 className="text-7xl font-bold mb-5 text-white">Captivating Visual Flow</h2>
          <p className="text-5xl text-white">
            Experience seamless motion and dynamic transitions that bring your brand to life.
          </p>
        </div>
        <div className="w-[45%] h-[500px] rounded-tr-[180px] flex gap-4 overflow-hidden relative">
          <VerticalSlider />
          <VerticalSlider reverse />
          <VerticalSlider />
        </div>
      </div>
    </div>
  );
};

export default ImageSliderComponent;
