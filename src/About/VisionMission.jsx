import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const data = [
  {
    number: "01",
    title: "Our Vision",
    icon: <Eye size={28} />,
    desc: "To craft refined, timeless interiors that elevate everyday living — creating spaces that reflect individuality, inspire comfort, and deliver lasting aesthetic value."
  },
  {
    number: "02",
    title: "Our Mission",
    icon: <Target size={28} />,
    desc: "To deliver personalized, high-quality interior design solutions through thoughtful planning, innovative execution, and close collaboration — transforming ideas into functional, elegant spaces."
  }
];

export default function VisionMission() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200 text-gray-900 overflow-hidden">

      {/* 🔥 SOFT GLOW ONLY (no grid) */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/40 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-400/30 blur-[160px] rounded-full" />

      {/* 🔥 BIG BG TEXT */}
      <h1 className="absolute text-[160px] md:text-[240px] font-extrabold text-white/40 left-6 top-6 -z-10">
        VM
      </h1>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Our <span className="text-pink-500">Vision & Mission</span>
          </h2>

          <p className="mt-6 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We believe great design is not just about how a space looks —
            but how it feels, functions, and enhances everyday experiences.
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {data.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-200 hover:border-pink-400 transition shadow-md hover:shadow-pink-200/60"
            >

              <div className="relative z-10">

                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-pink-200 group-hover:text-pink-300 transition">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="mb-6 text-pink-500 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}