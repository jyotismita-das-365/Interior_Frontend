import React, { useState } from "react";
import inte1 from "../assets/interiorWork/interior1.webp";
import inte2 from "../assets/interiorWork/interior2.webp";
import inte3 from "../assets/interiorWork/interior3.webp";
import inte4 from "../assets/interiorWork/interior4.webp";
const services = [
  {
    name: "Living Room Makeover",
    description:
      "Transform your living room with modern designs and cozy decor.",
    prices: {
      small: "$500",
      medium: "$900",
      large: "$1400",
    },
    image: inte1,
  },
  {
    name: "Bedroom Styling",
    description:
      "Create a relaxing and stylish bedroom tailored to your taste.",
    prices: {
      small: "$400",
      medium: "$800",
      large: "$1200",
    },
    image: inte2,
  },
  {
    name: "Kitchen Renovation",
    description: "Upgrade your kitchen with functional and elegant interiors.",
    prices: {
      small: "$700",
      medium: "$1200",
      large: "$1800",
    },
    image: inte3,
  },
  {
    name: "Bathroom Redesign",
    description: "Modernize your bathroom with sleek fixtures and decor.",
    prices: {
      small: "$350",
      medium: "$650",
      large: "$1000",
    },
    image: inte4,
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">
        <span className="text-black">Decor</span>{" "}
        <span className="text-teal-500">Interior</span>
      </h2>
      <div className="w-24 h-1 bg-teal-400 rounded-full mb-8 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {visibleServices.map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 w-full flex items-center justify-center p-4">
              <img
                src={service.image}
                alt={service.name}
                className="object-fill rounded-lg w-full md:h-56"
              />
            </div>
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="mb-4">
                <span className="font-medium text-gray-800">Price:</span>
                <ul className="mt-2 space-y-1">
                  <li>
                    <span className="text-sm text-gray-500">Small Room:</span>{" "}
                    <span className="font-bold text-green-600">
                      {service.prices.small}
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-500">Medium Room:</span>{" "}
                    <span className="font-bold text-green-600">
                      {service.prices.medium}
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-500">Large Room:</span>{" "}
                    <span className="font-bold text-green-600">
                      {service.prices.large}
                    </span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-2 px-4 bg-teal-400 text-white rounded-lg font-semibold hover:bg-teal-500 transition duration-200 shadow-md">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        {!showAll && (
          <button
            className="py-2 px-6 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition duration-200 shadow-md"
            onClick={() => setShowAll(true)}
          >
            View More
          </button>
        )}
        {showAll && (
          <button
            className="py-2 px-6 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition duration-200 shadow-md"
            onClick={() => setShowAll(false)}
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
}
