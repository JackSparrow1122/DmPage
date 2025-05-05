import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WaveCircle() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);
  const introRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    const intro = introRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        markers: false,
        onUpdate: (self) => {
          if (self.progress > 0.95) {
            setShowContent(true);
          } else {
            setShowContent(false);
          }

          if (intro) {
            if (self.progress > 0.85) {
              gsap.to(intro, {
                autoAlpha: 0,
                y: -50,
                duration: 0.5,
                ease: "power2.out",
              });
            } else {
              gsap.to(intro, {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          }
        },
      },
    });

    // Responsive Circle Animation
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        tl.to(circle, {
          width: "20rem",
          height: "20rem",
          ease: "power1.out",
        }, 0);
      },
      "(min-width: 769px)": function () {
        tl.to(circle, {
          width: "40rem",
          height: "40rem",
          ease: "power1.out",
        }, 0);
      },
    });

    // Background and circle color
    tl.to(container, {
      background: "#01224F",
      ease: "power1.out",
    }, 0.5);

    tl.to(circle, {
      background: "#01224F",
      border: "20px solid white",
      ease: "power1.out",
    }, 0.5);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (showContent && content) {
      gsap.fromTo(content,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [showContent]);

  return (
    <div
      ref={containerRef}
      className="relative  md:h-[110vh] overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 "
    >
      {/* Sticky Container */}
      <div className="h-[70vh] sm:h-[100vh] md:h-screen flex items-center justify-center relative text-center">

        {/* Intro Content */}
        <div ref={introRef} className="absolute text-white z-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Scroll Down to Experience</h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">Get ready for something amazing...</p>
        </div>

        {/* Main Content */}
        {showContent && (
          <div
            ref={contentRef}
            className="absolute bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent z-10 px-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">Welcome to the Dark Waves</h1>
            <p className="mb-6 text-lg sm:text-xl md:text-2xl">Experience a smooth transition into elegance.</p>
            <button className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200">
              Know More
            </button>
          </div>
        )}

        {/* Circle */}
        <div
          ref={circleRef}
          className="rounded-full shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] md:w-[30rem] md:h-[30rem] xl:w-[80rem] xl:h-[80rem]"
        />
      </div>

      {/* Waves Background */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#F6F6F6"
            d="M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,149.3C560,181,640,235,720,245.3C800,256,880,224,960,186.7C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="1s"
              repeatCount="indefinite"
              values="
                M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,149.3C560,181,640,235,720,245.3C800,256,880,224,960,186.7C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L0,0Z;
                M0,140L40,132C80,124,160,108,240,106C320,104,400,116,480,140C560,164,640,200,720,210C800,220,880,204,960,178C1040,152,1120,116,1200,100C1280,84,1360,88,1400,92L1440,96L1440,0L0,0Z;
                M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,149.3C560,181,640,235,720,245.3C800,256,880,224,960,186.7C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L0,0Z
              "
            />
          </path>
        </svg>
      </div>
    </div>
  );
}
