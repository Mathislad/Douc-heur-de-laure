"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#prestations", label: "Prestations" },
  { href: "#institut", label: "L'Institut" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span
                className={`font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                Douc&apos;Heur de Laure
              </span>
              <span
                className={`text-[10px] sm:text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-nude-dark" : "text-white/80"
                }`}
              >
                Institut de Beauté & Bien-être
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 hover:text-nude relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-charcoal after:bg-nude"
                    : "text-white/90 after:bg-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33768429921"
              className="flex items-center gap-2 bg-nude text-white px-5 py-2.5 rounded-full text-sm tracking-wide hover:bg-nude-dark transition-colors duration-300"
            >
              <Phone size={14} />
              <span>07 68 42 99 21</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-charcoal text-sm tracking-wide uppercase hover:text-nude hover:bg-cream rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-cream-dark">
              <a
                href="tel:+33768429921"
                className="flex items-center justify-center gap-2 bg-nude text-white py-3 rounded-full text-sm tracking-wide hover:bg-nude-dark transition-colors"
              >
                <Phone size={14} />
                <span>07 68 42 99 21</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
