import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const CheckoutForm = ({ 
  onSubmitOrder, 
  total, 
  isGiftPurchase, 
  setIsGiftPurchase,
  userType,
  setUserType 
}) => {
  const [formData, setFormData] = useState({
    // Billing Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Information
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: 'US',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Gift Information
    giftRecipientName: '',
    giftRecipientEmail: '',
    giftMessage: '',
    giftDeliveryDate: '',
    
    // Institutional Information
    institutionName: '',
    purchaseOrderNumber: '',
    departmentBudgetCode: '',
    
    // Preferences
    sameAsBilling: true,
    savePaymentMethod: false,
    emailUpdates: true,
    rushDelivery: false
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const userTypeOptions = [
    { value: 'individual', label: 'Individual Purchase' },
    { value: 'teacher', label: 'Teacher/Educator' },
    { value: 'parent', label: 'Parent/Guardian' },
    { value: 'institution', label: 'Educational Institution' },
    { value: 'student', label: 'Student' }
  ];

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'AU', label: 'Australia' }
  ];

  const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'CA', label: 'California' },
    { value: 'FL', label: 'Florida' },
    { value: 'NY', label: 'New York' },
    { value: 'TX', label: 'Texas' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    if (step === 2) {
      if (!formData.shippingAddress.trim()) newErrors.shippingAddress = 'Address is required';
      if (!formData.shippingCity.trim()) newErrors.shippingCity = 'City is required';
      if (!formData.shippingState) newErrors.shippingState = 'State is required';
      if (!formData.shippingZip.trim()) newErrors.shippingZip = 'ZIP code is required';
    }
    
    if (step === 3) {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      onSubmitOrder(formData);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
            currentStep >= step 
              ? 'bg-primary border-primary text-white' :'border-border text-text-secondary'
          }`}>
            {currentStep > step ? (
              <Icon name="Check" size={16} />
            ) : (
              <span className="text-sm font-medium">{step}</span>
            )}
          </div>
          {step < 3 && (
            <div className={`w-16 h-0.5 mx-2 ${
              currentStep > step ? 'bg-primary' : 'bg-border'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Personal Information
        </h3>
        
        <div className="mb-4">
          <Select
            label="Purchase Type"
            options={userTypeOptions}
            value={userType}
            onChange={setUserType}
            description="This helps us provide relevant discounts and features"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            error={errors.firstName}
            required
          />
          <Input
            label="Last Name"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            error={errors.lastName}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            error={errors.phone}
            required
          />
        </div>
      </div>

      {userType === 'institution' && (
        <div>
          <h4 className="text-md font-medium text-foreground mb-3">
            Institutional Information
          </h4>
          <div className="space-y-4">
            <Input
              label="Institution Name"
              type="text"
              value={formData.institutionName}
              onChange={(e) => handleInputChange('institutionName', e.target.value)}
              placeholder="School or organization name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Purchase Order Number"
                type="text"
                value={formData.purchaseOrderNumber}
                onChange={(e) => handleInputChange('purchaseOrderNumber', e.target.value)}
                placeholder="Optional"
              />
              <Input
                label="Department Budget Code"
                type="text"
                value={formData.departmentBudgetCode}
                onChange={(e) => handleInputChange('departmentBudgetCode', e.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>
        </div>
      )}

      {/* Gift Purchase Toggle */}
      <div className="border-t border-border pt-6">
        <Checkbox
          label="This is a gift purchase"
          checked={isGiftPurchase}
          onChange={(e) => setIsGiftPurchase(e.target.checked)}
          description="Add gift options and recipient information"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Shipping Information
        </h3>

        <div className="space-y-4">
          <Input
            label="Street Address"
            type="text"
            value={formData.shippingAddress}
            onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
            error={errors.shippingAddress}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="City"
              type="text"
              value={formData.shippingCity}
              onChange={(e) => handleInputChange('shippingCity', e.target.value)}
              error={errors.shippingCity}
              required
            />
            <Select
              label="State"
              options={stateOptions}
              value={formData.shippingState}
              onChange={(value) => handleInputChange('shippingState', value)}
              error={errors.shippingState}
              required
            />
            <Input
              label="ZIP Code"
              type="text"
              value={formData.shippingZip}
              onChange={(e) => handleInputChange('shippingZip', e.target.value)}
              error={errors.shippingZip}
              required
            />
          </div>

          <Select
            label="Country"
            options={countryOptions}
            value={formData.shippingCountry}
            onChange={(value) => handleInputChange('shippingCountry', value)}
          />
        </div>
      </div>

      {/* Shipping Options */}
      <div className="border-t border-border pt-6">
        <h4 className="text-md font-medium text-foreground mb-3">
          Delivery Options
        </h4>
        <div className="space-y-3">
          <Checkbox
            label="Rush delivery (2-3 business days) - $15.00"
            checked={formData.rushDelivery}
            onChange={(e) => handleInputChange('rushDelivery', e.target.checked)}
            description="Perfect for last-minute educational needs"
          />
        </div>
      </div>

      {/* Gift Information */}
      {isGiftPurchase && (
        <div className="border-t border-border pt-6">
          <h4 className="text-md font-medium text-foreground mb-3">
            Gift Information
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Recipient Name"
                type="text"
                value={formData.giftRecipientName}
                onChange={(e) => handleInputChange('giftRecipientName', e.target.value)}
                placeholder="Gift recipient's name"
              />
              <Input
                label="Recipient Email"
                type="email"
                value={formData.giftRecipientEmail}
                onChange={(e) => handleInputChange('giftRecipientEmail', e.target.value)}
                placeholder="For delivery notification"
              />
            </div>
            <Input
              label="Delivery Date"
              type="date"
              value={formData.giftDeliveryDate}
              onChange={(e) => handleInputChange('giftDeliveryDate', e.target.value)}
              description="Leave blank for immediate delivery"
            />
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Gift Message
              </label>
              <textarea
                value={formData.giftMessage}
                onChange={(e) => handleInputChange('giftMessage', e.target.value)}
                placeholder="Add a personal message to your gift..."
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Payment Information
        </h3>

        <div className="space-y-4">
          <Input
            label="Card Number"
            type="text"
            value={formData.cardNumber}
            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
            error={errors.cardNumber}
            placeholder="1234 5678 9012 3456"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              type="text"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
              error={errors.expiryDate}
              placeholder="MM/YY"
              required
            />
            <Input
              label="CVV"
              type="text"
              value={formData.cvv}
              onChange={(e) => handleInputChange('cvv', e.target.value)}
              error={errors.cvv}
              placeholder="123"
              required
            />
          </div>

          <Input
            label="Cardholder Name"
            type="text"
            value={formData.cardName}
            onChange={(e) => handleInputChange('cardName', e.target.value)}
            error={errors.cardName}
            placeholder="Name as it appears on card"
            required
          />
        </div>
      </div>

      {/* Payment Options */}
      {userType === 'institution' && (
        <div className="border-t border-border pt-6">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Icon name="Building" size={16} className="text-primary mr-2" />
              <span className="font-medium text-foreground">
                Institutional Payment Options
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              Need to pay by invoice or purchase order? Contact our institutional sales team.
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      )}

      {/* Preferences */}
      <div className="border-t border-border pt-6">
        <h4 className="text-md font-medium text-foreground mb-3">
          Preferences
        </h4>
        <div className="space-y-3">
          <Checkbox
            label="Save payment method for future purchases"
            checked={formData.savePaymentMethod}
            onChange={(e) => handleInputChange('savePaymentMethod', e.target.checked)}
            description="Securely store for faster checkout"
          />
          <Checkbox
            label="Receive email updates about new educational resources"
            checked={formData.emailUpdates}
            onChange={(e) => handleInputChange('emailUpdates', e.target.checked)}
            description="Get notified about relevant books and materials"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="border-t border-border pt-6">
        <div className="bg-card rounded-lg p-4 border border-border">
          <h4 className="font-medium text-foreground mb-3">Order Total</h4>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-foreground">Total:</span>
            <span className="text-xl font-bold text-primary">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-card rounded-lg p-6 shadow-educational border border-border">
      {renderStepIndicator()}
      
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <div>
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevStep}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
            )}
          </div>
          
          <div>
            {currentStep < 3 ? (
              <Button
                type="button"
                variant="default"
                onClick={handleNextStep}
                iconName="ChevronRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                variant="default"
                iconName="CreditCard"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Complete Order
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;