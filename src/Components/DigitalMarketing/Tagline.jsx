import React, { useEffect, useState, useMemo } from 'react';
import sampleVideo1 from '../../assets/home_intro.mp4';
import sampleVideo2 from '../../assets/bannervideo2.mp4';
import sampleVideo3 from '../../assets/bannervideo3.mp4';

const words = ['Marketing', 'Branding', 'Performance', 'Technology'];

const CustomGrid = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hoveredComponent, setHoveredComponent] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const { gridTemplateColumnsFinal, height } = useMemo(() => {
    let mainVideoFraction = 3;
    let textCol4Fraction = 1;
    let topVideoFraction = 5;

    const expandAmountMainVideo = 0.3;
    const expandAmountTopVideo = 1.2;

    if (hoveredComponent === 'mainVideo') {
      mainVideoFraction -= expandAmountMainVideo;
      const totalOthers = textCol4Fraction + topVideoFraction;
      textCol4Fraction += (expandAmountMainVideo * textCol4Fraction) / totalOthers;
      topVideoFraction += (expandAmountMainVideo * topVideoFraction) / totalOthers;
    } else if (hoveredComponent === 'topVideo') {
      topVideoFraction += expandAmountTopVideo;
      const totalOthers = mainVideoFraction + textCol4Fraction;
      mainVideoFraction -= (expandAmountTopVideo * mainVideoFraction) / totalOthers;
      textCol4Fraction -= (expandAmountTopVideo * textCol4Fraction) / totalOthers;
    }

    const clamp = (num, min = 0.3) => Math.max(num, min);
    mainVideoFraction = clamp(mainVideoFraction);
    textCol4Fraction = clamp(textCol4Fraction);
    topVideoFraction = clamp(topVideoFraction);

    const col1to3 = `${mainVideoFraction / 3}fr`;
    const col4 = `${textCol4Fraction}fr`;
    const col5to9 = `${topVideoFraction / 5}fr`;

    const columns = [
      col1to3, col1to3, col1to3,
      col4,
      col5to9, col5to9, col5to9, col5to9, col5to9,
    ].join(' ');

    return {
      gridTemplateColumnsFinal: columns,
      height: hoveredComponent ? '300px' : '350px',
    };
  }, [hoveredComponent]);

  return (
    <>
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: scale(0.95); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          .animate-fade-in-out {
            animation: fadeInOut 2.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className="pt-20 bg-black">
        <h2 className="text-[#EAB308] text-3xl md:text-4xl font-bold px-4 select-none">Scale Faster with Industry-Led Growth Marketing </h2>
      </div>

      <div
        className="p-4 bg-black overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ height }}
      >
        <div
          className="grid grid-rows-2 gap-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            height: '100%',
            gridTemplateColumns: gridTemplateColumnsFinal,
            gridTemplateRows: '70% 30%',
          }}
        >
          {/* Main Video */}
          <div
            className="col-span-3 row-span-2 flex flex-col transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            onMouseEnter={() => setHoveredComponent('mainVideo')}
            onMouseLeave={() => setHoveredComponent(null)}
            style={{
              transform: hoveredComponent === 'mainVideo' ? 'scale(0.99)' : 'scale(1)',
              transformOrigin: 'left center',
            }}
          >
            <div className="flex-1 overflow-hidden">
              <h2 className="text-white font-bold mb-2 select-none text-[clamp(1.2rem,2vw,3rem)] whitespace-nowrap">
                Campus-to-Corporate MarTech 
              </h2>
              <video
                src={sampleVideo1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* AI Text Column */}
          <div className="flex items-end justify-center mb-6 select-none">
            <p className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white whitespace-nowrap">
              AI
            </p>
          </div>

          {/* Top Video */}
          <div
            className="col-span-5 flex flex-col mt-6 md:mt-7 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            onMouseEnter={() => setHoveredComponent('topVideo')}
            onMouseLeave={() => setHoveredComponent(null)}
            style={{
              transform: hoveredComponent === 'topVideo' ? 'scale(1.03)' : 'scale(1)',
              transformOrigin: 'center center',
              overflow: 'hidden',
            }}
          >
            <h2 className="text-white font-bold mt-4 select-none text-[clamp(1rem,1.8vw,1.5rem)] whitespace-nowrap">
              Driving Real Outcomes for  {' '}
              <span className="text-[clamp(1rem,2vw,1.7rem)]">Colleges & Corporates Alike</span>
            </h2>
            <div className="flex-1 overflow-hidden relative">
              <video
                src={sampleVideo2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                <p className="text-white text-xl font-bold animate-fade-in-out"></p>
              </div>
            </div>
          </div>

          {/* Second Video */}
          <div
            className="col-span-2 flex flex-col transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            onMouseEnter={() => setHoveredComponent('secondVideo')}
            onMouseLeave={() => setHoveredComponent(null)}
            style={{
              transform: hoveredComponent === 'secondVideo' ? 'scale(1.03)' : 'scale(1)',
              transformOrigin: 'center center',
              overflow: 'hidden',
            }}
          >
            <div className="flex-1 overflow-hidden relative">
              <video
                src={sampleVideo3}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                <p className="text-white text-xl font-bold animate-fade-in-out"></p>
              </div>
            </div>
          </div>

          {/* Creative Solutions Text */}
          <div
            className="col-span-4 flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            onMouseEnter={() => setHoveredComponent('textCol6to9')}
            onMouseLeave={() => setHoveredComponent(null)}
            style={{
              transform: hoveredComponent === 'textCol6to9' ? 'scale(1.03)' : 'scale(1)',
              transformOrigin: 'center center',
            }}
          >
            <h2 className=" text-center text-white font-bold text-[clamp(1rem,2vw,2rem)] whitespace-nowrap">
              <span className="font-bold">Creative Strategies</span> <br /> Performance-Driven Results. 
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomGrid;

