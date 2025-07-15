import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const NotebookPreview = ({ selectedOccasion, personalization }) => {
  const getPreviewImage = () => {
    if (!personalization.designTheme) {
      return 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop';
    }

    const themeImages = {
      rainbow: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop',
      nature: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop',
      stars: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=500&fit=crop',
      modern: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=500&fit=crop',
      geometric: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=500&fit=crop',
      vintage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop',
      elegant: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop',
      professional: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      cultural: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
    };

    return themeImages[personalization.designTheme] || themeImages.elegant;
  };

  const getLanguageDisplay = (name, language) => {
    if (!name) return 'Your Name Here';
    
    const languageStyles = {
      english: { fontFamily: 'Inter, sans-serif', direction: 'ltr' },
      arabic: { fontFamily: 'Arial, sans-serif', direction: 'rtl', fontSize: '1.1em' },
      urdu: { fontFamily: 'Arial, sans-serif', direction: 'rtl', fontSize: '1.1em' },
      french: { fontFamily: 'Inter, sans-serif', direction: 'ltr' }
    };

    return (
      <span style={languageStyles[language] || languageStyles.english}>
        {name}
      </span>
    );
  };

  const getOccasionIcon = () => {
    if (!selectedOccasion) return 'BookOpen';
    return selectedOccasion.icon;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Live Preview</h2>
        <p className="text-text-secondary">See how your personalized notebook will look</p>
      </div>

      <div className="bg-background rounded-lg p-6 shadow-educational">
        {/* Notebook Preview */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Notebook Cover */}
            <div className="w-80 h-96 bg-white rounded-lg shadow-educational-strong border border-border overflow-hidden relative">
              {/* Background Image/Pattern */}
              <div className="absolute inset-0">
                <Image
                  src={getPreviewImage()}
                  alt="Notebook cover design"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Top Section - Occasion Icon */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name={getOccasionIcon()} size={24} color="var(--color-primary)" />
                  </div>
                </div>

                {/* Middle Section - Name */}
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">
                      {getLanguageDisplay(personalization.recipientName, personalization.language)}
                    </h3>
                    {selectedOccasion && (
                      <p className="text-sm text-text-secondary font-medium">
                        {selectedOccasion.name}
                      </p>
                    )}
                  </div>

                  {/* Quote Section */}
                  {personalization.selectedQuote && (
                    <div className="bg-white/80 p-3 rounded-lg">
                      <p className="text-xs text-foreground italic leading-relaxed">
                        "{personalization.selectedQuote.length > 80 
                          ? personalization.selectedQuote.substring(0, 80) + '...' 
                          : personalization.selectedQuote}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Section - Noteface Branding */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                      <Icon name="BookOpen" size={12} color="white" />
                    </div>
                    <span className="text-sm font-bold text-primary">Noteface</span>
                  </div>
                  <p className="text-xs text-text-secondary">Educational Hub</p>
                </div>
              </div>

              {/* Notebook Binding */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30" />
            </div>

            {/* 3D Effect Shadow */}
            <div className="absolute -bottom-2 -right-2 w-80 h-96 bg-gray-300 rounded-lg -z-10" />
          </div>
        </div>

        {/* Preview Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Personalization Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Recipient:</span>
                <span className="text-foreground font-medium">
                  {personalization.recipientName || 'Not specified'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Language:</span>
                <span className="text-foreground font-medium">
                  {personalization.language || 'English'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Age Group:</span>
                <span className="text-foreground font-medium">
                  {personalization.ageGroup || 'Not specified'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Interest:</span>
                <span className="text-foreground font-medium">
                  {personalization.interest || 'Not specified'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Design & Occasion</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Occasion:</span>
                <span className="text-foreground font-medium">
                  {selectedOccasion?.name || 'Not selected'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Theme:</span>
                <span className="text-foreground font-medium">
                  {personalization.designTheme || 'Default'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Quote:</span>
                <span className="text-foreground font-medium">
                  {personalization.selectedQuote ? 'Included' : 'None'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Message:</span>
                <span className="text-foreground font-medium">
                  {personalization.specialMessage ? 'Included' : 'None'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Indicators */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} color="var(--color-success)" />
              <span className="text-text-secondary">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={16} color="var(--color-success)" />
              <span className="text-text-secondary">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} color="var(--color-success)" />
              <span className="text-text-secondary">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookPreview;