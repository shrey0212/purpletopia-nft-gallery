
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-background/60 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              PurpleTopia
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-gray-300 hover:text-purple-400 transition-colors">
              Explore
            </Link>
            <Link to="/collections" className="text-gray-300 hover:text-purple-400 transition-colors">
              Collections
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search NFTs, collections, and creators..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Connect Wallet Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="primary">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-4 border-t border-gray-800 mt-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <Link 
                to="/"
                className="px-2 py-1 rounded-md text-gray-300 hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/explore"
                className="px-2 py-1 rounded-md text-gray-300 hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/collections" 
                className="px-2 py-1 rounded-md text-gray-300 hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
            </div>
            
            <Button variant="primary" fullWidth>
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
