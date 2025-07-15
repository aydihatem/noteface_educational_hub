import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onAddToWishlist, onQuickPreview, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted || false);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onAddToWishlist(product.id);
  };

  const handleQuickPreview = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickPreview(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < Math.floor(rating) ? 'text-secondary fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="card-educational group hover:shadow-educational-strong transition-educational">
      <div className="relative overflow-hidden rounded-t-lg">
        <Link to="/product-detail-educational-resource-showcase">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-slow"
          />
        </Link>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-educational flex items-center justify-center space-x-2">
          <Button
            variant="secondary"
            size="sm"
            iconName="Eye"
            onClick={handleQuickPreview}
            className="bg-white/90 text-foreground hover:bg-white"
          >
            Preview
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="ShoppingCart"
            onClick={handleAddToCart}
            className="bg-primary/90 hover:bg-primary"
          >
            Add to Cart
          </Button>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-educational"
        >
          <Icon
            name="Heart"
            size={16}
            className={isWishlisted ? 'text-accent fill-current' : 'text-gray-600'}
          />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-secondary text-foreground text-xs px-2 py-1 rounded-full font-medium">
              Bestseller
            </span>
          )}
          {product.discount && (
            <span className="bg-error text-white text-xs px-2 py-1 rounded-full font-medium">
              -{product.discount}%
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <Link to="/product-detail-educational-resource-showcase">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-educational">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-sm text-text-secondary mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Age Group & Language */}
        <div className="flex items-center space-x-4 mb-3 text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={12} />
            <span>{product.ageGroup}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Globe" size={12} />
            <span>{product.language}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-text-secondary">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Curriculum Alignment */}
        {product.curriculumAlignment && (
          <div className="flex items-center space-x-1 mb-3">
            <Icon name="CheckCircle" size={14} className="text-success" />
            <span className="text-xs text-success font-medium">
              {product.curriculumAlignment} Aligned
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.originalPrice && product.originalPrice !== product.price && (
              <span className="text-sm text-text-secondary line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-primary">
              ${product.price}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Icon name="Award" size={14} className="text-secondary" />
            <span className="text-xs text-text-secondary">
              {product.teacherApproval}% approved
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            iconName="Eye"
            onClick={handleQuickPreview}
            className="flex-1"
          >
            Preview
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="ShoppingCart"
            onClick={handleAddToCart}
            className="flex-1"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;