import { useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../img/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-pink-500 border-b-2 border-pink-500 pb-1"
      : "text-gray-300 hover:text-pink-400 transition duration-300";

  return (
    <nav className="fixed w-full top-0 left-0 z-50 
      bg-gradient-to-r from-black via-black/90 to-black/80 
      backdrop-blur-xl border-b border-white/10
      before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] before:opacity-10 before:pointer-events-none">

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* 🔥 Logo + Name */}
        <Link to="/" className="flex items-center gap-3 group">

          {/* Logo */}
          <img
  src={logo}
  alt="logo"
  className="h-14 w-auto object-contain"
/>
          {/* Brand Name */}
          <div className="flex flex-col leading-tight">
            <span className="text-white text-lg font-bold tracking-wide group-hover:text-pink-400 transition">
              Pink Roof
            </span>
            <span className="text-pink-500 text-sm font-semibold tracking-widest">
              Interiors
            </span>
          </div>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold items-center">

          <NavLink to="/" className={navLinkClass}>HOME</NavLink>
          <NavLink to="/services" className={navLinkClass}>SERVICES</NavLink>
          <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
          <NavLink to="/gallery" className={navLinkClass}>GALLERY</NavLink>
          <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>

        </ul>

        {/* Desktop Button */}
        <a
          href="https://wa.me/919411096122?text=Hello%2C%20I%20want%20interior%20design%20consultation."
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="hidden md:flex items-center gap-2 
            bg-pink-500 text-black px-6 py-2 rounded-lg font-semibold 
            hover:bg-pink-400 transition shadow-lg shadow-pink-500/40"
          >
            GET STARTED <Plus size={18} />
          </motion.button>
        </a>

        {/* Hamburger */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X size={30} onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={30} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
        >
          <ul className="flex flex-col gap-6 p-6 font-semibold">

            <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>HOME</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navLinkClass}>SERVICES</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>ABOUT</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={navLinkClass}>GALLERY</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>CONTACT</NavLink>

            {/* Mobile Button */}
            <a
              href="https://wa.me/919411096122?text=Hello%2C%20I%20want%20interior%20design%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <button className="mt-4 w-full flex justify-center items-center gap-2 
              bg-pink-500 text-black px-6 py-3 rounded-lg font-semibold 
              hover:bg-pink-400 transition shadow-md shadow-pink-500/40">
                GET STARTED <Plus size={18} />
              </button>
            </a>

          </ul>
        </motion.div>
      )}
    </nav>
  );
}