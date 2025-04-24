
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.5');
        const yPos = -(scrollY * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
      
      // Fade out hero content on scroll
      const opacity = 1 - (scrollY / (heroHeight * 0.8));
      const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
      if (heroContent) {
        heroContent.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-shito-beige/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
      
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10 parallax" 
        data-speed="0.3"
        style={{
          backgroundImage: "url('/lovable-uploads/b014c825-481e-4e7b-9f95-c34fe9ac8fbb.png')",
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Floating ingredients */}
      <img 
        src="/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png" 
        alt="Red peppers"
        className="absolute -top-10 right-10 w-32 h-auto parallax animate-float-down opacity-70 hidden md:block"
        data-speed="0.2"
        style={{ animationDelay: '0.4s' }}
      />
      
      <img 
        src="/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png" 
        alt="Onions"
        className="absolute top-1/3 left-10 w-24 h-auto parallax animate-float-up opacity-70 hidden md:block"
        data-speed="0.4"
        style={{ animationDelay: '0.7s' }}
      />
      
      <img 
        src="/lovable-uploads/ba1f2468-c43e-48f7-8841-b5f047230a3c.png" 
        alt="Herbs"
        className="absolute bottom-20 right-20 w-36 h-auto parallax animate-float-up opacity-70 hidden md:block"
        data-speed="0.3"
        style={{ animationDelay: '0.9s' }}
      />
      
      {/* Main hero content */}
      <div className="hero-content relative z-10 container-custom text-center py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-shito-red font-medium uppercase tracking-wider mb-4 animate-float-down">
            Authentic Ghanaian
          </h4>
          <h1 className="h1 text-shito-black mb-6 animate-float-down" style={{ animationDelay: '0.2s' }}>
            Experience the Rich Flavor of <span className="text-shito-red">Shito Sauce</span>
          </h1>
          <p className="text-lg text-shito-black/80 mb-10 max-w-2xl mx-auto animate-float-down" style={{ animationDelay: '0.4s' }}>
            A centuries-old recipe crafted with the finest peppers, spices, and love. 
            Elevate your dishes with our gourmet Ghanaian pepper sauce.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-float-down" style={{ animationDelay: '0.6s' }}>
            <AnimatedButton 
              variant="primary"
              href="#shop"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Shop Now
            </AnimatedButton>
            <AnimatedButton 
              variant="outline"
              href="#recipes"
              size="lg"
            >
              Explore Recipes
            </AnimatedButton>
          </div>
        </div>
      </div>
      
      {/* Featured product image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <img 
          src="/lovable-uploads/83d9e1ca-46b7-4cad-abbe-24ab4ea8453e.png" 
          alt="Shito Sauce Jar"
          className="w-64 h-auto drop-shadow-2xl animate-fade-in"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16 md:h-24"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
