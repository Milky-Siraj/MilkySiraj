"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-orange-500/20 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo / Name */}
        <a href="/" className="text-2xl font-bold text-orange-500">
          Milky&nbsp;Siraj
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-200 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-200 hover:text-orange-500 transition-colors duration-200"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {/* Use a ternary so React never receives a boolean for className */}
      <ul
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-orange-500/20 px-4 py-4 space-y-3 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block text-gray-200 hover:text-orange-500 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
