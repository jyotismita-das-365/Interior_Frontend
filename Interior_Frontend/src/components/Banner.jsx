import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-white to-pink-100 py-16 px-6 flex flex-col items-center justify-center rounded-lg shadow-lg overflow-hidden h-96">
      {/* Decorative Circles */}
      <div className="absolute top-4 left-4 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 bg-pink-200 rounded-full opacity-20"></div>
      {/* Slogan */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 drop-shadow-lg">
        Transform Your Space, Elevate Your Life
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-8 max-w-xl">
        Discover stunning interiors and creative ideas to make your home truly yours.
      </p>
      {/* Explore Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out">
        Explore
      </button>
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 opacity-40"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 opacity-30"></div>
    </div>
  );
};

export default Banner;