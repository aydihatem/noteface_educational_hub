import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ComparisonTool = ({ 
  comparisonProducts, 
  onRemoveFromComparison, 
  onClearComparison,
  isOpen,
  onToggle 
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          variant="default"
          iconName="GitCompare"
          iconPosition="left"
          onClick={onToggle}
          className="bg-primary hover:bg-primary/90 shadow-educational-strong"
        >
          Compare ({comparisonProducts.length})
        </Button>
      </div>
    );
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < Math.floor(rating) ? 'text-secondary fill-current' : 'text-gray-300'}
      />
    ));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'details', label: 'Details', icon: 'Info' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageSquare' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-educational-strong max-h-[70vh] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="GitCompare" size={20} className="text-primary" />
          <h3 className="font-semibold text-foreground">
            Compare Resources ({comparisonProducts.length})
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Trash2"
            onClick={onClearComparison}
            className="text-text-secondary hover:text-error"
          >
            Clear All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onToggle}
            className="text-text-secondary hover:text-foreground"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-educational ${
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-foreground'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[50vh]">
        {comparisonProducts.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="GitCompare" size={48} className="text-text-secondary mx-auto mb-4" />
            <p className="text-text-secondary">No products to compare</p>
            <p className="text-sm text-text-secondary mt-2">
              Add products to comparison by clicking the compare icon on product cards
            </p>
          </div>
        ) : (
          <div className="p-4">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comparisonProducts.map((product) => (
                  <div key={product.id} className="card-educational p-4 relative">
                    <button
                      onClick={() => onRemoveFromComparison(product.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-error/10 hover:bg-error/20 rounded-full flex items-center justify-center transition-educational"
                    >
                      <Icon name="X" size={12} className="text-error" />
                    </button>

                    <Image
                      src={product.image}
                      alt={product.title}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {product.title}
                    </h4>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-text-secondary">
                        {product.rating}
                      </span>
                    </div>
                    
                    <div className="text-lg font-bold text-primary mb-3">
                      ${product.price}
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Age Group:</span>
                        <span className="text-foreground">{product.ageGroup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Language:</span>
                        <span className="text-foreground">{product.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Teacher Approval:</span>
                        <span className="text-success">{product.teacherApproval}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'details' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold text-foreground">Feature</th>
                      {comparisonProducts.map((product) => (
                        <th key={product.id} className="text-left p-3 font-semibold text-foreground min-w-[200px]">
                          {product.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 text-text-secondary">Price</td>
                      {comparisonProducts.map((product) => (
                        <td key={product.id} className="p-3 font-semibold text-primary">
                          ${product.price}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 text-text-secondary">Rating</td>
                      {comparisonProducts.map((product) => (
                        <td key={product.id} className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {renderStars(product.rating)}
                            </div>
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 text-text-secondary">Age Group</td>
                      {comparisonProducts.map((product) => (
                        <td key={product.id} className="p-3 text-foreground">
                          {product.ageGroup}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 text-text-secondary">Language</td>
                      {comparisonProducts.map((product) => (
                        <td key={product.id} className="p-3 text-foreground">
                          {product.language}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 text-text-secondary">Curriculum</td>
                      {comparisonProducts.map((product) => (
                        <td key={product.id} className="p-3 text-foreground">
                          {product.curriculumAlignment || 'N/A'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comparisonProducts.map((product) => (
                  <div key={product.id} className="card-educational p-4">
                    <h4 className="font-semibold text-foreground mb-3">
                      {product.title}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-text-secondary">
                          {product.reviewCount} reviews
                        </span>
                      </div>
                      <div className="text-sm text-text-secondary">
                        <p className="mb-2">Recent review:</p>
                        <p className="italic">
                          "Excellent resource for teaching. My students love the interactive elements and clear explanations."
                        </p>
                        <p className="mt-2 text-xs">- Sarah M., Teacher</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonTool;