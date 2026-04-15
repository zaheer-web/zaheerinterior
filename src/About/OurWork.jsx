import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import villa from "../img/h-10.png";
import urban from "../img/h-21.png";
import residence from "../img/h-60.png";
import outdoor from "../img/h-51.png";
import planning from "../img/h-62.png";
import suite from "../img/h-61.png";
import ctaBg from "../img/h-13.png";

const projects = [
{
title:"Luxury Villa",
location:"Moradabad",
desc:"A modern luxury residence designed with elegant architecture.",
img:villa
},
{
title:"Urban Commercial Complex",
location:"Delhi",
desc:"A commercial complex focusing on modern architecture and functionality.",
img:urban
},
{
title:"Modern Interior Residence",
location:"Noida",
desc:"A contemporary interior design project with modern aesthetics.",
img:residence
},
{
title:"Landscape Design Project",
location:"Moradabad",
desc:"A beautiful landscape design enhancing outdoor spaces.",
img:outdoor
},
{
title:"Urban Planning Project",
location:"Lucknow",
desc:"Urban design project focused on sustainable community spaces.",
img:planning
},
{
title:"Luxury Resort Architecture",
location:"Uttarakhand",
desc:"A resort project designed with modern architecture and nature.",
img:suite
}
];

function OurWork(){

const [index,setIndex] = useState(null);

const next = ()=> setIndex((index+1)%projects.length);
const prev = ()=> setIndex((index-1+projects.length)%projects.length);

return(

<>

{/* 🔥 FEATURED SECTION */}
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

<img
src={projects[0].img}
className="absolute inset-0 w-full h-full object-cover"
/>

{/* ✅ FIXED OVERLAY */}
<div className="absolute inset-0 bg-black/30"></div>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="relative text-center max-w-3xl px-6 text-white"
>

<p className="text-pink-400 uppercase tracking-[4px] mb-4">
Featured Project
</p>

<h1 className="text-5xl md:text-6xl font-bold mb-4">
{projects[0].title}
</h1>

<p className="text-gray-200 mb-6">
{projects[0].desc}
</p>

<button
onClick={()=>setIndex(0)}
className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition shadow-lg shadow-pink-400/40"
>
View Project
</button>

</motion.div>

</section>


{/* 🔥 PORTFOLIO GRID */}
<section className="py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<p className="text-pink-500 uppercase tracking-[4px] mb-4">
Our Portfolio
</p>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
Selected <span className="text-pink-500">Projects</span>
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((project,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="relative group overflow-hidden cursor-pointer rounded-2xl shadow-lg"
onClick={()=>setIndex(i)}
>

<img
src={project.img}
className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-90"
/>

{/* ✅ FIXED HOVER (NO WHITE OVERLAY) */}
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">

<div>

<h3 className="text-xl font-semibold text-white">
{project.title}
</h3>

<p className="text-pink-400 text-sm">
{project.location}
</p>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>


{/* 🔥 LIGHTBOX */}
<AnimatePresence>

{index!==null &&(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
>

<button
onClick={()=>setIndex(null)}
className="absolute top-8 right-8 text-white"
>
<X size={32}/>
</button>

<button onClick={prev} className="absolute left-6 text-white">
<ChevronLeft size={40}/>
</button>

<motion.div
initial={{scale:0.9,opacity:0}}
animate={{scale:1,opacity:1}}
className="max-w-5xl text-center"
>

<img
src={projects[index].img}
className="max-h-[75vh] mx-auto rounded-xl mb-6"
/>

<h3 className="text-2xl font-bold text-white">
{projects[index].title}
</h3>

<p className="text-pink-400 mb-2">
{projects[index].location}
</p>

<p className="text-gray-300 max-w-xl mx-auto">
{projects[index].desc}
</p>

</motion.div>

<button onClick={next} className="absolute right-6 text-white">
<ChevronRight size={40}/>
</button>

</motion.div>

)}

</AnimatePresence>


{/* 🔥 CTA */}
<section
className="relative py-32 text-center text-white bg-cover bg-center"
style={{ backgroundImage: `url(${ctaBg})` }}
>

<div className="absolute inset-0 bg-black/70"></div>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
className="relative z-10 max-w-2xl mx-auto px-6"
>

<h2 className="text-4xl md:text-5xl font-bold mb-6">
Start Your Dream Project
</h2>

<p className="text-gray-300 mb-8">
We design modern architecture and interiors that combine beauty,
functionality and innovation.
</p>

<Link to="/contact-form">

<button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition shadow-lg shadow-pink-400/40">
Start Your Project
</button>

</Link>

</motion.div>

</section>

</>

);

}

export default OurWork;