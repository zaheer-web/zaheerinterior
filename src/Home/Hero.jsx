import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// ✅ Local Images
import hero1 from "../img/h-54.png";
import hero2 from "../img/h-57.png";
import hero3 from "../img/h-68.png";
import hero4 from "../img/h-53.png";

const sliderImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔁 Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden relative">
      <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] overflow-hidden bg-black">

        {/* 🔥 Slider Images */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex]}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* 🌑 Overlay (Better cinematic look) */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/95 via-black/70 to-pink-900/40 z-10" />

        {/* ✨ Content */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 lg:px-32 z-20">

          <motion.div
            key={currentIndex}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">

              Luxury{" "}
              <span className="text-pink-500 inline-block min-w-[260px] drop-shadow-xl">

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

              <br />Studio

            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Crafting refined interiors that blend luxury, functionality, and timeless aesthetics.
            </p>

          </motion.div>

        </div>

        {/* 🔘 Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-10 bg-pink-500 shadow-lg shadow-pink-500/50"
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