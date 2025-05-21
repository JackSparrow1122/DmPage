import React, { useState, useEffect, useRef } from 'react';
import productMarketing from '../../assets/Marketing 1.webp';
import digitalStorytelling from '../../assets/Images Final-02.webp';
import abm from '../../assets/Based Marketing 3.webp';
import marketingAutomation from '../../assets/Automation and AI 4.webp';
import performanceMarketing from '../../assets//Image- 5.webp';
import dxp from '../../assets/Platform6.webp';

const services = [
  {
    title: 'Product Marketing',
    description:
      'Bridges product development with market demand through positioning, messaging, and GTM strategies.',
    image: productMarketing,
  },
  {
    title: 'Digital Storytelling',
    description:
      'Engages audiences through compelling narratives across multimedia channels.',
    image: digitalStorytelling,
  },
  {
    title: 'Account Based Marketing',
    description:
      'Drive breakthrough results with targeted strategies that focus on high-value accounts.',
    image: abm,
  },
  {
    title: 'Marketing Automation & AI',
    description:
      'Automates tasks and uses AI to deliver personalized marketing at scale.',
    image: marketingAutomation,
  },
  {
    title: 'Performance Marketing',
    description:
      'Optimizes ROI by tracking and improving measurable marketing outcomes.',
    image: performanceMarketing,
  },
  {
    title: "Gryphon's Digital Xperience Platform",
    description:
      'Delivers unified, personalized digital experiences across all customer touchpoints.',
    image: dxp,
  },
];

const ScrollShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const imageContainerRef = useRef(null);
  const isClickScrolling = useRef(false);

  const onImageScroll = () => {
    if (!imageContainerRef.current || isClickScrolling.current || !scrollEnabled) return;

    const container = imageContainerRef.current;
    const scrollTop = container.scrollTop;
    const height = container.clientHeight;

    const index = Math.round(scrollTop / height);
    if (index >= 0 && index < services.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index) => {
    if (!imageContainerRef.current) return;

    const container = imageContainerRef.current;
    const height = container.clientHeight;

    isClickScrolling.current = true;

    container.scrollTo({
      top: index * height,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  useEffect(() => {
    if (scrollEnabled) {
      scrollToIndex(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Side Image Scroll */}
      <div
        ref={imageContainerRef}
        onScroll={onImageScroll}
        className={`w-full md:w-3/4 h-[300px] md:h-full ${
          scrollEnabled ? 'overflow-y-scroll' : 'overflow-hidden'
        } scrollbar-hide`}
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="w-full h-[300px] md:h-full scroll-snap-start"
          >
            <img
              src={svc.image}
              alt={svc.title}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Right Side Titles */}
      <div className="w-full md:w-2/4 bg-black text-white flex flex-col justify-center px-6 md:px-16 py-10 md:py-0 relative overflow-visible">
        <div className="space-y-6">
          {services.map((svc, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                onClick={() => {
                  if (!scrollEnabled) setScrollEnabled(true);
                  setActiveIndex(idx);
                }}
                className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                  isActive ? 'font-bold text-white' : 'text-gray-400'
                }`}
                style={{
                  transform: isActive ? 'translateX(-130px)' : undefined,
                  backgroundColor: 'black',
                  paddingLeft: '10px',
                }}
              >
                <h3 className="text-xl md:text-2xl">{svc.title}</h3>
                {isActive && (
                  <p className="text-sm md:text-base mt-1 text-gray-300">
                    {svc.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-10 text-sm text-gray-400">
          <span className="text-white font-semibold">{activeIndex + 1}</span>/ {services.length}
        </div>
      </div>
    </div>
  );
};

export default ScrollShowcase;
