"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md text-sm w-full">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Site Title */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-[#1e3d59]">
            Tracking<span className="text-[#ff6e40]">Odyssey</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
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

        {/* Button */}
        <Link href="/couriers">
          <button className="bg-[#ff6e40] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition duration-200 text-sm font-medium">
            All Couriers
          </button>
        </Link>
      </div>

      {/* Mobile Nav - only on small screens */}
      <div className="md:hidden px-6 pt-2 pb-4 flex space-x-6 justify-center text-sm font-medium border-t border-gray-100">
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
      </div>
    </header>
  );
}
