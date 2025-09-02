import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo/interiorLogo.webp";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#", dropdown: true },
  { name: "Portfolio", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const servicesLinks = [
  { name: "Modular Kitchen", href: "/services/modular-kitchen" },
  { name: "Living Room", href: "/services/living-room" },
  { name: "Bedroom", href: "/services/bedroom" },
  { name: "Offices", href: "/services/offices" },
  { name: "Bathroom", href: "/services/bathroom" },
  { name: "Ceiling", href: "/services/ceiling" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-400 to-slate-600 flex items-center justify-between px-4 py-3 shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="website_logo"
            className="h-10 w-10 rounded-full shadow-md"
          />
          <span className="font-bold text-lg text-white tracking-wide block sm:block">
            Decor World Interior
          </span>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium px-2 py-1 rounded-lg flex items-center gap-1"
                  type="button"
                >
                  {link.name}
                  <ChevronDown size={18} />
                </button>
                {/* Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 min-w-[180px] z-50">
                    {servicesLinks.map((service, i) => (
                      <a
                        key={i}
                        href={service.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-100"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={idx}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium px-2 py-1 rounded-lg"
              >
                {link.name}
              </a>
            )
          )}
          <a
            href="#"
            className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold px-5 py-2 rounded-full shadow transition duration-200"
          >
            BOOK
          </a>
        </div>
        {/* Mobile BOOK button */}
        <a
          href="#"
          className="md:hidden bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold px-4 py-2 rounded-full shadow transition duration-200 mr-2"
          style={{ minWidth: 70, textAlign: "center" }}
        >
          BOOK
        </a>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-slate-500 transition"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} className="text-white" />
        </button>
      </nav>
      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl z-[60] flex flex-col p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <button
          className="self-end mb-4 p-2 rounded-full hover:bg-slate-100 transition"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="py-3 px-4 text-lg font-semibold text-slate-700 hover:bg-slate-100 rounded transition mb-2"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        {/* BOOK Button for mobile */}
        <a
          href="#"
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold px-5 py-2 rounded-full shadow transition duration-200 text-center"
          onClick={() => setMenuOpen(false)}
        >
          BOOK
        </a>
      </div>
      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
