import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductImageGallery = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showLookInside, setShowLookInside] = useState(false);

  const images = [
    product.coverImage,
    ...product.additionalImages
  ];

  const lookInsidePages = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=800&fit=crop"
  ];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-surface-warm rounded-lg overflow-hidden shadow-educational">
        <div className="aspect-[4/5] relative">
          <Image
            src={images[selectedImageIndex]}
            alt={`${product.title} - Image ${selectedImageIndex + 1}`}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 w-10 h-10"
                iconName="ChevronLeft"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 w-10 h-10"
                iconName="ChevronRight"
              />
            </>
          )}

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-background/80 rounded-lg px-2 py-1 text-xs text-text-secondary">
            <Icon name="ZoomIn" size={12} className="inline mr-1" />
            Click to zoom
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImageIndex === index
                  ? 'border-primary shadow-md'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Image
                src={image}
                alt={`${product.title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button
          variant="outline"
          onClick={() => setShowLookInside(true)}
          iconName="Eye"
          iconPosition="left"
          className="flex-1"
        >
          Look Inside
        </Button>
        
        <Button
          variant="ghost"
          iconName="Share2"
          iconPosition="left"
        >
          Share
        </Button>
        
        <Button
          variant="ghost"
          iconName="Heart"
          iconPosition="left"
        >
          Save
        </Button>
      </div>

      {/* Look Inside Modal */}
      {showLookInside && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-educational z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-educational-strong max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold">Look Inside: {product.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowLookInside(false)}
                iconName="X"
              />
            </div>
            
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lookInsidePages.map((page, index) => (
                  <div key={index} className="aspect-[3/4] bg-surface-warm rounded-lg overflow-hidden">
                    <Image
                      src={page}
                      alt={`Page ${index + 1} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;