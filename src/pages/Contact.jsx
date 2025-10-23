import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-4">
      {/* Top Info Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition">
          <h3 className="text-lg font-semibold mb-2">Call to ask any question</h3>
          <p className="text-gray-300 text-sm">+91 7073536947</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition">
          <h3 className="text-lg font-semibold mb-2">Email to get free quote</h3>
          <p className="text-gray-300 text-sm">unimentsolutionsllp@gmail.com</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition">
          <h3 className="text-lg font-semibold mb-2">Visit our office</h3>
          <p className="text-gray-300 text-sm">Jaipur (Exact address will be added)</p>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2 text-center">Get in Touch</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-semibold text-white"
          >
            Contact
          </button>
        </form>

        {/* Map Embed (You can replace src later) */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8346540200294!2d75.78727047463512!3d26.84841467667985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b6e0e3df97%3A0x9cfd0786bdbb55a!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1698484026793!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
