import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Who We Help", href: "#who-we-help" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F8F9FA] border-b border-[#E0F7FA] w-full z-20 top-0 left-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#3A7CA5] tracking-tight">NyayMitra</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#212529] hover:text-[#3A7CA5] font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#get-started"
            className="ml-4 px-5 py-2 rounded-md bg-[#3A7CA5] text-white font-semibold shadow hover:bg-[#2c5d81] transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#3A7CA5] hover:bg-[#E0F7FA] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3A7CA5]"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F9FA] border-t border-[#E0F7FA] px-4 pt-2 pb-4 space-y-2 shadow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-[#212529] hover:text-[#3A7CA5] font-medium py-2 px-2 rounded transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#get-started"
            className="block w-full text-center mt-2 px-5 py-2 rounded-md bg-[#3A7CA5] text-white font-semibold shadow hover:bg-[#2c5d81] transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
