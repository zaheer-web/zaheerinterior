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

      {/* FLOATING BUTTON */}
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
              className="bg-pink-400 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Instagram size={22}/>
            </a>

            <a
              href="#"
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Facebook size={22}/>
            </a>
          </>
        )}

        <button
          onClick={()=>setOpen(!open)}
          className="bg-pink-400 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
        >
          <Plus size={22}/>
        </button>

      </div>


      {/* FOOTER */}
      <footer className="relative bg-white text-gray-700 pt-12 pb-10 overflow-hidden border-t border-pink-200">

        {/* Glow */}
        <div className="absolute -top-24 left-0 w-96 h-96 bg-pink-200/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/30 blur-[140px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          {/* Company */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
          >

            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src={logo} alt="logo" className="h-12" />

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Pink Roof
                </h2>
                <span className="text-pink-400 text-sm font-semibold">
                  Interiors
                </span>
              </div>
            </div>

            <p className="leading-relaxed max-w-sm mx-auto md:mx-0 text-gray-600">
              We design elegant and functional interior spaces for homes and
              businesses. Transforming ideas into luxury living experiences.
            </p>

            {/* Social */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a className="bg-white border border-gray-200 p-3 rounded-lg hover:bg-pink-400 hover:text-white transition">
                <Facebook size={18}/>
              </a>
              <a className="bg-white border border-gray-200 p-3 rounded-lg hover:bg-pink-400 hover:text-white transition">
                <Instagram size={18}/>
              </a>
              <a className="bg-white border border-gray-200 p-3 rounded-lg hover:bg-pink-400 hover:text-white transition">
                <Linkedin size={18}/>
              </a>
            </div>

          </motion.div>


          {/* Links */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
          >
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-400">About</Link></li>
              <li><Link to="/services" className="hover:text-pink-400">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-pink-400">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400">Contact</Link></li>
            </ul>
          </motion.div>


          {/* Services */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
          >
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-pink-400">Living Room Design</li>
              <li className="hover:text-pink-400">Bedroom Interior</li>
              <li className="hover:text-pink-400">Modular Kitchen</li>
              <li className="hover:text-pink-400">Office Interior</li>
              <li className="hover:text-pink-400">Space Planning</li>
            </ul>
          </motion.div>


          {/* Contact */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.9 }}
          >
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-600">

              <a href="tel:+918563980030" className="flex gap-3 hover:text-pink-400">
                <Phone size={18}/>
                <span>+91-8563980030</span>
              </a>

              <a href="mailto:contact.pinkroof@gmail.com" className="flex gap-3 hover:text-pink-400">
                <Mail size={18}/>
                <span>contact.pinkroof@gmail.com</span>
              </a>

              <div className="flex gap-3">
                <MapPin size={18}/>
                <span>Moradabad, India</span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}
        <div className="border-t border-pink-200 mt-16 pt-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Pink Roof Interiors. All Rights Reserved.
          </p>
        </div>

      </footer>

    </>
  );
}