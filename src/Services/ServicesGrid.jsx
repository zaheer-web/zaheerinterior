import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaBuilding, FaTools } from "react-icons/fa";
import { Md3dRotation } from "react-icons/md";

// ✅ Images
import interiorImg from "../img/h-22.png";
import visualImg from "../img/h-36.png";
import commercialImg from "../img/h-38.png";
import executionImg from "../img/h-44.png";

const services = [
  {
    title: "Interior Design",
    icon: <FaCouch />,
    image: interiorImg,
    desc: "We create thoughtfully designed residential and commercial interiors...",
  },
  {
    title: "3D Visualization",
    icon: <Md3dRotation />,
    image: visualImg,
    desc: "High-quality 3D renders that allow you to visualize your space...",
  },
  {
    title: "Commercial & Hospitality Design",
    icon: <FaBuilding />,
    image: commercialImg,
    desc: "From salons and restaurants to offices and hotels...",
  },
  {
    title: "Execution & Project Management",
    icon: <FaTools />,
    image: executionImg,
    desc: "End-to-end project execution with on-site coordination...",
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative py-16 bg-[#0c0c0c] text-white overflow-hidden">

      {/* Light Glow (reduced) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 opacity-10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 opacity-10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {services.map((service, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }} // 🔥 lighter animation
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >

              {/* 🖼️ IMAGE */}
              <div className={`${isReverse ? "md:order-2" : ""}`}>
                <div className="w-full h-[260px] md:h-[320px] overflow-hidden rounded-xl">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"   // ✅ lazy load
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />

                </div>
              </div>

              {/* ✨ CONTENT */}
              <div className={`${isReverse ? "md:order-1" : ""} text-center md:text-left`}>
                
                <div className="text-3xl text-pink-500 mb-3 flex justify-center md:justify-start">
                  {service.icon}
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                  {service.desc}
                </p>

              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;