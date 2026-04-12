import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
{
title:"Luxury Villa",
location:"Moradabad",
desc:"A modern luxury residence designed with elegant interiors.",
img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
},
{
title:"Urban Interior Space",
location:"Delhi",
desc:"A modern commercial interior focusing on style and functionality.",
img:"https://images.unsplash.com/photo-1487958449943-2429e8be8625"
},
{
title:"Modern Residence",
location:"Noida",
desc:"A contemporary home interior with clean and elegant design.",
img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
},
{
title:"Outdoor Design",
location:"Moradabad",
desc:"A beautifully designed outdoor and landscape environment.",
img:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
},
{
title:"Space Planning Project",
location:"Lucknow",
desc:"Smart interior planning for modern living spaces.",
img:"https://images.unsplash.com/photo-1501183638710-841dd1904471"
},
{
title:"Luxury Interior Suite",
location:"Uttarakhand",
desc:"Premium interior design with comfort and aesthetics.",
img:"https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
}
];

function OurWork(){

const [index,setIndex] = useState(null);

const next = ()=> setIndex((index+1)%projects.length);
const prev = ()=> setIndex((index-1+projects.length)%projects.length);

return(

<>

{/* 🔥 FEATURED PROJECT */}

<section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">

<img
src={projects[0].img}
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/80"></div>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="relative text-center max-w-3xl px-6"
>

<p className="text-pink-500 uppercase tracking-[4px] mb-4">
Featured Project
</p>

<h1 className="text-5xl md:text-6xl font-bold mb-4">
{projects[0].title}
</h1>

<p className="text-gray-300 mb-6">
{projects[0].desc}
</p>

<button
onClick={()=>setIndex(0)}
className="bg-pink-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 transition shadow-lg shadow-pink-500/40"
>
View Project
</button>

</motion.div>

</section>


{/* 🔥 PORTFOLIO */}

<section className="py-24 bg-black text-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<p className="text-pink-500 uppercase tracking-[4px] mb-4">
Our Portfolio
</p>

<h2 className="text-4xl md:text-5xl font-bold">
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
className="relative group overflow-hidden cursor-pointer"
onClick={()=>setIndex(i)}
>

<img
src={project.img}
className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-700"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-pink-900/20 opacity-0 group-hover:opacity-100 transition flex items-end p-6">

<div>

<h3 className="text-xl font-semibold">
{project.title}
</h3>

<p className="text-pink-500 text-sm">
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
className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
>

<button onClick={()=>setIndex(null)} className="absolute top-8 right-8 text-white hover:text-pink-500">
<X size={32}/>
</button>

<button onClick={prev} className="absolute left-6 text-white hover:text-pink-500">
<ChevronLeft size={40}/>
</button>

<motion.div
initial={{scale:0.9,opacity:0}}
animate={{scale:1,opacity:1}}
className="max-w-5xl text-center"
>

<img
src={projects[index].img}
className="max-h-[75vh] mx-auto rounded-xl mb-6 shadow-xl shadow-pink-500/20"
/>

<h3 className="text-2xl font-bold">
{projects[index].title}
</h3>

<p className="text-pink-500 mb-2">
{projects[index].location}
</p>

<p className="text-gray-300 max-w-xl mx-auto">
{projects[index].desc}
</p>

</motion.div>

<button onClick={next} className="absolute right-6 text-white hover:text-pink-500">
<ChevronRight size={40}/>
</button>

</motion.div>

)}

</AnimatePresence>


{/* 🔥 CTA */}

<section
className="relative py-32 text-center text-white bg-cover bg-center"
style={{
backgroundImage:"url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace)"
}}
>

<div className="absolute inset-0 bg-black/90"></div>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
className="relative z-10 max-w-2xl mx-auto px-6"
>

<h2 className="text-4xl md:text-5xl font-bold mb-6">
Start Your <span className="text-pink-500">Dream Project</span>
</h2>

<p className="text-gray-300 mb-8">
We design interiors that combine luxury, comfort and functionality.
</p>

<Link to="/contact-form">
<button className="bg-pink-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 transition shadow-lg shadow-pink-500/40">
Start Your Project
</button>
</Link>

</motion.div>

</section>

</>

);

}

export default OurWork;