import React, { useState } from 'react';
import MenuItems from './MenuItems';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 py-4 shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <span className="text-black">STUDY</span>
          <span className="text-black font-normal">table</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <MenuItems isMobile={false} />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-black focus:outline-none"
          >
            →
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 space-y-3">
          <MenuItems isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;