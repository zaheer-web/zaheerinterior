import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
"https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
"https://images.unsplash.com/photo-1497366216548-37526070297c",
"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
];

const InteriorGallery = () => {

  const [index,setIndex] = useState(null);

  const next = () => {
    setIndex((prev)=> (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev)=> (prev - 1 + images.length) % images.length);
  };

  return (

    <section className="py-10 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Interior Gallery
        </motion.h2>

        {/* GRID */}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

          {images.map((img,i)=>(

            <motion.div
              key={i}
              whileHover={{ scale:1.05 }}
              className="overflow-hidden rounded-xl shadow-xl cursor-pointer"
              onClick={()=>setIndex(i)}
            >

              <img
                src={img}
                alt=""
                className="w-full object-cover hover:scale-110 transition duration-700"
              />

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

          {/* CLOSE */}

          <button
            onClick={()=>setIndex(null)}
            className="absolute top-8 right-8 text-white"
          >
            <X size={32}/>
          </button>

          {/* LEFT */}

          <button
            onClick={prev}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={40}/>
          </button>

          {/* IMAGE */}

          <motion.img
            key={index}
            src={images[index]}
            initial={{ scale:0.9, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            transition={{ duration:0.4 }}
            className="max-h-[80vh] rounded-xl shadow-2xl"
          />

          {/* RIGHT */}

          <button
            onClick={next}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40}/>
          </button>

        </motion.div>

      )}

      </AnimatePresence>

    </section>

  );

};

export default InteriorGallery;