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
    <section className="relative py-20 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="text-pink-500">Vision & Mission</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We believe great design is not just about how a space looks — 
            but how it feels, functions, and enhances everyday experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {data.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-pink-500 transition overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/20 to-transparent"></div>

              <div className="relative z-10">

                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/10 group-hover:text-pink-500/20 transition">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="mb-5 text-pink-500 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-300 leading-relaxed">
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