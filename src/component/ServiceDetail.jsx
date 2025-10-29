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
       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wondering how we help our clients? Take a look at our team's process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          
          {/* Step 1 */}
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-24 bg-gray-300 z-0"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                    </div>
                    
                    {/* Mobile Icon */}
                    <div className="lg:hidden p-3 rounded-xl bg-blue-100">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      
                      {/* Desktop Icon */}
                      <div className="hidden lg:block p-3 rounded-xl bg-blue-100">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900">
                        Discovery And Planning
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      We initiate the process by effective collaboration to gain a deep understanding of your business objectives, target audience, and project requirements and then focus on building a strategic roadmap.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-24 bg-gray-300 z-0"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">02</span>
                    </div>
                    
                    {/* Mobile Icon */}
                    <div className="lg:hidden p-3 rounded-xl bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      
                      {/* Desktop Icon */}
                      <div className="hidden lg:block p-3 rounded-xl bg-green-100">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900">
                        Design And Development
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Based on the planning and discovery, our skilled designers work on wireframes and prototypes to visualize the final website, incorporating the brand identity and user experience principles. Our expert web developers bring the design to life, utilizing clean coding practices, responsive frameworks, and robust backend systems to deliver a high-performing website.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-24 bg-gray-300 z-0"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">03</span>
                    </div>
                    
                    {/* Mobile Icon */}
                    <div className="lg:hidden p-3 rounded-xl bg-purple-100">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      
                      {/* Desktop Icon */}
                      <div className="hidden lg:block p-3 rounded-xl bg-purple-100">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900">
                        Testing And Optimization
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Our skilled team conducts rigorous testing to identify and resolve any potential issues. Through meticulous optimization, we aim to deliver optimal
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">04</span>
                    </div>
                    
                    {/* Mobile Icon */}
                    <div className="lg:hidden p-3 rounded-xl bg-orange-100">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      
                      {/* Desktop Icon */}
                      <div className="hidden lg:block p-3 rounded-xl bg-orange-100">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900">
                        Deployment And Support
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      We provide end-to-end support during the deployment phase, ensuring a smooth and seamless launch of your web application. Great remains
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's work together to bring your vision to life with our proven process.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
