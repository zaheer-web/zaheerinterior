import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import Images
import about1 from "../img/h-9.png";
import about2 from "../img/h-10.png";
import about3 from "../img/h-3.png";
import about4 from "../img/h-4.png";

const sliderImages = [about1, about2, about3, about4];

const AboutHero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden relative">

      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[95vh] overflow-hidden bg-black">

        {/* Image */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex]}
            alt={`About ${currentIndex}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/95 via-black/70 to-pink-900/40 z-10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 lg:px-32 z-20">

          <motion.div
            key={currentIndex}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            {/* Tag */}
            <span className="text-pink-400 font-semibold tracking-[4px] uppercase text-xs md:text-sm block mb-4">
              Pink Roof Interiors
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Designing Spaces <br />
              <span className="text-pink-500">
                That Inspire Living
              </span>
            </h1>

            {/* Text */}
            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
              We craft refined interiors that blend elegance, functionality, and timeless aesthetics.
            </p>

          </motion.div>

        </div>

        {/* Dots */}
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

export default AboutHero;