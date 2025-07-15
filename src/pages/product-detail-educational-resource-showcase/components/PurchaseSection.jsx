import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const PurchaseSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState(product.formats[0]);
  const [showEducatorDiscount, setShowEducatorDiscount] = useState(false);
  const [educatorCode, setEducatorCode] = useState('');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const formatOptions = product.formats.map(format => ({
    value: format.type,
    label: `${format.type} - $${format.price.toFixed(2)}`,
    description: format.description
  }));

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAddingToCart(false);
    // Show success message or redirect
  };

  const calculateTotal = () => {
    const basePrice = selectedFormat.price;
    const subtotal = basePrice * quantity;
    const discount = showEducatorDiscount && educatorCode === 'TEACHER2024' ? subtotal * 0.15 : 0;
    return {
      subtotal,
      discount,
      total: subtotal - discount
    };
  };

  const { subtotal, discount, total } = calculateTotal();

  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-educational sticky top-24">
      <div className="space-y-6">
        {/* Format Selection */}
        <div>
          <Select
            label="Format"
            options={formatOptions}
            value={selectedFormat.type}
            onChange={(value) => {
              const format = product.formats.find(f => f.type === value);
              setSelectedFormat(format);
            }}
          />
        </div>

        {/* Quantity Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Quantity
          </label>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              iconName="Minus"
            />
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(1)}
              iconName="Plus"
            />
          </div>
        </div>

        {/* Educator Discount */}
        <div className="bg-primary/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary">
              Educator Discount Available
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowEducatorDiscount(!showEducatorDiscount)}
              iconName={showEducatorDiscount ? "ChevronUp" : "ChevronDown"}
            />
          </div>
          
          {showEducatorDiscount && (
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter educator code"
                value={educatorCode}
                onChange={(e) => setEducatorCode(e.target.value)}
                description="Use code: TEACHER2024 for 15% off"
              />
              {educatorCode === 'TEACHER2024' && (
                <div className="flex items-center text-success text-sm">
                  <Icon name="CheckCircle" size={16} className="mr-1" />
                  Educator discount applied!
                </div>
              )}
            </div>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 py-4 border-t border-border">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Subtotal:</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-success">Educator Discount:</span>
              <span className="text-success font-medium">-${discount.toFixed(2)}</span>
            </div>
          )}
          
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
            <span>Total:</span>
            <span className="text-primary">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="default"
            fullWidth
            loading={isAddingToCart}
            onClick={handleAddToCart}
            iconName="ShoppingCart"
            iconPosition="left"
            disabled={!product.inStock}
          >
            {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
          </Button>

          <Button
            variant="outline"
            fullWidth
            iconName="Heart"
            iconPosition="left"
          >
            Add to Wishlist
          </Button>

          <Link to="/teacher-resource-center-professional-hub">
            <Button
              variant="ghost"
              fullWidth
              iconName="BookOpen"
              iconPosition="left"
            >
              Add to Lesson Plan
            </Button>
          </Link>
        </div>

        {/* Bulk Pricing Info */}
        <div className="bg-surface-warm rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2 flex items-center">
            <Icon name="Users" size={16} className="mr-2 text-primary" />
            Bulk Pricing Available
          </h4>
          <div className="text-sm text-text-secondary space-y-1">
            <div>10-24 copies: 10% off</div>
            <div>25-49 copies: 15% off</div>
            <div>50+ copies: 20% off</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 text-primary"
            iconName="Mail"
            iconPosition="left"
          >
            Contact for Quote
          </Button>
        </div>

        {/* Gift Options */}
        <div className="bg-secondary/10 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2 flex items-center">
            <Icon name="Gift" size={16} className="mr-2 text-secondary" />
            Gift Options
          </h4>
          <div className="space-y-2">
            <Link to="/gift-creation-studio-personalization-experience">
              <Button
                variant="ghost"
                size="sm"
                fullWidth
                iconName="Sparkles"
                iconPosition="left"
                className="justify-start text-secondary"
              >
                Personalize as Gift
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              fullWidth
              iconName="Package"
              iconPosition="left"
              className="justify-start text-secondary"
            >
              Gift Wrapping (+$3.99)
            </Button>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="text-sm text-text-secondary space-y-1">
          <div className="flex items-center">
            <Icon name="Truck" size={16} className="mr-2" />
            Free shipping on orders over $35
          </div>
          <div className="flex items-center">
            <Icon name="RotateCcw" size={16} className="mr-2" />
            30-day return policy
          </div>
          <div className="flex items-center">
            <Icon name="Shield" size={16} className="mr-2" />
            Secure payment processing
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;