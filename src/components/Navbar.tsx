import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';
import { CartDrawer } from './CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isDarkMode = () => document.documentElement.classList.contains('dark');
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode() ? 'bg-shito-black/95 shadow-md py-2' : 'bg-white/95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className={`text-2xl font-display font-bold ${isDarkMode() ? 'text-white' : 'text-shito-black'}`}>
              Shito<span className="text-shito-red">Tales</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`${isDarkMode() ? 'text-white' : 'text-shito-black'} hover:text-shito-red transition-colors font-medium`}>
              Our Story
            </a>
            <a href="#products" className={`${isDarkMode() ? 'text-white' : 'text-shito-black'} hover:text-shito-red transition-colors font-medium`}>
              Products
            </a>
            <a href="#recipes" className={`${isDarkMode() ? 'text-white' : 'text-shito-black'} hover:text-shito-red transition-colors font-medium`}>
              Recipes
            </a>
            <a href="#gallery" className={`${isDarkMode() ? 'text-white' : 'text-shito-black'} hover:text-shito-red transition-colors font-medium`}>
              Gallery
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <CartDrawer />
            <AnimatedButton 
              variant="primary"
              href="#shop"
              icon={<ArrowRight size={18} />}
            >
              Shop Now
            </AnimatedButton>
          </div>
          
          <button 
            className={`md:hidden ${isDarkMode() ? 'text-white' : 'text-shito-black'} p-2`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div 
        className={`md:hidden absolute top-full left-0 right-0 ${isDarkMode() ? 'bg-shito-black' : 'bg-white'} shadow-md transition-transform duration-300 origin-top ${
          isMenuOpen ? 'transform scale-y-100' : 'transform scale-y-0'
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className={`${isDarkMode() ? 'text-white border-gray-800' : 'text-shito-black border-gray-100'} hover:text-shito-red transition-colors font-medium py-2 border-b`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a 
              href="#products" 
              className={`${isDarkMode() ? 'text-white border-gray-800' : 'text-shito-black border-gray-100'} hover:text-shito-red transition-colors font-medium py-2 border-b`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#recipes" 
              className={`${isDarkMode() ? 'text-white border-gray-800' : 'text-shito-black border-gray-100'} hover:text-shito-red transition-colors font-medium py-2 border-b`}
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </a>
            <a 
              href="#gallery" 
              className={`${isDarkMode() ? 'text-white border-gray-800' : 'text-shito-black border-gray-100'} hover:text-shito-red transition-colors font-medium py-2 border-b`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
          </nav>
          
          <div className="flex items-center justify-between pt-4">
            <CartDrawer />
            <AnimatedButton 
              variant="primary"
              href="#shop"
              icon={<ArrowRight size={18} />}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Now
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
