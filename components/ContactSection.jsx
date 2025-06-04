import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-[120px]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* 📍 Contact Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello.
          </p>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li><strong>📍 Address:</strong> Ridgeways Mall, Nairobi, Kenya</li>
            <li><strong>📧 Email:</strong> support@jayscloset.com</li>
            <li><strong>📞 Phone:</strong> +254 712 345 678</li>
            <li><strong>🕒 Opening Hours:</strong> Mon - Sat: 9am - 6pm</li>
          </ul>

          {/* 🗺️ Map */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Us Here:</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9060655700964!2d36.8372930736468!3d-1.2252576355597065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f163b412434ed%3A0xfa203b93607cec53!2sRidgeways%20Mall!5e0!3m2!1sen!2ske!4v1748567274946!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        {/* ✉️ Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
