import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Images
import img1 from "../img/h-11.png";
import img2 from "../img/h-19.png";
import img3 from "../img/h-49.png";
import img4 from "../img/h-50.png";
import img5 from "../img/h-51.png";
import img6 from "../img/h-54.png";

const images = [img1, img2, img3, img4, img5, img6];

const InteriorGallery = () => {
  const [index, setIndex] = useState(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Interior <span className="text-pink-400">Gallery</span>
        </motion.h2>

        {/* ✅ GRID (FIXED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, i) => (

            <motion.div
              key={i}
              whileHover={{ scale:1.04 }}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group bg-white"
              onClick={() => setIndex(i)}
            >

              {/* ✅ SAME SIZE IMAGE */}
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-[260px] md:h-[280px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* ✅ LIGHTBOX */}
      <AnimatePresence>

        {index !== null && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center"
          >

            {/* Close */}
            <button
              onClick={() => setIndex(null)}
              className="absolute top-8 right-8 text-gray-800 hover:text-pink-400 transition"
            >
              <X size={32}/>
            </button>

            {/* Left */}
            <button
              onClick={prev}
              className="absolute left-6 text-gray-800 hover:text-pink-400 transition"
            >
              <ChevronLeft size={40}/>
            </button>

            {/* Image */}
            <motion.img
              key={index}
              src={images[index]}
              initial={{ scale:0.9, opacity:0 }}
              animate={{ scale:1, opacity:1 }}
              transition={{ duration:0.4 }}
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-xl shadow-pink-300/30 object-contain"
            />

            {/* Right */}
            <button
              onClick={next}
              className="absolute right-6 text-gray-800 hover:text-pink-400 transition"
            >
              <ChevronRight size={40}/>
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default InteriorGallery;