
import React, { useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'I've tried many hot sauces, but this shito is on another level! The depth of flavor is incredible, and it adds so much character to my meals. Truly authentic taste!',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: 2,
      name: 'Michael Osei',
      location: 'London, UK',
      rating: 5,
      text: 'As a Ghanaian living abroad, I've been searching for authentic shito for years. This brings me right back home with every bite. The quality and taste are outstanding!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'Toronto, Canada',
      rating: 4,
      text: 'I discovered this sauce at a friend's dinner party and was immediately hooked. It has the perfect balance of heat and flavor that complements so many dishes.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (!testimonialsRef.current) return;
      
      const testimonialCards = testimonialsRef.current.querySelectorAll('.testimonial-card');
      
      testimonialCards.forEach((el, index) => {
        const element = el as HTMLElement;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-float-up', 'opacity-100');
          element.style.animationDelay = `${index * 0.2}s`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h4 className="text-shito-red font-medium uppercase tracking-wider mb-2">Customer Love</h4>
          <h2 className="h2 text-shito-black">What People Say</h2>
          <div className="adinkra-divider mx-auto my-6"></div>
        </div>
        
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="testimonial-card bg-shito-beige/10 rounded-lg p-6 shadow-lg opacity-0 hover-lift relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-shito-red rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                </svg>
              </div>
              
              {/* Star rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-shito-gold' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-shito-black/80 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-shito-black">{testimonial.name}</h4>
                  <p className="text-sm text-shito-black/60">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-kente-pattern opacity-5 -z-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-kente-pattern opacity-5 -z-10" />
    </section>
  );
};

export default Testimonials;
