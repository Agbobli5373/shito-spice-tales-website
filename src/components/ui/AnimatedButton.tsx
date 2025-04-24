
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const AnimatedButton = ({
  children,
  className,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  icon
}: AnimatedButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-shito-red hover:bg-shito-red/90 text-white relative overflow-hidden group';
      case 'secondary':
        return 'bg-shito-gold hover:bg-shito-gold/90 text-shito-black relative overflow-hidden group';
      case 'outline':
        return 'border-2 border-shito-red text-shito-red hover:bg-shito-red/10 relative overflow-hidden group';
      default:
        return 'bg-shito-red hover:bg-shito-red/90 text-white relative overflow-hidden group';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      <span className="absolute inset-0 translate-y-[105%] bg-black/10 group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={cn(
          'inline-block rounded-md font-medium transition-all duration-300 text-center',
          getVariantClasses(),
          getSizeClasses(),
          className
        )}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={cn(
        'font-medium transition-all duration-300 rounded-md',
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
    >
      {buttonContent}
    </Button>
  );
};

export default AnimatedButton;
