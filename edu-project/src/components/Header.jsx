import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-orange-500 text-white">
      <div className="flex flex-wrap items-center justify-between px-6 py-2 max-w-7xl mx-auto">
        
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">EduCare</h1>
          <p className="text-sm">Online Education & Learning</p>
        <div className="flex gap-4 text-xl mt-2">
          <a href="#" title="Facebook" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" title="Instagram" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
        </div>
        <div className="my-2 sm:my-0">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
