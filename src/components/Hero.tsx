
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';
import { Toggle } from './ui/toggle';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const opacity = 1 - (scrollY / (heroHeight * 0.8));
      const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (heroContent) {
        heroContent.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
      }
      
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.5');
        const yPos = -(scrollY * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  return (
    <div 
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gradient-to-b from-shito-black/90 to-shito-black/80' : 'bg-gradient-to-b from-white/5 to-shito-beige/10'
      } overflow-hidden`}
    >
      {/* Theme toggle */}
      <div className="absolute top-24 right-6 z-30">
        <Toggle 
          variant="outline" 
          aria-label="Toggle theme" 
          className={`rounded-full p-2 ${isDarkMode ? 'bg-shito-black/30 border-shito-red/30' : 'bg-white/30 border-shito-gold/30'}`}
          pressed={isDarkMode}
          onPressedChange={toggleTheme}
        >
          {isDarkMode ? <Moon className="h-5 w-5 text-shito-gold" /> : <Sun className="h-5 w-5 text-shito-red" />}
        </Toggle>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-kente-pattern opacity-5 ${isDarkMode ? 'invert' : ''}`}></div>
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDarkMode ? 'from-shito-black/80 via-shito-black/60 to-transparent' : 'from-white/80 via-white/60 to-transparent'
        }`}></div>
      </div>
      
      {/* Floating ingredients */}
      <img 
        src="/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png" 
        alt="Spices"
        className="absolute -top-10 right-[15%] w-28 h-auto parallax animate-float-down opacity-60 hidden md:block"
        data-speed="0.2"
        style={{ animationDelay: '0.4s' }}
      />
      
      <img 
        src="/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png" 
        alt="Ingredients"
        className="absolute top-1/3 left-[10%] w-20 h-auto parallax animate-float-up opacity-60 hidden md:block"
        data-speed="0.4"
        style={{ animationDelay: '0.7s' }}
      />
      
      <img 
        src="/lovable-uploads/ba1f2468-c43e-48f7-8841-b5f047230a3c.png" 
        alt="Ingredients"
        className="absolute bottom-32 right-[20%] w-32 h-auto parallax animate-float-up opacity-60 hidden md:block"
        data-speed="0.3"
        style={{ animationDelay: '0.9s' }}
      />
      
      {/* Main hero content */}
      <div className="hero-content relative z-10 container mx-auto px-4 text-center py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <h4 className={`font-medium uppercase tracking-wider mb-4 animate-float-down ${isDarkMode ? 'text-shito-gold' : 'text-shito-red'}`}>
            Authentic Ghanaian
          </h4>
          
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-float-down ${isDarkMode ? 'text-white' : 'text-shito-black'}`} style={{ animationDelay: '0.2s' }}>
            Experience the Rich Flavor of{' '}
            <span className="text-shito-red">Shito</span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-float-down ${isDarkMode ? 'text-white/80' : 'text-shito-black/80'}`} style={{ animationDelay: '0.4s' }}>
            A centuries-old recipe crafted with the finest peppers, spices, and love.
            Elevate your dishes with our gourmet Ghanaian pepper sauce.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-float-down z-10 relative" style={{ animationDelay: '0.6s' }}>
            <AnimatedButton 
              variant="primary"
              href="#shop"
              size="lg"
              icon={<ArrowRight className="transition-transform group-hover:translate-x-1" />}
              className={isDarkMode ? 'shadow-lg shadow-shito-red/20' : ''}
            >
              Shop Now
            </AnimatedButton>
            
            <AnimatedButton 
              variant="outline"
              href="#recipes"
              size="lg"
              className={isDarkMode ? 'border-shito-gold text-shito-gold hover:bg-shito-gold/10' : ''}
            >
              Explore Recipes
            </AnimatedButton>
          </div>
        </div>
      </div>
      
      {/* Featured product image */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 z-20 w-64 md:w-80">
        <img 
          src="/lovable-uploads/83d9e1ca-46b7-4cad-abbe-24ab4ea8453e.png" 
          alt="Shito Sauce Jar"
          className="w-full h-auto drop-shadow-2xl animate-fade-in"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className={`relative block w-full h-16 md:h-24 ${isDarkMode ? 'fill-shito-black' : 'fill-white'}`}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
