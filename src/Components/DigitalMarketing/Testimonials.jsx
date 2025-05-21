import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../assets/account-based.avif";
import img2 from "../../assets/account-based.avif";
import img3 from "../../assets/account-based.avif";
import img4 from "../../assets/account-based.avif";
import img5 from "../../assets/account-based.avif";
import img6 from "../../assets/account-based.avif";
import img7 from "../../assets/account-based.avif";
import img8 from "../../assets/account-based.avif";
// Add as many as you need

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSlider() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
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

  // List of manually imported images
  const images = [img1, img2, img3,img4, img5, img6,img7, img8,]; // Add more if needed

  return (
    <>
      {/* Heading Section */}
      <section className="w-full flex items-center justify-center text-white mt-6 px-4 md:px-16">
        <div ref={headingRef} className="text-center">
          <h2 className="text-2xl md:text-5xl font-extrabold uppercase leading-tight">
            <div className="line">Digital</div>
            <div className="line text-[#f2b800]">Marketing</div>
            <div className="line">Gryphon</div>
          </h2>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={containerRef}
        className={`w-full ${isDesktop ? "h-screen" : "py-10"} text-white`}
      >
        <div
          className={`slider-content flex ${
            isDesktop ? "flex-row" : "flex-row overflow-x-auto no-scrollbar"
          } ${isDesktop ? "gap-6 md:gap-8 h-full px-4 md:px-8 items-center" : "gap-6 px-6"}`}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="border-2 border-white p-4 md:p-6 w-[280px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-[400px] md:h-[450px] flex-shrink-0 flex items-center justify-center "
            >
              <img
                src={image}
                alt={`Client ${i + 1}`}
                className=" object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
