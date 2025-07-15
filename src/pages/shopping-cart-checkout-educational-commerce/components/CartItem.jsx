import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove, onMoveToWishlist }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(item.id, newQuantity);
  };

  const getDiscountBadge = () => {
    if (item.teacherDiscount) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          <Icon name="GraduationCap" size={12} className="mr-1" />
          Teacher Discount
        </span>
      );
    }
    if (item.bulkDiscount) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
          <Icon name="Package" size={12} className="mr-1" />
          Bulk Pricing
        </span>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg p-4 sm:p-6 shadow-educational border border-border">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-muted">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm sm:text-base line-clamp-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm mt-1">
                by {item.author}
              </p>
              
              {/* Educational Metadata */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.ageRange && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary/20 text-secondary-foreground">
                    <Icon name="Users" size={10} className="mr-1" />
                    Age {item.ageRange}
                  </span>
                )}
                {item.subject && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                    <Icon name="BookOpen" size={10} className="mr-1" />
                    {item.subject}
                  </span>
                )}
                {getDiscountBadge()}
              </div>

              {/* Curriculum Alignment */}
              {item.curriculumAlignment && (
                <div className="mt-2">
                  <p className="text-xs text-text-secondary">
                    <Icon name="CheckCircle" size={12} className="inline mr-1" />
                    Aligned with {item.curriculumAlignment}
                  </p>
                </div>
              )}
            </div>

            {/* Price Section */}
            <div className="text-right sm:text-left sm:ml-4">
              <div className="flex flex-col items-end sm:items-start">
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="text-sm text-text-secondary line-through">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg font-bold text-foreground">
                  ${item.price.toFixed(2)}
                </span>
                {item.bulkPricing && (
                  <span className="text-xs text-accent">
                    ${item.bulkPricing.toFixed(2)} each for 10+
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-secondary">Qty:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="h-8 w-8 p-0"
                >
                  <Icon name="Minus" size={14} />
                </Button>
                <span className="px-3 py-1 text-sm font-medium min-w-[40px] text-center">
                  {item.quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Icon name="Plus" size={14} />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMoveToWishlist(item.id)}
                iconName="Heart"
                className="text-text-secondary hover:text-primary"
              >
                Save for Later
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
                iconName="Trash2"
                className="text-text-secondary hover:text-error"
              >
                Remove
              </Button>
            </div>
          </div>

          {/* Stock Status */}
          {item.stock && (
            <div className="mt-3">
              {item.stock < 5 ? (
                <p className="text-xs text-warning flex items-center">
                  <Icon name="AlertTriangle" size={12} className="mr-1" />
                  Only {item.stock} left in stock
                </p>
              ) : (
                <p className="text-xs text-success flex items-center">
                  <Icon name="CheckCircle" size={12} className="mr-1" />
                  In stock
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;