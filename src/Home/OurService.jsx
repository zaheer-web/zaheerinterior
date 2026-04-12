import React from "react";
import { motion } from "framer-motion";
import { Building2, Sofa, Box, Trees, Map } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Architectural Design",
    icon: <Building2 size={28} />,
    desc: "Architecture is more than structure. We design spaces that combine functionality, creativity and modern aesthetics.",
  },
  {
    number: "02",
    title: "Interior Design",
    icon: <Sofa size={28} />,
    desc: "Interior design creates harmony between furniture, lighting and space to deliver comfortable living environments.",
  },
  {
    number: "03",
    title: "3D Visualization",
    icon: <Box size={28} />,
    desc: "Our 3D visualization allows clients to see realistic previews of their projects before execution.",
  },
  {
    number: "04",
    title: "Landscape Design",
    icon: <Trees size={28} />,
    desc: "Landscape design enhances architecture by creating beautiful outdoor environments.",
  },
  {
    number: "05",
    title: "Urban Planning",
    icon: <Map size={28} />,
    desc: "Urban planning focuses on building sustainable cities and well designed communities.",
  },
  {
    number: "06",
    title: "Project Management",
    icon: <Building2 size={28} />,
    desc: "We manage projects from concept to completion ensuring quality and efficiency.",
  },
];

export default function OurService() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">

      {/* 🔥 Pink Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-pink-500">Services</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            We deliver innovative architectural and interior solutions
            that combine creativity, technology and functionality.
          </p>

        </motion.div>


        {/* Services Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-pink-500 transition overflow-hidden text-center md:text-left"
            >

              {/* 🔥 Glow Hover */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/20 to-transparent"></div>

              <div className="relative z-10">

                {/* Number */}

                <span className="absolute top-1 right-6 text-6xl font-bold text-white/10 group-hover:text-pink-500/20 transition">
                  {service.number}
                </span>

                {/* Icon */}

                <div className="mb-5 text-pink-500 flex justify-center md:justify-start">
                  {service.icon}
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                  {service.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}