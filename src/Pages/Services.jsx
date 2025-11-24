import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import 'animate.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Specialized Veterinary & Pet Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20 py-10 animate__animated animate__heartBeat">
      {services.map((service) => (
        <div key={service?.serviceId} className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src={service?.image}
              alt={service?.serviceName}
              className="h-56 w-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {service?.serviceName}
              <div className="badge badge-secondary ml-2">
                {service?.rating}
              </div>
            </h2>

            <div className="mt-2 font-semibold">Price: ${service?.price}</div>

            <div className="card-actions justify-around mt-3">
              <div className="badge badge-outline">{service?.category}</div>
              <div className="badge badge-outline">
                Slots: {service?.slotsAvailable}
              </div>
            </div>
          </div>
          <div className="flex justify-end mb-5">
            <Link to={`/service/${service?.serviceId}`}>
              <button className="btn bg-gradient-to-r from-gray-600 to-gray-300 text-lg font-bold text-white hover:opacity-90 transition py-4">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Services;
