import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-educational-e-commerce-hub', icon: 'Home' },
    { name: 'Categories', path: '/product-categories-knowledge-universe', icon: 'BookOpen' },
    { name: 'Teacher Hub', path: '/teacher-resource-center-professional-hub', icon: 'GraduationCap' },
    { name: 'Gift Studio', path: '/gift-creation-studio-personalization-experience', icon: 'Gift' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-educational ${
      isScrolled ? 'bg-background/95 backdrop-blur-educational shadow-educational' : 'bg-background'
    }`}>
      <div className="container-educational">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage-educational-e-commerce-hub" 
            className="flex items-center space-x-3 hover-lift"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center shadow-educational">
                <Icon name="BookOpen" size={24} color="white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={10} color="var(--color-text-primary)" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl lg:text-2xl font-bold text-primary">
                Noteface
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-1">
                Educational Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link flex items-center space-x-2 px-3 py-2 rounded-lg transition-educational ${
                  isActivePath(item.path) 
                    ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="Search"
              className="text-text-secondary hover:text-primary"
            >
              Search
            </Button>
            
            <Link to="/shopping-cart-checkout-educational-commerce">
              <Button
                variant="ghost"
                size="sm"
                iconName="ShoppingCart"
                className="text-text-secondary hover:text-primary relative"
              >
                Cart
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>

            <Button
              variant="outline"
              size="sm"
              iconName="User"
              iconPosition="left"
            >
              Account
            </Button>

            <Button
              variant="default"
              size="sm"
              iconName="BookOpen"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Explore
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link to="/shopping-cart-checkout-educational-commerce">
              <Button
                variant="ghost"
                size="sm"
                iconName="ShoppingCart"
                className="text-text-secondary hover:text-primary relative"
              >
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              iconName={isMenuOpen ? "X" : "Menu"}
              className="text-text-secondary hover:text-primary"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' :'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-2 pt-4 border-t border-border">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`nav-link flex items-center space-x-3 px-4 py-3 rounded-lg transition-educational ${
                  isActivePath(item.path) 
                    ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                iconName="Search"
                iconPosition="left"
                className="justify-start text-text-secondary hover:text-primary"
              >
                Search Resources
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                iconName="User"
                iconPosition="left"
                className="justify-start"
              >
                My Account
              </Button>
              
              <Button
                variant="default"
                size="sm"
                iconName="BookOpen"
                iconPosition="left"
                className="justify-start bg-primary hover:bg-primary/90"
              >
                Start Exploring
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;