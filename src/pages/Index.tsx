
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import ProductShowcase from '@/components/ProductShowcase';
import PairingGallery from '@/components/PairingGallery';
import RecipeHub from '@/components/RecipeHub';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <ProductShowcase />
      <PairingGallery />
      <RecipeHub />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
