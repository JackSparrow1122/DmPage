import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WaveCircle() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);
  const introRef = useRef(null);
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    const intro = introRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        markers: false,
        onUpdate: (self) => {
          setScrollProgress(self.progress);

          // Intro hide/show
          if (self.progress > 0.85) {
            gsap.to(intro, {
              autoAlpha: 0,
              y: -50,
              duration: 0.6,
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

          // Final content show
          if (self.progress > 0.95) {
            setShowContent(true);
          } else {
            setShowContent(false);
          }
        },
      },
    });

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": () => {
        tl.to(circle, {
          width: "20rem",
          height: "20rem",
          ease: "power1.out",
        }, 0);
      },
      "(min-width: 769px)": () => {
        tl.to(circle, {
          width: "35rem",
          height: "35rem",
          ease: "power1.out",
        }, 0);
      },
    });

    tl.to(container, { background: "#01224F", ease: "power1.out" }, 0.5);
    tl.to(circle, {
      background: "#01224F",
      boxShadow: "0 20px 15px -6px white",
      ease: "power1.out",
    }, 0.5);

    tl.fromTo(para1Ref.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 0.8)
      .to(para1Ref.current, { autoAlpha: 0, duration: 0.4 }, 2)
      .fromTo(para2Ref.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 2.5)
      .to(para2Ref.current, { autoAlpha: 0, duration: 0.4 }, 4)
      .fromTo(para3Ref.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 4.5)
      .to(para3Ref.current, { autoAlpha: 0, duration: 0.4 }, 6);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // 🌍 Rotation effect
  useEffect(() => {
    const circle = circleRef.current;
    let rotationTween;

    if (scrollProgress > 0.25) {
      rotationTween = gsap.to(circle, {
        rotation: 360,
        duration: 3,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    } else {
      gsap.killTweensOf(circle, "rotation");
      gsap.set(circle, { rotation: 0 });
    }

    return () => {
      if (rotationTween) rotationTween.kill();
    };
  }, [scrollProgress]);

  useEffect(() => {
    const content = contentRef.current;
    if (showContent && content) {
      gsap.fromTo(
        content,
        { autoAlpha: 0, y: 200 },
        { autoAlpha: 1, y: 60, duration: 1, ease: "power2.out" }
      );
    } else if (!showContent && content) {
      gsap.to(content, { autoAlpha: 0, y: 200, duration: 0.5 });
    }
  }, [showContent]);

  const gradientOpacity = scrollProgress > 0.1 ? (scrollProgress - 0.1) * 5 : 0;
  const whiteOpacity = 1 - gradientOpacity;

  return (
    <div
      ref={containerRef}
      className="relative h-[110vh] overflow-hidden bg-gradient-to-r from-[#26dde5] via-[#00aae1] to-[#0088E8]"
    >
      <div className="h-screen flex items-center justify-center relative text-center">
        {/* Intro Content */}
        <div ref={introRef} className="absolute z-20 mt-4 max-w-screen-md w-full">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-7xl font-bold transition-all duration-500 relative"
            style={{ color: `rgba(255,255,255,${whiteOpacity})` }}
          >
            Digital Marketing That Speaks Volumes
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(90deg, #26dde5, #00aae1, #0088E8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                opacity: gradientOpacity,
                transition: "opacity 0.1s",
                pointerEvents: "none",
              }}
            >
              Digital Marketing That Speaks Volumes
            </span>
          </h2>

          <div className="relative h-[100px] mt-4 flex items-center justify-center text-white">
            <p ref={para1Ref} className="absolute text-lg sm:text-xl md:text-4xl font-bold">
              Is your visibility reaching the right audience?
            </p>
            <p ref={para2Ref} className="absolute text-lg sm:text-xl md:text-4xl font-bold">
              Are your campaigns converting into real outcomes? 
            </p>
            <p ref={para3Ref} className="absolute text-lg sm:text-xl md:text-4xl font-bold">
              Need digital efforts aligned to admissions or employer branding??
            </p>
          </div>
        </div>

        {/* Final Content */}
        {showContent && (
          <div
            ref={contentRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-gradient-to-r from-[#26dde5] via-[#00aae1] to-[#0088E8] 
                      bg-clip-text text-transparent z-10 px-2 max-w-screen-md text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              We're your custom digital growth partner. <br />  One that adapts to your goals, pace, and purpose.
            </h1>
            <button className="px-6 py-3 mt-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200">
              Know More
            </button>
          </div>
        )}

        {/* Circle */}
        <div
          ref={circleRef}
          className="rounded-full shadow-lg bg-gradient-to-r from-[#26dde5] via-[#00aae1] to-[#0088E8] w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] md:w-[30rem] md:h-[30rem] xl:w-[80rem] xl:h-[80rem]"
        />
      </div>

      {/* Wave Animation */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="black"
            d="M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,149.3C560,181,640,235,720,245.3C800,256,880,224,960,186.7C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="1s"
              repeatCount="indefinite"
              values="
                M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,149.3C560,181,640,235,720,245.3C800,256,880,224,960,186.7C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L0,0Z;
                M0,140L40,132C80,124,160,108,240,106C320,104,400,116,480,140C560,164,640,200,720,210C800,220,880,204,960,178C1040,152,1120,116,1200,100C1280,84,1360,88,1400,92L1440,96L1440,0L0,0Z;
                M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,149.3C560,181,640,235,720,245.3C800,256,880,224,960,186.7C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L0,0Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}
