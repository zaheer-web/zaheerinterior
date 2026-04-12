import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import img1 from "../img/hero2.jpg";
import img2 from "../img/hero3.jpg";
import img3 from "../img/hero4.jpg";

function About() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* 🔥 Pink Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-400/20 blur-[160px] rounded-full" />

      {/* Background number */}
      <h1 className="absolute text-[200px] md:text-[300px] font-extrabold text-white/5 left-6 top-6 -z-10">
        01
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-pink-500">ABOUT <span className="text-white">US</span> </span>
            <br />
           
          </h2>

          <p className="mt-6 text-xl font-semibold text-pink-500">
            Designing spaces that reflect your lifestyle.
          </p>

          {/* ✅ Updated Content */}

          <p className="mt-6 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            Pink Roof Interior is a creative and client-focused interior design firm dedicated to transforming spaces into elegant, functional, and personalized environments. Specializing in residential projects, we bring style and comfort together to craft homes that reflect our clients' lifestyles and aspirations.
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            From modern apartments to luxurious villas, Pink Roof Interior ensures each design is thoughtfully curated with attention to detail, innovative solutions, and timeless appeal.
          </p>

          {/* Hotline */}

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-12">

            <div className="flex items-center gap-4">

              <div className="bg-pink-500 p-4 text-black rounded-xl shadow-lg shadow-pink-500/40">
                <Phone size={20}/>
              </div>

              <div className="text-left">
                <p className="font-semibold text-lg">
                  HOTLINE 24/7
                </p>

                <p className="text-gray-400">
                  +91-9411096122
                </p>
              </div>

            </div>

          </div>

        </motion.div>


        {/* IMAGE GRID */}

        <div className="grid grid-cols-2 gap-6">

          {/* Image 1 */}

          <motion.div
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            whileHover={{ scale:1.05 }}
            className="col-span-2 rounded-2xl overflow-hidden shadow-2xl"
          >

            <img
              src={img1}
              className="w-full h-[280px] object-cover hover:scale-110 transition duration-700"
            />

          </motion.div>


          {/* Image 2 */}

          <motion.div
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
            whileHover={{ scale:1.05 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >

            <img
              src={img2}
              className="w-full h-[220px] object-cover hover:scale-110 transition duration-700"
            />

          </motion.div>


          {/* Image 3 */}

          <motion.div
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            whileHover={{ scale:1.05 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >

            <img
              src={img3}
              className="w-full h-[220px] object-cover hover:scale-110 transition duration-700"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;