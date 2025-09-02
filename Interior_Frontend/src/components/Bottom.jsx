import React from "react";
import logo from "../assets/logo/interiorLogo.webp";

const Bottom = () => (
  <footer className="bg-[#181818] text-white pt-12 w-full mt-16 font-sans">
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start gap-8 px-4">
      {/* Logo & Tagline */}
      <div className="flex-1 min-w-[260px] text-center mb-8 md:mb-0">
        <img
          src={logo}
          alt="Decor Interior Logo"
          className="w-28 h-20 mb-5 border-2 border-white py-2 mx-auto"
        />
        <p className="text-white text-[1.15rem] mb-5 font-normal">
          <span className="text-[#bde3f7] font-bold text-[1.1rem]">
            “Transforming Houses into Homes:
            <br />
            Where Elegance Finds Expression”
          </span>
        </p>
      </div>
      {/* Company Links */}
      <div className="flex-1 min-w-[180px] text-left mb-8 md:mb-0">
        <h3 className="text-white font-bold mb-4 text-[1.3rem]">Our Company</h3>
        <ul className="list-none p-0 m-0 text-[1.08rem]">
          <li className="mb-3">
            <a href="#about" className="text-white no-underline hover:underline">
              About Us
            </a>
          </li>
          <li className="mb-3">
            <a href="#portfolio" className="text-white no-underline hover:underline">
              Portfolio
            </a>
          </li>
          <li className="mb-3">
            <a href="#testimonials" className="text-white no-underline hover:underline">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white no-underline hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Contact Info */}
      <div className="flex-1 min-w-[220px] text-left">
        <h3 className="text-white font-bold mb-4 text-[1.3rem]">Contact Info</h3>
        <p className="m-0 mb-3 text-[1.08rem]">
          Office 1:- Wisdom academy School
          <br />
          Tahir Compound Naigaon Road
          <br />
          Bhiwandi Thane.
        </p>
        <p className="m-0 mb-3 text-[1.08rem]">+917020189035</p>
        <p className="m-0 text-[1.08rem]">decorinteriorinfo@gmail.com</p>
      </div>
    </div>
    <div className="border-t border-[#222] mt-10 pt-5 pb-2 text-center">
      <p className="text-[1.05rem] text-white m-0">
        Copyright &copy; {new Date().getFullYear()} Decor Interior
      </p>
    </div>
  </footer>
);

export default Bottom;
