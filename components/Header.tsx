"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-white shadow-md text-sm w-full"
      role="banner"
    >
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Site Title */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          aria-label="Tracking Odyssey Home"
        >
          <span className="text-[#1e3d59]">
            Tracking<span className="text-orange-400">Odyssey</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-6 font-medium"
          aria-label="Main Navigation"
        >
          <Link
            href="/"
            className="text-[#1e3d59] hover:text-[#ff6e40] hover:underline hover:translate-x-[1px] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#1e3d59] hover:text-[#ff6e40] hover:underline hover:translate-x-[1px] transition-all duration-300"
          >
            About Us
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link href="/couriers" className="hidden md:block">
          <button className="bg-orange-400 text-white px-5 py-2.5 rounded-full hover:opacity-90 transition duration-200 text-sm font-medium">
            All Couriers
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-4 shadow-lg">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-[#1e3d59] hover:text-[#ff6e40] hover:underline transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#1e3d59] hover:text-[#ff6e40] hover:underline transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/couriers"
              className="bg-orange-400 text-white px-5 py-2.5 rounded-full text-center hover:opacity-90 transition duration-200 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Couriers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
