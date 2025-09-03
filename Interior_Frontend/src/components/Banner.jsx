import React from "react";
import logo from "../assets/logo/banner.jpg";

const Banner = () => {
  return (
    <div className="relative  py-16 px-6 flex flex-col items-center justify-center shadow-2xl overflow-hidden h-96">
      {/* Background Photo */}
      <img
        src={logo}
        alt="Interior Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Slogan with fade-in animation */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg animate-fade-in z-30">
        Transform Your Home, Elevate Your Life
      </h1>
      <p className="text-lg md:text-xl text-white text-center mb-8 max-w-xl animate-fade-in delay-200 z-30">
        We Create Personalized interiors that reflect your taste and enhance your lifestyle.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in delay-400 z-30">
        Explore Designs
      </button>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 1s ease forwards;
          }
          .animate-fade-in.delay-200 {
            animation-delay: 0.2s;
          }
          .animate-fade-in.delay-400 {
            animation-delay: 0.4s;
          }
        `}
            </style>
          </div>
        );
      };
      
      export default Banner;
