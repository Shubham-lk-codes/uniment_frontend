

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function Homeone() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const text = textRef.current;

    // GSAP timeline for scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top top",
        end: "bottom+=300 top",
        scrub: true,
        pin: true,
      },
    });

    // Image animation — shrink & move to left
    tl.to(img, {
      scale: 0.6,
      xPercent: -30,
      borderRadius: "20px",
      ease: "power2.out",
    });

    // Text animation — fade in & slide from bottom-right
    gsap.fromTo(
      text,
      { opacity: 0, y: 100, x: 50 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-[200vh] relative overflow-hidden">
      {/* Fullscreen image section */}
      <div className="h-screen flex justify-center items-center">
        <motion.img
          ref={imgRef}
          src="/img/1.jpg" // ✅ Make sure this image is inside public/img/
          alt="hero"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Text section */}
      <div
        ref={textRef}
        className="absolute top-[120vh] right-0 w-1/2 px-8 text-lg leading-relaxed"
      >
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          earum eligendi praesentium voluptate in, recusandae repellat minima
          molestias sapiente necessitatibus numquam quis autem commodi
          repudiandae omnis eum nesciunt laudantium deleniti.
        </motion.p>
      </div>
     
    </div>
  );
}

export default Homeone;
