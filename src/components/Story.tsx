
import React, { useEffect, useRef } from 'react';

const Story = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineElements = timelineRef.current.querySelectorAll('.timeline-item');
      
      timelineElements.forEach((el) => {
        const element = el as HTMLElement;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-float-up', 'opacity-100');
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
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h4 className="text-shito-red font-medium uppercase tracking-wider mb-2">Our Heritage</h4>
          <h2 className="h2 text-shito-black">The Story of Shito</h2>
          <div className="adinkra-divider mx-auto my-6"></div>
          <p className="text-lg text-shito-black/80 max-w-3xl mx-auto">
            Deeply rooted in Ghanaian culture, our shito sauce carries centuries of tradition
            in every spoonful. A journey of flavors passed down through generations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png" 
                alt="Traditional shito preparation"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shito-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white font-display text-2xl">Crafted with Love</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-shito-red rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-shito-gold rounded-lg -z-10"></div>
          </div>
          
          <div ref={timelineRef}>
            <div className="space-y-10 relative">
              <div className="absolute top-0 bottom-0 left-3.5 w-0.5 bg-shito-red/20"></div>
              
              <div className="timeline-item opacity-0 relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-shito-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-display font-bold text-shito-black mb-2">Coastal Origins</h3>
                <p className="text-shito-black/80">
                  Born in the coastal communities of Ghana, shito was created by fishermen's wives
                  as a way to preserve the abundant catch using local peppers and spices.
                </p>
              </div>
              
              <div className="timeline-item opacity-0 relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-shito-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-display font-bold text-shito-black mb-2">Family Legacy</h3>
                <p className="text-shito-black/80">
                  Our recipe has been passed down through generations, each family adding their
                  unique touch while preserving the authentic core flavors.
                </p>
              </div>
              
              <div className="timeline-item opacity-0 relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-shito-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-display font-bold text-shito-black mb-2">Modern Craftsmanship</h3>
                <p className="text-shito-black/80">
                  Today, we blend traditional methods with modern food standards, using only the
                  finest peppers, dried fish, and spices to create our gourmet shito sauce.
                </p>
              </div>
              
              <div className="timeline-item opacity-0 relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-shito-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-display font-bold text-shito-black mb-2">Global Flavors</h3>
                <p className="text-shito-black/80">
                  We're proud to share the rich flavors of Ghana with the world, bringing
                  authentic culinary experiences to your table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-80 bg-kente-pattern opacity-5 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-80 bg-kente-pattern opacity-5 -z-10"></div>
    </section>
  );
};

export default Story;
