import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ✅ Import images
import beforeImg from  "../img/h-14.png";
import afterImg from "../img/h-62.png";

const BeforeAfter = () => {

  const containerRef = useRef(null);

  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // AUTO MOTION
  useEffect(() => {
    let direction = 1;

    const interval = setInterval(() => {

      if (isDragging || isHovering) return;

      setPosition((prev) => {

        if (prev >= 80) direction = -1;
        if (prev <= 20) direction = 1;

        return prev + direction * 0.3;

      });

    }, 30);

    return () => clearInterval(interval);

  }, [isDragging, isHovering]);

  // UPDATE POSITION
  const updatePosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseMove = (e) => {
    if (isDragging) updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-pink-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Before <span className="text-pink-500">&</span> After
          </h2>
          <p className="text-gray-400 mt-4">
            Transforming spaces with thoughtful design and execution
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl select-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseUp={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
        >

          {/* AFTER */}
          <img
            src={afterImg}
            className="absolute w-full h-full object-cover"
            alt="After Design"
          />

          {/* BEFORE */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={beforeImg}
              className="w-full h-full object-cover"
              alt="Before Design"
            />
          </div>

          {/* HANDLE */}
          <motion.div
            className="absolute top-0 h-full flex items-center justify-center cursor-ew-resize"
            style={{ left: `${position}%` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >

            {/* Line */}
            <div className="w-[2px] h-full bg-white/70"></div>

            {/* Circle */}
            <div className="absolute w-10 h-10 rounded-full bg-pink-500 border-4 border-white shadow-lg shadow-pink-500/50 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default BeforeAfter;