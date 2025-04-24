
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

const PairingGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      image: '/lovable-uploads/34d419dd-2e44-4c8d-8b0f-11467c1ddfd4.png',
      title: 'Grilled Fish',
      description: 'The savory notes of shito perfectly complement the delicate flavors of grilled fish.'
    },
    {
      image: '/lovable-uploads/ba1f2468-c43e-48f7-8841-b5f047230a3c.png',
      title: 'Jollof Rice',
      description: 'Elevate the beloved West African rice dish with a spoonful of our flavorful shito.'
    },
    {
      image: '/lovable-uploads/875e3d9e-0024-4269-8907-bebdc8f74ad6.png',
      title: 'Fried Plantains',
      description: 'Sweet fried plantains (kelewele) with spicy shito create a perfect flavor balance.'
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h4 className="text-shito-red font-medium uppercase tracking-wider mb-2">Perfect Pairings</h4>
          <h2 className="h2 text-shito-black">Enhance Your Meals</h2>
          <div className="adinkra-divider mx-auto my-6"></div>
          <p className="text-lg text-shito-black/80 max-w-3xl mx-auto">
            Discover the versatility of shito sauce with these delicious food pairings that will
            take your culinary experience to the next level.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Slider controls */}
          <button 
            className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center text-shito-black transition-all hover:scale-110"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center text-shito-black transition-all hover:scale-110"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Slider */}
          <div ref={sliderRef} className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shito-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="font-display text-3xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/90 max-w-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-shito-red w-6' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-shito-beige/20 rounded-lg p-6 hover-lift">
            <div className="w-16 h-16 rounded-full bg-shito-red/10 flex items-center justify-center mb-4">
              <span className="text-shito-red text-2xl font-bold">01</span>
            </div>
            <h3 className="font-display text-xl font-bold text-shito-black mb-3">Seafood</h3>
            <p className="text-shito-black/70">
              From grilled fish to shrimp, shito adds a rich depth of flavor that enhances the natural sweetness of seafood.
            </p>
          </div>
          
          <div className="bg-shito-beige/20 rounded-lg p-6 hover-lift">
            <div className="w-16 h-16 rounded-full bg-shito-red/10 flex items-center justify-center mb-4">
              <span className="text-shito-red text-2xl font-bold">02</span>
            </div>
            <h3 className="font-display text-xl font-bold text-shito-black mb-3">Rice Dishes</h3>
            <p className="text-shito-black/70">
              Jollof rice, fried rice, or simple steamed rice – all are elevated with a spoonful of our spicy shito sauce.
            </p>
          </div>
          
          <div className="bg-shito-beige/20 rounded-lg p-6 hover-lift">
            <div className="w-16 h-16 rounded-full bg-shito-red/10 flex items-center justify-center mb-4">
              <span className="text-shito-red text-2xl font-bold">03</span>
            </div>
            <h3 className="font-display text-xl font-bold text-shito-black mb-3">Starchy Sides</h3>
            <p className="text-shito-black/70">
              Traditional plantains, yams, or potatoes – shito sauce brings these staples to life with complex flavors.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-kente-pattern opacity-5 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-kente-pattern opacity-5 -z-10" />
    </section>
  );
};

export default PairingGallery;
