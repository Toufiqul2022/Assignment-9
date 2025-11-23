import React from "react";
import { FaSnowflake, FaPaw } from "react-icons/fa";
import { GiWinterHat } from "react-icons/gi";
import { PiDropFill } from "react-icons/pi";

const CareTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FaSnowflake className="text-cyan-500 text-4xl" />,
      title: "Create a Cozy Warm Zone",
      description:
        "Set up a warm corner with soft bedding where your pet can rest comfortably. Keep them away from cold tiles and drafts.",
    },
    {
      id: 2,
      icon: <FaPaw className="text-pink-500 text-4xl" />,
      title: "Protect Sensitive Paws",
      description:
        "Use protective paw wax or booties before going outside to prevent dryness and irritation from snow and ice.",
    },
    {
      id: 3,
      icon: <GiWinterHat className="text-yellow-500 text-4xl" />,
      title: "Reduce Outdoor Exposure",
      description:
        "Limit your pet’s time outside on freezing days. Keep walks short to prevent cold-related issues and discomfort.",
    },
    {
      id: 4,
      icon: <PiDropFill className="text-blue-500 text-4xl" />,
      title: "Boost Hydration & Diet",
      description:
        "Increase access to fresh water and provide nutrient-rich meals to help maintain energy and body warmth.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold text-purple-700 mb-10">
        Winter Care Tips for Pets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border"
          >
            <div className="mb-4">{tip.icon}</div>

            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              {tip.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareTips;
