import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import { MapPin, Phone, Mail } from "lucide-react";

const Option = [
  "Interior Design Consultation",
  "Residential Interior",
  "Office / Commercial Interior",
  "Renovation / Remodeling",
  "Other Inquiry"
];

const ContactForm = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {

    if (!formData.firstName.trim())
      return toast.error("First name is required");

    if (!formData.lastName.trim())
      return toast.error("Last name is required");

    if (!formData.email)
      return toast.error("Email is required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      return toast.error("Invalid email format");

    if (!formData.phone || formData.phone.length < 10)
      return toast.error("Enter valid phone number");

    if (!formData.subject)
      return toast.error("Please select option");

    if (!formData.message.trim())
      return toast.error("Message is required");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      toast.success("Message sent successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      {/* 🔥 GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/40 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-300/30 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* 🔥 LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Let's <span className="text-black">Talk</span>
            </h2>

            <p className="text-gray-600 mb-10 max-w-lg">
              Have a project in mind? Let’s create something beautiful together.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-pink-100 text-pink-300">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-700">Your City, India</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-pink-100 text-pink-300">
                  <Phone size={20} />
                </div>
                <p className="text-gray-700">91 85639 80030</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-pink-100 text-pink-300">
                  <Mail size={20} />
                </div>
                <p className="text-gray-700">contact.pinkroof@gmail.com</p>
              </div>

            </div>

          </motion.div>

          {/* 🔥 FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-2xl bg-white border border-pink-100 shadow-lg space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border border-pink-100 p-4 rounded-lg focus:border-pink-300 outline-none"
              />

              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border border-pink-100 p-4 rounded-lg focus:border-pink-300 outline-none"
              />

              <div>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputStyle={{
                    width: "100%",
                    height: "56px",
                    borderRadius: "10px",
                    border: "1px solid #fbcfe8"
                  }}
                  buttonStyle={{
                    border: "1px solid #fbcfe8"
                  }}
                />
              </div>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-pink-100 p-4 rounded-lg focus:border-pink-300 outline-none"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-pink-100 p-4 rounded-lg md:col-span-2 focus:border-pink-300 outline-none"
              >
                <option value="">Select Option</option>
                {Option.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your project..."
              className="border border-pink-100 p-4 rounded-lg focus:border-pink-300 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-400 hover:bg-pink-500 text-white py-4 w-full rounded-lg font-semibold transition shadow-md shadow-pink-300/40"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;