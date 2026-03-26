import React from "react";
import "./App.css";
import "./index.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./pages/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About1 from "./pages/About1";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ContactForm from "./Contact/ContactForm";
import GallerySection from "./Gallery/GalleryGrid";

/* ADMIN */
import Dashboard from "../src/adminDeshboard/Dashboard";

/* TOAST */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {!hideLayout && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/gallery-grid" element={<GallerySection />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Dashboard />} />

      </Routes>

      {!hideLayout && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;