import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickPreviewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < Math.floor(rating) ? 'text-secondary fill-current' : 'text-gray-300'}
      />
    ));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-soft z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-background rounded-lg shadow-educational-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Quick Preview</h2>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
            className="text-text-secondary hover:text-foreground"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-error text-white text-sm px-3 py-1 rounded-full font-medium">
                    -{product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Sample Pages */}
              <div className="grid grid-cols-3 gap-2">
                {product.samplePages?.map((page, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <Image
                      src={page}
                      alt={`Sample page ${index + 1}`}
                      className="w-full h-20 object-cover rounded border-2 border-transparent group-hover:border-primary transition-educational"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-educational rounded flex items-center justify-center">
                      <Icon name="ZoomIn" size={16} className="text-white" />
                    </div>
                  </div>
                )) || (
                  <div className="col-span-3 text-center text-text-secondary text-sm py-4">
                    Sample pages not available
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-text-secondary">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">Age: {product.ageGroup}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">Language: {product.language}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="BookOpen" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">Pages: {product.pages || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">{product.teacherApproval}% approved</span>
                </div>
              </div>

              {/* Curriculum Alignment */}
              {product.curriculumAlignment && (
                <div className="flex items-center space-x-2 p-3 bg-success/10 rounded-lg">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm font-medium text-success">
                    {product.curriculumAlignment} Curriculum Aligned
                  </span>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  )) || (
                    <li className="text-sm text-text-secondary">Features information not available</li>
                  )}
                </ul>
              </div>

              {/* Price and Actions */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {product.originalPrice && product.originalPrice !== product.price && (
                      <span className="text-lg text-text-secondary line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-secondary">Free shipping</p>
                    <p className="text-sm text-success">In stock</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    iconName="Heart"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Add to Wishlist
                  </Button>
                  <Button
                    variant="default"
                    iconName="ShoppingCart"
                    iconPosition="left"
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPreviewModal;