import { motion } from "framer-motion";

const steps = [
  {
    title: "Client Consultation",
    desc: "We begin by understanding your requirements, lifestyle, budget, and design preferences to define a clear vision.",
  },
  {
    title: "Concept & Space Planning",
    desc: "Detailed layouts and design concepts are developed to optimize space, functionality, and aesthetics.",
  },
  {
    title: "3D Visualization & Design Approval",
    desc: "Realistic 3D renders help you visualize the final outcome and make informed decisions before execution.",
  },
  {
    title: "Execution & Site Coordination",
    desc: "We manage on-site execution, contractors, and materials to ensure quality, precision, and timely delivery.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function ProcessHero6() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="text-pink-400">Design Process</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            From initial consultation to final execution, our structured process ensures
            clarity, efficiency, and exceptional results at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative p-10 rounded-2xl bg-white shadow-md border border-gray-200 hover:border-pink-300 transition overflow-hidden text-center md:text-left"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Number */}
              <div className="text-6xl font-extrabold text-pink-100 mb-6 group-hover:text-pink-200 transition">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-pink-400 group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}