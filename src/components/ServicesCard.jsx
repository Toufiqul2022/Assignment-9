import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ServicesCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-black text-center mb-10">
        Popular Winter Care Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 6).map((service) => (
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

      <div className="flex justify-center pt-6">
        <Link
          to="/services"
          className="btn bg-gradient-to-r from-gray-600 to-indigo-500 text-lg font-bold text-white hover:opacity-90 transition"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
