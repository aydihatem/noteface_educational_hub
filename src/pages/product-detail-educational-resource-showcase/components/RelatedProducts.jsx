import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ currentProduct }) => {
  const relatedProducts = [
    {
      id: 'islamic-stories-children',
      title: 'Islamic Stories for Young Hearts',
      author: 'Dr. Amina Hassan',
      price: 18.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviewCount: 234,
      coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      ageRange: '5-8 years',
      subject: 'Islamic Studies',
      badge: 'Bestseller'
    },
    {
      id: 'quran-learning-guide',
      title: 'My First Quran Learning Guide',
      author: 'Sheikh Abdullah Rahman',
      price: 22.50,
      rating: 4.9,
      reviewCount: 456,
      coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      ageRange: '6-10 years',
      subject: 'Islamic Studies',
      badge: 'New Release'
    },
    {
      id: 'arabic-alphabet-workbook',
      title: 'Arabic Alphabet Workbook',
      author: 'Fatima Al-Zahra',
      price: 15.99,
      rating: 4.6,
      reviewCount: 189,
      coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop',
      ageRange: '4-7 years',
      subject: 'Language Learning',
      badge: null
    },
    {
      id: 'islamic-history-kids',
      title: 'Heroes of Islam for Children',
      author: 'Dr. Omar Malik',
      price: 19.99,
      originalPrice: 25.99,
      rating: 4.8,
      reviewCount: 312,
      coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      ageRange: '8-12 years',
      subject: 'Islamic History',
      badge: 'Award Winner'
    },
    {
      id: 'dua-prayer-book',
      title: 'My Daily Duas and Prayers',
      author: 'Aisha Mahmoud',
      price: 16.50,
      rating: 4.5,
      reviewCount: 167,
      coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      ageRange: '5-12 years',
      subject: 'Islamic Studies',
      badge: null
    },
    {
      id: 'islamic-values-stories',
      title: 'Stories of Islamic Values',
      author: 'Dr. Yusuf Ibrahim',
      price: 21.99,
      rating: 4.7,
      reviewCount: 278,
      coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop',
      ageRange: '7-11 years',
      subject: 'Character Building',
      badge: 'Editor\'s Choice'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={12}
        className={index < Math.floor(rating) ? "text-secondary fill-current" : "text-border"}
      />
    ));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Bestseller': return 'bg-accent text-white';
      case 'New Release': return 'bg-success text-white';
      case 'Award Winner': return 'bg-secondary text-foreground';
      case 'Editor\'s Choice': return 'bg-primary text-white';
      default: return 'bg-text-secondary text-white';
    }
  };

  return (
    <div className="bg-background border border-border rounded-lg shadow-educational">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
          <Icon name="BookOpen" size={24} className="mr-3 text-primary" />
          Related Educational Resources
        </h3>
        <p className="text-text-secondary">
          Discover more books and resources that complement your learning journey.
        </p>
      </div>

      <div className="p-6">
        {/* Recommendation Categories */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Users"
              iconPosition="left"
              className="text-primary border-primary/30"
            >
              Same Age Group
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="BookOpen"
              iconPosition="left"
              className="text-secondary border-secondary/30"
            >
              Same Subject
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="User"
              iconPosition="left"
              className="text-accent border-accent/30"
            >
              Same Author
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="TrendingUp"
              iconPosition="left"
              className="text-success border-success/30"
            >
              Trending
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product-detail-educational-resource-showcase?id=${product.id}`}>
                <div className="bg-surface-warm rounded-lg overflow-hidden shadow-educational hover:shadow-educational-strong transition-shadow">
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.coverImage}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className={`absolute top-2 left-2 px-2 py-1 rounded-lg text-xs font-medium ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex flex-col space-y-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 bg-background/80 hover:bg-background/90"
                          iconName="Heart"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 bg-background/80 hover:bg-background/90"
                          iconName="Eye"
                        />
                      </div>
                    </div>

                    {/* Discount Badge */}
                    {product.originalPrice && product.originalPrice > product.price && (
                      <div className="absolute bottom-2 left-2 bg-accent text-white px-2 py-1 rounded-lg text-xs font-medium">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="mb-2">
                      <h4 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h4>
                      <p className="text-text-secondary text-xs mt-1">
                        by {product.author}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="flex items-center space-x-0.5">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs text-text-secondary">
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>

                    {/* Educational Info */}
                    <div className="flex items-center space-x-2 mb-3 text-xs text-text-secondary">
                      <span className="flex items-center">
                        <Icon name="Users" size={10} className="mr-1" />
                        {product.ageRange}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Icon name="BookOpen" size={10} className="mr-1" />
                        {product.subject}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-xs text-text-secondary line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="ShoppingCart"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Link to="/product-categories-knowledge-universe">
            <Button
              variant="outline"
              iconName="ArrowRight"
              iconPosition="right"
            >
              View More Related Products
            </Button>
          </Link>
        </div>

        {/* Personalized Recommendations */}
        <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Icon name="Sparkles" size={18} className="mr-2 text-primary" />
            Personalized for You
          </h4>
          <p className="text-text-secondary text-sm mb-4">
            Based on your browsing history and preferences, we think you might also enjoy these educational resources.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="BookOpen"
              iconPosition="left"
              className="text-primary"
            >
              Islamic Literature
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Users"
              iconPosition="left"
              className="text-primary"
            >
              Age 6-10 Resources
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Star"
              iconPosition="left"
              className="text-primary"
            >
              Highly Rated Books
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;