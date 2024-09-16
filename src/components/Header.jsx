import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-8 z-50 bg-[#080b01] shadow-lg">
      <nav className="flex justify-between items-center">
        {/* Logo with link */}
        <Link to="/" className="text-3xl font-bold text-green-400 neon-text">
          M7md.js
        </Link>
        
        {/* Icon for mobile menu */}
        <div className="md:hidden text-green-400 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menu for desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className={`text-gray-400 text-sm font-semibold ${location.pathname === '/' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-gray-400 text-sm font-semibold ${location.pathname === '/about' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`text-gray-400 text-sm font-semibold ${location.pathname === '/projects' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
            >
              PROJECT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-gray-400 text-sm font-semibold ${location.pathname === '/contact' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-[#080b01] bg-opacity-90 transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} md:hidden`}
          style={{ transitionProperty: 'transform' }}
        >
          <div className="absolute top-0 right-0 p-4">
            <FaTimes size={24} className="text-green-400 cursor-pointer" onClick={toggleMenu} />
          </div>
          <ul className="flex flex-col items-center justify-center h-full space-y-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block text-gray-400 text-lg font-semibold ${location.pathname === '/' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`block text-gray-400 text-lg font-semibold ${location.pathname === '/about' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className={`block text-gray-400 text-lg font-semibold ${location.pathname === '/projects' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`block text-gray-400 text-lg font-semibold ${location.pathname === '/contact' ? 'neon-text' : 'hover:text-green-400 transition-colors hover:neon-text'}`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
