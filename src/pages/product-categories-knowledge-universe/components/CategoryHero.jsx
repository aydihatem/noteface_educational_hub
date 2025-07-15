import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CategoryHero = ({ selectedCategory, onCategoryChange, categories }) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-12 lg:py-16">
      <div className="container-educational">
        <div className="text-center mb-8">
          <h1 className="hero-text mb-4 text-primary">
            Knowledge Universe
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore curated educational resources across diverse domains. Each category offers carefully selected materials that honor tradition while embracing modern learning approaches.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="lg"
              iconName={category.icon}
              iconPosition="left"
              onClick={() => onCategoryChange(category.id)}
              className={`transition-educational hover-lift ${
                selectedCategory === category.id 
                  ? 'bg-primary text-white shadow-educational-strong' 
                  : 'hover:bg-primary/10 hover:border-primary'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>Curriculum Aligned</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span>Community Reviewed</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Globe" size={16} className="text-primary" />
            <span>Culturally Sensitive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;