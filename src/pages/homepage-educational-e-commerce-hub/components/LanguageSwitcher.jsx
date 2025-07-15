import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', rtl: false },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
    { code: 'ur', name: 'اردو', flag: '🇵🇰', rtl: true },
    { code: 'fr', name: 'Français', flag: '🇫🇷', rtl: false }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
    
    // Apply RTL layout if needed
    const selectedLang = languages.find(lang => lang.code === savedLanguage);
    if (selectedLang?.rtl) {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, []);

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    
    const selectedLang = languages.find(lang => lang.code === langCode);
    if (selectedLang?.rtl) {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
    
    setIsOpen(false);
    
    // Trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: langCode }));
    
    // Reload page to apply language changes
    window.location.reload();
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-text-secondary hover:text-primary"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline font-medium">{currentLang?.name}</span>
        <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-educational-strong z-50">
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-muted transition-colors ${
                    currentLanguage === language.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                  {currentLanguage === language.code && (
                    <Icon name="Check" size={16} className="ml-auto text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;