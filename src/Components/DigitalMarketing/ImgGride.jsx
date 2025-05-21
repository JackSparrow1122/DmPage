import React from 'react';
import { motion } from 'framer-motion';

// 🖼️ Images
import productMarketing from '../../assets/product_marketing.avif';
import digitalStorytelling from '../../assets/digital_storytelling.avif';
import abm from '../../assets/account-based.avif';
import marketingAutomation from '../../assets/marketing_automation.avif';
import performanceMarketing from '../../assets/performance_marketing.avif';
import dxp from '../../assets/digital_experience.avif';

const items = [
  {
    src: productMarketing,
    lines: [
      { number: '30,000+', text: 'LEADS GENERATED' },
      { number: '10,000+', text: 'SQLs DELIVERED' },
      { number: '₹25 CR+', text: 'REVENUE GENERATED' },
    ],
  },
  {
    src: digitalStorytelling,
    lines: [
      { number: '5,000+', text: 'DEMO BOOKINGS' },
      { number: '2,000+', text: 'TRIALS STARTED' },
      { number: '3X', text: 'FASTER CONVERSIONS' },
    ],
  },
  {
    src: abm,
    lines: [
      { number: '50,000+', text: 'STUDENT LEADS' },
      { number: '15,000+', text: 'APPLICATIONS' },
      { number: '10X', text: 'ADMISSION GROWTH' },
    ],
  },
  {
    src: marketingAutomation,
    lines: [
      { number: '8,000+', text: 'B2B LEADS' },
      { number: '3X', text: 'SALES EFFICIENCY' },
      { number: '₹10 CR+', text: 'PIPELINE IMPACT' },
    ],
  },
  {
    src: performanceMarketing,
    lines: [
      { number: '70,000+', text: 'SITE VISITORS' },
      { number: '4X', text: 'CONVERSION RATE' },
      { number: '₹5 CR+', text: 'MONTHLY SALES' },
    ],
  },
  {
    src: dxp,
    lines: [
      { number: '20,000+', text: 'APPOINTMENTS BOOKED' },
      { number: '3,000+', text: 'PATIENTS ACQUIRED' },
      { number: '2X', text: 'ENGAGEMENT GROWTH' },
    ],
  },
];

const ImageGrid = () => {
  const getAnimationDirection = (index) => {
    return index % 3 === 1 ? 'top' : 'bottom';
  };

  return (
    <div className="py-10 text-white">
      {/* Top Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {items.slice(0, 3).map((item, index) => (
          <HoverImageCard
            key={index}
            src={item.src}
            lines={item.lines}
            animationFrom={getAnimationDirection(index)}
          />
        ))}
      </div>

      {/* Center Heading with Z-axis animation */}
      <motion.h2
        className="text-5xl font-bold text-center mb-10 leading-tight"
        initial={{ opacity: 0, scale: 4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <span className="text-white">Transformative</span>{' '}
        <span className="text-yellow-500">Industry-Specific</span>{' '}
        <span className="text-white">Solutions</span>
      </motion.h2>

      {/* Bottom Row */}
      <div className="flex flex-wrap justify-center gap-6">
        {items.slice(3).map((item, index) => (
          <HoverImageCard
            key={index + 3}
            src={item.src}
            lines={item.lines}
            animationFrom={getAnimationDirection(index)}
          />
        ))}
      </div>
    </div>
  );
};

const HoverImageCard = ({ src, lines, animationFrom }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: animationFrom === 'top' ? -60 : 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="relative w-[360px] h-[220px] rounded overflow-hidden group shadow-lg bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <img
        src={src}
        alt="industry"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center px-4">
          {lines.map((line, idx) => (
            <p key={idx} className="text-lg font-semibold mb-1 uppercase">
              <span className="text-green-400">{line.number}</span>{' '}
              <span className="text-white">{line.text}</span>
            </p>
          ))}
          <button className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded shadow">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageGrid;
