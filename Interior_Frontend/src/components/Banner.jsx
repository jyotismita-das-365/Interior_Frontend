import React from "react";
import logo from "../assets/logo/banner.jpg";

const Banner = () => {
  return (
    <div className="relative py-16 px-6 flex flex-col items-center justify-center shadow-2xl overflow-hidden h-96">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 w-full h-full z-10 animate-bg" style={{background: "linear-gradient(120deg, #3b82f6 0%, #6366f1 100%)", opacity: 0.7}} />
      {/* Banner Image with gentle fade-in */}
      <img
        src={logo}
        alt="Interior Banner"
        className="absolute inset-0 w-full h-full object-cover z-20 animate-fade"
      />
      {/* Slogan with smooth slide-up */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 z-30 animate-slide-up">
        Transform Your Home, Elevate Your Life
      </h1>
      {/* Paragraph with fade-in */}
      <p className="text-lg md:text-xl text-white text-center mb-8 max-w-xl z-30 animate-fade delay-200">
        We Create Personalized interiors that reflect your taste and enhance your lifestyle.
      </p>
      {/* Button with pop-in effect */}
      <button className="bg-blue-600 bg-opacity-95 hover:bg-opacity-85 text-xl hover:bg-orange-400 hover:text-black hover:text-xl text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 z-30 animate-pop delay-400">
        Explore Designs
      </button>
      <style>
        {`
          @keyframes bg {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-bg {
            animation: bg 18s linear infinite alternate;
            background-size: 200% 200%;
          }
          @keyframes fade {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade {
            animation: fade 1.2s ease forwards;
          }
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-up {
            animation: slide-up 1.2s cubic-bezier(.68,-0.55,.27,1.55) forwards;
          }
          @keyframes pop {
            0% { opacity: 0; transform: scale(0.8);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-pop {
            animation: pop 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
