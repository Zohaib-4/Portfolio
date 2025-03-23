import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My Portfolio</h1>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
        >
          <li>
            <a href="#home" className="text-white block px-4 py-2">Home</a>
          </li>
          <li>
            <a href="#about" className="text-white block px-4 py-2">About</a>
          </li>
          <li>
            <a href="#projects" className="text-white block px-4 py-2">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-white block px-4 py-2">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
