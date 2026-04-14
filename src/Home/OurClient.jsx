import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "S.B. Overseas",
    role: "Client",
    text: "Working with the architectural team was an excellent experience. Their designs perfectly balanced creativity and functionality.",
  },
  {
    name: "Dr. S.T. Hasan",
    role: "Member of Parliament",
    text: "The team delivered exceptional architectural design and professionalism. Highly recommended for innovative spaces.",
  },
  {
    name: "Fair Deal Overseas",
    role: "Client",
    text: "A highly professional team that understands client needs and delivers impressive design solutions.",
  },
  {
    name: "JACO Exports",
    role: "Client",
    text: "Outstanding architectural vision and attention to detail. We were extremely satisfied with the final outcome.",
  },
  {
    name: "MESCO International School",
    role: "Educational Institution",
    text: "Their planning and design approach helped create a modern and functional educational environment.",
  },
];

export default function OurClient() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          Our <span className="text-pink-400">Clients</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          loop
          centeredSlides
          spaceBetween={20}
          className="py-20"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center py-10">
              {({ isActive }) => (
                <div
                  className={`w-[90%] sm:w-[320px] p-10 rounded-2xl transition-all duration-500 text-center flex flex-col items-center border
                  
                  ${
                    isActive
                      ? "scale-105 bg-white shadow-2xl border-pink-300 shadow-pink-200/50"
                      : "scale-95 bg-white/70 shadow-md border-gray-200"
                  }`}
                >

                  {/* Quote */}
                  <Quote className="text-pink-400 mb-2" size={34} />

                  {/* Text */}
                  <p className="text-gray-600 italic text-sm leading-relaxed">
                    {item.text}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 text-pink-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-pink-300 text-black flex items-center justify-center text-lg font-bold mt-6 shadow-md shadow-pink-300/40">
                    {item.name.charAt(0)}
                  </div>

                  {/* Name */}
                  <h4 className="mt-3 font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  {/* Role */}
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>
              )}
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}