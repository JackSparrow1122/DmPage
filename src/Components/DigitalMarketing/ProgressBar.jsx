import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Strategy Call',
    points: [
      'Review your SEO setup to identify strengths, Define your goals, key outcomes, and how we’ll measure success.',
      'Outline our tailored link building strategy and how it supports your growth.',
      'Outline link building.'
    ]
  },
  {
    title: 'Onboarding',
    points: ['Meet account manager.', 'Get dashboard.', 'Share info.']
  },
  {
    title: 'Competitor & Market Analysis',
    points: ['Review competitors.', 'Strategy mapping.', 'Custom plan.']
  },
  {
    title: 'Targeted Outreach',
    points: ['Find relevant publications.', 'Build relationships.']
  },
  {
    title: 'Quality Assurance',
    points: ['Fresh outreach.', 'Secure links.']
  },
  {
    title: 'Reporting & Feedback',
    points: ['Live insights.', 'Track results.']
  }
];

export default function ScrollLineTimeline() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const totalHeight = container.scrollHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalHeight);
      setScrollY(scrolled);
      setScrollHeight(totalHeight);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-20 px-4 md:px-16 overflow-hidden"
    >
      <h2 className="text-4xl font-semibold text-center text-[#FACC15] mb-20">
        Our Process
      </h2>

      <div className="relative flex flex-col space-y-24">
        {/* Centered Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-6 flex flex-col items-center z-0">
          <div className="w-1 h-full bg-gray-200" />
          <motion.div
            className="absolute top-0 w-1 bg-yellow-500"
            style={{
              height: `${(scrollY / scrollHeight) * 100}%`
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const topOffset = (index / steps.length) * scrollHeight;
          const isActive = scrollY >= topOffset - 100;

          return (
            <div key={index} className="flex items-center relative z-10">
              {/* Left side: Title */}
              <div className="w-1/2 text-right pr-10">
                <h3 className="text-3xl font-bold text-white">{step.title}</h3>
              </div>

              {/* Middle: Dot */}
              <div className="relative w-12 flex justify-center items-center">
                <motion.div
                  className="w-6 h-6 rounded-full border-4 border-yellow-500 z-10"
                  initial={{ backgroundColor: 'white', scale: 1 }}
                  animate={{
                    backgroundColor: isActive ? '#FACC15' : '#fff',
                    scale: isActive ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Right side: Points */}
              <div className="w-1/2 pl-10">
                <ul className="list-disc pl-4 text-white space-y-1">
                  {step.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
