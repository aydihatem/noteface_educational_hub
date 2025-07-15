import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const ProductDescription = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description', icon: 'FileText' },
    { id: 'educational', label: 'Educational Benefits', icon: 'GraduationCap' },
    { id: 'contents', label: 'Contents', icon: 'List' },
    { id: 'author', label: 'About Author', icon: 'User' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="prose prose-sm max-w-none">
            <p className="text-text-secondary leading-relaxed mb-4">
              {product.description}
            </p>
            
            <h4 className="font-semibold text-foreground mb-2">Learning Outcomes</h4>
            <ul className="space-y-1 mb-4">
              {product.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="Target" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{outcome}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mb-2">Pedagogical Approach</h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              {product.pedagogicalApproach}
            </p>
          </div>
        );

      case 'educational':
        return (
          <div className="space-y-4">
            <div className="bg-primary/5 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2 flex items-center">
                <Icon name="Brain" size={18} className="mr-2" />
                Cognitive Development
              </h4>
              <ul className="space-y-2">
                {product.cognitiveSkills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-lg p-4">
              <h4 className="font-semibold text-secondary mb-2 flex items-center">
                <Icon name="Users" size={18} className="mr-2" />
                Social & Emotional Learning
              </h4>
              <ul className="space-y-2">
                {product.socialEmotionalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <Icon name="Heart" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/5 rounded-lg p-4">
              <h4 className="font-semibold text-accent mb-2 flex items-center">
                <Icon name="Lightbulb" size={18} className="mr-2" />
                Classroom Applications
              </h4>
              <div className="text-sm text-text-secondary space-y-2">
                {product.classroomApplications.map((application, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contents':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Table of Contents</h4>
              <div className="space-y-2">
                {product.tableOfContents.map((chapter, index) => (
                  <div key={index} className="flex items-start space-x-3 py-2 border-b border-border last:border-b-0">
                    <span className="text-primary font-medium text-sm w-8 flex-shrink-0">
                      {index + 1}.
                    </span>
                    <div className="flex-1">
                      <h5 className="font-medium text-foreground text-sm">{chapter.title}</h5>
                      {chapter.description && (
                        <p className="text-text-secondary text-xs mt-1">{chapter.description}</p>
                      )}
                    </div>
                    <span className="text-text-secondary text-xs">{chapter.pages} pages</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-warm rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Additional Resources</h4>
              <ul className="space-y-1">
                {product.additionalResources.map((resource, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <Icon name="Download" size={14} className="text-primary" />
                    <span className="text-text-secondary">{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'author':
        return (
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-surface-warm rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={product.authorInfo.photo}
                  alt={product.authorInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground text-lg">{product.authorInfo.name}</h4>
                <p className="text-primary text-sm font-medium">{product.authorInfo.title}</p>
                <p className="text-text-secondary text-sm mt-1">{product.authorInfo.credentials}</p>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-foreground mb-2">Biography</h5>
              <p className="text-text-secondary text-sm leading-relaxed">
                {product.authorInfo.biography}
              </p>
            </div>

            <div>
              <h5 className="font-medium text-foreground mb-2">Other Works</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.authorInfo.otherWorks.map((work, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-surface-warm rounded-lg">
                    <div className="w-12 h-16 bg-primary/10 rounded flex-shrink-0"></div>
                    <div className="flex-1">
                      <h6 className="font-medium text-foreground text-sm">{work.title}</h6>
                      <p className="text-text-secondary text-xs">{work.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-medium text-foreground mb-2">Awards & Recognition</h5>
              <ul className="space-y-1">
                {product.authorInfo.awards.map((award, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <Icon name="Award" size={14} className="text-secondary" />
                    <span className="text-text-secondary">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-background border border-border rounded-lg shadow-educational">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-foreground hover:bg-surface-warm'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductDescription;