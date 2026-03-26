import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Local Images
import hero1 from "../assets/contact/hero1.jpg";
import hero2 from "../assets/contact/hero2.jpg";
import hero3 from "../assets/contact/hero3.jpg";
import hero4 from "../assets/contact/hero4.jpg";

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

    <div className="w-full overflow-x-hidden relative">

      <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden bg-black">

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

        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 lg:px-32 z-20">

          <motion.div
            key={currentIndex}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left text-white max-w-2xl"
          >

            {/* Heading */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              Our{" "}

              <span className="text-yellow-500 inline-block min-w-[220px]">

                <Typewriter
                  words={[
                    "Architecture",
                    "Interior Design",
                    "Space Planning",
                    "Urban Design"
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

              Services

            </h1>

            {/* Paragraph */}

            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">

              We offer innovative architectural and interior design
              solutions that blend creativity, functionality and
              modern aesthetics to transform spaces into
              extraordinary experiences.

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

export default ServiceHero;