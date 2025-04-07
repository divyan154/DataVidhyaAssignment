"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[687px] h-[56px] bg-[#F0F0F07A] shadow-md rounded-xl p-4 flex items-center justify-around relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image width={68} height={68} src="/Logo.svg" alt="Logo" />
        <span className="font-semibold text-gray-800 text-lg">Data Vidhya</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {["Home", "Courses", "Platform", "Resources"].map((item, index) => (
          <a key={index} href="#" className="text-gray-700 hover:text-black">
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(true)}
      >
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] right-4 bg-white shadow-lg rounded-lg flex flex-col space-y-4 p-4 w-48">
          {/* Close Button */}
          <button
            className="self-end text-gray-700 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>

          {["Home", "Courses", "Platform", "Resources"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
