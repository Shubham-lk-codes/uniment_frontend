import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const metricsRef = useRef(null);
  const clientsRef = useRef(null);
  const testimonialRef = useRef(null);

  const testimonials = [
    {
      quote: "Fantastic service! The team is very professional and knowledgeable. They exceeded all our expectations.",
      name: "Jane Smith",
      position: "Marketing Director, Business Inc."
    },
    {
      quote: "Working with this team transformed our business. Their expertise and dedication are unmatched.",
      name: "Michael Chen",
      position: "CEO, Tech Solutions"
    },
    {
      quote: "Incredible results in record time. They truly understand what it takes to deliver excellence.",
      name: "Sarah Johnson",
      position: "Founder, Creative Studio"
    }
  ];

  const metrics = [
    { value: 100, label: "Happy Clients", suffix: "+" },
    { value: 200, label: "Projects Completed", suffix: "+" },
    { value: 50, label: "Awards Won", suffix: "+" }
  ];

  const clients = ["Acme Corp", "TechVision", "GlobalBrand", "Innovate Co", "NextGen", "FutureLab"];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (metricsRef.current) observer.observe(metricsRef.current);
    if (clientsRef.current) observer.observe(clientsRef.current);

    return () => observer.disconnect();
  }, []);

  // Counter animation for metrics
  const [counters, setCounters] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (isVisible.metrics) {
      metrics.forEach((metric, index) => {
        let start = 0;
        const end = metric.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = end;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }
        }, 16);
      });
    }
  }, [isVisible.metrics]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20 overflow-hidden">
      {/* Section Title with fade-in animation */}
      <div className="animate-fade-in-down">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16 rounded-full"></div>
      </div>

      {/* Testimonial Box with slide animation */}
      <div 
        ref={testimonialRef}
        className="max-w-4xl mx-auto relative animate-fade-in-up"
      >
        <div className="absolute -top-6 -left-6 text-blue-500 opacity-20">
          <Quote size={80} />
        </div>
        
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-12 shadow-2xl border border-gray-700 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse-slow"></div>
          
          <div className="relative z-10">
            <div key={currentTestimonial} className="animate-fade-in">
              <p className="text-xl md:text-2xl italic mb-8 text-gray-100 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-8">
              <button
                onClick={prevTestimonial}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-4 rounded-full font-medium transition-all transform hover:scale-110 shadow-lg hover:shadow-blue-500/50"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "w-8 bg-blue-500"
                        : "w-2 bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-4 rounded-full font-medium transition-all transform hover:scale-110 shadow-lg hover:shadow-blue-500/50"
              >
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics with counter animation */}
      <div id="metrics" ref={metricsRef} className="mt-28">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Success Metrics
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                isVisible.metrics ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <h3 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:scale-110">
                  {counters[index]}{metric.suffix}
                </h3>
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <p className="text-gray-300 text-lg font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Clients Section with stagger animation */}
      <div id="clients" ref={clientsRef} className="mt-28">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Trusted By Industry Leaders
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16 rounded-full"></div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl w-44 border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-110 hover:-rotate-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer ${
                isVisible.clients ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <p className="text-lg font-bold text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {client}
                </p>
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}