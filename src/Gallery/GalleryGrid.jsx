import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Office",
  "Commercial",
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    title: "Luxury Living Room",
    category: "Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    title: "Modern Living Room",
    category: "Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    title: "Modern Kitchen",
    category: "Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    title: "White Kitchen",
    category: "Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    title: "Minimal Bedroom",
    category: "Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    title: "Luxury Bedroom",
    category: "Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    title: "Office Interior",
    category: "Office",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    title: "Modern Workspace",
    category: "Office",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    title: "Luxury Bathroom",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    title: "Restaurant Interior",
    category: "Commercial",
  },
];

const GallerySection = () => {

  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(null);

  const filteredImages =
    category === "All"
      ? images
      : images.filter((img) => img.category === category);

  const next = () => {
    setIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* 🔥 Pink Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* FILTER */}
        <div className="mb-16 overflow-x-auto overflow-y-hidden py-2">

          <div className="flex md:justify-center gap-4 whitespace-nowrap px-2">

            {categories.map((item, i) => (

              <motion.button
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory(item)}
                className={`px-6 py-3 rounded-xl border transition flex-shrink-0

                ${
                  category === item
                    ? "bg-white/10 border-pink-500 text-pink-400 shadow-md shadow-pink-500/30"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-pink-500 hover:text-pink-400"
                }`}
              >

                {item}

              </motion.button>

            ))}

          </div>

        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredImages.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIndex(i)}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer group hover:shadow-pink-500/20 transition"
            >

              <img
                src={item.src}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                alt=""
              />

              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-pink-400 text-sm mt-1">
                  {item.category}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>

        {index !== null && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          >

            <button onClick={() => setIndex(null)} className="absolute top-8 right-8 text-white hover:text-pink-500">
              <X size={32}/>
            </button>

            <button onClick={prev} className="absolute left-6 text-white hover:text-pink-500">
              <ChevronLeft size={40}/>
            </button>

            <motion.img
              key={index}
              src={filteredImages[index].src}
              initial={{ scale:0.8, opacity:0 }}
              animate={{ scale:1, opacity:1 }}
              transition={{ duration:0.4 }}
              className="max-h-[80vh] rounded-xl shadow-2xl shadow-pink-500/20"
            />

            <button onClick={next} className="absolute right-6 text-white hover:text-pink-500">
              <ChevronRight size={40}/>
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default GallerySection;