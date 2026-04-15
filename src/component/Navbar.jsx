import { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../img/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 👇 Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Desktop NavLink (dynamic)
  const navLinkClass = ({ isActive }) =>
    isActive
      ? `${
          scrolled ? "text-black" : "text-white"
        } border-b-2 border-pink-400 pb-1 transition-colors duration-300`
      : `${
          scrolled ? "text-black" : "text-white"
        } hover:text-pink-400 transition duration-300`;

  // 👇 Mobile NavLink (always black)
  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-black border-b-2 border-pink-400 pb-1"
      : "text-black hover:text-pink-400 transition duration-300";

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-pink-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <img
            src={logo}
            alt="logo"
            className="h-10 md:h-12 w-auto object-contain pt-2"
          />

          <div className="flex items-center gap-1 leading-none">
            <span
              className={`text-base md:text-lg font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Pink Roof
            </span>
            <span
              className={`text-sm md:text-base font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
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

        {/* Button */}
        <a
          href="https://wa.me/918563980030?text=Hello%2C%20I%20want%20interior%20design%20consultation."
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 
            bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 
            text-black px-6 py-2 rounded-full font-semibold 
            shadow-md hover:shadow-pink-300/40 transition"
          >
            GET STARTED <Plus size={18} />
          </motion.button>
        </a>

        {/* Mobile Icon */}
        <div
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
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
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-pink-200 shadow-lg"
        >
          <ul className="flex flex-col gap-6 p-6 font-semibold text-center">

            <NavLink to="/" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>HOME</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>SERVICES</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>ABOUT</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>GALLERY</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>CONTACT</NavLink>

            {/* Mobile Button */}
            <a
              href="https://wa.me/918563980030?text=Hello%2C%20I%20want%20interior%20design%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <button className="mt-4 w-full flex justify-center items-center gap-2 
              bg-pink-300 text-white px-6 py-3 rounded-full font-semibold 
              shadow-md hover:bg-pink-400 transition">
                GET STARTED <Plus size={18} />
              </button>
            </a>

          </ul>
        </motion.div>
      )}
    </nav>
  );
}