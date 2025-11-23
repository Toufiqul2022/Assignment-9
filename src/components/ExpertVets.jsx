import React from "react";

const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Hannah Reed",
      specialty: "Senior Pet Winter Care Specialist",
      experience: "10 Years Experience",
      image: "https://i.ibb.co.com/C56mxZbN/expert-2.jpg",
    },
    {
      id: 2,
      name: "Dr. Mason Cole",
      specialty: "Cold Climate Pet Nutrition Expert",
      experience: "7 Years Experience",
      image: "https://i.ibb.co.com/5xYZZsgs/expert-1.jpg",
    },
    {
      id: 3,
      name: "Dr. Emily Brooks",
      specialty: "Winter Allergy & Skin Treatment",
      experience: "6 Years Experience",
      image: "https://i.ibb.co.com/bMpFkSCd/expert-3.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-center text-3xl font-bold text-purple-700 mb-10">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vets.map((vet) => (
          <div key={vet.id} className="bg-white rounded-xl shadow-md">
            <img
              src={vet.image}
              alt={vet.name}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-1">
                {vet.name}
              </h3>

              <p className="text-gray-700 font-medium">{vet.specialty}</p>

              <p className="text-gray-500 text-sm mt-2">{vet.experience}</p>

              <button className="w-full mt-6 bg-cyan-500 hover:bg-cyan-700 text-white py-2 rounded-md">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;
