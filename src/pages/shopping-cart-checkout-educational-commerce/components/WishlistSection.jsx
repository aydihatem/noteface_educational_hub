import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WishlistSection = ({ wishlistItems, onMoveToCart, onRemoveFromWishlist }) => {
  if (wishlistItems.length === 0) {
    return (
      <div className="bg-card rounded-lg p-8 shadow-educational border border-border text-center">
        <Icon name="Heart" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Your Wishlist is Empty
        </h3>
        <p className="text-text-secondary mb-4">
          Save items you're interested in for later purchase
        </p>
        <Button
          variant="outline"
          iconName="BookOpen"
          iconPosition="left"
        >
          Browse Educational Resources
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-educational border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground flex items-center">
          <Icon name="Heart" size={24} className="text-primary mr-2" />
          Saved for Later ({wishlistItems.length})
        </h2>
        <Button
          variant="ghost"
          size="sm"
          iconName="MoreHorizontal"
          className="text-text-secondary"
        />
      </div>

      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg hover:shadow-educational-strong transition-educational">
            {/* Product Image */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-muted">
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
                  <h3 className="font-medium text-foreground text-sm line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    by {item.author}
                  </p>
                  
                  {/* Educational Metadata */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.ageRange && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary/20 text-secondary-foreground">
                        Age {item.ageRange}
                      </span>
                    )}
                    {item.subject && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                        {item.subject}
                      </span>
                    )}
                  </div>

                  {/* Price and Availability */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-semibold text-foreground">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.priceChange && (
                      <span className={`text-xs flex items-center ${
                        item.priceChange > 0 ? 'text-error' : 'text-success'
                      }`}>
                        <Icon 
                          name={item.priceChange > 0 ? "TrendingUp" : "TrendingDown"} 
                          size={12} 
                          className="mr-1" 
                        />
                        {item.priceChange > 0 ? '+' : ''}${Math.abs(item.priceChange).toFixed(2)}
                      </span>
                    )}
                    {item.inStock ? (
                      <span className="text-xs text-success flex items-center">
                        <Icon name="CheckCircle" size={12} className="mr-1" />
                        In Stock
                      </span>
                    ) : (
                      <span className="text-xs text-error flex items-center">
                        <Icon name="XCircle" size={12} className="mr-1" />
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row sm:flex-col gap-2 sm:ml-4">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => onMoveToCart(item.id)}
                    disabled={!item.inStock}
                    iconName="ShoppingCart"
                    iconPosition="left"
                    className="flex-1 sm:flex-none bg-primary hover:bg-primary/90"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveFromWishlist(item.id)}
                    iconName="Trash2"
                    className="text-text-secondary hover:text-error"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-border">
        <Button
          variant="outline"
          iconName="ShoppingCart"
          iconPosition="left"
          onClick={() => {
            wishlistItems.forEach(item => {
              if (item.inStock) {
                onMoveToCart(item.id);
              }
            });
          }}
        >
          Add All Available to Cart
        </Button>
        <Button
          variant="ghost"
          iconName="Share2"
          iconPosition="left"
          className="text-text-secondary"
        >
          Share Wishlist
        </Button>
      </div>
    </div>
  );
};

export default WishlistSection;