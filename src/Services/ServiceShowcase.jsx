import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import Image
import showcaseImg from "../img/h-53.png";

const ServiceShowcase = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">

      {/* Glow */}
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
            src={showcaseImg}
            alt="Interior Project"
            className="w-full h-full object-cover transition duration-700 hover:scale-110"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Crafting Spaces that{" "}
            <span className="text-pink-500">Inspire</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mt-6 mb-8 max-w-xl mx-auto md:mx-0">
            At Pink Roof Interiors, we go beyond design — we create environments 
            that elevate everyday living. From concept to execution, every detail 
            is thoughtfully curated to deliver spaces that are elegant, functional, 
            and truly unforgettable.
          </p>

          {/* CTA */}
          <Link to="/gallery-grid">
            <div className="flex justify-center md:justify-start">
              <button className="px-8 py-3 bg-pink-500 text-black font-semibold rounded-lg 
              hover:bg-pink-400 transition shadow-lg shadow-pink-500/40 hover:scale-105">
                Explore Our Projects
              </button>
            </div>
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default ServiceShowcase;