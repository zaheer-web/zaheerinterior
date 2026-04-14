import React from "react";
import { motion } from "framer-motion";
import { Building2, Sofa, Box, ClipboardList, Layers, Users } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Interior Design",
    icon: <Sofa size={28} />,
    desc: "We design personalized residential and commercial interiors that reflect your lifestyle, combining aesthetics, comfort, and functionality.",
  },
  {
    number: "02",
    title: "Space Planning",
    icon: <Layers size={28} />,
    desc: "Optimizing layouts for maximum usability and flow, ensuring every square foot is functional, efficient, and visually balanced.",
  },
  {
    number: "03",
    title: "3D Visualization",
    icon: <Box size={28} />,
    desc: "High-quality 3D renders that allow you to experience your space before execution, ensuring clarity and confidence in design decisions.",
  },
  {
    number: "04",
    title: "Material & Furniture Selection",
    icon: <ClipboardList size={28} />,
    desc: "Carefully curated materials, finishes, and furnishings to match your vision while maintaining quality and budget control.",
  },
  {
    number: "05",
    title: "Project Execution",
    icon: <Building2 size={28} />,
    desc: "End-to-end execution with on-site coordination, contractor management, and strict quality control for flawless results.",
  },
  {
    number: "06",
    title: "Client Consultation",
    icon: <Users size={28} />,
    desc: "Personalized consultations to understand your needs, preferences, and goals — ensuring every project is uniquely yours.",
  },
];

export default function OurService() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="text-pink-400">Services</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer complete interior design solutions — from concept to execution — 
            delivering spaces that are functional, elegant, and tailored to your vision.
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-2xl bg-white shadow-md border border-gray-200 hover:border-pink-300 transition overflow-hidden text-center md:text-left"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-300/20 to-transparent"></div>

              <div className="relative z-10">

                {/* Number */}
                <span className="absolute top-1 right-6 text-6xl font-bold text-pink-100 group-hover:text-pink-200 transition">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mb-5 text-pink-400 flex justify-center md:justify-start">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
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