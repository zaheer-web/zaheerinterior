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
    <section className="relative py-20 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          What We <span className="text-pink-500">Deliver</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-400 leading-relaxed max-w-3xl mx-auto"
        >
          At Pink Roof Interiors, we deliver refined interior design solutions that combine 
          creativity, precision, and functionality — transforming spaces into timeless 
          environments that reflect your vision.
        </motion.p>

        {/* Points */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

          {points.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 group"
            >

              <div className="bg-pink-500 text-black p-2 rounded-full mt-1 shadow-md shadow-pink-500/40 group-hover:scale-110 transition">
                <CheckCircle size={18}/>
              </div>

              <p className="text-gray-300 leading-relaxed group-hover:text-white transition">
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