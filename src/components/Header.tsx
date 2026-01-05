"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Bootcamp" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[var(--light-gray)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Logo variant={isScrolled || isMenuOpen ? "default" : "light"} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-[var(--text-secondary)] hover:text-[var(--navy)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#calculator"
              className={`btn ${
                isScrolled
                  ? "bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
                  : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              Calculate Your ROI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all origin-center ${
                  isMenuOpen
                    ? "rotate-45 translate-y-2 bg-[var(--navy)]"
                    : isScrolled
                    ? "bg-[var(--navy)]"
                    : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 transition-opacity ${
                  isMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-[var(--navy)]"
                    : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 transition-all origin-center ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-[var(--navy)]"
                    : isScrolled
                    ? "bg-[var(--navy)]"
                    : "bg-white"
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-0 md:hidden transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-[var(--navy)] hover:text-[var(--teal)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#calculator"
                className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)] mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
