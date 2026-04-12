import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Personalized interior design tailored to your lifestyle.",
  "Modern and elegant spaces combining style and functionality.",
  "Smart space planning for comfort and efficiency.",
  "Creative solutions for homes, apartments, and luxury interiors.",
  "Attention to detail with high-quality materials and finishes.",
  "Designs that enhance comfort, beauty, and everyday living."
];

const ServicesIntro = () => {
  return (
    <section className="relative py-15 bg-black text-white overflow-hidden">

      {/* 🔥 Pink Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
        >
          WHAT WE <span className="text-pink-500">DO</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          At Pink Roof Interiors, we provide creative and client-focused interior 
          design solutions that transform spaces into elegant, functional, and 
          personalized environments. We combine creativity, comfort, and innovation 
          to design spaces that truly reflect your lifestyle.
        </motion.p>

        {/* Points Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

          {points.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >

              <div className="bg-pink-500 text-black p-2 rounded-full mt-1 shadow-md shadow-pink-500/40">
                <CheckCircle size={18}/>
              </div>

              <p className="text-gray-400 leading-relaxed">
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