import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaBuilding, FaTools } from "react-icons/fa";
import { Md3dRotation } from "react-icons/md";

// Images
import interiorImg from "../img/h-22.png";
import visualImg from "../img/h-36.png";
import commercialImg from "../img/h-38.png";
import executionImg from "../img/h-44.png";

const services = [
  {
    title: "Interior Design",
    icon: <FaCouch />,
    image: interiorImg,
    desc: "We create thoughtfully designed residential and commercial interiors..."
  },
  {
    title: "3D Visualization",
    icon: <Md3dRotation />,
    image: visualImg,
    desc: "High-quality 3D renders that allow you to visualize your space..."
  },
  {
    title: "Commercial & Hospitality Design",
    icon: <FaBuilding />,
    image: commercialImg,
    desc: "From salons and restaurants to offices and hotels..."
  },
  {
    title: "Execution & Project Management",
    icon: <FaTools />,
    image: executionImg,
    desc: "End-to-end project execution with on-site coordination..."
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-pink-300/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-300/30 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">

        {services.map((service, index) => {

          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >

              {/* IMAGE */}
              <div className={`${isReverse ? "md:order-2" : ""}`}>
                <div className="w-full h-[260px] md:h-[320px] overflow-hidden rounded-2xl shadow-md hover:shadow-pink-200/50 transition">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>
              </div>

              {/* CONTENT */}
              <div className={`${isReverse ? "md:order-1" : ""} text-center md:text-left`}>

                {/* ICON */}
                <div className="text-3xl text-pink-300 mb-4 flex justify-center md:justify-start">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h2>

                {/* DESC */}
                <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
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