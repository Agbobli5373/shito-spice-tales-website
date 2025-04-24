
import React, { useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';

interface Recipe {
  id: number;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  image: string;
  ingredients: string[];
  steps: string[];
}

const RecipeHub = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const recipes: Recipe[] = [
    {
      id: 1,
      title: 'Shito Fried Rice',
      category: 'Mains',
      difficulty: 'Easy',
      time: '30 mins',
      image: '/lovable-uploads/ba1f2468-c43e-48f7-8841-b5f047230a3c.png',
      ingredients: [
        '2 cups cooked rice',
        '2 tbsp shito sauce',
        '1 cup mixed vegetables',
        '2 eggs, beaten',
        '2 tbsp vegetable oil',
        'Salt to taste'
      ],
      steps: [
        'Heat oil in a large pan over medium-high heat.',
        'Add beaten eggs and scramble until cooked.',
        'Add vegetables and stir-fry for 2 minutes.',
        'Add rice and mix well.',
        'Stir in shito sauce and mix until evenly distributed.',
        'Season with salt to taste and serve hot.'
      ]
    },
    {
      id: 2,
      title: 'Grilled Shito Fish',
      category: 'Seafood',
      difficulty: 'Medium',
      time: '45 mins',
      image: '/lovable-uploads/34d419dd-2e44-4c8d-8b0f-11467c1ddfd4.png',
      ingredients: [
        '2 whole tilapia fish, cleaned',
        '3 tbsp shito sauce',
        '2 tbsp olive oil',
        '1 lemon, sliced',
        'Fresh herbs (parsley, cilantro)',
        'Salt to taste'
      ],
      steps: [
        'Preheat grill to medium-high heat.',
        'Score the fish on both sides and rub with salt.',
        'Mix shito sauce with olive oil and brush over the fish.',
        'Place lemon slices inside the fish cavity.',
        'Grill for 5-7 minutes on each side until fully cooked.',
        'Garnish with fresh herbs and serve with extra shito sauce.'
      ]
    },
    {
      id: 3,
      title: 'Shito Plantain Bites',
      category: 'Appetizers',
      difficulty: 'Easy',
      time: '20 mins',
      image: '/lovable-uploads/875e3d9e-0024-4269-8907-bebdc8f74ad6.png',
      ingredients: [
        '2 ripe plantains',
        '1 tbsp shito sauce',
        'Vegetable oil for frying',
        'Fresh cilantro for garnish',
        'Salt to taste'
      ],
      steps: [
        'Peel and cut plantains into 1-inch diagonal slices.',
        'Heat oil in a deep pan for frying.',
        'Fry plantain slices until golden brown on both sides.',
        'Drain on paper towels and sprinkle with salt.',
        'Serve warm with shito sauce for dipping.',
        'Garnish with fresh cilantro leaves.'
      ]
    }
  ];
  
  const filters = ['All', 'Mains', 'Seafood', 'Appetizers'];
  
  const filteredRecipes = activeFilter === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeFilter);
  
  return (
    <section id="recipes" className="section-padding bg-shito-beige/10 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h4 className="text-shito-red font-medium uppercase tracking-wider mb-2">Culinary Inspiration</h4>
          <h2 className="h2 text-shito-black">Delicious Recipes</h2>
          <div className="adinkra-divider mx-auto my-6"></div>
          <p className="text-lg text-shito-black/80 max-w-3xl mx-auto">
            Explore our collection of mouthwatering recipes featuring shito sauce. From traditional
            Ghanaian dishes to modern fusion creations, there's something for everyone.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === filter 
                  ? 'bg-shito-red text-white' 
                  : 'bg-white text-shito-black hover:bg-shito-red/10'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Recipe cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <div 
              key={recipe.id}
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                activeCard === recipe.id ? 'transform rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of card */}
              <div 
                className={`relative ${
                  activeCard === recipe.id ? 'hidden' : 'block'
                }`}
              >
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-bold text-xl text-shito-black">
                      {recipe.title}
                    </h3>
                    <span className="bg-shito-red/10 text-shito-red text-sm px-2 py-1 rounded">
                      {recipe.category}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-shito-black/70 mb-4">
                    <span>Difficulty: {recipe.difficulty}</span>
                    <span>Time: {recipe.time}</span>
                  </div>
                  
                  <button
                    className="flex items-center gap-2 text-shito-red font-medium hover:underline mt-4"
                    onClick={() => setActiveCard(recipe.id)}
                  >
                    <BookOpen size={16} />
                    <span>View Recipe</span>
                  </button>
                </div>
              </div>
              
              {/* Back of card */}
              <div 
                className={`absolute inset-0 bg-white p-6 ${
                  activeCard === recipe.id ? 'block' : 'hidden'
                }`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h3 className="font-display font-bold text-xl text-shito-black mb-4">
                  {recipe.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-bold text-shito-black mb-2">Ingredients:</h4>
                  <ul className="list-disc pl-5 text-sm text-shito-black/80 space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-shito-black mb-2">Steps:</h4>
                  <ol className="list-decimal pl-5 text-sm text-shito-black/80 space-y-1">
                    {recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <button
                  className="flex items-center gap-2 text-shito-red font-medium hover:underline mt-4"
                  onClick={() => setActiveCard(null)}
                >
                  <span>Back to Card</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <AnimatedButton 
            variant="secondary"
            href="#more-recipes"
            icon={<ArrowRight size={18} />}
          >
            Explore More Recipes
          </AnimatedButton>
        </div>
      </div>
      
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
};

export default RecipeHub;
