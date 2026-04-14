import { motion } from "framer-motion";

export default function ConsultantHero7() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Ready to <span className="text-pink-400">Transform</span> Your Space?
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-600 mb-10 text-lg max-w-xl mx-auto"
        >
          Let our interior experts design a stunning and functional
          space tailored perfectly for your lifestyle.
        </motion.p>

        {/* Button */}
        <a
          href="https://wa.me/918563980030"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg font-semibold text-black 
            bg-pink-300 hover:bg-pink-400 transition duration-300 
            shadow-lg shadow-pink-300/40 hover:shadow-pink-400/60"
          >
            Get Free Consultation
          </motion.button>
        </a>

      </div>
    </section>
  );
}