import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import CategoryHero from './components/CategoryHero';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import QuickPreviewModal from './components/QuickPreviewModal';
import ComparisonTool from './components/ComparisonTool';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductCategoriesKnowledgeUniverse = () => {
  const [selectedCategory, setSelectedCategory] = useState('islamic-studies');
  const [filters, setFilters] = useState({
    search: '',
    ageGroups: [],
    languages: [],
    curriculum: [],
    priceRange: [],
    rating: null
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Mock data for categories
  const categories = [
    {
      id: 'islamic-studies',
      name: 'Islamic Studies',
      icon: 'BookOpen',
      description: 'Comprehensive Islamic education resources'
    },
    {
      id: 'literature',
      name: 'Literature',
      icon: 'Library',
      description: 'Diverse literary works and analysis'
    },
    {
      id: 'science',
      name: 'Scientific Discoveries',
      icon: 'Microscope',
      description: 'STEM resources and experiments'
    },
    {
      id: 'pedagogy',
      name: 'Pedagogical Toolkit',
      icon: 'GraduationCap',
      description: 'Teaching methods and resources'
    },
    {
      id: 'children',
      name: 'Children\'s Learning',
      icon: 'Baby',
      description: 'Age-appropriate learning materials'
    }
  ];

  // Mock products data
  const mockProducts = [
    {
      id: 1,
      title: "Stories of the Prophets for Young Minds",
      description: "Beautifully illustrated collection of prophet stories designed to inspire and educate children about Islamic history and values.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviewCount: 156,
      ageGroup: "6-12 years",
      language: "English",
      curriculumAlignment: "Islamic Curriculum",
      teacherApproval: 95,
      isNew: true,
      isBestseller: false,
      discount: 17,
      category: 'islamic-studies',
      pages: 120,
      features: [
        "Colorful illustrations on every page",
        "Age-appropriate language and concepts",
        "Discussion questions for parents and teachers",
        "Moral lessons clearly highlighted"
      ],
      samplePages: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=150&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Interactive Quran Learning Workbook",
      description: "Comprehensive workbook combining Arabic script practice with Quranic verses and their meanings, perfect for structured learning.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      price: 18.99,
      rating: 4.9,
      reviewCount: 203,
      ageGroup: "8-16 years",
      language: "Arabic/English",
      curriculumAlignment: "Islamic Curriculum",
      teacherApproval: 98,
      isNew: false,
      isBestseller: true,
      category: 'islamic-studies',
      pages: 200,
      features: [
        "Step-by-step Arabic writing practice",
        "Phonetic pronunciation guides",
        "Translation exercises",
        "Memorization techniques"
      ]
    },
    {
      id: 3,
      title: "Classic Literature Anthology",
      description: "Carefully curated collection of timeless literary works from diverse cultures, with modern annotations and discussion guides.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
      price: 32.99,
      rating: 4.6,
      reviewCount: 89,
      ageGroup: "14-18 years",
      language: "English",
      curriculumAlignment: "Common Core",
      teacherApproval: 92,
      isNew: false,
      isBestseller: false,
      category: 'literature',
      pages: 450,
      features: [
        "Works from 15 different cultures",
        "Modern language annotations",
        "Critical thinking questions",
        "Historical context provided"
      ]
    },
    {
      id: 4,
      title: "Hands-On Science Experiments Kit",
      description: "Complete science experiment kit with detailed instructions, safety guidelines, and educational explanations for curious young scientists.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      price: 45.99,
      originalPrice: 55.99,
      rating: 4.7,
      reviewCount: 134,
      ageGroup: "10-16 years",
      language: "English",
      curriculumAlignment: "Common Core",
      teacherApproval: 89,
      isNew: true,
      isBestseller: false,
      discount: 18,
      category: 'science',
      pages: 80,
      features: [
        "25 safe, engaging experiments",
        "All materials included",
        "Step-by-step photo instructions",
        "Scientific principle explanations"
      ]
    },
    {
      id: 5,
      title: "Modern Teaching Strategies Handbook",
      description: "Comprehensive guide to contemporary pedagogical approaches, including digital integration and inclusive teaching methods.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      price: 39.99,
      rating: 4.5,
      reviewCount: 67,
      ageGroup: "Adult",
      language: "English",
      curriculumAlignment: "Professional Development",
      teacherApproval: 94,
      isNew: false,
      isBestseller: true,
      category: 'pedagogy',
      pages: 320,
      features: [
        "Research-based strategies",
        "Practical implementation guides",
        "Assessment rubrics included",
        "Digital resource links"
      ]
    },
    {
      id: 6,
      title: "My First Arabic Alphabet Adventure",
      description: "Engaging introduction to Arabic letters through colorful illustrations, interactive activities, and fun learning games.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      price: 16.99,
      rating: 4.8,
      reviewCount: 178,
      ageGroup: "3-7 years",
      language: "Arabic/English",
      curriculumAlignment: "Early Childhood",
      teacherApproval: 96,
      isNew: true,
      isBestseller: false,
      category: 'children',
      pages: 64,
      features: [
        "Large, clear letter formations",
        "Tracing practice pages",
        "Colorful vocabulary illustrations",
        "Parent guidance included"
      ]
    }
  ];

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  // Filter products based on selected category and filters
  useEffect(() => {
    let filtered = mockProducts.filter(product => product.category === selectedCategory);
    
    // Apply filters
    if (filters.search) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.ageGroups.length > 0) {
      filtered = filtered.filter(product => 
        filters.ageGroups.some(age => product.ageGroup.includes(age))
      );
    }
    
    if (filters.languages.length > 0) {
      filtered = filtered.filter(product => 
        filters.languages.some(lang => product.language.toLowerCase().includes(lang))
      );
    }
    
    if (filters.rating) {
      filtered = filtered.filter(product => product.rating >= filters.rating);
    }

    // Apply sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
    setTotalResults(filtered.length);
    setProducts(filtered.slice(0, 12)); // Show first 12 products
  }, [selectedCategory, filters, sortBy]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      ageGroups: [],
      languages: [],
      curriculum: [],
      priceRange: [],
      rating: null
    });
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleAddToWishlist = (productId) => {
    console.log('Added to wishlist:', productId);
    // Implement wishlist functionality
  };

  const handleQuickPreview = (product) => {
    setSelectedProduct(product);
    setIsPreviewOpen(true);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Implement cart functionality
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextProducts = filteredProducts.slice(products.length, products.length + 12);
      setProducts(prev => [...prev, ...nextProducts]);
      setCurrentPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  };

  const handleAddToComparison = (product) => {
    if (comparisonProducts.length < 3 && !comparisonProducts.find(p => p.id === product.id)) {
      setComparisonProducts(prev => [...prev, product]);
    }
  };

  const handleRemoveFromComparison = (productId) => {
    setComparisonProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearComparison = () => {
    setComparisonProducts([]);
  };

  const hasMore = products.length < filteredProducts.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        {/* Category Hero Section */}
        <CategoryHero
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />

        {/* Main Content */}
        <div className="container-educational py-8 lg:py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
                selectedCategory={selectedCategory}
              />
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <ProductGrid
                products={products}
                loading={loading}
                onAddToWishlist={handleAddToWishlist}
                onQuickPreview={handleQuickPreview}
                onAddToCart={handleAddToCart}
                onLoadMore={handleLoadMore}
                hasMore={hasMore}
                totalResults={totalResults}
                currentPage={currentPage}
                sortBy={sortBy}
                onSortChange={handleSortChange}
              />
            </div>
          </div>
        </div>

        {/* Floating Action Button for Comparison */}
        {comparisonProducts.length > 0 && (
          <div className="fixed bottom-4 left-4 z-40">
            <Button
              variant="secondary"
              iconName="GitCompare"
              iconPosition="left"
              onClick={() => setIsComparisonOpen(true)}
              className="shadow-educational-strong"
            >
              Compare ({comparisonProducts.length})
            </Button>
          </div>
        )}
      </main>

      {/* Quick Preview Modal */}
      <QuickPreviewModal
        product={selectedProduct}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Comparison Tool */}
      <ComparisonTool
        comparisonProducts={comparisonProducts}
        onRemoveFromComparison={handleRemoveFromComparison}
        onClearComparison={handleClearComparison}
        isOpen={isComparisonOpen}
        onToggle={() => setIsComparisonOpen(!isComparisonOpen)}
      />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-educational-strong hover:bg-primary/90 transition-educational z-30"
      >
        <Icon name="ChevronUp" size={20} />
      </button>
    </div>
  );
};

export default ProductCategoriesKnowledgeUniverse;