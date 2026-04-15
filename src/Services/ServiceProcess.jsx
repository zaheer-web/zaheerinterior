import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaDraftingCompass, FaCube, FaBuilding } from "react-icons/fa";

const steps = [
{
title: "Concept & Idea",
desc: "Understanding your lifestyle, preferences and space requirements to create a unique interior concept.",
icon: <FaLightbulb />
},
{
title: "Planning & Strategy",
desc: "Smart space planning with functional layouts, materials and aesthetic balance.",
icon: <FaDraftingCompass />
},
{
title: "3D Visualization",
desc: "Realistic 3D previews that help you visualize your interiors before execution.",
icon: <FaCube />
},
{
title: "Execution",
desc: "Bringing designs to life with precision, quality materials and attention to detail.",
icon: <FaBuilding />
}
];

const ServiceProcess = () => {
return (

<section className="py-24 md:py-32 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 relative overflow-hidden">

{/* 🔥 SOFT GLOW */}
<div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-pink-300/40 blur-[140px] rounded-full" />
<div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-300/30 blur-[140px] rounded-full" />

<div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20">
Our <span className="text-pink-300">Design Process</span>
</h2>

{/* 🔥 MOBILE TIMELINE */}
<div className="absolute left-6 top-0 h-full w-[2px] bg-pink-100 md:hidden">
<motion.div
initial={{ height: 0 }}
whileInView={{ height: "100%" }}
transition={{ duration: 2 }}
className="w-full bg-pink-300"
/>
</div>

{/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-32 md:gap-x-40 relative">

<div className="flex md:justify-end pl-14 md:pl-0 relative">
<div className="absolute left-5 top-6 w-3 h-3 bg-pink-300 rounded-full md:hidden"></div>
<Card step={steps[0]} number="01"/>
</div>

<div className="flex md:justify-start pl-14 md:pl-0 relative">
<div className="absolute left-5 top-6 w-3 h-3 bg-pink-300 rounded-full md:hidden"></div>
<Card step={steps[1]} number="02"/>
</div>

<div className="flex md:justify-end pl-14 md:pl-0 relative">
<div className="absolute left-5 top-6 w-3 h-3 bg-pink-300 rounded-full md:hidden"></div>
<Card step={steps[2]} number="03"/>
</div>

<div className="flex md:justify-start pl-14 md:pl-0 relative">
<div className="absolute left-5 top-6 w-3 h-3 bg-pink-300 rounded-full md:hidden"></div>
<Card step={steps[3]} number="04"/>
</div>

{/* 🔥 SVG CONNECTOR */}
<svg
className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
viewBox="0 0 1000 700"
fill="none"
>

<motion.path
d="M425 120 C420 120 420 120 580 120"
stroke="#f9a8d4"
strokeWidth="3"
strokeLinecap="round"
initial={{ pathLength: 0 }}
whileInView={{ pathLength: 1 }}
transition={{ duration: 1 }}
/>

<motion.path
d="M700 300 C700 460 350 260 300 425"
stroke="#f9a8d4"
strokeWidth="3"
strokeLinecap="round"
initial={{ pathLength: 0 }}
whileInView={{ pathLength: 1 }}
transition={{ duration: 1.2, delay:0.5 }}
/>

<motion.path
d="M420 580 L580 580"
stroke="#f9a8d4"
strokeWidth="3"
strokeLinecap="round"
initial={{ pathLength: 0 }}
whileInView={{ pathLength: 1 }}
transition={{ duration: 1, delay: 1 }}
/>

</svg>

</div>

</div>

</section>

);
};

const Card = ({step,number}) => {
return(

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="w-full max-w-[260px] bg-white border border-pink-100 rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-pink-200/50 hover:-translate-y-1 transition"
>

<div className="text-3xl sm:text-4xl text-pink-300 mb-5 flex justify-center">
{step.icon}
</div>

<div className="text-4xl sm:text-5xl font-bold text-pink-300 mb-3">
{number}
</div>

<h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
{step.title}
</h3>

<p className="text-gray-600 text-sm">
{step.desc}
</p>

</motion.div>

)
}

export default ServiceProcess;