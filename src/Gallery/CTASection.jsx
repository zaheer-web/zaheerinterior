import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (

    <section className="relative py-24 bg-gradient-to-b from-pink-100 via-white to-pink-50 text-gray-900 overflow-hidden">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/30 blur-[160px] rounded-full" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto px-6 text-center"
      >

        {/* 🔥 CLEAN CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -5 }}
          className="bg-white border border-pink-100 rounded-3xl p-12 md:p-16 shadow-lg hover:shadow-pink-200/50 transition"
        >

          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Love Our <span className="text-pink-500">Work?</span>
          </motion.h2>

          {/* Text */}
          <motion.p
            variants={item}
            className="text-gray-600 text-lg max-w-xl mx-auto mb-10"
          >
            Let’s design your dream space together. At Pink Roof Interiors,
            we create elegant, functional and personalized interiors that
            truly reflect your lifestyle.
          </motion.p>

          {/* Button */}
          <Link to="/contact-form">
            <motion.button
              variants={item}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 10px 30px rgba(236,72,153,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-10 py-4 rounded-xl font-semibold 
              shadow-md shadow-pink-300/40 hover:bg-pink-400 transition"
            >
              Get Free Consultation
            </motion.button>
          </Link>

        </motion.div>

      </motion.div>

    </section>

  );
};

export default CTASection;