import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="bg-orange-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:flex items-center justify-between">
        
        {/* Left Content */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">
            Newsletter - Stay tune and get the latest update
          </h2>
          <p className="text-sm">Far far away, behind the word mountains</p>
        </div>

        {/* Right Content (Input) */}
        <form className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-md">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-grow px-4 py-2 text-gray-800 outline-none"
          />
          <button
            type="submit"
            className="px-4 text-orange-500 hover:text-teal-600"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
