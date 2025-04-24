
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Send } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              PurpleTopia
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/collections" className="text-gray-400 hover:text-purple-400 transition-colors">All NFTs</Link></li>
              <li><Link to="/collections" className="text-gray-400 hover:text-purple-400 transition-colors">Collections</Link></li>
              <li><Link to="/collections" className="text-gray-400 hover:text-purple-400 transition-colors">New</Link></li>
              <li><Link to="/collections" className="text-gray-400 hover:text-purple-400 transition-colors">Trending</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for the latest news and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              />
              <Button variant="primary" className="rounded-l-none">
                <Send size={18} />
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://discord.com" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors" aria-label="Discord">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 PurpleTopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
