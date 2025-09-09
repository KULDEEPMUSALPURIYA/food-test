import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-extrabold text-yellow-400">Contact Us</h1>
        <p className="mt-2 text-gray-300">
          We'd love to hear from you! Get in touch with us for reservations,
          feedback, or queries.
        </p>
      </header>

      {/* Contact Info + Form */}
      <section className="grid md:grid-cols-2 gap-10 px-6 lg:px-20 py-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">Get in Touch</h2>
          <p className="text-gray-300">
            Have questions? Reach out and we’ll get back to you as soon as
            possible.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              123 Food & TEST, Jaipur, India
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-yellow-400 text-xl" />
              +91 9772272826
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 text-xl" />
              musalpuriya123@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-6 lg:px-20 pb-10">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Find Us Here</h2>
        <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.924!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3d1c4e3c!2sJaipur!5e0!3m2!1sen!2sin!4v1670000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 py-6 border-t border-gray-700 text-center text-gray-400">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </footer>
    </div>
  );
}
