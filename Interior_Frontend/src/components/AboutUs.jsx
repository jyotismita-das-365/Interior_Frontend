import React from 'react';

const AboutUs = () => (
  <section className="w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto my-10 p-4 sm:p-8 bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 rounded-3xl shadow-2xl font-sans border-4 border-blue-300">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-pink-700 mb-6 text-center tracking-wide font-extrabold drop-shadow-lg">
      About Us
    </h2>
    <p className="text-base sm:text-lg lg:text-xl text-blue-900 mb-4">
      At <span className="font-bold text-yellow-600">Interior Design</span>, based in Bhubaneswar, Odisha, we are dedicated to elevating your spaces with style and purpose. As a leading interior design business, our expert team blends creativity and practicality to deliver stunning results for homes and businesses alike.
    </p>
    <p className="text-base sm:text-lg lg:text-xl text-blue-900 mb-5">
      We listen to your ideas and work closely with you to craft interiors that reflect your personality and meet your needs. Our commitment to quality and attention to detail ensures every project is completed to the highest standards.
    </p>
    <ul className="pl-6 mb-6 list-disc">
      <li className="mb-2 text-purple-700 font-semibold hover:text-yellow-600 transition-colors">
        Custom design solutions for residential and commercial spaces
      </li>
      <li className="mb-2 text-purple-700 font-semibold hover:text-yellow-600 transition-colors">
        Expert space planning and functional layouts
      </li>
      <li className="mb-2 text-purple-700 font-semibold hover:text-yellow-600 transition-colors">
        Professional guidance on materials, colors, and finishes
      </li>
      <li className="mb-2 text-purple-700 font-semibold hover:text-yellow-600 transition-colors">
        Comprehensive project management from start to finish
      </li>
    </ul>
    <p className="text-base sm:text-lg lg:text-xl text-center italic text-blue-700 bg-yellow-100 rounded-xl py-2 px-4 shadow-inner">
      Experience the difference with <span className="font-bold text-pink-600">Interior Design</span>—where your vision becomes reality.
    </p>
  </section>
);

export default AboutUs;
