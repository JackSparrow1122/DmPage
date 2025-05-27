import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Direct URLs of images
const cards = [
  "/src/assets/img1.JPG",
  "/src/assets/img2.JPG",
  "/src/assets/img3.JPG",
  "/src/assets/img4.JPG",
  "/src/assets/img5.JPG",
  "/src/assets/img6.JPG",
  "/src/assets/img7.JPG",
  "/src/assets/img8.JPG",
  "/src/assets/img9.JPG",
  "/src/assets/img10.jpg",
  "/src/assets/img11.jpg",
  "/src/assets/img12.jpg",
];

// Direct URL for the GIF
const synergyGif = "https://yourdomain.com/assets/plain.gif";

const sliceSize = cards.length / 3;

const firstSlice = cards.slice(0, sliceSize);
const secondSlice = cards.slice(sliceSize, sliceSize * 2);
const thirdSlice = cards.slice(sliceSize * 2);

const VerticalSlider = ({ cardsSlice, reverse = false }) => {
  const repeatedCards = [...cardsSlice, ...cardsSlice, ...cardsSlice];

  return (
    <div className="w-1/3 h-full relative" style={{ transform: "rotate(20deg)" }}>
      <style>
        {`
          @keyframes infiniteScrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes infiniteScrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          .infinite-scroll-up {
            animation: infiniteScrollUp 20s linear infinite;
          }
          .infinite-scroll-down {
            animation: infiniteScrollDown 20s linear infinite;
          }
        `}
      </style>
      <div
        className={`absolute top-0 left-0 flex flex-col items-center gap-4 sm:gap-6 ${
          reverse ? "infinite-scroll-down" : "infinite-scroll-up"
        }`}
        style={{ willChange: "transform" }}
      >
        {repeatedCards.map((image, idx) => (
          <div
            key={idx}
            className="w-[120px] h-[180px] sm:w-[120px] sm:h-[200px] md:w-[140px] md:h-[240px] lg:w-[170px] lg:h-[260px] rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={image}
              alt={`slider-img-${idx}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageSliderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      {/* Toggle Button */}
      <div
        className="absolute top-6 right-4 sm:right-8 md:right-10 z-50 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center ${
            menuOpen ? "border-black bg-white" : "border-white"
          }`}
        >
          <span className={`text-4xl sm:text-5xl ${menuOpen ? "text-black" : "text-white"}`}>
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
            className="absolute top-20 right-4 sm:right-8 md:right-10 bg-white text-black shadow-xl rounded-lg p-6 z-30 w-64"
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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start h-full">
          {/* GIF */}
          <div className="mb-6">
            <img
              src={synergyGif}
              alt="Synergy in motion"
              className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto"
              draggable={false}
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Crafting Moments. <span className="text-[#F2B800]">Creating Impact.</span> Capturing Results.
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              Snapshots of Synergy – Where both Colleges & Corporates Find Common Ground
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] h-[400px] sm:h-[450px] md:h-[500px] rounded-tr-[100px] sm:rounded-tr-[140px] lg:rounded-tr-[180px] flex gap-2 sm:gap-4 overflow-hidden relative">
          <VerticalSlider cardsSlice={firstSlice} />
          <VerticalSlider cardsSlice={secondSlice} reverse />
          <VerticalSlider cardsSlice={thirdSlice} />
        </div>
      </div>
    </div>
  );
};

export default ImageSliderComponent;
