import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';
import CheckoutForm from './components/CheckoutForm';
import WishlistSection from './components/WishlistSection';
import TeacherVerificationModal from './components/TeacherVerificationModal';
import OrderConfirmation from './components/OrderConfirmation';

const ShoppingCartCheckout = () => {
  const [currentView, setCurrentView] = useState('cart'); // cart, checkout, confirmation
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [isTeacherVerified, setIsTeacherVerified] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [isGiftPurchase, setIsGiftPurchase] = useState(false);
  const [userType, setUserType] = useState('individual');
  const [orderData, setOrderData] = useState(null);

  // Mock cart data
  useEffect(() => {
    const mockCartItems = [
      {
        id: 1,
        title: "The Complete Guide to Islamic Studies for Children",
        author: "Dr. Amina Hassan",
        price: 24.99,
        originalPrice: 29.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
        ageRange: "8-12",
        subject: "Islamic Studies",
        curriculumAlignment: "Islamic Education Standards",
        teacherDiscount: true,
        stock: 15,
        bulkPricing: 22.99
      },
      {
        id: 2,
        title: "Arabic Alphabet Learning Workbook",
        author: "Fatima Al-Zahra",
        price: 16.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
        ageRange: "5-8",
        subject: "Language",
        curriculumAlignment: "Arabic Language Standards",
        stock: 8,
        bulkDiscount: true
      },
      {
        id: 3,
        title: "Science Wonders: Exploring Allah\'s Creation",
        author: "Prof. Omar Malik",
        price: 32.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        ageRange: "10-14",
        subject: "Science",
        curriculumAlignment: "Next Generation Science Standards",
        stock: 3
      }
    ];

    const mockWishlistItems = [
      {
        id: 4,
        title: "Stories of the Prophets for Young Minds",
        author: "Aisha Rahman",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
        ageRange: "6-10",
        subject: "Islamic Studies",
        inStock: true,
        priceChange: -2.00
      },
      {
        id: 5,
        title: "Mathematical Concepts in Islamic Art",
        author: "Dr. Yusuf Ahmed",
        price: 28.99,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop",
        ageRange: "12+",
        subject: "Mathematics",
        inStock: false,
        priceChange: 3.00
      }
    ];

    setCartItems(mockCartItems);
    setWishlistItems(mockWishlistItems);
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = isTeacherVerified ? subtotal * 0.15 : 0;
  const shipping = subtotal > 50 ? 0 : 8.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Cart functions
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleMoveToWishlist = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      setWishlistItems(prev => [...prev, { ...item, quantity: 1, inStock: true }]);
      handleRemoveItem(itemId);
    }
  };

  const handleMoveToCart = (itemId) => {
    const item = wishlistItems.find(item => item.id === itemId);
    if (item && item.inStock) {
      setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
      setWishlistItems(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleApplyDiscount = (code) => {
    // Mock discount code validation
    if (code === 'TEACHER15' || code === 'STUDENT10') {
      // Handle discount application
      console.log('Discount applied:', code);
    }
  };

  const handleVerifyTeacher = () => {
    setShowTeacherModal(true);
  };

  const handleTeacherVerification = (verificationData) => {
    // Mock verification - check for demo credentials
    if (verificationData.teacherEmail === 'teacher@demo.edu' && 
        verificationData.employeeId === 'DEMO123') {
      setIsTeacherVerified(true);
      setUserType('teacher');
    }
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;
    setCurrentView('checkout');
  };

  const handleSubmitOrder = (formData) => {
    // Mock order processing
    const newOrderData = {
      orderNumber: `EDU-${Date.now()}`,
      total,
      items: cartItems,
      shippingAddress: {
        street: formData.shippingAddress,
        city: formData.shippingCity,
        state: formData.shippingState,
        zip: formData.shippingZip
      },
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      paymentMethod: `**** **** **** ${formData.cardNumber.slice(-4)}`,
      isGiftPurchase,
      giftRecipient: isGiftPurchase ? {
        name: formData.giftRecipientName,
        email: formData.giftRecipientEmail
      } : null,
      userType
    };

    setOrderData(newOrderData);
    setCartItems([]); // Clear cart after successful order
    setCurrentView('confirmation');
  };

  const handleContinueShopping = () => {
    setCurrentView('cart');
  };

  const handleViewAccount = () => {
    // Navigate to account page
    console.log('Navigate to account page');
  };

  if (currentView === 'confirmation' && orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container-educational">
            <OrderConfirmation
              orderData={orderData}
              onContinueShopping={handleContinueShopping}
              onViewAccount={handleViewAccount}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container-educational">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-8">
            <Link to="/homepage-educational-e-commerce-hub" className="hover:text-primary transition-educational">
              Home
            </Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">
              {currentView === 'cart' ? 'Shopping Cart' : 'Checkout'}
            </span>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="hero-text mb-4">
              {currentView === 'cart' ? 'Shopping Cart' : 'Secure Checkout'}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {currentView === 'cart' ?'Review your educational materials and proceed to checkout' :'Complete your purchase securely with our educational-focused checkout process'
              }
            </p>
          </div>

          {currentView === 'cart' ? (
            <>
              {cartItems.length === 0 ? (
                /* Empty Cart */
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Your Cart is Empty
                  </h2>
                  <p className="text-text-secondary mb-8 max-w-md mx-auto">
                    Discover our collection of educational resources and start building your learning library
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/product-categories-knowledge-universe">
                      <Button
                        variant="default"
                        iconName="BookOpen"
                        iconPosition="left"
                        className="bg-primary hover:bg-primary/90"
                      >
                        Browse Categories
                      </Button>
                    </Link>
                    <Link to="/teacher-resource-center-professional-hub">
                      <Button
                        variant="outline"
                        iconName="GraduationCap"
                        iconPosition="left"
                      >
                        Teacher Resources
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                /* Cart with Items */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-foreground">
                        Cart Items ({itemCount})
                      </h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="RotateCcw"
                        className="text-text-secondary"
                      >
                        Clear All
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          onUpdateQuantity={handleUpdateQuantity}
                          onRemove={handleRemoveItem}
                          onMoveToWishlist={handleMoveToWishlist}
                        />
                      ))}
                    </div>

                    {/* Bulk Purchase Notice */}
                    {userType === 'teacher' && itemCount >= 5 && (
                      <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                        <div className="flex items-center mb-2">
                          <Icon name="Package" size={16} className="text-accent mr-2" />
                          <span className="font-medium text-accent-foreground">
                            Bulk Purchase Discount Available
                          </span>
                        </div>
                        <p className="text-sm text-accent-foreground/80">
                          You're eligible for additional bulk pricing on orders of 10+ items. 
                          Contact our education team for custom pricing.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Cart Summary */}
                  <div className="lg:col-span-1">
                    <CartSummary
                      subtotal={subtotal}
                      discount={discount}
                      shipping={shipping}
                      tax={tax}
                      total={total}
                      itemCount={itemCount}
                      onProceedToCheckout={handleProceedToCheckout}
                      onApplyDiscount={handleApplyDiscount}
                      discountCode={discountCode}
                      setDiscountCode={setDiscountCode}
                      isTeacherVerified={isTeacherVerified}
                      onVerifyTeacher={handleVerifyTeacher}
                    />
                  </div>
                </div>
              )}

              {/* Wishlist Section */}
              {wishlistItems.length > 0 && (
                <div className="mt-12">
                  <WishlistSection
                    wishlistItems={wishlistItems}
                    onMoveToCart={handleMoveToCart}
                    onRemoveFromWishlist={handleRemoveFromWishlist}
                  />
                </div>
              )}

              {/* Recommended Products */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  You Might Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-card rounded-lg p-4 shadow-educational border border-border hover:shadow-educational-strong transition-educational">
                      <div className="w-full h-32 bg-muted rounded-lg mb-3"></div>
                      <h3 className="font-medium text-foreground text-sm mb-1">
                        Educational Resource {item}
                      </h3>
                      <p className="text-text-secondary text-xs mb-2">
                        by Author Name
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">
                          $19.99
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Plus"
                          className="h-8 w-8 p-0"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Checkout Form */
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <CheckoutForm
                    onSubmitOrder={handleSubmitOrder}
                    total={total}
                    isGiftPurchase={isGiftPurchase}
                    setIsGiftPurchase={setIsGiftPurchase}
                    userType={userType}
                    setUserType={setUserType}
                  />
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-card rounded-lg p-6 shadow-educational border border-border sticky top-24">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground line-clamp-1">
                              {item.title}
                            </p>
                            <p className="text-xs text-text-secondary">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border mt-4 pt-4">
                      <div className="flex justify-between items-center text-lg font-semibold text-foreground">
                        <span>Total:</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Teacher Verification Modal */}
      <TeacherVerificationModal
        isOpen={showTeacherModal}
        onClose={() => setShowTeacherModal(false)}
        onVerify={handleTeacherVerification}
      />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container-educational">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <Icon name="Shield" size={16} />
              <span>Secure SSL Encryption</span>
              <Icon name="Truck" size={16} />
              <span>Free Shipping Over $50</span>
              <Icon name="RotateCcw" size={16} />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" iconName="HelpCircle">
                Help
              </Button>
              <Button variant="ghost" size="sm" iconName="Phone">
                Support
              </Button>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Noteface Educational Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShoppingCartCheckout;