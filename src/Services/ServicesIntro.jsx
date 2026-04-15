import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Tailored interior solutions designed around your lifestyle and needs.",
  "Elegant, modern spaces that balance aesthetics and functionality.",
  "Efficient space planning for maximum usability and comfort.",
  "Expertise across residential, commercial, and luxury interiors.",
  "Carefully curated materials, finishes, and detailing.",
  "End-to-end design approach from concept to execution."
];

const ServicesIntro = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-pink-300/40 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-300/30 blur-[140px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          What We <span className="text-pink-300">Deliver</span>
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          At Pink Roof Interiors, we deliver refined interior design solutions that combine 
          creativity, precision, and functionality — transforming spaces into timeless 
          environments that reflect your vision.
        </motion.p>

        {/* POINTS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

          {points.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-start gap-3 group bg-white p-5 rounded-xl border border-pink-100 shadow-sm hover:shadow-pink-200/50 transition"
            >

              {/* ICON */}
              <div className="bg-pink-100 text-pink-300 p-2 rounded-full mt-1 group-hover:scale-110 transition">
                <CheckCircle size={18}/>
              </div>

              {/* TEXT */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition">
                {item}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicesIntro;