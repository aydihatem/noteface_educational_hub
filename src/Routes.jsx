import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageEducationalECommerceHub from "pages/homepage-educational-e-commerce-hub";
import ProductCategoriesKnowledgeUniverse from "pages/product-categories-knowledge-universe";
import ShoppingCartCheckoutEducationalCommerce from "pages/shopping-cart-checkout-educational-commerce";
import ProductDetailEducationalResourceShowcase from "pages/product-detail-educational-resource-showcase";
import TeacherResourceCenterProfessionalHub from "pages/teacher-resource-center-professional-hub";
import GiftCreationStudioPersonalizationExperience from "pages/gift-creation-studio-personalization-experience";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomepageEducationalECommerceHub />} />
        <Route path="/homepage-educational-e-commerce-hub" element={<HomepageEducationalECommerceHub />} />
        <Route path="/product-categories-knowledge-universe" element={<ProductCategoriesKnowledgeUniverse />} />
        <Route path="/shopping-cart-checkout-educational-commerce" element={<ShoppingCartCheckoutEducationalCommerce />} />
        <Route path="/product-detail-educational-resource-showcase" element={<ProductDetailEducationalResourceShowcase />} />
        <Route path="/teacher-resource-center-professional-hub" element={<TeacherResourceCenterProfessionalHub />} />
        <Route path="/gift-creation-studio-personalization-experience" element={<GiftCreationStudioPersonalizationExperience />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;