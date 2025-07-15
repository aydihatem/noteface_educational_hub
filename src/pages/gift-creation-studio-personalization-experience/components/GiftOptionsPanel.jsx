import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

import { Checkbox } from '../../../components/ui/Checkbox';

const GiftOptionsPanel = ({ giftOptions, onGiftOptionsChange }) => {
  const [activeTab, setActiveTab] = useState('wrapping');

  const wrappingOptions = [
    {
      id: 'premium-box',
      name: 'Premium Gift Box',
      description: 'Elegant box with magnetic closure and ribbon',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=200&fit=crop',
      features: ['Magnetic closure', 'Satin ribbon', 'Gift card holder']
    },
    {
      id: 'eco-friendly',
      name: 'Eco-Friendly Wrap',
      description: 'Sustainable wrapping with recycled materials',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
      features: ['Recycled paper', 'Natural twine', 'Plantable seed tag']
    },
    {
      id: 'cultural-theme',
      name: 'Cultural Theme Wrap',
      description: 'Beautiful wrapping with Islamic geometric patterns',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      features: ['Islamic patterns', 'Gold accents', 'Cultural authenticity']
    },
    {
      id: 'simple-elegant',
      name: 'Simple & Elegant',
      description: 'Clean, minimalist wrapping perfect for any occasion',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
      features: ['Minimalist design', 'Quality paper', 'Elegant bow']
    }
  ];

  const deliveryOptions = [
    { value: 'standard', label: 'Standard Delivery (5-7 days)', price: 0 },
    { value: 'express', label: 'Express Delivery (2-3 days)', price: 9.99 },
    { value: 'overnight', label: 'Overnight Delivery', price: 24.99 },
    { value: 'scheduled', label: 'Scheduled Delivery (Choose date)', price: 4.99 }
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'arabic', label: 'Arabic (العربية)' },
    { value: 'urdu', label: 'Urdu (اردو)' },
    { value: 'french', label: 'French (Français)' }
  ];

  const occasionTemplates = {
    graduation: [
      "Congratulations on your graduation! May this notebook be filled with your future achievements and dreams.",
      "Your hard work has paid off! Use this notebook to plan your next chapter of success.",
      "Graduation is just the beginning. Write your story of continued learning and growth."
    ],
    religious: [
      "May Allah bless your learning journey and grant you wisdom through knowledge.",
      "In the name of Allah, the Most Gracious, the Most Merciful. May this gift bring you closer to beneficial knowledge.",
      "May your studies be blessed and your knowledge be a source of guidance and light."
    ],
    'back-to-school': [
      "Ready for a new school year? Let this notebook be your companion in learning and discovery!",
      "New year, new goals, new adventures! Make this school year your best one yet.",
      "Every page is a new opportunity to learn something amazing. Have a great school year!"
    ],
    birthday: [
      "Happy Birthday! May this special notebook be filled with your dreams and achievements.",
      "Another year of wisdom and growth! Use this notebook to capture all your wonderful ideas.",
      "Wishing you a birthday filled with joy and a year filled with learning adventures!"
    ]
  };

  const tabs = [
    { id: 'wrapping', label: 'Gift Wrapping', icon: 'Gift' },
    { id: 'message', label: 'Gift Message', icon: 'MessageCircle' },
    { id: 'delivery', label: 'Delivery Options', icon: 'Truck' }
  ];

  const handleOptionChange = (field, value) => {
    onGiftOptionsChange({
      ...giftOptions,
      [field]: value
    });
  };

  const handleWrappingSelect = (wrapping) => {
    handleOptionChange('wrapping', wrapping);
  };

  const getSelectedWrappingPrice = () => {
    return giftOptions.wrapping?.price || 0;
  };

  const getSelectedDeliveryPrice = () => {
    const selected = deliveryOptions.find(option => option.value === giftOptions.delivery);
    return selected?.price || 0;
  };

  const getTotalGiftOptionsPrice = () => {
    return getSelectedWrappingPrice() + getSelectedDeliveryPrice();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Gift Options</h2>
        <p className="text-text-secondary">Make your gift extra special with wrapping, messages, and delivery options</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-educational ${
              activeTab === tab.id
                ? 'bg-background text-primary shadow-sm'
                : 'text-text-secondary hover:text-foreground'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-background rounded-lg p-6 shadow-educational">
        {activeTab === 'wrapping' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Choose Gift Wrapping</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wrappingOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-educational ${
                      giftOptions.wrapping?.id === option.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="wrapping"
                      value={option.id}
                      checked={giftOptions.wrapping?.id === option.id}
                      onChange={() => handleWrappingSelect(option)}
                      className="sr-only"
                    />
                    
                    <div className="space-y-3">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-medium text-foreground">{option.name}</h5>
                          <span className="text-primary font-bold">${option.price}</span>
                        </div>
                        <p className="text-sm text-text-secondary mb-2">{option.description}</p>
                        
                        <div className="space-y-1">
                          {option.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" size={12} color="var(--color-success)" />
                              <span className="text-xs text-text-secondary">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Info" size={16} color="var(--color-primary)" />
                <h5 className="font-medium text-foreground">Wrapping Note</h5>
              </div>
              <p className="text-sm text-text-secondary">
                All gift wrapping includes a beautiful presentation and careful handling to ensure your gift arrives in perfect condition.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'message' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Gift Message</h4>
              
              <Select
                label="Message Language"
                options={languageOptions}
                value={giftOptions.messageLanguage || 'english'}
                onChange={(value) => handleOptionChange('messageLanguage', value)}
                className="mb-4"
              />

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-foreground mb-2 block">Personal Message</span>
                  <textarea
                    value={giftOptions.personalMessage || ''}
                    onChange={(e) => handleOptionChange('personalMessage', e.target.value)}
                    placeholder="Write your personal message here..."
                    rows={4}
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                  <span className="text-xs text-text-secondary mt-1 block">
                    Maximum 200 characters ({(giftOptions.personalMessage || '').length}/200)
                  </span>
                </label>
              </div>
            </div>

            {giftOptions.occasion && occasionTemplates[giftOptions.occasion] && (
              <div>
                <h5 className="font-medium text-foreground mb-3">Suggested Messages for {giftOptions.occasion}</h5>
                <div className="space-y-2">
                  {occasionTemplates[giftOptions.occasion].map((template, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionChange('personalMessage', template)}
                      className="w-full p-3 text-left border border-border rounded-lg hover:border-primary/50 transition-educational"
                    >
                      <p className="text-sm text-foreground">{template}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Checkbox
                label="Include sender's name on gift card"
                checked={giftOptions.includeSenderName || false}
                onChange={(e) => handleOptionChange('includeSenderName', e.target.checked)}
              />

              {giftOptions.includeSenderName && (
                <Input
                  label="Your Name"
                  type="text"
                  placeholder="Enter your name"
                  value={giftOptions.senderName || ''}
                  onChange={(e) => handleOptionChange('senderName', e.target.value)}
                />
              )}
            </div>
          </div>
        )}

        {activeTab === 'delivery' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Delivery Options</h4>
              
              <Select
                label="Delivery Speed"
                options={deliveryOptions.map(option => ({
                  value: option.value,
                  label: `${option.label}${option.price > 0 ? ` (+$${option.price})` : ' (Free)'}`
                }))}
                value={giftOptions.delivery || 'standard'}
                onChange={(value) => handleOptionChange('delivery', value)}
                className="mb-4"
              />

              {giftOptions.delivery === 'scheduled' && (
                <Input
                  label="Preferred Delivery Date"
                  type="date"
                  value={giftOptions.scheduledDate || ''}
                  onChange={(e) => handleOptionChange('scheduledDate', e.target.value)}
                  min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                  className="mb-4"
                />
              )}
            </div>

            <div className="space-y-3">
              <h5 className="font-medium text-foreground">Recipient Notification</h5>
              
              <Checkbox
                label="Send tracking information to recipient"
                checked={giftOptions.sendTracking || false}
                onChange={(e) => handleOptionChange('sendTracking', e.target.checked)}
              />

              <Checkbox
                label="Notify recipient of gift arrival"
                checked={giftOptions.notifyRecipient || false}
                onChange={(e) => handleOptionChange('notifyRecipient', e.target.checked)}
              />

              {giftOptions.notifyRecipient && (
                <Input
                  label="Recipient's Email (Optional)"
                  type="email"
                  placeholder="recipient@example.com"
                  value={giftOptions.recipientEmail || ''}
                  onChange={(e) => handleOptionChange('recipientEmail', e.target.value)}
                  description="We'll send a notification when the gift is delivered"
                />
              )}
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <h5 className="font-medium text-foreground">Delivery Guarantee</h5>
              </div>
              <p className="text-sm text-text-secondary">
                All deliveries are insured and tracked. If your gift doesn't arrive on time, we'll make it right with a full refund or replacement.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Price Summary */}
      {getTotalGiftOptionsPrice() > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Gift Options Total</h4>
            <span className="text-primary font-bold text-lg">${getTotalGiftOptionsPrice().toFixed(2)}</span>
          </div>
          
          <div className="mt-2 space-y-1 text-sm">
            {giftOptions.wrapping && (
              <div className="flex justify-between">
                <span className="text-text-secondary">{giftOptions.wrapping.name}</span>
                <span className="text-foreground">${giftOptions.wrapping.price}</span>
              </div>
            )}
            {getSelectedDeliveryPrice() > 0 && (
              <div className="flex justify-between">
                <span className="text-text-secondary">Delivery</span>
                <span className="text-foreground">${getSelectedDeliveryPrice()}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftOptionsPanel;