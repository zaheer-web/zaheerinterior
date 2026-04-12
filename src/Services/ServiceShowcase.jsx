import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceShowcase = () => {
  return (
    <section className="relative py-15 bg-black text-white overflow-hidden">

      {/* 🔥 Pink Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl shadow-2xl shadow-pink-500/10"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Interior Design"
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interior <span className="text-pink-500">Design</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Interior design is more than just styling — it’s about creating spaces 
            that feel comfortable, functional, and visually stunning. At Pink Roof 
            Interiors, we design personalized interiors that reflect your lifestyle 
            while combining elegance, practicality, and modern aesthetics.
          </p>

          <Link to="/gallery-grid">
            <div className="flex justify-center md:justify-start">
              <button className="px-8 py-3 bg-pink-500 text-black font-semibold rounded-lg 
              hover:bg-pink-400 transition shadow-lg shadow-pink-500/40 hover:scale-105">
                View Projects
              </button>
            </div>
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default ServiceShowcase;