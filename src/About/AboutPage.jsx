import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

// ✅ Clean import
import aboutImg from "../img/h-19.png";

function AboutPage() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* Background Number */}
      <h1 className="absolute text-[200px] md:text-[300px] font-extrabold text-white/[0.03] top-10 left-10 select-none">
        01
      </h1>

      {/* Accent Line */}
      <div className="absolute left-0 top-0 h-full w-[4px] bg-pink-500"></div>

      {/* Glow */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-pink-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <img
              src={aboutImg}
              alt="Interior Project"
              className="w-[420px] md:w-[500px] h-[520px] object-cover transition duration-700 hover:scale-110"
            />
          </div>
        </motion.div>

        {/* CONTENT (same as your code — no change needed 👍) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          <p className="text-pink-500 uppercase tracking-[5px] text-sm mb-6">
            About Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Designing Spaces <br /> That Reflect You
          </h2>

          <p className="mt-6 text-lg font-semibold text-pink-500">
            Thoughtful design. Functional spaces. Timeless aesthetics.
          </p>

          <p className="mt-8 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            Pink Roof Interiors is a client-focused interior design studio dedicated to transforming 
            spaces into elegant, functional, and personalized environments.
          </p>

          {/* rest same */}
        </motion.div>

      </div>

    </section>
  );
}

export default AboutPage;