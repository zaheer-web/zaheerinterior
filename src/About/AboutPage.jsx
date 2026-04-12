import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import img1 from "../img/hero2.jpg";

function AboutPage() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* Background Number */}
      <h1 className="absolute text-[220px] md:text-[320px] font-extrabold text-white/[0.03] top-10 left-10 select-none">
        01
      </h1>

      {/* 🔥 Pink Accent Line */}
      <div className="absolute left-0 top-0 h-full w-[4px] bg-pink-500"></div>

      {/* 🔥 Glow */}
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
              src={img1}
              alt="Interior Design"
              className="w-[420px] md:w-[500px] h-[520px] object-cover hover:scale-110 transition duration-700"
            />

          </div>
        </motion.div>


        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          {/* Label */}
          <p className="text-pink-500 uppercase tracking-[5px] text-sm mb-6">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafting Spaces <br /> That Reflect You
          </h2>

          {/* Tagline */}
          <p className="mt-6 text-xl font-semibold text-pink-500">
            Creative, functional and personalized interior design solutions.
          </p>

          {/* Paragraph 1 */}
          <p className="mt-8 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            Pink Roof Interior is a creative and client-focused interior design firm dedicated to transforming spaces into elegant, functional, and personalized environments. Specializing in residential projects, we bring style and comfort together to craft homes that reflect our clients' lifestyles and aspirations.
          </p>

          {/* Paragraph 2 */}
          <p className="mt-5 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            From modern apartments to luxurious villas, Pink Roof Interior ensures each design is thoughtfully curated with attention to detail, innovative solutions, and timeless appeal.
          </p>

          {/* Designer Intro */}
          <p className="mt-6 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            I, Rukhsar Fatima Rizvi, a certified Interior Designer with over 7 years of experience, specialize in creating innovative and functional spaces with a strong focus on sustainability and modern aesthetics.
          </p>

          {/* Experience */}
          <p className="mt-5 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            I have worked on multiple residential, commercial, and hospitality projects including hotels, rooftop spaces, salons, apartments, and offices. My expertise includes space planning, 3D visualization, material selection, and on-site execution.
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
            I collaborate closely with clients, contractors, and teams to ensure each project meets expectations with precision, creativity, and high-quality results.
          </p>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-10 mt-12">

            {/* Experience */}
            <div>
              <h3 className="text-5xl font-bold text-pink-500">
                7+
              </h3>

              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            {/* Hotline */}
            <div className="flex items-center gap-4">

              <div className="bg-pink-500 p-4 text-black rounded-full shadow-lg shadow-pink-500/40">
                <Phone size={20} />
              </div>

              <div className="text-left">
                <p className="font-semibold text-lg">
                  Hotline 24/7
                </p>

                <p className="text-gray-400">
                  +91-9411096122
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