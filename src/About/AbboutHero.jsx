import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600"
];

const AbboutHero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="w-full overflow-x-hidden relative">

      <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] overflow-hidden bg-black">

        {/* Slider Images */}
        {sliderImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`About ${index}`}
            initial={false}
            animate={{
              y: index === currentIndex ? "0%" : "-100%",
              opacity: index === currentIndex ? 1 : 0
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}

        {/* 🔥 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/60 to-pink-900/30 z-10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 lg:px-32 z-20">

          <motion.div
            key={currentIndex}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            {/* Small Heading */}
            <span className="text-pink-400 font-semibold tracking-[3px] uppercase text-xs md:text-sm block mb-3">
              Pink Roof Interiors
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              Designing <br />

              <span className="text-pink-500">
                Elegant Spaces
              </span>

            </h1>

            {/* Paragraph */}
            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">

              At Pink Roof Interiors, we create stylish, functional and personalized spaces that reflect your lifestyle. 
              From modern homes to luxurious interiors, we blend creativity with comfort to deliver timeless designs.

            </p>

          </motion.div>

        </div>

        {/* 🔥 Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">

          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-10 bg-pink-500 shadow-md shadow-pink-500/50"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}

        </div>

      </section>

    </div>

  );

};

export default AbboutHero;