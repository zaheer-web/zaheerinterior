import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Images
import hero1 from "../img/h-54.png";
import hero2 from "../img/h-57.png";
import hero3 from "../img/h-62.png";
import hero4 from "../img/h-53.png";

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
    <div className="w-full overflow-x-hidden">
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[95vh] overflow-hidden bg-black">

        {/* Image */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 z-20">
          <div className="text-center md:text-left text-white max-w-2xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

              Luxury{" "}

              {/* ✅ Pink Text */}
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

              {/* Gold Studio */}
              <span className="text-white">
                Studio
              </span>

            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Crafting refined interiors that blend luxury, functionality, and timeless aesthetics.
            </p>

          </div>
        </div>

        {/* Dots */}
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