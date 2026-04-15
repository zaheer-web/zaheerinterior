import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Images
import hero1 from "../img/h-79.jpeg";
import hero2 from "../img/h-80.jpeg";
import hero3 from "../img/h-78.jpeg";
import hero4 from "../img/h-74.jpeg";

const sliderImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <section className="relative w-full h-screen overflow-hidden">

        {/* 🔥 IMAGE (FULL WIDTH FIX) */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* 🔥 CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 z-20">
          <div className="text-center md:text-left text-white max-w-2xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Luxury{" "}
              <span className="text-pink-300">
                <Typewriter
                  words={[
                    "Interior Design",
                    "Architecture",
                    "Space Planning"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
              <br />
              <span>Studio</span>
            </h1>

            <p className="mt-6 text-lg">
              Bespoke interiors for government, commercial, and residential realms
              masterfully crafted from vision to victory with unrivaled precision
              and enduring elegance.
            </p>

          </div>
        </div>

        {/* 🔥 DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-8 bg-pink-500"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

      </section>
    </div>
  );
};

export default Hero;