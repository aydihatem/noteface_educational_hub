import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const PersonalizationPanel = ({ selectedOccasion, personalization, onPersonalizationChange }) => {
  const [activeTab, setActiveTab] = useState('name');

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'arabic', label: 'Arabic (العربية)' },
    { value: 'urdu', label: 'Urdu (اردو)' },
    { value: 'french', label: 'French (Français)' }
  ];

  const ageGroupOptions = [
    { value: 'child', label: 'Child (5-12 years)' },
    { value: 'teen', label: 'Teen (13-17 years)' },
    { value: 'adult', label: 'Adult (18+ years)' }
  ];

  const interestOptions = [
    { value: 'islamic-studies', label: 'Islamic Studies' },
    { value: 'literature', label: 'Literature' },
    { value: 'science', label: 'Science' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'history', label: 'History' },
    { value: 'art', label: 'Art & Creativity' },
    { value: 'nature', label: 'Nature & Environment' },
    { value: 'technology', label: 'Technology' }
  ];

  const inspirationalQuotes = {
    islamic: [
      "And whoever relies upon Allah - then He is sufficient for him. (Quran 65:3)",
      "And it is He who created the heavens and earth in truth. (Quran 6:73)",
      "Read! In the name of your Lord who created. (Quran 96:1)",
      "And Allah will raise those who have believed among you and those who were given knowledge, by degrees. (Quran 58:11)"
    ],
    literary: [
      "The more that you read, the more things you will know. - Dr. Seuss",
      "A reader lives a thousand lives before he dies. - George R.R. Martin",
      "Books are a uniquely portable magic. - Stephen King",
      "Reading is to the mind what exercise is to the body. - Joseph Addison"
    ],
    motivational: [
      "Education is the most powerful weapon which you can use to change the world.",
      "The beautiful thing about learning is that no one can take it away from you.",
      "Knowledge is power, but enthusiasm pulls the switch.",
      "Every expert was once a beginner."
    ]
  };

  const designThemes = {
    child: [
      { id: 'rainbow', name: 'Rainbow Dreams', colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'] },
      { id: 'nature', name: 'Nature Explorer', colors: ['#2ECC71', '#27AE60', '#F39C12', '#E67E22'] },
      { id: 'stars', name: 'Starry Night', colors: ['#3498DB', '#9B59B6', '#E74C3C', '#F1C40F'] }
    ],
    teen: [
      { id: 'modern', name: 'Modern Minimalist', colors: ['#2C3E50', '#34495E', '#95A5A6', '#BDC3C7'] },
      { id: 'geometric', name: 'Geometric Patterns', colors: ['#E74C3C', '#3498DB', '#F39C12', '#9B59B6'] },
      { id: 'vintage', name: 'Vintage Scholar', colors: ['#8B4513', '#D2691E', '#F4A460', '#DEB887'] }
    ],
    adult: [
      { id: 'elegant', name: 'Elegant Classic', colors: ['#2C3E50', '#34495E', '#D4AF37', '#F8F9FA'] },
      { id: 'professional', name: 'Professional', colors: ['#1A365D', '#2D3748', '#4A5568', '#718096'] },
      { id: 'cultural', name: 'Cultural Heritage', colors: ['#8B4513', '#CD853F', '#DEB887', '#F5DEB3'] }
    ]
  };

  const tabs = [
    { id: 'name', label: 'Name & Details', icon: 'User' },
    { id: 'quotes', label: 'Inspirational Quotes', icon: 'Quote' },
    { id: 'design', label: 'Design Theme', icon: 'Palette' }
  ];

  const handleInputChange = (field, value) => {
    onPersonalizationChange({
      ...personalization,
      [field]: value
    });
  };

  const currentThemes = designThemes[personalization.ageGroup] || designThemes.child;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Personalize Your Gift</h2>
        <p className="text-text-secondary">Make it special with custom details and meaningful touches</p>
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
        {activeTab === 'name' && (
          <div className="space-y-4">
            <Input
              label="Recipient's Name"
              type="text"
              placeholder="Enter the recipient's name"
              value={personalization.recipientName || ''}
              onChange={(e) => handleInputChange('recipientName', e.target.value)}
              description="This will appear on the cover of the notebook"
            />

            <Select
              label="Language/Script"
              options={languageOptions}
              value={personalization.language || 'english'}
              onChange={(value) => handleInputChange('language', value)}
              description="Choose the language for the name display"
            />

            <Select
              label="Age Group"
              options={ageGroupOptions}
              value={personalization.ageGroup || 'child'}
              onChange={(value) => handleInputChange('ageGroup', value)}
              description="This helps us suggest appropriate designs"
            />

            <Select
              label="Primary Interest"
              options={interestOptions}
              value={personalization.interest || ''}
              onChange={(value) => handleInputChange('interest', value)}
              description="We'll customize the design based on their interests"
              placeholder="Select primary interest"
            />

            <Input
              label="Special Message (Optional)"
              type="text"
              placeholder="Add a personal message"
              value={personalization.specialMessage || ''}
              onChange={(e) => handleInputChange('specialMessage', e.target.value)}
              description="A short message to include inside the cover"
            />
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="space-y-4">
            <div className="grid gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Islamic Wisdom</h4>
                <div className="grid gap-2">
                  {inspirationalQuotes.islamic.map((quote, index) => (
                    <label
                      key={index}
                      className={`p-3 border rounded-lg cursor-pointer transition-educational ${
                        personalization.selectedQuote === quote
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="quote"
                        value={quote}
                        checked={personalization.selectedQuote === quote}
                        onChange={(e) => handleInputChange('selectedQuote', e.target.value)}
                        className="sr-only"
                      />
                      <p className="text-sm text-foreground">{quote}</p>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Literary Inspiration</h4>
                <div className="grid gap-2">
                  {inspirationalQuotes.literary.map((quote, index) => (
                    <label
                      key={index}
                      className={`p-3 border rounded-lg cursor-pointer transition-educational ${
                        personalization.selectedQuote === quote
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="quote"
                        value={quote}
                        checked={personalization.selectedQuote === quote}
                        onChange={(e) => handleInputChange('selectedQuote', e.target.value)}
                        className="sr-only"
                      />
                      <p className="text-sm text-foreground">{quote}</p>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Motivational</h4>
                <div className="grid gap-2">
                  {inspirationalQuotes.motivational.map((quote, index) => (
                    <label
                      key={index}
                      className={`p-3 border rounded-lg cursor-pointer transition-educational ${
                        personalization.selectedQuote === quote
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="quote"
                        value={quote}
                        checked={personalization.selectedQuote === quote}
                        onChange={(e) => handleInputChange('selectedQuote', e.target.value)}
                        className="sr-only"
                      />
                      <p className="text-sm text-foreground">{quote}</p>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'design' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Choose Design Theme</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentThemes.map((theme) => (
                  <label
                    key={theme.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-educational ${
                      personalization.designTheme === theme.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="theme"
                      value={theme.id}
                      checked={personalization.designTheme === theme.id}
                      onChange={(e) => handleInputChange('designTheme', e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-center space-y-3">
                      <div className="flex justify-center space-x-1">
                        {theme.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <h5 className="font-medium text-foreground">{theme.name}</h5>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Custom Color Options</h5>
              <p className="text-sm text-text-secondary mb-3">Want different colors? We can customize any theme to match your preferences.</p>
              <Button variant="outline" size="sm" iconName="Palette" iconPosition="left">
                Request Custom Colors
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalizationPanel;