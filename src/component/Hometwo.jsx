import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hometwo() {
  const mainRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    // 🟢 Pin the main hero section
    ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
    });

    // 🟠 Fade-in main heading
    gsap.fromTo(
      ".main h1",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".main",
          start: "top 80%",
        },
      }
    );

    // 🔵 Animate each box on scroll (alternating sides)
    boxes.forEach((box, i) => {
      const dir = i % 2 === 0 ? 200 : -200;
      gsap.fromTo(
        box,
        { opacity: 0, x: dir, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  // 🧩 Hover Variants
  const hoverVariant = {
    rest: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    hover: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
  };

  const data = [
    {
      title: "Business Growth Strategy",
      desc: "We help businesses grow with powerful market insights and creative solutions.",
    },
    {
      title: "Human Resource Consulting",
      desc: "Optimize your team structure and workplace efficiency with expert HR guidance.",
    },
    {
      title: "Digital Transformation",
      desc: "Modernize your brand with cutting-edge digital tools and automation strategies.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* 🌟 MAIN HERO SECTION */}
      <div
        ref={mainRef}
        className="main relative w-full h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-6xl font-bold text-center tracking-wide">
          Uniment — Consultancy Services
        </h1>
      </div>

      {/* 🎨 BOXES SECTION */}
      <div className="w-full flex flex-col items-center gap-40 py-40">
        {data.map((item, i) => (
          <motion.div
            key={i}
            ref={(el) => (boxesRef.current[i] = el)}
            className={`relative rounded-2xl flex flex-col justify-center items-center cursor-pointer transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] ${
              i % 2 === 0
                ? "self-end mr-16 lg:mr-32"
                : "self-start ml-16 lg:ml-32"
            }`}
            style={{
              width: "40vw",
              height: "40vh",
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0.9) 70%, rgba(255,255,255,0.05))",
              position: "relative",
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* 🌈 INNER “RANGOLI” EFFECT */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                padding: "2px",
                background:
                  "conic-gradient(from 0deg, #ff00cc, #3333ff, #00ffcc, #ffcc00, #ff00cc)",
                filter: "blur(6px)",
                opacity: 0.5,
                zIndex: 0,
              }}
              animate={{
                rotate: [0, 360],
                transition: {
                  repeat: Infinity,
                  ease: "linear",
                  duration: 8,
                },
              }}
            ></motion.div>

            {/* 🟢 Inner content container */}
            <div className="absolute inset-[3px] bg-black/90 rounded-2xl flex flex-col justify-center items-center z-10 p-8">
              <motion.h2
                className="text-2xl font-semibold text-blue-400 mb-4"
                whileHover={{ scale: 1.1 }}
              >
                {item.title}
              </motion.h2>

              <motion.p
                className="text-sm text-gray-300 text-center px-4"
                variants={hoverVariant}
              >
                {item.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Hometwo;
