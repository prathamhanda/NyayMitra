import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation

// Placeholder for a logo, you can replace this with an <img> tag or an SVG
const Logo = () => (
  <Link
    to="/"
    className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors"
  >
    NyayMitra
  </Link>
);

// Simple Hamburger Icon for mobile menu
const HamburgerIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

// Simple Close Icon for mobile menu
const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" }, // Example link
    { name: "Services", path: "/services" }, // Example link
    { name: "Contact", path: "/contact" }, // Example link
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard" // Or your login page
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-500 hover:text-sky-600 focus:outline-none p-2 rounded-md"
              aria-label="Open main menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="text-slate-700 hover:text-sky-600 hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard" // Or your login page
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-sky-500 hover:bg-sky-600 text-white block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-medium transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
