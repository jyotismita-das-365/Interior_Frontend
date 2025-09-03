import React from "react";
import logo from "../assets/logo/banner.jpg";

const Banner = () => {
  return (
    <div className="relative py-16 px-6 flex flex-col items-center justify-center shadow-2xl overflow-hidden h-96">
      {/* Luxury animated shimmer background */}
      <div className="absolute inset-0 w-full h-full z-10 animate-luxury-bg" />
      {/* Banner Image with subtle parallax and fade-in */}
      <img
        src={logo}
        alt="Interior Banner"
        className="absolute inset-0 w-full h-full object-cover z-20 animate-parallax-fade"
      />
      {/* Slogan with gold text, shine effect, and elegant fade-in */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 z-40 animate-shine luxury-gold">
        Transform Your Home, Elevate Your Life
      </h1>
      {/* Paragraph with gentle fade-in-up */}
      <p className="text-lg md:text-xl text-white text-center mb-8 max-w-xl z-40 animate-fade-up delay-200">
        We Create Personalized interiors that reflect your taste and enhance your lifestyle.
      </p>
      {/* Button with gold border, glow, and smooth hover */}
      <button className="bg-white text-yellow-700 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 z-40 animate-gold-pulse luxury-gold-border">
        Explore Designs
      </button>
      <style>
        {`
          /* Luxury shimmer animated gradient background */
          @keyframes luxury-bg {
            0% { background: linear-gradient(120deg, #fffbe6 0%, #ffd700 50%, #fffbe6 100%); }
            50% { background: linear-gradient(120deg, #ffd700 0%, #fffbe6 50%, #ffd700 100%); }
            100% { background: linear-gradient(120deg, #fffbe6 0%, #ffd700 50%, #fffbe6 100%); }
          }
          .animate-luxury-bg {
            animation: luxury-bg 8s ease-in-out infinite;
            opacity: 0.9;
            filter: blur(2px);
          }
          /* Parallax fade-in for image */
          @keyframes parallax-fade {
            0% { transform: scale(1.08) translateY(20px); opacity: 0; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          .animate-parallax-fade {
            animation: parallax-fade 1.5s cubic-bezier(.68,-0.55,.27,1.55) forwards;
          }
          /* Gold text and shine effect for slogan */
          .luxury-gold {
            background: linear-gradient(90deg, #ffd700 30%, #fffbe6 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
          }
          @keyframes shine {
            0% { background-position: -200px; }
            100% { background-position: 200px; }
          }
          .animate-shine {
            background: linear-gradient(90deg, #fffbe6 0%, #ffd700 50%, #fffbe6 100%);
            background-size: 400px 100%;
            animation: shine 2.5s linear infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          /* Fade-in-up for paragraph */
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-up {
            animation: fade-up 1.2s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          /* Button gold pulse and border */
          @keyframes gold-pulse {
            0% { box-shadow: 0 0 0 0 #ffd70088; }
            70% { box-shadow: 0 0 16px 8px #ffd70044; }
            100% { box-shadow: 0 0 0 0 #ffd70088; }
          }
          .animate-gold-pulse {
            animation: gold-pulse 2.5s infinite;
          }
          .luxury-gold-border {
            box-shadow: 0 0 16px #ffd700, 0 0 32px #fffbe6;
            border: 2px solid #ffd700;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
