import React from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesData";

export default function Services() {
  return (
    <div className="p-10 text-white text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Link
          to={`/service/${service.id}`}
          key={service.id}
          className="bg-gray-800 rounded-lg p-5 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{service.title}</h2>
          <p>{service.desc}</p>
        </Link>
      ))}
    </div>
  );
}
