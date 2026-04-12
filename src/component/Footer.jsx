import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Plus
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Footer() {

  const [open, setOpen] = useState(false);

  return (
    <>

      {/* FLOATING SOCIAL BUTTON */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">

        {open && (
          <>
            <a
              href="https://wa.me/918563980030"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <MessageCircle size={22}/>
            </a>

            <a
              href="https://www.instagram.com/m_a_architects_n_assoc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Instagram size={22}/>
            </a>

            <a
              href="https://www.facebook.com/profile.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Facebook size={22}/>
            </a>
          </>
        )}

        <button
          onClick={()=>setOpen(!open)}
          className="bg-pink-500 text-black p-4 rounded-full shadow-xl hover:scale-110 transition"
        >
          <Plus size={22}/>
        </button>

      </div>


      {/* FOOTER */}
      <footer className="relative bg-black text-gray-400 pt-12 pb-10 overflow-hidden">

        {/* Pink Glow */}
        <div className="absolute -top-24 left-0 w-96 h-96 bg-pink-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 blur-[140px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          {/* Company Info */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
          >

            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                src={logo}
                alt="logo"
                className="h-12 w-auto object-contain"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
                  Pink Roof
                </h2>
                <span className="text-pink-500 text-sm font-semibold">
                  Interiors
                </span>
              </div>
            </div>

            <p className="leading-relaxed max-w-sm mx-auto md:mx-0">
              We design elegant and functional interior spaces for homes and
              businesses. Transforming ideas into luxury living experiences.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a className="bg-white/10 p-3 rounded-lg hover:bg-pink-500 hover:text-black transition">
                <Facebook size={18}/>
              </a>

              <a className="bg-white/10 p-3 rounded-lg hover:bg-pink-500 hover:text-black transition">
                <Instagram size={18}/>
              </a>

              <a className="bg-white/10 p-3 rounded-lg hover:bg-pink-500 hover:text-black transition">
                <Linkedin size={18}/>
              </a>
            </div>

          </motion.div>


          {/* Quick Links */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
          >

            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
              <li><Link to="/services" className="hover:text-pink-500">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-pink-500">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-pink-500">Contact</Link></li>
            </ul>

          </motion.div>


          {/* Services */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
          >

            <h3 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-pink-500">Living Room Design</li>
              <li className="hover:text-pink-500">Bedroom Interior</li>
              <li className="hover:text-pink-500">Modular Kitchen</li>
              <li className="hover:text-pink-500">Office Interior</li>
              <li className="hover:text-pink-500">Space Planning</li>
            </ul>

          </motion.div>


          {/* Contact */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.9 }}
          >

            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h3>

            <div className="space-y-4">

              <a href="tel:+918563980030" className="flex gap-3 hover:text-pink-500">
                <Phone size={18}/>
                <span>+91-8563980030</span>
              </a>

              <a
                href="mailto:contact.pinkroof@gmail.com"
                className="flex gap-3 hover:text-pink-500"
              >
                <Mail size={18}/>
                <span>contact.pinkroof@gmail.com</span>
              </a>

              <a className="flex gap-3 hover:text-pink-500">
                <MapPin size={18}/>
                <span>Moradabad, India</span>
              </a>

            </div>

          </motion.div>

        </div>


        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Pink Roof Interiors. All Rights Reserved.
          </p>
        </div>

      </footer>

    </>
  );
}