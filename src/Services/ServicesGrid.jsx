import React from "react"
import { motion } from "framer-motion"
import { FaCouch, FaTree, FaCity } from "react-icons/fa"
import { Md3dRotation } from "react-icons/md"

const services = [
{
title: "Interior Design",
icon: <FaCouch />,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
desc: "Interior design is more than decoration — it's about creating a harmonious and functional living space. We design interiors that reflect your personality while ensuring comfort, elegance and smart use of space."
},

{
title: "3D Visualization",
icon: <Md3dRotation />,
image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
desc: "Our 3D visualization services help you see your dream space before execution. We provide realistic previews so you can confidently make design decisions with clarity and precision."
},

{
title: "Landscape Design",
icon: <FaTree />,
image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
desc: "We design outdoor spaces that complement your interiors and architecture. Our landscape solutions create refreshing, beautiful and functional environments for relaxation and lifestyle enhancement."
},

{
title: "Luxury Interiors",
icon: <FaCity />,
image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
desc: "We specialize in creating luxurious interiors that combine premium materials, modern aesthetics and thoughtful detailing to deliver spaces that feel sophisticated, stylish and timeless."
}

]

const ServicesGrid = () => {

return (

<section className="relative py-15 bg-[#0c0c0c] text-white overflow-hidden">

{/* 🔥 Pink Glow */}
<div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 opacity-20 blur-[140px]" />
<div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-20 blur-[140px]" />

<div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">

{services.map((service,index)=>{

const isReverse = index % 2 !== 0

return(

<motion.div
key={index}
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.9,ease:"easeOut"}}
viewport={{once:true}}
className="grid md:grid-cols-2 gap-16 items-center"
>

{/* IMAGE */}

<motion.div
whileHover={{scale:1.06}}
transition={{duration:0.6}}
className={`${isReverse ? "md:order-2" : ""}`}
>

<img
src={service.image}
alt=""
className="rounded-2xl shadow-2xl shadow-pink-500/10"
/>

</motion.div>

{/* CONTENT */}

<motion.div
initial={{opacity:0,x:isReverse?120:-120}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className={`${isReverse ? "md:order-1" : ""} text-center md:text-left`}
>

{/* ICON */}

<motion.div
initial={{scale:0}}
whileInView={{scale:1}}
transition={{duration:0.6}}
className="text-4xl text-pink-500 mb-4 flex justify-center md:justify-start"
>

{service.icon}

</motion.div>

<h2 className="text-4xl font-bold mb-6">

{service.title}

</h2>

<p className="text-gray-300 mb-6 leading-relaxed">

{service.desc}

</p>

</motion.div>

</motion.div>

)

})}

</div>

</section>

)

}

export default ServicesGrid