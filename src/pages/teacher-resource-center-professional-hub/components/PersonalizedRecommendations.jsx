import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalizedRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Islamic Studies Curriculum Guide",
      author: "Dr. Amina Hassan",
      subject: "Islamic Studies",
      grade: "6-8",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 124,
      price: "$29.99",
      alignment: "Common Core Aligned",
      description: "Comprehensive guide for teaching Islamic history and principles with modern pedagogical approaches.",
      tags: ["Curriculum", "Islamic Studies", "Middle School"]
    },
    {
      id: 2,
      title: "Interactive Science Experiments",
      author: "Prof. Sarah Johnson",
      subject: "Science",
      grade: "4-6",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 89,
      price: "$34.99",
      alignment: "NGSS Standards",
      description: "Hands-on experiments that make science concepts accessible and engaging for elementary students.",
      tags: ["Experiments", "Science", "Elementary"]
    },
    {
      id: 3,
      title: "Literature Circle Discussion Guides",
      author: "Ms. Rachel Martinez",
      subject: "English Language Arts",
      grade: "7-9",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      price: "$24.99",
      alignment: "State Standards",
      description: "Structured discussion guides for classic and contemporary literature with cultural sensitivity notes.",
      tags: ["Literature", "Discussion", "High School"]
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-educational">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-display font-semibold text-foreground mb-1">
            Recommended for You
          </h2>
          <p className="text-sm text-text-secondary">
            Based on your teaching profile and recent activity
          </p>
        </div>
        <Button variant="outline" size="sm" iconName="RefreshCw">
          Refresh
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {recommendations.map((item) => (
          <div key={item.id} className="group border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-educational hover-lift">
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-educational"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                  {item.alignment}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <Button variant="ghost" size="sm" iconName="Heart" className="bg-white/90 hover:bg-white text-text-secondary hover:text-error" />
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                  {item.subject}
                </span>
                <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                  Grade {item.grade}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-educational line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-text-secondary mb-2">
                by {item.author}
              </p>
              
              <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={14} color="#F39C12" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-xs text-text-secondary">({item.reviews})</span>
                </div>
                <span className="font-semibold text-primary">{item.price}</span>
              </div>
              
              <div className="flex gap-2">
                <Link to="/product-detail-educational-resource-showcase" className="flex-1">
                  <Button variant="outline" size="sm" fullWidth>
                    View Details
                  </Button>
                </Link>
                <Button variant="default" size="sm" iconName="ShoppingCart">
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <Link to="/product-categories-knowledge-universe">
          <Button variant="outline" iconName="ArrowRight" iconPosition="right">
            View All Recommendations
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;