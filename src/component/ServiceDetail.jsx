import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/servicesData";
import { div } from "framer-motion/client";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service)
    return <div className="p-10 text-white">Service not found.</div>;

  return (
    <div>
      <div className="p-10 text-white text-center">
        <Link
          to="/services"
          className="text-blue-400 underline mb-5 inline-block"
        >
          ← Back to Services
        </Link>
        <img
          src={service.img}
          alt={service.title}
          className="w-full max-w-md mx-auto h-60 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg">{service.desc}</p>
        <p className="mt-4">
          Here you can add more detailed info about this service later...
        </p>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in crafting bespoke web development solutions. From
              cutting-edge front-end and back-end solutions to user-centric
              design, we deliver an unmatched experience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front-end Technology */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Front-end Technology
                  </h2>
                </div>
                <p className="text-gray-600">
                  We offer advanced front-end development services to transform
                  your product into a user-centric masterpiece. By leveraging
                  our front-end tech solutions, your product will benefit from
                  enhanced usability, intuitive navigation, and visually
                  stunning interfaces, ensuring a top-notch user experience.
                </p>
              </div>
            </div>

            {/* Back-end Technology */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Back-end Technology
                  </h2>
                </div>
                <p className="text-gray-600">
                  Our expert team makes the most of state-of-the-art
                  technologies to build a powerful and scalable back end,
                  enhancing performance, security, and data management. From
                  efficient databases to robust APIs, we ensure smooth
                  integration for a reliable and dynamic user experience.
                </p>
              </div>
            </div>

            {/* Cloud Support */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Cloud Support
                  </h2>
                </div>
                <p className="text-gray-600">
                  With our powerful cloud solutions, we offer scalability and
                  flexibility, allowing your product to seamlessly adapt to
                  changing demands. Experience unparalleled growth and success
                  as we optimize your product's infrastructure through our
                  exceptional cloud services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
