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
import yourImage from '../../assets/GA_logo.png';

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

  useEffect(() => {
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

    const container = rightRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Updated onLeftWheel: Left side scroll controls right side container scroll, no independent scroll on left
  const onLeftWheel = (e) => {
    e.preventDefault(); // Prevent default left scroll behavior

    if (!rightRef.current) return;

    const container = rightRef.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    // Calculate new scrollTop with boundaries
    let newScrollTop = scrollTop + e.deltaY;
    if (newScrollTop < 0) newScrollTop = 0;
    if (newScrollTop > scrollHeight - clientHeight) newScrollTop = scrollHeight - clientHeight;

    container.scrollTo({ top: newScrollTop });
  };

  const getCirclePosition = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = (radius + 40) * Math.cos(angle);
    const y = (radius + 40) * Math.sin(angle);
    return { x, y };
  };

  const scrollToStep = (index) => {
    const ref = stepRefs.current[index];
    const container = rightRef.current;
    if (ref && container) {
      const top = ref.offsetTop - container.clientHeight / 2 + ref.clientHeight / 2;
      container.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 md:px-16 min-h-screen ">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-yellow-500 mb-4">Our Unique Process</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the key steps that power our data-driven marketing strategy for rapid success.
        </p>
      </div>

      {/* Main diagram container */}
      <div className="relative flex flex-col md:flex-row">
        {/* Left Circular Icons */}
        <div
          onWheel={onLeftWheel}
          className="w-full md:w-1/2 h-[400px] md:h-screen flex items-center justify-center relative cursor-pointer"
        >
          <div className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center">
            <img
              src={yourImage}
              alt="Center"
              className="rounded-full w-[300px] h-[300px] object-cover z-20"
            />
            {steps.map((step, index) => {
              const { x, y } = getCirclePosition(index, steps.length, 150);
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => scrollToStep(index)}
                  className={`absolute flex items-center justify-center rounded-full p-3 border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#f2b800] border-white text-white scale-110 z-30'
                      : 'bg-gray-100 border-gray-300 text-gray-400 opacity-60 z-10'
                  }`}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    width: 64,
                    height: 64
                  }}
                >
                  <div className="text-[30px]">{step.icon}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Scrollable Content */}
        <div className="w-full md:w-1/2 h-[500px] md:h-screen relative overflow-hidden">
          {/* Center Dot */}
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 rounded-full border-4 border-yellow-500 bg-white z-30" />
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[21px] w-1 bg-[#f2b800] z-10" />
          {/* Gradient Fades */}

          <div
            ref={rightRef}
            className="h-full overflow-y-scroll pr-8 relative z-20 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'y mandatory'
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            <div className="pt-[40vh] pb-[40vh] space-y-24">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="flex items-start relative pl-24 pr-6"
                    style={{
                      scrollSnapAlign: 'start'
                    }}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        filter: isActive ? 'blur(0px)' : 'blur(3px)'
                      }}
                      transition={{ duration: 0.3 }}
                      className="max-w-[calc(100%-70px)]"
                    >
                      <h3 className="text-3xl font-bold text-[#f2b800]">{step.title}</h3>
                      <ul className="list-disc list-inside text-2xl text-white mt-2 space-y-1">
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
