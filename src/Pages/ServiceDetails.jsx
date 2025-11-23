import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  const findData = services.find((service) => service.serviceId === Number(id));
  console.log(findData);

  return <div>
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={findData?.image}
        className="w-80 rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-3">
        {findData?.serviceName}
      </h1>

      <p className="text-lg mb-4">{findData?.description}</p>

      <div className="flex items-center gap-4 mb-4">
        <span className="badge badge-secondary text-lg">
          Rating: {findData?.rating}
        </span>
        <span className="badge badge-outline text-lg">
          Category: {findData?.category}
        </span>
      </div>

      <h2 className="text-2xl font-semibold mb-2">
        Price: ${findData?.price}
      </h2>

      <p className="font-semibold">
        Slots Available: {findData?.slotsAvailable}
      </p>
    </div>
  </div>;
};

export default ServiceDetails;
