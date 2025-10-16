import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Homeone from "../component/Homeone";
import Hometwo from "../component/Hometwo";

const cards = [
  {
    img: "/img/1.jpg",
    title: "Empowering Business Growth",
    desc: "We craft innovative solutions to drive your brand forward with clarity and impact.",
  },
  {
    img: "/img/2.jpg",
    title: "Creative Digital Strategies",
    desc: "Transforming ideas into results-driven strategies with the power of technology and design.",
  },
  {
    img: "/img/3.jpg",
    title: "Your Vision, Our Expertise",
    desc: "Partner with us to build meaningful change in your digital and operational journey.",
  },
  {
    img: "/img/4.jpg",
    title: "Smart Solutions for Success",
    desc: "Delivering top-notch consultancy services for a smarter, more connected tomorrow.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  // GSAP text animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".slide-text",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [currentIndex]);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video */}
        <video
          src="/vid/one.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>

        {/* Overlay H1 text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold text-center px-4">
            Helping industries outrun leaner and cleaner
          </h1>
        </div>

        {/* Optional: Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🌌 Slider Section */}
      <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="relative w-full max-w-[900px] h-[500px] overflow-hidden  shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              {/* Image */}
              <motion.img
                src={cards[currentIndex].img}
                alt="slide"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-16 left-10 z-10">
                <h2 className="slide-text text-4xl sm:text-5xl font-bold mb-3">
                  {cards[currentIndex].title}
                </h2>
                <p className="slide-text text-gray-300 text-lg mb-6 max-w-lg">
                  {cards[currentIndex].desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="slide-text bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg"
                >
                  Read more
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 🌟 Navigation Arrows (bottom-right corner) */}
          <div className="absolute bottom-6 right-6 flex gap-4 z-20">
            <button
              onClick={prevSlide}
              className="bg-gray-800/70 hover:bg-gray-700 p-3 rounded-full text-xl"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-800/70 hover:bg-gray-700 p-3 rounded-full text-xl"
            >
              →
            </button>
          </div>

          {/* 🔵 Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* 🧩 Other Components */}
      <Homeone />
      <Hometwo />
    </div>
  );
}
