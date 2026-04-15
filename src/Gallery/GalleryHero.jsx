import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import g1 from "../img/h-62.png";
import g2 from "../img/h-13.png";
import g3 from "../img/h-43.png";
import g4 from "../img/h-61.png";

const sliderImages = [g1, g2, g3, g4];

const GalleryHero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden relative">

      {/* 🔥 FULL SCREEN HERO */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* 🔥 IMAGE */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
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
            transition={{ duration: 0.7 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            {/* TAG */}
            <span className="text-pink-300 uppercase tracking-[4px] text-xs md:text-sm mb-4 block">
              Our Portfolio
            </span>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Explore Our{" "}
              <span className="text-pink-300">
                Design Work
              </span>
            </h1>

            {/* TEXT */}
            <p className="mt-6 text-lg text-gray-200 max-w-lg mx-auto md:mx-0">
              A curated collection of our residential, commercial, and hospitality projects.
            </p>

          </motion.div>

        </div>

        {/* 🔥 DOTS (same as hero) */}
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

export default GalleryHero;