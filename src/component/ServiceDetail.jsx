import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/servicesData";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) return <div className="p-10 text-white">Service not found.</div>;

  return (
    <div className="p-10 text-white text-center">
      <Link to="/services" className="text-blue-400 underline mb-5 inline-block">
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
  );
}
