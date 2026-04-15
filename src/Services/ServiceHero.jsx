import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Images
import hero1 from "../img/h-62.png";
import hero2 from "../img/h-33.png";
import hero3 from "../img/h-23.png";
import hero4 from "../img/h-32.png";

const sliderImages = [hero1, hero2, hero3, hero4];

const ServiceHero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="w-screen overflow-hidden">

      {/* 🔥 FULL SCREEN HERO */}
      <section className="relative w-screen h-screen overflow-hidden">

        {/* 🔥 IMAGE */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-screen h-screen object-cover"
          />
        </AnimatePresence>

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

        {/* 🔥 CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 z-20">

          <motion.div
            key={currentIndex}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

              Our{" "}
              <span className="text-pink-300 drop-shadow-lg">

                <Typewriter
                  words={[
                    "Interior Design",
                    "Space Planning",
                    "3D Visualization",
                    "Luxury Interiors"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />

              </span>

              <br />Services

            </h1>

            {/* TEXT */}
            <p className="mt-6 text-lg text-gray-200 max-w-lg mx-auto md:mx-0">
              We offer end-to-end interior design solutions — from concept to execution —
              creating spaces that are elegant, functional, and tailored to your vision.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/918563980030"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-pink-300/40">
                  Book Consultation
                </button>
              </a>
            </div>

          </motion.div>

        </div>

        {/* 🔥 DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">

          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-10 bg-pink-300"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}

        </div>

      </section>

    </div>

  );

};

export default ServiceHero;