import React, { useState } from "react";
import inte1 from "../assets/interiorWork/interior1.webp";
import inte2 from "../assets/interiorWork/interior2.webp";
import inte3 from "../assets/interiorWork/interior3.webp";
import inte4 from "../assets/interiorWork/interior4.webp";
const services = [
  {
    name: "Living Room Transformation",
    description:
      "Upgrade your living room into a stylish, functional, and cozy space with our expert interior design solutions.",
    features: [
      "Smart & modern furniture arrangement",
      "Mood-enhancing custom lighting",
      "Personalized color palette to match your lifestyle",
    ],
    image: inte1,
  },
  {
    name: "Bedroom Makeover",
    description:
      "Turn your bedroom into a peaceful retreat with modern designs, soothing colors, and cozy decor.",
    features: [
      "Smart space-saving furniture",
      "Elegant wall & ceiling decor",
      "Personalized theme designs"
    ],
    image: inte2,
  },
  {
    name: "Modular Kitchen Makeover",
    description: "Redesign your kitchen with modern layouts, smart storage, and elegant finishes that make cooking a joy.",
    features: [
      "Modular & space-saving designs",
      "Premium countertop & finishes",
      "Smart storage solutions",
    ],
    image: inte3,
  },
  {
    name: "Bathroom Makeover",
    description: "Transform your bathroom into a stylish, functional, and relaxing space with our modern design solutions.",
    features: [
      "Premium fittings & fixtures",
      "Space-saving smart storage",
      "Elegant wall & floor finishes",
    ],
    image: inte4,
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen py-8 px-2 sm:px-4 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-800">
        <span className="text-black">Decor</span>{" "}
        <span className="text-orange-400">World Interior</span>
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-slate-700 rounded-full mb-6 sm:mb-8 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl">
        {visibleServices.map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 w-full flex items-center justify-center p-0">
              <img
                src={service.image}
                alt={service.name}
                className="object-cover rounded-lg w-full h-64 sm:h-80 md:h-full"
                style={{ minHeight: "250px", maxHeight: "400px" }}
              />
            </div>
            <div className="md:w-1/2 w-full p-4 sm:p-6 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
              <div className="mb-3 sm:mb-4">
                <span className="font-medium text-gray-800">Features:</span>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-xs sm:text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-2 px-3 sm:px-4 bg-orange-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition duration-200 shadow-md text-sm sm:text-base">
                Book Your Makeover
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-8">
        {!showAll && (
          <button
            className="py-2 px-4 sm:px-6 bg-black text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200 shadow-md text-sm sm:text-base"
            onClick={() => setShowAll(true)}
          >
            View More
          </button>
        )}
        {showAll && (
          <button
            className="py-2 px-4 sm:px-6 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition duration-200 shadow-md text-sm sm:text-base"
            onClick={() => setShowAll(false)}
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
}
