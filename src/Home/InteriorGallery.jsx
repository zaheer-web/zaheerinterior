import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import Images
import img1 from "../img/h-7.png";
import img2 from "../img/h-8.png";
import img3 from "../img/h-9.png";
import img4 from "../img/h-10.png";
import img5 from "../img/h-12.png";
import img6 from "../img/h-14.png";

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

    <section className="relative py-16 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-pink-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Interior <span className="text-pink-500">Gallery</span>
        </motion.h2>

        {/* GRID */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

          {images.map((img, i) => (

            <motion.div
              key={i}
              whileHover={{ scale:1.04 }}
              className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group"
              onClick={() => setIndex(i)}
            >

              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>

        {index !== null && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          >

            {/* Close */}
            <button
              onClick={() => setIndex(null)}
              className="absolute top-8 right-8 text-white hover:text-pink-500 transition"
            >
              <X size={32}/>
            </button>

            {/* Left */}
            <button
              onClick={prev}
              className="absolute left-6 text-white hover:text-pink-500 transition"
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
              className="max-h-[80vh] rounded-xl shadow-2xl shadow-pink-500/20"
            />

            {/* Right */}
            <button
              onClick={next}
              className="absolute right-6 text-white hover:text-pink-500 transition"
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