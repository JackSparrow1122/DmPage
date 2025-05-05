import React from "react";
import img from "/public/dmpage/herobg.png"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div className="w-full bg-[#F6F6F6] py-10 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
            We Implement <br />
            Your Idea <span className="inline-block ml-2">💡</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are here for you to give best real life <br />
            implementation of your idea.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
              Get started
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          {/* Replace this div with your imported image */}
          <img
            src={img}
            alt="Discussion Illustration"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
