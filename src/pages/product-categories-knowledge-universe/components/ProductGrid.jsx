import React from 'react';
import ProductCard from './ProductCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ 
  products, 
  loading, 
  onAddToWishlist, 
  onQuickPreview, 
  onAddToCart,
  onLoadMore,
  hasMore,
  totalResults,
  currentPage,
  sortBy,
  onSortChange
}) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' }
  ];

  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="BookOpen" size={32} className="text-primary animate-pulse" />
          </div>
          <p className="text-text-secondary">Loading educational resources...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Search" size={32} className="text-text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No resources found
        </h3>
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          Try adjusting your filters or search terms to find the perfect educational materials for your needs.
        </p>
        <Button
          variant="outline"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => window.location.reload()}
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-foreground">
            {totalResults.toLocaleString()} Resources Found
          </h2>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Filter" size={16} />
            <span>Page {currentPage}</span>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-secondary">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="input-educational text-sm py-2 px-3 min-w-[160px]"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
            onQuickPreview={onQuickPreview}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ChevronDown"
            iconPosition="right"
            onClick={onLoadMore}
            loading={loading}
            className="px-8"
          >
            {loading ? 'Loading...' : 'Load More Resources'}
          </Button>
        </div>
      )}

      {/* Results Summary */}
      <div className="mt-8 p-4 bg-muted rounded-lg text-center">
        <p className="text-sm text-text-secondary">
          Showing {products.length} of {totalResults.toLocaleString()} educational resources
        </p>
      </div>
    </div>
  );
};

export default ProductGrid;