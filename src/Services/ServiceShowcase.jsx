import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Image
import showcaseImg from "../img/h-53.png";

const ServiceShowcase = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-pink-300/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-300/30 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl shadow-lg hover:shadow-pink-200/50 transition"
        >
          <img
            src={showcaseImg}
            alt="Interior Project"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
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
            <span className="text-pink-300">Inspire</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mt-6 mb-8 max-w-xl mx-auto md:mx-0">
            At Pink Roof Interiors, we go beyond design — we create environments 
            that elevate everyday living. From concept to execution, every detail 
            is thoughtfully curated to deliver spaces that are elegant, functional, 
            and truly unforgettable.
          </p>

          {/* CTA */}
          <Link to="/gallery-grid">
            <div className="flex justify-center md:justify-start">
              <button className="px-8 py-3 bg-pink-300 text-white font-semibold rounded-lg 
              hover:bg-pink-400 transition shadow-md shadow-pink-300/40 hover:scale-105">
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