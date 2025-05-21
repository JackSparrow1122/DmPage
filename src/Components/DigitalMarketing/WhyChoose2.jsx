import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

// Image imports
import Img1 from '../../assets/image.png';
import Img2 from '../../assets/image (1).png';
import Img3 from '../../assets/image (2).png';
import Img4 from '../../assets/image (3).png';
import Img5 from '../../assets/image (4).png';
import Img6 from '../../assets/image (5).png';
import Img7 from '../../assets/image (6).png';
import Img8 from '../../assets/image (7).png';
import Img9 from '../../assets/image (8).png';
import Img10 from '../../assets/image (9).png';

const services = [
  { title: "WordPress and Marketing", desc: "Build and manage stunning WordPress websites that align with your brand and marketing strategy.", image: Img1 },
  { title: "Search Engine Optimization", desc: "Improve your site’s visibility on search engines through smart, ethical SEO practices.", image: Img2 },
  { title: "Local SEO", desc: "Get found by nearby customers through optimized listings and local search strategies.", image: Img3 },
  { title: "Social Media Marketing", desc: "Connect with your audience and grow your brand across popular social media platforms.", image: Img4 },
  { title: "Google/Social Media Ads", desc: "Drive leads through targeted ads that put your brand in front of the right people.", image: Img5 },
  { title: "Content Marketing", desc: "Deliver valuable, shareable content that engages and educates your audience.", image: Img6 },
  { title: "Logo Designing", desc: "Craft a memorable logo that reflects your brand's essence and leaves a lasting impression.", image: Img7 },
  { title: "Digital Marketing", desc: "Integrate online channels to deliver a consistent and powerful digital presence.", image: Img8 },
  { title: "Mobile App Development", desc: "Build responsive, feature-rich apps tailored for iOS and Android.", image: Img9 },
  { title: "App Store Optimization", desc: "Boost your app’s ranking and visibility in app stores through expert ASO techniques.", image: Img10 },
];

const ServiceCard = ({ index, title, desc, image, isActive, onActivate }) => {
  const imageRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;

    gsap.set(img, { y: 40, opacity: 0, scale: 0.9 });

    const show = () => {
      descRef.current.style.opacity = '0';
      gsap.to(img, {
        y: -10,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    const hide = () => {
      descRef.current.style.opacity = '1';
      gsap.to(img, {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'power3.in'
      });
    };

    const card = img.parentElement;
    card.addEventListener('mouseenter', show);
    card.addEventListener('mouseleave', hide);

    return () => {
      card.removeEventListener('mouseenter', show);
      card.removeEventListener('mouseleave', hide);
    };
  }, []);

  return (
    <div
      onClick={() => onActivate(index)}
      className="relative group flex flex-col sm:flex-row items-start sm:items-center justify-between border border-gray-300 rounded-xl px-6 py-6 bg-white overflow-visible transition-shadow duration-300 hover:border-black hover:shadow-xl w-full cursor-pointer select-none"
      style={{ minHeight: '150px' }}
    >
      <div className="flex items-center gap-4 z-10 mb-3 sm:mb-0">
        <div
          className={`rounded-md px-5 py-3 text-lg sm:text-2xl font-bold transition-colors duration-300 select-none
          ${isActive ? 'bg-black text-white' :'bg-gray-200 text-gray-600 group-hover:bg-black group-hover:text-white'}`}
        >
          {String(index + 1).padStart(2, '0')}.
        </div>
        <div className="text-lg sm:text-2xl font-semibold text-black">{title}</div>
      </div>

      <div
        ref={descRef}
        className="text-sm sm:text-xl text-gray-600 max-w-xl z-10 transition-opacity duration-300"
      >
        {desc}
      </div>

      <div className="z-10 text-2xl text-black absolute top-4 right-4 sm:static">↗</div>

      {/* Floating Image Overlay */}
      <img
        ref={imageRef}
        src={image}
        alt="hover-img"
        className="absolute -top-6 right-6 w-60 h-auto pointer-events-none drop-shadow3xl z-0"
      />
    </div>
  );
};

const ServiceList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActivate = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-4 py-4 md:py-12 md:px-16 bg-gray-50">
      <div className="grid grid-cols-1  gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            desc={service.desc}
            image={service.image}
            isActive={activeIndex === index}
            onActivate={handleActivate}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
