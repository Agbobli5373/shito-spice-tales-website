
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RotatingJarProps {
  className?: string;
}

const RotatingJar: React.FC<RotatingJarProps> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        'relative w-64 h-64 mx-auto perspective-1000',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          'relative w-full h-full transform-style-3d transition-transform duration-700',
          isHovered ? 'rotate-y-180' : ''
        )}
      >
        {/* Front of jar */}
        <div className="absolute inset-0 backface-hidden">
          <img 
            src="/lovable-uploads/83d9e1ca-46b7-4cad-abbe-24ab4ea8453e.png" 
            alt="Shito Sauce Jar Front" 
            className="w-full h-full object-contain drop-shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-shito-red/5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Back of jar */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <img 
            src="/lovable-uploads/83d9e1ca-46b7-4cad-abbe-24ab4ea8453e.png" 
            alt="Shito Sauce Jar Back" 
            className="w-full h-full object-contain drop-shadow-xl transform scale-x-[-1]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 p-4 rounded-md text-center max-w-[80%]">
              <p className="text-shito-black font-bold text-sm">100% Natural Ingredients</p>
              <p className="text-shito-black/70 text-xs">Authentically Ghanaian</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shadow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-black/10 rounded-full blur-md" />
    </div>
  );
};

export default RotatingJar;
