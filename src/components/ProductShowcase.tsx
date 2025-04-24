import React, { useState } from 'react';
import { ArrowRight, Check, ShoppingCart } from 'lucide-react';
import RotatingJar from './ui/RotatingJar';
import AnimatedButton from './ui/AnimatedButton';
import { useCart } from '@/context/CartContext';

const ProductShowcase = () => {
  const [activeVariant, setActiveVariant] = useState(0);
  const { addToCart } = useCart();
  
  const variants = [
    {
      id: 'shito-original',
      name: 'Original',
      description: 'Our classic recipe with the perfect balance of heat and flavor.',
      features: ['Medium spice level', 'Rich umami flavor', 'Versatile for any dish'],
      price: 12.99,
      image: '/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png'
    },
    {
      id: 'shito-extra-hot',
      name: 'Extra Hot',
      description: 'For those who love intense heat with complex flavors.',
      features: ['High spice level', 'Bold smoky notes', 'Perfect for meat dishes'],
      price: 13.99,
      image: '/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png'
    },
    {
      id: 'shito-mild',
      name: 'Mild',
      description: 'All the authentic flavor with gentler heat.',
      features: ['Low spice level', 'Sweet undertones', 'Great for seafood'],
      price: 11.99,
      image: '/lovable-uploads/2870634a-957d-480f-839f-ffb1ad68af56.png'
    }
  ];

  const handleAddToCart = () => {
    const selectedVariant = variants[activeVariant];
    addToCart({
      id: selectedVariant.id,
      name: 'Shito Sauce',
      price: selectedVariant.price,
      description: selectedVariant.description,
      image: selectedVariant.image,
      variant: selectedVariant.name
    });
  };

  return (
    <section id="products" className="section-padding bg-shito-beige/10 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h4 className="text-shito-red font-medium uppercase tracking-wider mb-2">Our Products</h4>
          <h2 className="h2 text-shito-black">Gourmet Shito Sauce</h2>
          <div className="adinkra-divider mx-auto my-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <RotatingJar className="mb-8" />
            
            <div className="text-center space-y-3">
              <div className="flex flex-wrap justify-center gap-3">
                {variants.map((variant, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeVariant === index 
                        ? 'bg-shito-red text-white' 
                        : 'bg-white text-shito-black hover:bg-shito-red/10'
                    }`}
                    onClick={() => setActiveVariant(index)}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg relative animate-fade-in hover-lift">
            <h3 className="text-2xl font-display font-bold text-shito-black mb-3">
              Shito Sauce - {variants[activeVariant].name}
            </h3>
            
            <p className="text-shito-black/80 mb-6">
              {variants[activeVariant].description}
            </p>
            
            <div className="mb-8">
              <h4 className="font-bold text-shito-black mb-2">Features:</h4>
              <ul className="space-y-2">
                {variants[activeVariant].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-shito-red mr-2">
                      <Check size={18} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-shito-black/60">Size</span>
                <span className="text-shito-black font-bold">8 oz (225g)</span>
              </div>
              <div className="w-full h-px bg-gray-200 my-3" />
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-shito-black/60">Price</span>
                <span className="text-2xl text-shito-red font-bold">
                  ${variants[activeVariant].price}
                </span>
              </div>
            </div>
            
            <AnimatedButton 
              variant="primary"
              className="w-full"
              onClick={handleAddToCart}
              icon={<ShoppingCart size={18} />}
            >
              Add to Cart
            </AnimatedButton>
            
            {/* Decorative accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-shito-gold/20 -z-10" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-shito-red/20 -z-10" />
          </div>
        </div>
        
        <div className="mt-20 bg-shito-black rounded-lg p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-shito-red/20 flex items-center justify-center">
                <span className="text-shito-red text-4xl font-display">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Natural Ingredients</h3>
              <p className="text-white/70">Crafted from the freshest peppers, spices, and traditional ingredients.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-shito-red/20 flex items-center justify-center">
                <span className="text-shito-red text-4xl font-display">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Authentic Recipe</h3>
              <p className="text-white/70">Following time-honored Ghanaian culinary traditions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-shito-red/20 flex items-center justify-center">
                <span className="text-shito-red text-4xl font-display">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Versatile Use</h3>
              <p className="text-white/70">Perfect accompaniment for seafood, meats, rice, and more.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
};

export default ProductShowcase;
