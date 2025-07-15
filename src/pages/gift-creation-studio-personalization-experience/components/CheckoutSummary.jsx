import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CheckoutSummary = ({ 
  selectedOccasion, 
  personalization, 
  selectedEnhancements, 
  giftOptions,
  onProceedToCheckout 
}) => {
  const baseNotebookPrice = 19.99;
  
  const getEnhancementsTotal = () => {
    return selectedEnhancements.reduce((total, item) => total + item.price, 0);
  };

  const getGiftOptionsTotal = () => {
    let total = 0;
    if (giftOptions.wrapping) total += giftOptions.wrapping.price;
    
    const deliveryOptions = [
      { value: 'standard', price: 0 },
      { value: 'express', price: 9.99 },
      { value: 'overnight', price: 24.99 },
      { value: 'scheduled', price: 4.99 }
    ];
    
    const selectedDelivery = deliveryOptions.find(option => option.value === giftOptions.delivery);
    if (selectedDelivery) total += selectedDelivery.price;
    
    return total;
  };

  const getSubtotal = () => {
    return baseNotebookPrice + getEnhancementsTotal() + getGiftOptionsTotal();
  };

  const getTax = () => {
    return getSubtotal() * 0.08; // 8% tax
  };

  const getTotal = () => {
    return getSubtotal() + getTax();
  };

  const isComplete = () => {
    return selectedOccasion && 
           personalization.recipientName && 
           personalization.language && 
           personalization.ageGroup;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Order Summary</h2>
        <p className="text-text-secondary">Review your personalized gift before checkout</p>
      </div>

      <div className="bg-background rounded-lg p-6 shadow-educational space-y-6">
        {/* Main Product */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={20} color="var(--color-primary)" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Personalized Notebook</h3>
                <p className="text-sm text-text-secondary">Custom designed for {personalization.recipientName || 'recipient'}</p>
              </div>
            </div>
            <span className="font-bold text-foreground">${baseNotebookPrice}</span>
          </div>

          {/* Personalization Details */}
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">Personalization Details:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Occasion:</span>
                <span className="text-foreground">{selectedOccasion?.name || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Language:</span>
                <span className="text-foreground">{personalization.language || 'English'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Age Group:</span>
                <span className="text-foreground">{personalization.ageGroup || 'Not specified'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Theme:</span>
                <span className="text-foreground">{personalization.designTheme || 'Default'}</span>
              </div>
            </div>
            
            {personalization.selectedQuote && (
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-text-secondary">Quote: "{personalization.selectedQuote.substring(0, 60)}..."</p>
              </div>
            )}
          </div>
        </div>

        {/* Enhancements */}
        {selectedEnhancements.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Enhancements:</h4>
            {selectedEnhancements.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Plus" size={14} color="var(--color-success)" />
                  <span className="text-sm text-foreground">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-foreground">${item.price}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="text-sm font-medium text-foreground">Enhancements Total:</span>
              <span className="text-sm font-bold text-foreground">${getEnhancementsTotal().toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Gift Options */}
        {(giftOptions.wrapping || giftOptions.delivery !== 'standard') && (
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Gift Options:</h4>
            {giftOptions.wrapping && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Gift" size={14} color="var(--color-accent)" />
                  <span className="text-sm text-foreground">{giftOptions.wrapping.name}</span>
                </div>
                <span className="text-sm font-medium text-foreground">${giftOptions.wrapping.price}</span>
              </div>
            )}
            
            {giftOptions.delivery && giftOptions.delivery !== 'standard' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={14} color="var(--color-accent)" />
                  <span className="text-sm text-foreground">
                    {giftOptions.delivery === 'express' && 'Express Delivery'}
                    {giftOptions.delivery === 'overnight' && 'Overnight Delivery'}
                    {giftOptions.delivery === 'scheduled' && 'Scheduled Delivery'}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  ${giftOptions.delivery === 'express' ? '9.99' : 
                    giftOptions.delivery === 'overnight' ? '24.99' : 
                    giftOptions.delivery === 'scheduled' ? '4.99' : '0.00'}
                </span>
              </div>
            )}
            
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="text-sm font-medium text-foreground">Gift Options Total:</span>
              <span className="text-sm font-bold text-foreground">${getGiftOptionsTotal().toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Price Breakdown */}
        <div className="space-y-2 pt-4 border-t border-border">
          <div className="flex justify-between">
            <span className="text-foreground">Subtotal:</span>
            <span className="text-foreground">${getSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Tax (8%):</span>
            <span className="text-text-secondary">${getTax().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
            <span className="text-foreground">Total:</span>
            <span className="text-primary">${getTotal().toFixed(2)}</span>
          </div>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Calendar" size={16} color="var(--color-primary)" />
            <h5 className="font-medium text-foreground">Estimated Delivery</h5>
          </div>
          <p className="text-sm text-text-secondary">
            {giftOptions.delivery === 'overnight' && 'Tomorrow by 10:30 AM'}
            {giftOptions.delivery === 'express' && 'Within 2-3 business days'}
            {giftOptions.delivery === 'scheduled' && `On ${giftOptions.scheduledDate || 'selected date'}`}
            {(!giftOptions.delivery || giftOptions.delivery === 'standard') && 'Within 5-7 business days'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isComplete() ? (
            <Link to="/shopping-cart-checkout-educational-commerce">
              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="ShoppingCart"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
                onClick={onProceedToCheckout}
              >
                Proceed to Checkout
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              size="lg"
              fullWidth
              disabled
              iconName="AlertCircle"
              iconPosition="left"
            >
              Complete Personalization to Continue
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            fullWidth
            iconName="Save"
            iconPosition="left"
          >
            Save for Later
          </Button>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <Icon name="Shield" size={20} color="var(--color-success)" className="mx-auto mb-1" />
            <p className="text-xs text-text-secondary">Quality Guaranteed</p>
          </div>
          <div className="text-center">
            <Icon name="RotateCcw" size={20} color="var(--color-success)" className="mx-auto mb-1" />
            <p className="text-xs text-text-secondary">30-Day Returns</p>
          </div>
          <div className="text-center">
            <Icon name="Truck" size={20} color="var(--color-success)" className="mx-auto mb-1" />
            <p className="text-xs text-text-secondary">Free Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;