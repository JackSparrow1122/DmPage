import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = Array.from({ length: 10 }, (_, i) => ({
  name: `USER ${i + 1}`,
  title: `Position ${i + 1}`,
  image: `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}));

export default function TestimonialsSlider() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md: breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let ctx = gsap.context(() => {
      const heading = headingRef.current;
      const lines = heading.querySelectorAll(".line");

      // Heading animation
      gsap.fromTo(
        lines[0],
        { x: -800 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top center+=100",
            end: "top 100px",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        lines[1],
        { x: 1000 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top center+=100",
            end: "top 50px",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        lines[2],
        { x: -800 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top center+=100",
            end: "top top",
            scrub: true,
          },
        }
      );

      // Horizontal scroll for testimonials (desktop)
const container = containerRef.current;
const sliderContent = container.querySelector(".slider-content");

gsap.to(sliderContent, {
  x: () => -(sliderContent.scrollWidth - container.offsetWidth),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top top",
    pin: true,
    scrub: 1,
    end: () => "+=" + (sliderContent.scrollWidth - container.offsetWidth),
  },
});

    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <>
      {/* Heading Section */}
      <section className="w-full flex items-center justify-center text-white mt-6 px-4 md:px-16">
        <div ref={headingRef} className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-extrabold uppercase leading-tight">
            <div className="line">What</div>
            <div className="line text-[#f2b800]">Our Clients</div>
            <div className="line">Say</div>
          </h2>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={containerRef}
        className={`w-full ${
          isDesktop ? "h-screen" : "py-10"
        } text-white`}
      >
        <div
          className={`slider-content flex ${
            isDesktop ? "flex-row" : "flex-row overflow-x-auto no-scrollbar"
          } ${isDesktop ? "gap-6 md:gap-8 h-full px-4 md:px-8 items-center" : "gap-6 px-6"}`}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border-2 border-white p-4 md:p-6 w-[280px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-[400px] md:h-[450px] flex-shrink-0 flex flex-col items-center justify-start text-center rounded-[50%/35%]"
            >
              <img
                src={t.image}
                alt={t.name}
                className="h-[140px] w-[140px] md:h-[180px] md:w-[150px] rounded-full mb-4 object-cover"
              />
              <p className="text-sm md:text-base italic mb-4 px-2">
                "{t.quote}"
              </p>
              <h3 className="text-base md:text-lg font-semibold uppercase tracking-wide">
                {t.name}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">{t.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
