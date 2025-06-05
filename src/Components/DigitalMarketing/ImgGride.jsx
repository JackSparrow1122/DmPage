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
      {
        number: 'Campaigns That Convert',
        text: 'From awareness to enrolment or lead — we design performance-driven funnels that speak to the right audience at the right time',
      },
    ],
  },
  {
    src: digitalStorytelling,
    lines: [
      {
        number: 'Content That Connects',
        text: 'Social media, blogs, and creatives that resonate—whether your looking to fill classrooms or conference halls.',
      },
    ],
  },
  {
    src: abm,
    lines: [
      {
        number: 'Goal-Based Ad Strategies',
        text: 'Admissions, placements, or product launches—we run customized paid campaigns that deliver measurable ROI.',
      },
    ],
  },
  {
    src: marketingAutomation,
    lines: [
      {
        number: 'Smart Automation & CRM Integration',
        text: 'Convert interest into action with lead nurturing, smart bots, and CRM workflows tailored to your academic or corporate goals.',
      },
    ],
  },
  {
    src: performanceMarketing,
    lines: [
      {
        number: 'Analytics That Speak Your Language',
        text: 'Real-time reports, insights, and dashboards that show what’s working—no fluff, just clarity.',
      },
    ],
  },
  {
    src: dxp,
    lines: [
      {
        number: 'Future-Ready Digital Ecosystems',
        text: 'Websites, SEO, omnichannel presence—we help you build digital credibility that lasts and grows.',
      },
    ],
  },
];

const ImageGrid = () => {
  const getAnimationDirection = (index) => {
    return index % 3 === 1 ? 'top' : 'bottom';
  };

  return (
    <div className="py-10 text-white">
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
      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />

      <div className="absolute inset-0 z-20 p-5 flex flex-col justify-start text-left transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0">
        {lines.map((line, idx) => (
          <div key={idx} className="mb-3">
            <p className="text-xl md:text-2xl font-bold text-green-400 uppercase mb-1">
              {line.number}
            </p>
            <p className="text-sm md:text-xl text-white leading-snug">
              {line.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageGrid;
