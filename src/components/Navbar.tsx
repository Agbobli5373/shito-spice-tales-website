
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ShoppingCart } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll event to change navbar appearance
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
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-shito-black">
              Shito<span className="text-shito-red">Tales</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-shito-black hover:text-shito-red transition-colors font-medium">
              Our Story
            </a>
            <a href="#products" className="text-shito-black hover:text-shito-red transition-colors font-medium">
              Products
            </a>
            <a href="#recipes" className="text-shito-black hover:text-shito-red transition-colors font-medium">
              Recipes
            </a>
            <a href="#gallery" className="text-shito-black hover:text-shito-red transition-colors font-medium">
              Gallery
            </a>
          </nav>
          
          {/* CTA Button and Cart Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-shito-black hover:text-shito-red p-2">
              <ShoppingCart size={24} />
            </button>
            <AnimatedButton 
              variant="primary"
              href="#shop"
              icon={<ArrowRight size={18} />}
            >
              Shop Now
            </AnimatedButton>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-shito-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 origin-top ${
          isMenuOpen ? 'transform scale-y-100' : 'transform scale-y-0'
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-shito-black hover:text-shito-red transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a 
              href="#products" 
              className="text-shito-black hover:text-shito-red transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#recipes" 
              className="text-shito-black hover:text-shito-red transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </a>
            <a 
              href="#gallery" 
              className="text-shito-black hover:text-shito-red transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
          </nav>
          
          <div className="flex items-center justify-between pt-4">
            <button className="text-shito-black hover:text-shito-red p-2">
              <ShoppingCart size={24} />
            </button>
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
