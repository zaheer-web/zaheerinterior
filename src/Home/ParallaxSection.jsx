import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import Image
import bgImage from "../img/h-15.png";

const ParallaxSection = () => {
  return (

    <section
      className="relative h-[500px] flex items-center justify-center text-center text-white bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-pink-900/40"></div>

      {/* Glow */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-pink-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        className="relative z-10 max-w-2xl px-6"
      >

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Luxury <span className="text-pink-500">Interior Design</span>
        </h2>

        {/* Text */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          We design refined interiors that blend elegance, comfort, and functionality 
          — transforming your vision into reality.
        </p>

        {/* Button */}
        <Link to="/contact-form">
          <button className="bg-pink-500 text-black px-8 py-3 rounded-lg font-semibold 
          hover:bg-pink-400 transition shadow-lg shadow-pink-500/40 hover:scale-105">
            Start Your Project
          </button>
        </Link>

      </motion.div>

    </section>

  );
};

export default ParallaxSection;