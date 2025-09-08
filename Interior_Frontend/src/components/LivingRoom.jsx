import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What materials are best for modular kitchens?",
    answer:
      "Plywood, MDF, and particle board are commonly used. Plywood is preferred for its durability and moisture resistance.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Typically, modular kitchen installation takes 2-4 weeks depending on design and customization.",
  },
  {
    question: "Can I customize the design?",
    answer:
      "Yes, modular kitchens are highly customizable to fit your space, style, and storage needs.",
  },
];

const kitchenImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
];

export default function ModularKitchen() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 py-8 px-2 sm:px-6 md:px-12">
      {/* Title Box */}
      <div className="flex justify-center mb-10">
        <div className="bg-white shadow-2xl rounded-2xl px-6 py-6 sm:px-12 sm:py-8 text-center animate-fade-in-up w-full max-w-2xl border border-blue-100">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-indigo-700 mb-3 tracking-wide drop-shadow-lg">
            Modular Kitchen Collection
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-medium">
            Discover modern designs for your dream kitchen
          </p>
        </div>
      </div>

      {/* Kitchen Collection Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mb-12 animate-fade-in-up">
        {kitchenImages.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 border-2 border-blue-100 bg-white"
          >
            <img
              src={img}
              alt={`Modular Kitchen ${idx + 1}`}
              className="w-full h-56 sm:h-64 md:h-72 object-cover transition duration-300 hover:brightness-95"
            />
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-12 border border-indigo-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-indigo-700">Why Choose Our Modular Kitchens?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="flex items-start gap-4 bg-blue-50 rounded-lg p-3 shadow-sm hover:bg-blue-100 transition">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <span className="text-gray-700 font-medium">Premium quality materials for durability</span>
            </li>
            <li className="flex items-start gap-4 bg-blue-50 rounded-lg p-3 shadow-sm hover:bg-blue-100 transition">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <span className="text-gray-700 font-medium">Customizable layouts and finishes</span>
            </li>
            <li className="flex items-start gap-4 bg-blue-50 rounded-lg p-3 shadow-sm hover:bg-blue-100 transition">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <span className="text-gray-700 font-medium">Expert installation and after-sales support</span>
            </li>
            <li className="flex items-start gap-4 bg-blue-50 rounded-lg p-3 shadow-sm hover:bg-blue-100 transition">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <span className="text-gray-700 font-medium">Space-saving and ergonomic designs</span>
            </li>
          </ul>
        </div>
      </div>

      {/* New Content: Kitchen Layouts */}
      <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-12 border border-indigo-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-indigo-700">Popular Kitchen Layouts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="L-Shaped"
                className="rounded-xl shadow-lg mb-4 w-full h-32 object-cover"
              />
              <h4 className="font-bold text-indigo-600 text-lg mb-2">L-Shaped</h4>
              <p className="text-gray-600">Efficient use of space, ideal for small and medium kitchens.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1503389152951-9c3d8e1e8d43?auto=format&fit=crop&w=400&q=80"
                alt="U-Shaped"
                className="rounded-xl shadow-lg mb-4 w-full h-32 object-cover"
              />
              <h4 className="font-bold text-indigo-600 text-lg mb-2">U-Shaped</h4>
              <p className="text-gray-600">Maximum storage and counter space for busy kitchens.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80"
                alt="Island"
                className="rounded-xl shadow-lg mb-4 w-full h-32 object-cover"
              />
              <h4 className="font-bold text-indigo-600 text-lg mb-2">Island</h4>
              <p className="text-gray-600">Perfect for entertaining and open-plan living spaces.</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Content: Sustainability */}
      <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-12 border border-indigo-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-indigo-700">Sustainable Choices</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="flex items-center gap-4 bg-green-50 rounded-lg p-3 shadow-sm hover:bg-green-100 transition">
              <span className="text-green-600 font-bold text-2xl">🌱</span>
              <span className="text-gray-700 font-medium">Eco-friendly materials and finishes</span>
            </li>
            <li className="flex items-center gap-4 bg-green-50 rounded-lg p-3 shadow-sm hover:bg-green-100 transition">
              <span className="text-green-600 font-bold text-2xl">💡</span>
              <span className="text-gray-700 font-medium">Energy-efficient lighting solutions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 animate-fade-in-up w-full border border-indigo-100">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-6 text-indigo-700">Frequently Asked Questions</h3>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-2">
              <button
                className={`w-full flex items-center justify-between font-semibold text-gray-700 py-3 px-3 sm:px-5 rounded-lg focus:outline-none focus:bg-blue-50 transition border border-blue-100 shadow-sm hover:bg-blue-50 ${
                  openIndex === idx ? "bg-blue-50" : "bg-white"
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-left">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp size={24} className="text-blue-500 transition-transform duration-300" />
                ) : (
                  <ChevronDown size={24} className="text-gray-400 transition-transform duration-300" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-3 sm:px-5 py-3 text-gray-600 bg-blue-50 rounded-b-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
