// Importing necessary modules for navigation
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50 h-16 flex items-center">
      <nav className="flex items-center justify-between w-full px-8 lg:px-32">
        {/* App Icon with more spacing from screen edge */}
        <Link to="/" className="mr-6">
          <img 
            src="https://flowbite.com/docs/images/logo.svg" 
            alt="App Icon" 
            className="h-6 w-6"
          />
        </Link>

        {/* Desktop Navigation with increased spacing */}
        <div className="hidden lg:flex space-x-12">
          <Link to="/age-calculator" className="text-white hover:text-blue-400">Age Calculator</Link>
          <Link to="/add-or-sub-time" className="text-white hover:text-blue-400">Add/Subtract Time</Link>
          <Link to="/time-between" className="text-white hover:text-blue-400">Time Between</Link>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu with wider spacing */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col space-y-4 p-5 lg:hidden">
          <Link to="/age-calculator" className="text-white hover:text-blue-400">Age Calculator</Link>
          <Link to="/add-or-sub-time" className="text-white hover:text-blue-400">Add/Subtract Time</Link>
          <Link to="/time-between" className="text-white hover:text-blue-400">Time Between</Link>
        </div>
      )}
    </header>
  );
}

export default Header;