import React from "react";

export default function Testimonials() {
  return (
    <div className="text-white bg-gray-900 py-16 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What Our Clients Say
      </h2>

      {/* Testimonial Box */}
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
        <p className="text-lg italic mb-6">
          "Fantastic service! The team is very professional and knowledgeable."
        </p>
        <h3 className="text-xl font-semibold">Jane Smith</h3>
        <p className="text-gray-400">Marketing Director, Business Inc.</p>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition-all">
            Previous
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition-all">
            Next
          </button>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our Success Metrics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-5xl font-bold text-blue-500">100+</h3>
            <p className="text-gray-300 mt-2 text-lg">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-blue-500">200+</h3>
            <p className="text-gray-300 mt-2 text-lg">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-blue-500">50+</h3>
            <p className="text-gray-300 mt-2 text-lg">Awards Won</p>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Clients</h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-xl w-40 hover:bg-gray-700 transition-all">
            <p className="text-lg font-semibold">Client 1</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl w-40 hover:bg-gray-700 transition-all">
            <p className="text-lg font-semibold">Client 2</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl w-40 hover:bg-gray-700 transition-all">
            <p className="text-lg font-semibold">Client 3</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl w-40 hover:bg-gray-700 transition-all">
            <p className="text-lg font-semibold">Client 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
