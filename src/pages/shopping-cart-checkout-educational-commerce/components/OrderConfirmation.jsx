import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderConfirmation = ({ orderData, onContinueShopping, onViewAccount }) => {
  const {
    orderNumber,
    total,
    items,
    shippingAddress,
    estimatedDelivery,
    paymentMethod,
    isGiftPurchase,
    giftRecipient,
    userType
  } = orderData;

  const getEducationalResources = () => {
    const resources = [];
    
    items.forEach(item => {
      if (item.subject === 'Islamic Studies') {
        resources.push({
          title: 'Islamic Studies Teaching Guide',
          description: 'Comprehensive lesson plans and activities for Islamic education',
          icon: 'BookOpen'
        });
      }
      if (item.subject === 'Literature') {
        resources.push({
          title: 'Literature Discussion Prompts',
          description: 'Engaging questions and activities for literary analysis',
          icon: 'MessageCircle'
        });
      }
      if (item.subject === 'Science') {
        resources.push({
          title: 'Science Experiment Worksheets',
          description: 'Hands-on activities to complement your science materials',
          icon: 'Beaker'
        });
      }
    });

    return resources;
  };

  const educationalResources = getEducationalResources();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Success Header */}
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Order Confirmed!
        </h1>
        <p className="text-text-secondary">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
      </div>

      {/* Order Details */}
      <div className="bg-card rounded-lg p-6 shadow-educational border border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Order Details
          </h2>
          <span className="text-sm text-text-secondary">
            Order #{orderNumber}
          </span>
        </div>

        <div className="space-y-4">
          {/* Order Summary */}
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-text-secondary">Total Amount</span>
            <span className="font-semibold text-foreground text-lg">
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Payment Method */}
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-text-secondary">Payment Method</span>
            <span className="text-foreground flex items-center">
              <Icon name="CreditCard" size={16} className="mr-2" />
              {paymentMethod}
            </span>
          </div>

          {/* Delivery Information */}
          <div className="py-2 border-b border-border">
            <div className="flex justify-between items-start">
              <span className="text-text-secondary">Delivery Address</span>
              <div className="text-right text-foreground">
                <p>{shippingAddress.street}</p>
                <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-text-secondary">Estimated Delivery</span>
            <span className="text-foreground flex items-center">
              <Icon name="Truck" size={16} className="mr-2" />
              {estimatedDelivery}
            </span>
          </div>
        </div>
      </div>

      {/* Gift Information */}
      {isGiftPurchase && (
        <div className="bg-card rounded-lg p-6 shadow-educational border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Gift" size={20} className="text-primary mr-2" />
            Gift Information
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-text-secondary">Recipient</span>
              <span className="text-foreground">{giftRecipient.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Notification Email</span>
              <span className="text-foreground">{giftRecipient.email}</span>
            </div>
            <div className="bg-primary/5 rounded-lg p-3 mt-3">
              <p className="text-sm text-primary">
                <Icon name="Mail" size={14} className="inline mr-1" />
                Gift notification will be sent to the recipient upon delivery
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Educational Resources */}
      {educationalResources.length > 0 && (
        <div className="bg-card rounded-lg p-6 shadow-educational border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Download" size={20} className="text-primary mr-2" />
            Bonus Educational Resources
          </h3>
          <p className="text-text-secondary mb-4">
            We've included these complementary resources to enhance your educational materials:
          </p>
          <div className="space-y-3">
            {educationalResources.map((resource, index) => (
              <div key={index} className="flex items-start p-3 bg-muted rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <Icon name={resource.icon} size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm">
                    {resource.title}
                  </h4>
                  <p className="text-text-secondary text-xs mt-1">
                    {resource.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Download"
                  className="text-primary hover:text-primary/80"
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Teacher Benefits */}
      {userType === 'teacher' && (
        <div className="bg-card rounded-lg p-6 shadow-educational border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="GraduationCap" size={20} className="text-primary mr-2" />
            Teacher Account Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-primary/5 rounded-lg">
              <Icon name="Percent" size={16} className="text-primary mr-3" />
              <div>
                <p className="font-medium text-foreground text-sm">15% Discount Applied</p>
                <p className="text-text-secondary text-xs">On all future purchases</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-primary/5 rounded-lg">
              <Icon name="Users" size={16} className="text-primary mr-3" />
              <div>
                <p className="font-medium text-foreground text-sm">Teacher Community</p>
                <p className="text-text-secondary text-xs">Access to exclusive forums</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div className="bg-card rounded-lg p-6 shadow-educational border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          What's Next?
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-xs font-medium text-primary">1</span>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">
                Order Processing
              </p>
              <p className="text-text-secondary text-xs">
                Your order is being prepared for shipment
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-xs font-medium text-text-secondary">2</span>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">
                Shipping Notification
              </p>
              <p className="text-text-secondary text-xs">
                You'll receive tracking information via email
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center mr-3 mt-0.5">
              <span className="text-xs font-medium text-text-secondary">3</span>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">
                Delivery & Enjoyment
              </p>
              <p className="text-text-secondary text-xs">
                Your educational materials will arrive by {estimatedDelivery}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          variant="outline"
          onClick={onContinueShopping}
          iconName="ArrowLeft"
          iconPosition="left"
          className="flex-1"
        >
          Continue Shopping
        </Button>
        <Button
          variant="default"
          onClick={onViewAccount}
          iconName="User"
          iconPosition="left"
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          View My Account
        </Button>
      </div>

      {/* Support Information */}
      <div className="text-center py-6 border-t border-border">
        <p className="text-text-secondary text-sm mb-2">
          Need help with your order?
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            iconName="Mail"
            iconPosition="left"
            className="text-primary hover:text-primary/80"
          >
            Email Support
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            className="text-primary hover:text-primary/80"
          >
            Call Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;