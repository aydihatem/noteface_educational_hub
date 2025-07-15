import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductInfo = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name={index < Math.floor(rating) ? "Star" : "Star"}
        size={16}
        className={index < Math.floor(rating) ? "text-secondary fill-current" : "text-border"}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Title and Author */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          {product.title}
        </h1>
        <p className="text-lg text-text-secondary">
          by <span className="text-primary font-medium">{product.author}</span>
        </p>
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {renderStars(product.rating)}
          <span className="text-sm font-medium ml-2">{product.rating}</span>
        </div>
        <span className="text-sm text-text-secondary">
          ({product.reviewCount} reviews)
        </span>
        <span className="text-sm text-text-secondary">
          {product.soldCount} sold
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-bold text-primary">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && product.originalPrice > product.price && (
          <span className="text-lg text-text-secondary line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
        {product.discount && (
          <span className="bg-accent text-white px-2 py-1 rounded-lg text-sm font-medium">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Educational Metadata */}
      <div className="bg-surface-warm rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-foreground flex items-center">
          <Icon name="GraduationCap" size={18} className="mr-2 text-primary" />
          Educational Information
        </h3>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-text-secondary">Reading Level:</span>
            <span className="ml-2 font-medium">{product.readingLevel}</span>
          </div>
          <div>
            <span className="text-text-secondary">Age Range:</span>
            <span className="ml-2 font-medium">{product.ageRange}</span>
          </div>
          <div>
            <span className="text-text-secondary">Subject:</span>
            <span className="ml-2 font-medium">{product.subject}</span>
          </div>
          <div>
            <span className="text-text-secondary">Language:</span>
            <span className="ml-2 font-medium">{product.language}</span>
          </div>
        </div>

        {/* Curriculum Alignment */}
        {product.curriculumAlignment && (
          <div className="pt-2 border-t border-border">
            <span className="text-text-secondary text-sm">Curriculum Alignment:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {product.curriculumAlignment.map((curriculum, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium"
                >
                  {curriculum}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Cultural Context */}
      {product.culturalContext && (
        <div className="bg-secondary/10 rounded-lg p-4">
          <h3 className="font-semibold text-foreground flex items-center mb-2">
            <Icon name="Globe" size={18} className="mr-2 text-secondary" />
            Cultural Context
          </h3>
          <p className="text-sm text-text-secondary">
            {product.culturalContext}
          </p>
          
          {product.scholarlyEndorsements && (
            <div className="mt-3">
              <span className="text-sm font-medium text-foreground">Scholarly Endorsements:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {product.scholarlyEndorsements.map((endorsement, index) => (
                  <span
                    key={index}
                    className="bg-secondary/20 text-secondary px-2 py-1 rounded-lg text-xs"
                  >
                    {endorsement}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Key Features */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
        <ul className="space-y-2">
          {product.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span className="text-text-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Availability */}
      <div className="flex items-center space-x-2">
        <Icon 
          name={product.inStock ? "CheckCircle" : "XCircle"} 
          size={18} 
          className={product.inStock ? "text-success" : "text-error"} 
        />
        <span className={`font-medium ${product.inStock ? "text-success" : "text-error"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        {product.inStock && product.stockCount && (
          <span className="text-sm text-text-secondary">
            ({product.stockCount} available)
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;