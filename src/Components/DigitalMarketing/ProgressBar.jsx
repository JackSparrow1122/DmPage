import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaSearch,
  FaTools,
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaUsers
} from 'react-icons/fa';
import yourImage from '../../assets/DM Vector 6.png';

const steps = [
  { title: 'Rapid Experimentation', points: ['Industry hypothesis repository', 'AI-driven performance testing'], icon: <FaSearch size={40} /> },
  { title: 'Creative Optimization', points: ['Test and learn', 'Improve messaging'], icon: <FaTools size={40} /> },
  { title: 'Data Intelligence', points: ['Data engineering', 'Centralized dashboards'], icon: <FaDatabase size={40} /> },
  { title: 'Performance Analytics', points: ['KPI tracking', 'Attribution modeling'], icon: <FaChartLine size={40} /> },
  { title: 'Marketing Automation', points: ['CRM integration', 'Workflow automation'], icon: <FaCogs size={40} /> },
  { title: 'Fast Deployment', points: ['Rapid releases', 'CI/CD pipelines'], icon: <FaRocket size={40} /> },
  { title: 'Security Focus', points: ['Data encryption', 'Access controls'], icon: <FaShieldAlt size={40} /> },
  { title: 'Customer Engagement', points: ['User feedback', 'Community building'], icon: <FaUsers size={40} /> }
];

export default function ScrollSyncDiagram() {
  const rightRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = rightRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const containerHeight = container.clientHeight;
    const centerY = containerTop + containerHeight / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const elementCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - elementCenterY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = rightRef.current;
    if (!container) return;

    const onScroll = () => {
      if (container.scrollTop <= 0) {
        console.log('Scrolled above first step - navigate to previous component');
      }

      const maxScroll = container.scrollHeight - container.clientHeight;
      if (container.scrollTop >= maxScroll) {
        console.log('Scrolled below last step - navigate to next component');
      }

      handleScroll();
    };

    container.addEventListener('scroll', onScroll);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onLeftWheel = (e) => {
    e.preventDefault();
    if (!rightRef.current) return;

    rightRef.current.scrollBy({
      top: e.deltaY,
      behavior: 'smooth'
    });

    setTimeout(handleScroll, 100);
  };

  const getCirclePosition = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const offset = 35;
    const x = (radius + offset) * Math.cos(angle);
    const y = (radius + offset) * Math.sin(angle);
    return { x, y };
  };

  // HERE is the important part updated for instant active state change on click
  const scrollToStep = (index) => {
    if (!rightRef.current || !stepRefs.current[index]) return;

    const container = rightRef.current;
    const element = stepRefs.current[index];

    const scrollTop = element.offsetTop - container.clientHeight / 2 + element.clientHeight / 2;

    setActiveIndex(index); // Turant update karo activeIndex

    // Scroll instantly without smooth animation to prevent delay
    container.scrollTo({ top: scrollTop, behavior: 'auto' });
  };

  return (
    <div className="px-4 md:px-16 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-500">Our Unique Process</h1>
        <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the key steps that power our data-driven marketing strategy for rapid success.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row ">
        {/* Left Circular Diagram */}
        <div
          onWheel={onLeftWheel}
          className="w-full md:w-1/2 h-[500px] md:h-screen flex items-center justify-center relative cursor-pointer "
        >
          <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]  flex items-center justify-center  ">
            <img
              src={yourImage}
              alt="Center"
              className=" w-full h-full object-cover z-20 "
            />
            {steps.map((step, index) => {
              const { x, y } = getCirclePosition(index, steps.length, 150);
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => scrollToStep(index)}
                  className={` absolute flex items-center justify-center rounded-full p-3 md:p-4 border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#f2b800] border-white text-white scale-110 z-30'
                      : 'bg-gray-100 border-gray-300 text-gray-400 opacity-60 z-10'
                  }`}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    width: 70,
                    height: 70
                  }}
                >
                  <div className=" text-2xl md:text-[36px]">{step.icon}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Scrollable Steps */}
        <div className="w-full md:w-1/2 h-[500px] md:h-screen relative overflow-hidden">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-3 h-3 md:w-5 md:h-5 rounded-full border-2 md:border-4 border-yellow-500 bg-white z-30" />
          <div className="absolute top-0 bottom-0 left-[17px] md:left-[21px] w-[2px] md:w-1 bg-[#f2b800] z-10" />

          <div
            ref={rightRef}
            className="h-full overflow-y-scroll pr-4 md:pr-8 relative z-20 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'y mandatory'
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            <div
              className="space-y-16 md:space-y-24"
              style={{
                paddingTop: 'calc(50vh - 64px)',
                paddingBottom: 'calc(50vh - 64px)'
              }}
            >
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="flex items-center relative pl-10 md:pl-20"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        filter: isActive ? 'blur(0px)' : 'blur(3px)'
                      }}
                      transition={{ duration: 0.3 }}
                      className="max-w-[calc(100%-40px)] md:max-w-[calc(100%-70px)]"
                    >
                      <h3 className="text-xl md:text-3xl font-bold text-[#f2b800]">{step.title}</h3>
                      <ul className="list-disc list-inside text-base md:text-2xl text-white mt-2 space-y-1">
                        {step.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
