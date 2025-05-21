import React from 'react';
import { CountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';
 
// Import logo images
import adidasLogo from '../../assets/adidas.png';
import appleLogo from '../../assets/apple.png';
import forceLogo from '../../assets/adidas.png';
import vpLogo from '../../assets/force.png';
import chanelLogo from '../../assets/adidas.png';
import nikeLogo from '../../assets/apple.png'; // Replace with your actual logo
 
const StatsAndClients = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
 
  const logos = [
    adidasLogo,
    appleLogo,
    forceLogo,
    vpLogo,
    chanelLogo,
    nikeLogo,
  ];
 
  return (
    <>
      {/* Stats Section */}
      <section ref={ref} className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between divide-x divide-gray-700">
            {/* Block 1 - Left Aligned */}
            <div className="flex-1 text-left px-4 py-10">
              <h2 className="text-8xl font-bold">
                {inView && <CountUp isCounting end={200} duration={2} />}
                <span className="text-[#F2B800]">+</span>
              </h2>
              <p className="mt-2 text-2xl">
                <span className="font-bold">Digital</span> Experts
              </p>
            </div>
 
            {/* Block 2 - Center Aligned */}
            <div className="flex-1 text-center px-4 py-10">
              <h2 className="text-8xl font-bold">
                {inView && <CountUp isCounting end={300} duration={2} />}
                <span className="text-[#F2B800]">+</span>
              </h2>
              <p className="mt-2 text-2xl">
                <span className="font-bold">Happy</span> Clients
              </p>
            </div>
 
            {/* Block 3 - Right Aligned */}
            <div className="flex-1 text-right px-4 ">
              <h2 className="text-8xl font-bold">
                {inView && <CountUp isCounting end={40} duration={2} />}
                <span className="text-[#F2B800]">+</span>
              </h2>
              <p className="mt-2 text-2xl">
                <span className="font-bold">Software</span> In Tech Stack
              </p>
            </div>
          </div>
 
          {/* Button */}
          <div className=" text-center">
            <a
              href="#"
              className="inline-flex items-center bg-white text-black font-semibold px-6 py-4 transition-all duration-300 hover:font-bold"
            >
              LEARN MORE ABOUT US
              <span className="mb-2 text-white">↗</span>
            </a>
          </div>
        </div>
      </section>
 
      {/* Clients Section */}
      <section className="bg-black text-white pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Our Clients</h2>
 
          {/* First Row: Right to Left */}
          <Marquee direction="left" speed={50} pauseOnHover={false} gradient={false}>
            <div className="flex space-x-8">
              {logos.map((logo, index) => (
                <div key={`row1-${index}`} className="flex items-center justify-center bg-black">
                  <img src={logo} alt={`Client Logo ${index + 1}`} className="h-30 w-40" />
                </div>
              ))}
            </div>
          </Marquee>
 
          {/* Second Row: Left to Right */}
          <Marquee direction="right" speed={50} pauseOnHover={false} gradient={false}>
            <div className="flex space-x-8">
              {logos.map((logo, index) => (
                <div key={`row2-${index}`} className="flex items-center justify-center bg-black">
                  <img src={logo} alt={`Client Logo ${index + 1}`} className="h-30 w-40" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};
 
export default StatsAndClients;
 
 