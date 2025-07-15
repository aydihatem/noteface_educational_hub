import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const EnhancementOptions = ({ selectedEnhancements, onEnhancementChange }) => {
  const [activeCategory, setActiveCategory] = useState('bookmarks');

  const enhancementCategories = [
    { id: 'bookmarks', name: 'Bookmarks & Accessories', icon: 'Bookmark' },
    { id: 'guides', name: 'Learning Guides', icon: 'BookOpen' },
    { id: 'companions', name: 'Companion Books', icon: 'Library' },
    { id: 'stationery', name: 'Stationery Set', icon: 'PenTool' }
  ];

  const enhancements = {
    bookmarks: [
      {
        id: 'islamic-bookmark',
        name: 'Islamic Wisdom Bookmark',
        description: 'Beautiful bookmark with Quranic verses and Islamic geometric patterns',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop',
        features: ['Durable cardstock', 'Gold foil accents', 'Tassel included']
      },
      {
        id: 'literary-bookmark',
        name: 'Literary Classics Bookmark',
        description: 'Elegant bookmark featuring famous literary quotes and authors',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop',
        features: ['Premium paper', 'Classic design', 'Protective coating']
      },
      {
        id: 'science-bookmark',
        name: 'Science Explorer Bookmark',
        description: 'Interactive bookmark with scientific facts and formulas',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=200&h=300&fit=crop',
        features: ['Educational content', 'Colorful design', 'Fun facts included']
      }
    ],
    guides: [
      {
        id: 'study-tips-guide',
        name: 'Effective Study Tips Guide',
        description: 'Comprehensive guide with proven study techniques and time management',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=300&fit=crop',
        features: ['20 pages', 'Illustrated tips', 'Age-appropriate advice']
      },
      {
        id: 'reading-comprehension',
        name: 'Reading Comprehension Helper',
        description: 'Tools and techniques to improve reading skills and understanding',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop',
        features: ['Interactive exercises', 'Progress tracking', 'Multiple difficulty levels']
      },
      {
        id: 'islamic-learning-guide',
        name: 'Islamic Learning Companion',
        description: 'Guide for understanding Islamic concepts and teachings',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop',
        features: ['Authentic sources', 'Age-appropriate content', 'Beautiful illustrations']
      }
    ],
    companions: [
      {
        id: 'quran-stories',
        name: 'Stories from the Quran',
        description: 'Beautifully illustrated collection of Quranic stories for young readers',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop',
        features: ['Full-color illustrations', 'Age-appropriate language', 'Moral lessons']
      },
      {
        id: 'science-experiments',
        name: 'Fun Science Experiments',
        description: 'Hands-on experiments to spark curiosity and learning',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=200&h=300&fit=crop',
        features: ['Safe experiments', 'Step-by-step instructions', 'Educational explanations']
      },
      {
        id: 'poetry-collection',
        name: 'Classic Poetry Collection',
        description: 'Curated selection of age-appropriate poems from various cultures',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop',
        features: ['Diverse authors', 'Beautiful typography', 'Discussion questions']
      }
    ],
    stationery: [
      {
        id: 'premium-pen-set',
        name: 'Premium Writing Set',
        description: 'High-quality pens and pencils perfect for note-taking',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=300&fit=crop',
        features: ['Ergonomic design', 'Smooth writing', 'Gift box included']
      },
      {
        id: 'sticky-notes-set',
        name: 'Colorful Sticky Notes Set',
        description: 'Variety pack of sticky notes for organization and creativity',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop',
        features: ['Multiple colors', 'Different sizes', 'Strong adhesive']
      },
      {
        id: 'ruler-protractor-set',
        name: 'Geometry Tools Set',
        description: 'Essential tools for mathematics and technical drawing',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=300&fit=crop',
        features: ['Durable plastic', 'Clear markings', 'Compact storage']
      }
    ]
  };

  const handleEnhancementToggle = (enhancement) => {
    const isSelected = selectedEnhancements.some(item => item.id === enhancement.id);
    
    if (isSelected) {
      onEnhancementChange(selectedEnhancements.filter(item => item.id !== enhancement.id));
    } else {
      onEnhancementChange([...selectedEnhancements, enhancement]);
    }
  };

  const getTotalPrice = () => {
    return selectedEnhancements.reduce((total, item) => total + item.price, 0);
  };

  const currentEnhancements = enhancements[activeCategory] || [];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Enhance Your Gift</h2>
        <p className="text-text-secondary">Add complementary items to create the perfect educational gift set</p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {enhancementCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-educational ${
              activeCategory === category.id
                ? 'bg-primary text-white' :'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Enhancement Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentEnhancements.map((enhancement) => {
          const isSelected = selectedEnhancements.some(item => item.id === enhancement.id);
          
          return (
            <div
              key={enhancement.id}
              className={`card-educational p-4 transition-educational ${
                isSelected ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={enhancement.image}
                    alt={enhancement.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground text-sm">{enhancement.name}</h3>
                    <span className="text-primary font-bold text-sm">${enhancement.price}</span>
                  </div>
                  
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {enhancement.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1">
                    {enhancement.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={12} color="var(--color-success)" />
                        <span className="text-xs text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add/Remove Button */}
                <div className="pt-2">
                  <Checkbox
                    label={isSelected ? 'Added to gift set' : 'Add to gift set'}
                    checked={isSelected}
                    onChange={() => handleEnhancementToggle(enhancement)}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Items Summary */}
      {selectedEnhancements.length > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-foreground">Selected Enhancements</h4>
            <span className="text-primary font-bold">Total: ${getTotalPrice().toFixed(2)}</span>
          </div>
          
          <div className="space-y-2">
            {selectedEnhancements.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <span className="text-foreground">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-text-secondary">${item.price}</span>
                  <button
                    onClick={() => handleEnhancementToggle(item)}
                    className="text-error hover:text-error/80 transition-colors"
                  >
                    <Icon name="X" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="bg-muted/50 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Lightbulb" size={16} color="var(--color-warning)" />
          <h5 className="font-medium text-foreground">Recommendation</h5>
        </div>
        <p className="text-sm text-text-secondary">
          For the best learning experience, we recommend adding a bookmark and a learning guide to complement your personalized notebook.
        </p>
      </div>
    </div>
  );
};

export default EnhancementOptions;