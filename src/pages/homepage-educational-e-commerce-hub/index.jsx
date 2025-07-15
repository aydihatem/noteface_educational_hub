import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import FeaturedResources from './components/FeaturedResources';
import QuickTools from './components/QuickTools';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const HomepageEducationalECommerceHub = () => {
  useEffect(() => {
    // Set page title
    document.title = "Noteface Educational Hub - Where Knowledge Meets Heart";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover educational resources that honor tradition while embracing growth. Your trusted bridge to transformative learning experiences across Islamic studies, literature, and scientific exploration.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Language Switcher */}
      <div className="relative">
        <Header />
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section with Role-Based Entry Points */}
        <HeroSection />

        {/* Featured Educational Resources */}
        <FeaturedResources />

        {/* Quick Tools Section */}
        <QuickTools />

        {/* Trust & Testimonials Section */}
        <TrustSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomepageEducationalECommerceHub;