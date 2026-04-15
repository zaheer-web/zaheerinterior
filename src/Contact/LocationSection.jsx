import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {

const address = "25, Avas Vikas, Civil Lines, Moradabad 244001";

return (

<section className="relative py-28 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

{/* 🔥 SOFT GLOW */}
<div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/40 blur-[160px] rounded-full" />
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-300/30 blur-[160px] rounded-full" />

<div className="relative max-w-7xl mx-auto px-6">

{/* HEADING */}
<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
className="text-center mb-20"
>

<h2 className="text-4xl md:text-5xl font-extrabold">
Our <span className="text-black">Location</span>
</h2>

<p className="text-gray-600 mt-6 max-w-xl mx-auto">
Visit our studio and discuss your dream interior project with us.
</p>

</motion.div>


{/* LAYOUT */}
<div className="grid lg:grid-cols-2 gap-12 items-center">


{/* 🔥 MAP */}
<motion.div
initial={{opacity:0,scale:0.95}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.8}}
className="rounded-3xl overflow-hidden border border-pink-100 shadow-lg"
>

<iframe
src="https://maps.google.com/maps?q=25%20Avas%20Vikas%20Civil%20Lines%20Moradabad%20244001&t=&z=15&ie=UTF8&iwloc=&output=embed"
className="w-full h-[400px] md:h-[520px] border-0"
loading="lazy"
title="Moradabad Office Location"
/>

</motion.div>


{/* 🔥 ADDRESS CARD */}
<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
className="p-10 rounded-3xl bg-white border border-pink-100 shadow-lg hover:shadow-pink-200/50 transition"
>

<div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-pink-100 text-pink-300 mb-8">

<MapPin size={28}/>

</div>


<h3 className="text-2xl font-semibold mb-4 text-gray-900">
Pink Roof Interiors
</h3>


<p className="text-gray-600 leading-relaxed mb-6">
25, Avas Vikas <br/>
Civil Lines <br/>
Moradabad – 244001 <br/>
Uttar Pradesh, India
</p>


<a
href="https://www.google.com/maps/search/?api=1&query=25+Avas+Vikas+Civil+Lines+Moradabad+244001"
target="_blank"
rel="noreferrer"
className="inline-block bg-pink-300 hover:bg-pink-400 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md shadow-pink-300/40"
>

Open in Google Maps

</a>

</motion.div>

</div>

</div>

</section>

)

}

export default LocationSection;