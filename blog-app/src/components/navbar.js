
"use client"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <>
      <header className="text-gray-600  body-font bg-white fixed w-full z-10 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-xl font-bold animate-pulse">Shubham Patodia</span>
          </a>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className={`hidden md:flex md:ml-auto md:mr-auto items-center`}>
            <a href="/" className="mr-5 font-bold hover:text-blue-900 text-black transition duration-300 ease-in-out transform hover:scale-110">
              Home
            </a>
            <a href="/about" className="mr-5 font-bold hover:text-blue-900 text-black transition duration-300 ease-in-out transform hover:scale-110">
              About
            </a>

            <a href="/blogs" className="mr-5 font-bold hover:text-blue-900 text-black transition duration-300 ease-in-out transform hover:scale-110">
              Blogs
            </a>

            <a href="/contact" className="mr-5 font-bold hover:text-blue-900 text-black transition duration-300 ease-in-out transform hover:scale-110">
              Contact
            </a>
          </nav>

          {/* Connect Now Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white font-bold border-0 rounded-full py-2 px-5 focus:outline-none hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Connect Now
            </button>
          </div>
        </div>

        {/* Mobile Menu (for smaller screens) */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/80 shadow-lg`}>
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="/home" className="text-black font-bold hover:text-blue-900">Home</a>
            <a href="/about" className="text-black font-bold hover:text-blue-900">About</a>
            <a href="/blogs" className="text-black font-bold hover:text-blue-900">Blogs</a>
            <a href="/contact" className="text-black font-bold hover:text-blue-900">Contact</a>
            {/* Connect Now Button - Mobile */}
            <button className="bg-blue-600 text-white font-bold border-0 rounded-full py-2 px-5 focus:outline-none hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Connect Now
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
