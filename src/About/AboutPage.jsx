import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import aboutImg from "../img/h-19.png";

function AboutPage() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* 🔥 GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/30 blur-[160px] rounded-full" />

      {/* 🔥 BACKGROUND NUMBER */}
      <h1 className="absolute text-[180px] md:text-[260px] font-extrabold text-pink-200 left-6 top-6 -z-10">
        01
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* 🔥 IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Glow border */}
            <div className="absolute inset-0 rounded-xl bg-pink-300/40 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="overflow-hidden rounded-2xl shadow-xl relative">
              <img
                src={aboutImg}
                alt="Interior"
                className="w-[420px] md:w-[500px] h-[520px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

          </div>
        </motion.div>

        {/* 🔥 CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-pink-400">ABOUT </span>
            <span className="text-gray-900">US</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl font-semibold text-pink-400">
            Designing spaces that reflect your lifestyle.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            At <span className="font-semibold text-gray-900">Pink Roof Interiors</span>, we create thoughtfully designed spaces that blend elegance, functionality, and timeless aesthetics.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            From modern apartments to luxury villas, we deliver tailored interior solutions with attention to detail and innovative design thinking.
          </p>

          {/* 🔥 CONTACT */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mt-12">

            <div className="flex items-center gap-4">

              <div className="bg-pink-300 p-4 text-black rounded-xl shadow-lg shadow-pink-300/40">
                <Phone size={20}/>
              </div>

              <div className="text-left">
                <p className="font-semibold text-lg text-gray-900">
                  24/7 Consultation
                </p>
                <p className="text-gray-600">
                  91 85639 80030
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutPage;