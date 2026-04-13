import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img src="/assets/logo.png" alt="EduConnect Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Comment ça marche
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Témoignages
            </a>
            <a href="#advantages" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Avantages
            </a>
            <a href="https://app.profolib.fr" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Connexion
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#how-it-works" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Comment ça marche
            </a>
            <a href="#testimonials" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Témoignages
            </a>
            <a href="#advantages" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Avantages
            </a>
            <div className="pt-4">
              <Button fullWidth variant="primary">
                Connexion
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
