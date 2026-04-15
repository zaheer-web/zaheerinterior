import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Images
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
    <div className="w-full overflow-hidden">
      <section className="relative w-full h-screen overflow-hidden">

        {/* 🔥 IMAGE */}
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

        {/* 🔥 SAME HERO OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* 🔥 CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 z-20">
          <motion.div
            key={currentIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            {/* Tag */}
            <span className="text-pink-300 font-semibold tracking-[4px] uppercase text-xs md:text-sm block mb-4">
              About Us
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Luxury{" "}
              <span className="text-pink-300">
                Interior Studio
              </span>
              <br />
              <span>Experience</span>
            </h1>

            {/* Text */}
            <p className="mt-6 text-lg text-gray-200">
              We create bespoke interiors across government, commercial, and residential
              sectors — blending elegance, functionality, and timeless design
              to craft spaces that truly inspire.
            </p>

          </motion.div>
        </div>

        {/* 🔥 SAME DOT STYLE */}
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

export default AboutHero;