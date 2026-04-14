import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import img1 from "../img/h-5.png";
import img2 from "../img/h-6.png";

const points = [
  "Timeless, context-driven designs tailored to your space.",
  "Direct involvement of principal designer ensuring quality.",
  "Luxury aesthetics delivered within practical budgets.",
  "Smart cost optimization without compromising impact.",
  "Perfect balance of beauty, functionality, and comfort."
];

function WhyChoose() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Why <span className="text-pink-400">Choose Us</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            We design with purpose — combining creativity, practicality, and precision 
            to deliver spaces that feel refined, functional, and truly yours.
          </p>

          {/* Points */}
          <div className="mt-10 space-y-5">
            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-3 justify-center lg:justify-start group">
                
                {/* Icon */}
                <div className="bg-pink-300 text-black p-2 rounded-full mt-1 shadow-md shadow-pink-300/40 group-hover:scale-110 transition">
                  <CheckCircle size={18}/>
                </div>

                <p className="text-gray-700 leading-relaxed max-w-lg group-hover:text-gray-900 transition">
                  {item}
                </p>

              </div>
            ))}
          </div>

        </motion.div>

        {/* IMAGES */}
        <div className="order-2 lg:order-1 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img1}
              alt="Interior Project"
              className="w-full h-[260px] object-cover transition duration-700 hover:scale-110"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl shadow-lg lg:row-span-2"
          >
            <img
              src={img2}
              alt="Interior Design"
              className="w-full h-[260px] lg:h-full object-cover transition duration-700 hover:scale-110"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-pink-300 to-pink-200 text-black flex flex-col justify-center items-center text-center p-10 rounded-2xl shadow-lg shadow-pink-300/40"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">50+</h2>
            <p className="mt-2 text-sm font-semibold tracking-wider uppercase">
              Projects Delivered
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;