import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import img1 from "../img/hero2.jpg";
import img2 from "../img/hero3.jpg";

const points = [
  "Thoughtful, context-driven design – not trend-based, but timeless and site-responsive.",
  "Direct principal architect involvement – clear vision, accountability, and quality control.",
  "Luxury made affordable – premium design sensibility delivered at highly budget-friendly costs.",
  "Smart cost optimization – maximum visual and spatial impact without unnecessary expenditure.",
  "Strong balance of aesthetics & practicality – beautiful spaces that actually work."
];

function WhyChoose() {
  return (
    <section className="relative py-10 bg-black text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            WHY <span className="text-yellow-500">CHOOSE US</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Our approach focuses on thoughtful design, cost efficiency and
            delivering timeless spaces that truly enhance the way people live and work.
          </p>

          {/* Points List */}
          <div className="mt-10 space-y-5">

            {points.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3 justify-center lg:justify-start"
              >

                <div className="bg-yellow-500 text-black p-2 rounded-full mt-1">
                  <CheckCircle size={18}/>
                </div>

                <p className="text-gray-400 leading-relaxed max-w-lg">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </motion.div>


        {/* IMAGE SECTION */}
        <div className="order-2 lg:order-1 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={img1}
              className="w-full h-[240px] object-cover hover:scale-110 transition duration-700"
              alt=""
            />
          </motion.div>

          {/* TALL IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl shadow-xl lg:row-span-2"
          >
            <img
              src={img2}
              className="w-full h-[240px] lg:h-full object-cover hover:scale-110 transition duration-700"
              alt=""
            />
          </motion.div>

          {/* STATS BOX */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-black flex flex-col justify-center items-center text-center p-10 rounded-2xl shadow-xl"
          >

            <h2 className="text-5xl font-extrabold">
              12K+
            </h2>

            <p className="mt-3 text-lg font-semibold tracking-wider">
              PROJECT PORTFOLIO
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;