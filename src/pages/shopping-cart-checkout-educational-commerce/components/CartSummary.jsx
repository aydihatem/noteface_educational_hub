import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CartSummary = ({ 
  subtotal, 
  discount, 
  shipping, 
  tax, 
  total, 
  itemCount,
  onProceedToCheckout,
  onApplyDiscount,
  discountCode,
  setDiscountCode,
  isTeacherVerified,
  onVerifyTeacher
}) => {
  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    onApplyDiscount(discountCode);
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-educational border border-border sticky top-24">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Order Summary
      </h2>

      {/* Items Count */}
      <div className="flex justify-between items-center py-2 border-b border-border">
        <span className="text-text-secondary">
          Items ({itemCount})
        </span>
        <span className="font-medium text-foreground">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      {/* Discount Section */}
      {discount > 0 && (
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-success flex items-center">
            <Icon name="Tag" size={16} className="mr-1" />
            Discount Applied
          </span>
          <span className="font-medium text-success">
            -${discount.toFixed(2)}
          </span>
        </div>
      )}

      {/* Teacher Verification */}
      {!isTeacherVerified && (
        <div className="py-3 border-b border-border">
          <div className="bg-primary/5 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <Icon name="GraduationCap" size={16} className="text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Teacher Discount Available
              </span>
            </div>
            <p className="text-xs text-text-secondary mb-3">
              Verify your educator status to receive 15% off educational materials
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={onVerifyTeacher}
              iconName="Shield"
              iconPosition="left"
              className="w-full"
            >
              Verify Teacher Status
            </Button>
          </div>
        </div>
      )}

      {/* Discount Code */}
      <div className="py-3 border-b border-border">
        <form onSubmit={handleDiscountSubmit} className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Discount Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button
              type="submit"
              variant="outline"
              size="sm"
              disabled={!discountCode.trim()}
            >
              Apply
            </Button>
          </div>
        </form>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center py-2 border-b border-border">
        <span className="text-text-secondary">Shipping</span>
        <span className="font-medium text-foreground">
          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      {/* Tax */}
      <div className="flex justify-between items-center py-2 border-b border-border">
        <span className="text-text-secondary">Tax</span>
        <span className="font-medium text-foreground">
          ${tax.toFixed(2)}
        </span>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-4 border-b border-border">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-xl font-bold text-primary">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Shipping Info */}
      <div className="py-3 space-y-2">
        <div className="flex items-center text-sm text-success">
          <Icon name="Truck" size={14} className="mr-2" />
          Free shipping on orders over $50
        </div>
        <div className="flex items-center text-sm text-text-secondary">
          <Icon name="Clock" size={14} className="mr-2" />
          Estimated delivery: 3-5 business days
        </div>
        <div className="flex items-center text-sm text-text-secondary">
          <Icon name="RotateCcw" size={14} className="mr-2" />
          30-day return policy
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        variant="default"
        size="lg"
        onClick={onProceedToCheckout}
        iconName="CreditCard"
        iconPosition="left"
        className="w-full bg-primary hover:bg-primary/90"
      >
        Proceed to Checkout
      </Button>

      {/* Security Badge */}
      <div className="flex items-center justify-center mt-4 text-xs text-text-secondary">
        <Icon name="Shield" size={14} className="mr-1" />
        Secure checkout with SSL encryption
      </div>
    </div>
  );
};

export default CartSummary;