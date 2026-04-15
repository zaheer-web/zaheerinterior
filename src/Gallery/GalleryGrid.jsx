import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Images
import living1 from "../img/h-62.png";
import living2 from "../img/h-42.png";
import kitchen1 from  "../img/h-54.png";
import kitchen2 from  "../img/h-68.png";
import bedroom1 from  "../img/h-57.png";
import bedroom2 from  "../img/h-44.png";
import office1 from "../img/h-10.png";
import office2 from "../img/h-1.png";
import commercial1 from  "../img/h-56.png";
import commercial2 from  "../img/h-39.png";

const categories = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Office",
  "Commercial",
];

const images = [
  { src: living1, title: "Luxury Living Room", category: "Living Room" },
  { src: living2, title: "Modern Living Room", category: "Living Room" },
  { src: kitchen1, title: "Modern Kitchen", category: "Kitchen" },
  { src: kitchen2, title: "White Kitchen", category: "Kitchen" },
  { src: bedroom1, title: "Minimal Bedroom", category: "Bedroom" },
  { src: bedroom2, title: "Luxury Bedroom", category: "Bedroom" },
  { src: office1, title: "Office Interior", category: "Office" },
  { src: office2, title: "Modern Workspace", category: "Office" },
  { src: commercial1, title: "Luxury Bathroom", category: "Commercial" },
  { src: commercial2, title: "Restaurant Interior", category: "Commercial" },
];

const GallerySection = () => {

  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(null);

  const filteredImages =
    category === "All"
      ? images
      : images.filter((img) => img.category === category);

  const next = () => setIndex((prev) => (prev + 1) % filteredImages.length);
  const prev = () => setIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/30 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔥 FILTER */}
        <div className="mb-16 overflow-x-auto py-2">
          <div className="flex md:justify-center gap-4 whitespace-nowrap px-2">

            {categories.map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory(item)}
                className={`px-6 py-3 rounded-xl border transition

                ${
                  category === item
                    ? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-300/40"
                    : "bg-white border-pink-100 text-gray-700 hover:border-pink-400 hover:text-pink-500"
                }`}
              >
                {item}
              </motion.button>
            ))}

          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredImages.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              onClick={() => setIndex(i)}
              className="rounded-2xl overflow-hidden bg-white border border-pink-100 shadow-md hover:shadow-pink-200/50 transition cursor-pointer group"
            >

              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-pink-500 text-sm mt-1">
                  {item.category}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* 🔥 LIGHTBOX (CLEAN) */}
      <AnimatePresence>
        {index !== null && (
          <motion.div className="fixed inset-0 bg-white/95 z-50 flex items-center justify-center">

            <button onClick={() => setIndex(null)} className="absolute top-8 right-8 text-gray-900">
              <X size={32}/>
            </button>

            <button onClick={prev} className="absolute left-6 text-gray-900">
              <ChevronLeft size={40}/>
            </button>

            <motion.img
              key={index}
              src={filteredImages[index].src}
              className="max-h-[80vh] rounded-xl shadow-lg"
            />

            <button onClick={next} className="absolute right-6 text-gray-900">
              <ChevronRight size={40}/>
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;