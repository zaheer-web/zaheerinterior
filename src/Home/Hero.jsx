import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const sliderImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600"
];

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="w-full overflow-x-hidden relative">

      <section
        className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] overflow-hidden bg-black"
      >

        {/* Slider Images */}

        {sliderImages.map((img, index) => (

          <motion.img
            key={index}
            src={img}
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

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />


        {/* Hero Content */}

        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 lg:px-32 pt-24 sm:pt-20 md:pt-0 z-20">

          <motion.div
            key={currentIndex}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            {/* Heading */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              Luxury{" "}

              <span className="text-yellow-500 inline-block min-w-[240px]">

                <Typewriter
                  words={[
                    "Interior Design",
                    "Architecture",
                    "Space Planning"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />

              </span>

              <br />

              Studio

            </h1>


            {/* Paragraph */}

            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">

              We design modern interiors that blend elegance,
              functionality and timeless aesthetics to create
              inspiring spaces for living and working.

            </p>

          </motion.div>

        </div>


        {/* Slider Dots */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">

          {sliderImages.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-10 bg-yellow-500"
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