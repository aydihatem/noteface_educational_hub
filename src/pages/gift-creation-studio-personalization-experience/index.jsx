import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import components
import OccasionSelector from './components/OccasionSelector';
import PersonalizationPanel from './components/PersonalizationPanel';
import NotebookPreview from './components/NotebookPreview';
import EnhancementOptions from './components/EnhancementOptions';
import GiftOptionsPanel from './components/GiftOptionsPanel';
import CheckoutSummary from './components/CheckoutSummary';

const GiftCreationStudio = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [personalization, setPersonalization] = useState({
    recipientName: '',
    language: 'english',
    ageGroup: 'child',
    interest: '',
    selectedQuote: '',
    designTheme: '',
    specialMessage: ''
  });
  const [selectedEnhancements, setSelectedEnhancements] = useState([]);
  const [giftOptions, setGiftOptions] = useState({
    wrapping: null,
    personalMessage: '',
    messageLanguage: 'english',
    includeSenderName: false,
    senderName: '',
    delivery: 'standard',
    scheduledDate: '',
    sendTracking: false,
    notifyRecipient: false,
    recipientEmail: ''
  });

  const steps = [
    { id: 1, name: 'Occasion', icon: 'Calendar', description: 'Choose the perfect occasion' },
    { id: 2, name: 'Personalize', icon: 'User', description: 'Add personal touches' },
    { id: 3, name: 'Preview', icon: 'Eye', description: 'See your creation' },
    { id: 4, name: 'Enhance', icon: 'Plus', description: 'Add complementary items' },
    { id: 5, name: 'Gift Options', icon: 'Gift', description: 'Wrapping and delivery' },
    { id: 6, name: 'Summary', icon: 'ShoppingCart', description: 'Review and checkout' }
  ];

  // Auto-advance from step 1 when occasion is selected
  useEffect(() => {
    if (selectedOccasion && currentStep === 1) {
      setTimeout(() => setCurrentStep(2), 500);
    }
  }, [selectedOccasion, currentStep]);

  const handleOccasionSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setGiftOptions(prev => ({ ...prev, occasion: occasion.id }));
  };

  const handlePersonalizationChange = (newPersonalization) => {
    setPersonalization(newPersonalization);
  };

  const handleEnhancementChange = (enhancements) => {
    setSelectedEnhancements(enhancements);
  };

  const handleGiftOptionsChange = (newGiftOptions) => {
    setGiftOptions(newGiftOptions);
  };

  const handleProceedToCheckout = () => {
    // This would typically save the configuration and redirect to checkout
    console.log('Proceeding to checkout with:', {
      selectedOccasion,
      personalization,
      selectedEnhancements,
      giftOptions
    });
  };

  const canProceedToStep = (step) => {
    switch (step) {
      case 2:
        return selectedOccasion !== null;
      case 3:
        return personalization.recipientName && personalization.language && personalization.ageGroup;
      case 4:
        return true; // Preview is always accessible after personalization
      case 5:
        return true; // Enhancements are optional
      case 6:
        return true; // Gift options are optional
      default:
        return true;
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <OccasionSelector
            selectedOccasion={selectedOccasion}
            onOccasionSelect={handleOccasionSelect}
          />
        );
      case 2:
        return (
          <PersonalizationPanel
            selectedOccasion={selectedOccasion}
            personalization={personalization}
            onPersonalizationChange={handlePersonalizationChange}
          />
        );
      case 3:
        return (
          <NotebookPreview
            selectedOccasion={selectedOccasion}
            personalization={personalization}
          />
        );
      case 4:
        return (
          <EnhancementOptions
            selectedEnhancements={selectedEnhancements}
            onEnhancementChange={handleEnhancementChange}
          />
        );
      case 5:
        return (
          <GiftOptionsPanel
            giftOptions={giftOptions}
            onGiftOptionsChange={handleGiftOptionsChange}
          />
        );
      case 6:
        return (
          <CheckoutSummary
            selectedOccasion={selectedOccasion}
            personalization={personalization}
            selectedEnhancements={selectedEnhancements}
            giftOptions={giftOptions}
            onProceedToCheckout={handleProceedToCheckout}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Gift Creation Studio - Personalization Experience | Noteface Educational Hub</title>
        <meta name="description" content="Create personalized educational gifts with our interactive studio. Design custom notebooks, add enhancements, and create meaningful gifts for any occasion." />
        <meta name="keywords" content="personalized gifts, custom notebooks, educational gifts, gift creation, personalization, Noteface" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-warm-gradient py-16">
            <div className="container-educational">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Sparkles" size={32} color="white" />
                  </div>
                  <h1 className="hero-text text-white">
                    Gift Creation Studio
                  </h1>
                </div>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Create personalized educational gifts that inspire learning and celebrate special moments. 
                  Design custom notebooks with meaningful touches that make every gift unforgettable.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={20} />
                    <span>Meaningful Personalization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Palette" size={20} />
                    <span>Beautiful Designs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Gift" size={20} />
                    <span>Perfect Presentation</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Progress Steps */}
          <section className="py-8 bg-background border-b border-border">
            <div className="container-educational">
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <button
                      onClick={() => canProceedToStep(step.id) && setCurrentStep(step.id)}
                      disabled={!canProceedToStep(step.id)}
                      className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-educational ${
                        currentStep === step.id
                          ? 'bg-primary text-white'
                          : canProceedToStep(step.id)
                          ? 'text-primary hover:bg-primary/10' :'text-text-secondary cursor-not-allowed'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep === step.id
                          ? 'bg-white/20'
                          : canProceedToStep(step.id)
                          ? 'bg-primary/10' :'bg-muted'
                      }`}>
                        <Icon 
                          name={step.icon} 
                          size={20} 
                          color={currentStep === step.id ? 'white' : canProceedToStep(step.id) ? 'var(--color-primary)' : 'var(--color-text-secondary)'}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{step.name}</p>
                        <p className="text-xs opacity-80 hidden sm:block">{step.description}</p>
                      </div>
                    </button>
                    
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-0.5 mx-2 ${
                        currentStep > step.id ? 'bg-primary' : 'bg-border'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12">
            <div className="container-educational">
              <div className="max-w-6xl mx-auto">
                {getStepContent()}
              </div>
            </div>
          </section>

          {/* Navigation Controls */}
          <section className="py-8 bg-muted/30 border-t border-border">
            <div className="container-educational">
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  iconName="ChevronLeft"
                  iconPosition="left"
                >
                  Previous
                </Button>

                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <span>Step {currentStep} of {steps.length}</span>
                  <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${(currentStep / steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                <Button
                  variant="default"
                  onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  disabled={currentStep === steps.length || !canProceedToStep(currentStep + 1)}
                  iconName="ChevronRight"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentStep === steps.length ? 'Complete' : 'Next'}
                </Button>
              </div>
            </div>
          </section>

          {/* Help & Support */}
          <section className="py-12 bg-background">
            <div className="container-educational">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Need Help Creating Your Gift?</h2>
                <p className="text-text-secondary mb-8">
                  Our gift creation experts are here to help you design the perfect personalized educational gift.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-educational p-6 text-center">
                    <Icon name="MessageCircle" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                    <p className="text-sm text-text-secondary mb-4">Get instant help from our design team</p>
                    <Button variant="outline" size="sm">Start Chat</Button>
                  </div>
                  
                  <div className="card-educational p-6 text-center">
                    <Icon name="Phone" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                    <p className="text-sm text-text-secondary mb-4">Call us at (555) 123-4567</p>
                    <Button variant="outline" size="sm">Call Now</Button>
                  </div>
                  
                  <div className="card-educational p-6 text-center">
                    <Icon name="Mail" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                    <p className="text-sm text-text-secondary mb-4">Send us your questions anytime</p>
                    <Button variant="outline" size="sm">Send Email</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="container-educational">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" size={20} color="white" />
                </div>
                <span className="text-xl font-bold">Noteface Educational Hub</span>
              </div>
              <p className="text-white/80 mb-6">Creating meaningful educational gifts that inspire learning and growth</p>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
                <span>© {new Date().getFullYear()} Noteface. All rights reserved.</span>
                <span>•</span>
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GiftCreationStudio;