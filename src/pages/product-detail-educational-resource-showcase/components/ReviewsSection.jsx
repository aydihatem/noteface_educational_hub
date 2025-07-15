import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ReviewsSection = ({ product }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filterOptions = [
    { value: 'all', label: 'All Reviews' },
    { value: 'teachers', label: 'Teachers' },
    { value: 'parents', label: 'Parents' },
    { value: 'students', label: 'Students' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' },
    { value: 'helpful', label: 'Most Helpful' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < Math.floor(rating) ? "text-secondary fill-current" : "text-border"}
      />
    ));
  };

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    product.reviews.forEach(review => {
      distribution[review.rating]++;
    });
    return distribution;
  };

  const ratingDistribution = getRatingDistribution();
  const totalReviews = product.reviews.length;

  const filteredReviews = product.reviews.filter(review => {
    if (selectedFilter === 'all') return true;
    return review.userType === selectedFilter.slice(0, -1); // Remove 's' from end
  });

  const getUserTypeIcon = (userType) => {
    switch (userType) {
      case 'teacher': return 'GraduationCap';
      case 'parent': return 'Heart';
      case 'student': return 'User';
      default: return 'User';
    }
  };

  const getUserTypeColor = (userType) => {
    switch (userType) {
      case 'teacher': return 'text-primary';
      case 'parent': return 'text-accent';
      case 'student': return 'text-secondary';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-background border border-border rounded-lg shadow-educational">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Customer Reviews ({totalReviews})
        </h3>

        {/* Rating Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {product.rating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {renderStars(product.rating)}
            </div>
            <p className="text-text-secondary text-sm">
              Based on {totalReviews} reviews
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary w-6">{rating}</span>
                <Icon name="Star" size={12} className="text-secondary" />
                <div className="flex-1 bg-border rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full"
                    style={{
                      width: `${totalReviews > 0 ? (ratingDistribution[rating] / totalReviews) * 100 : 0}%`
                    }}
                  />
                </div>
                <span className="text-sm text-text-secondary w-8">
                  {ratingDistribution[rating]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Select
              options={filterOptions}
              value={selectedFilter}
              onChange={setSelectedFilter}
              placeholder="Filter by user type"
            />
          </div>
          <div className="flex-1">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              placeholder="Sort reviews"
            />
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="divide-y divide-border">
        {filteredReviews.map((review) => (
          <div key={review.id} className="p-6">
            <div className="flex items-start space-x-4">
              {/* User Avatar */}
              <div className="w-12 h-12 bg-surface-warm rounded-full flex items-center justify-center flex-shrink-0">
                <Icon 
                  name={getUserTypeIcon(review.userType)} 
                  size={20} 
                  className={getUserTypeColor(review.userType)}
                />
              </div>

              <div className="flex-1">
                {/* Review Header */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-foreground">{review.userName}</h4>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <span className={`capitalize ${getUserTypeColor(review.userType)}`}>
                        {review.userType}
                      </span>
                      <span>•</span>
                      <span>{review.date}</span>
                      {review.verified && (
                        <>
                          <span>•</span>
                          <span className="text-success flex items-center">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Verified Purchase
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review Title */}
                {review.title && (
                  <h5 className="font-medium text-foreground mb-2">{review.title}</h5>
                )}

                {/* Review Content */}
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {review.content}
                </p>

                {/* Educational Context */}
                {review.educationalContext && (
                  <div className="bg-primary/5 rounded-lg p-3 mb-3">
                    <h6 className="font-medium text-primary text-sm mb-1">
                      Educational Context:
                    </h6>
                    <p className="text-text-secondary text-sm">
                      {review.educationalContext}
                    </p>
                  </div>
                )}

                {/* Pros and Cons */}
                {(review.pros || review.cons) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    {review.pros && (
                      <div>
                        <h6 className="font-medium text-success text-sm mb-1 flex items-center">
                          <Icon name="ThumbsUp" size={12} className="mr-1" />
                          Pros:
                        </h6>
                        <ul className="space-y-1">
                          {review.pros.map((pro, index) => (
                            <li key={index} className="text-text-secondary text-sm flex items-start">
                              <Icon name="Plus" size={12} className="text-success mr-1 mt-0.5 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {review.cons && (
                      <div>
                        <h6 className="font-medium text-warning text-sm mb-1 flex items-center">
                          <Icon name="ThumbsDown" size={12} className="mr-1" />
                          Cons:
                        </h6>
                        <ul className="space-y-1">
                          {review.cons.map((con, index) => (
                            <li key={index} className="text-text-secondary text-sm flex items-start">
                              <Icon name="Minus" size={12} className="text-warning mr-1 mt-0.5 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Review Actions */}
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review.helpfulCount})</span>
                  </button>
                  <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors">
                    <Icon name="MessageCircle" size={14} />
                    <span>Reply</span>
                  </button>
                  <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors">
                    <Icon name="Flag" size={14} />
                    <span>Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="p-6 border-t border-border text-center">
        <Button
          variant="outline"
          iconName="ChevronDown"
          iconPosition="left"
        >
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default ReviewsSection;