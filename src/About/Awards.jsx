import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Briefcase, Users, Star, Clock } from "lucide-react";

import "swiper/css";

const achievements = [
  {
    number: "01",
    icon: <Briefcase size={36} />,
    title: "50+ Projects Delivered",
    desc: "Successfully completed residential, commercial, and hospitality projects with high client satisfaction.",
  },
  {
    number: "02",
    icon: <Clock size={36} />,
    title: "7+ Years Experience",
    desc: "Extensive experience in designing functional and aesthetically refined spaces across multiple sectors.",
  },
  {
    number: "03",
    icon: <Users size={36} />,
    title: "Client-Centric Approach",
    desc: "Focused on understanding client needs and delivering personalized design solutions.",
  },
  {
    number: "04",
    icon: <Star size={36} />,
    title: "Premium Quality Execution",
    desc: "Attention to detail, material selection, and on-site execution ensure high-quality results.",
  },
  {
    number: "05",
    icon: <Briefcase size={36} />,
    title: "Flagship Projects",
    desc: "Delivered high-end projects including salons, hotels, restaurants, and luxury interiors.",
  },
];

function Awards() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="text-pink-500">Achievements</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence through experience, creativity, and a strong commitment to quality design.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {achievements.map((item, index) => (

            <SwiperSlide key={index} className="pt-6">

              <motion.div
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-pink-500 transition overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/20 to-transparent"></div>

                <div className="relative z-10 text-center">

                  {/* Number */}
                  <span className="absolute top-1 right-2 text-6xl font-bold text-white/10 group-hover:text-pink-500/20 transition">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="flex justify-center text-pink-500 mb-6">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Awards;