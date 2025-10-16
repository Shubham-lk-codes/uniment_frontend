import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Homeone from "../component/Homeone";
import Hometwo from "../component/Hometwo";

const cards = [
  {
    img: "/img/1.jpg",
    title: "some text that i will write later",
    desc: "same for description also",
  },
  {
    img: "/img/2.jpg",
    title: "some text that i will write later",
    desc: "same for description also",
  },
  {
    img: "/img/3.jpg",
    title: "some text that i will write later",
    desc: "same for description also",
  },
  {
    img: "/img/4.jpg",
    title: "some text that i will write later",
    desc: "same for description also",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div>
      <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="relative w-full max-w-[900px] h-[500px]">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg bg-gray-900"
            >
              {/* Image */}
              <img
                src={cards[currentIndex].img}
                alt="slider"
                className="w-full h-full object-cover opacity-70"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <h2 className="text-4xl sm:text-5xl font-bold mb-3 leading-tight">
                  {cards[currentIndex].title}
                </h2>
                <p className="text-gray-300 text-lg mb-6 max-w-lg">
                  {cards[currentIndex].desc}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full w-fit text-lg transition-all">
                  Read more
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full"
          >
            →
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-blue-600" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <Homeone />
      <Hometwo />
    </div>
  );
}
