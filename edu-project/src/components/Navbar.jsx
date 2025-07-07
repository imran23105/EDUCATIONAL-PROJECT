import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      {/* Toggle Button */}
      <div className="sm:hidden flex justify-end">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu List */}
      <ul
        className={`
          flex-col sm:flex-row sm:flex
          gap-4 sm:gap-6 text-white text-sm font-medium
          ${isOpen ? 'flex' : 'hidden'}
          sm:items-center mt-4 sm:mt-0
        `}
      >
        <li><Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/courses" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>All Courses</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/team" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Team</Link></li>
        <li><Link to="/live-explore" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>For You</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
