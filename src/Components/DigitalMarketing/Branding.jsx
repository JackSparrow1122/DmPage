import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/public/ga-logo.png";
import synergyGif from "../../assets/plain.gif";

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
  const repeatedCards = [...cards, ...cards, ...cards, ...cards, ...cards];

  return (
<div className="w-1/3 h-full relative" style={{ transform: "rotate(20deg)" }}>
      <motion.div
        className="absolute top-0 left-0 flex flex-col items-center gap-6"
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
    <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Toggle Button */}
      <div
        className="absolute top-6 right-6 sm:right-12 z-50 cursor-pointer"
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
            className="absolute top-5 right-6 sm:right-11 bg-white text-black shadow-xl rounded-lg p-6 z-30 w-64"
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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Section - No BG */}
        <div className="w-full lg:w-1/2 p-2 sm:p-4 flex flex-col justify-start h-full">
          {/* GIF at Top */}
          <div className="mb-6">
            <img
              src={synergyGif}
              alt="Synergy in motion"
              className="w-[120px] h-auto "
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Crafting Moments. <span className="text-[#F2B800]">Creating Impact.</span> Capturing Results.
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white">
              Snapshots of Synergy – Where both Colleges & Corporates Find Common Ground
            </p>
          </div>
        </div>

        {/* Right Section - Sliders */}
        <div className="w-full lg:w-[50%] h-[500px] rounded-tr-[180px] flex gap-4 overflow-hidden relative">
          <VerticalSlider />
          <VerticalSlider reverse />
          <VerticalSlider />
        </div>
      </div>
</div>
  );
};

export default ImageSliderComponent;
