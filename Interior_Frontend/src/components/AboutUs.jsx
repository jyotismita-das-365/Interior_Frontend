import React from 'react';

const AboutUs = () => (
  <div className="min-h-screen bg-gradient-to-b bg-slate-200 flex items-center justify-center p-4">
    <section className="w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mt-0  p-4 sm:p-8 bg-slate-300 rounded-3xl shadow-lg shadow-slate-600 font-sans border-black">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-6 text-center tracking-wide font-extrabold drop-shadow-lg">
      About Us
    </h2>
    <p className="text-base sm:text-lg lg:text-xl text-blue-900 mb-4">
      At <span className="font-bold text-orange-400">Decor World Interior</span>, based in Bhubaneswar, Odisha, we specialize in transforming ordinary spaces into extraordinary experiences. Our mission is to bring style, comfort, and functionality together through innovative décor and interior design solutions.
    </p>
    <p className="text-base sm:text-lg lg:text-xl text-blue-900 mb-5">
      With a passion for creativity and a focus on detail, our team ensures that every project reflects your personality, lifestyle, and aspirations. From modern homes to stylish offices, we blend aesthetics with practicality to create spaces that inspire and impress.
    </p>
    <p className="text-base sm:text-lg lg:text-xl text-blue-900 mb-5">
      We believe interiors are more than just designs—they are expressions of who you are. That’s why we work closely with you at every step to craft décor that speaks your language and fulfills your vision.
    </p>
    <ul className="pl-6 mb-6 list-disc">
      <li className="mb-4 text-slate-700 font-semibold text-xl hover:text-stone-950 transition-colors">
        Residential Interiors – Elegant, cozy, and functional designs for homes.
      </li>
      <li className="mb-4 text-slate-700 font-semibold text-xl hover:text-stone-950 transition-colors">
        Commercial Interiors – Professional, stylish, and efficient spaces for businesses.
      </li>
      <li className="mb-4 text-slate-700 font-semibold text-xl hover:text-stone-950 transition-colors">
        Custom Décor Solutions – Tailored designs that match your taste and lifestyle.
      </li>
      <li className="mb-4 text-slate-700 font-semibold text-xl hover:text-stone-950 transition-colors">
        Project Management – From planning to execution, we ensure a seamless experience.
      </li>
    </ul>
    <p className="text-base sm:text-lg lg:text-xl text-center italic text-white bg-black rounded-xl py-2 px-4 shadow-inner">
      Experience the difference with <span className="font-bold text-orange-400">Decor World Interior</span>—where your vision becomes reality.
    </p>
  </section>
  </div>
);

export default AboutUs;
