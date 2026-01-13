import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const h1aRef = useRef(null);
  const h1bRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=400 top",
          scrub: true,
          pin: true,
        },
      });

      // First heading animation
      tl.fromTo(
        h1aRef.current,
        { y: 100, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1.1, ease: "power3.out", duration: 1.8 }
      );

      // Second heading animation
      tl.fromTo(
        h1bRef.current,
        { y: 100, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1.2, ease: "power3.out", duration: 1.8 },
        "-=0.8"
      );

      // Paragraph animation
      tl.fromTo(
        pRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, ease: "power2.out", duration: 1.5 },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    
     <div className="text-black">
        <div>
          <h1>sapan Sharma</h1>
          <p>CEO of uniment solution</p>
        </div>
        <div>
          <img src="/img/sapan_sharma.jpeg" alt=" ceo" />
        </div>
        
      </div>
       <div>
        <div>
          <h1>saurab Sharma</h1>
          <p>founder of uniment solution</p>
        </div>
        <div>
          <img src="/img/saurab_sharma.jpeg" alt=" ceo" />
        </div>
        
      </div>
     <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Video */}
      <video
        src="/vid/one.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      ></video>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Animated Content */}
      <motion.div className="relative z-10 max-w-3xl text-center px-6 flex flex-col items-center justify-center">
        <h1
          ref={h1aRef}
          className="text-5xl md:text-7xl font-extrabold mb-4"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px white",
            letterSpacing: "2px",
          }}
        >
          Empowering Your
        </h1>

        <h1
          ref={h1bRef}
          className="text-5xl md:text-7xl font-extrabold mb-6"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px white",
            letterSpacing: "2px",
          }}
        >
          Digital Journey
        </h1>

        <p
          ref={pRef}
          className="text-lg md:text-2xl leading-relaxed text-gray-200"
        >
          Uniment Solutions LLP is a digital marketing company based in Jaipur,
          India, specializing in services like SEO, social media marketing, and
          content marketing.
        </p>
      </motion.div>
     
    </section>

    </>
   
    
  );
}
