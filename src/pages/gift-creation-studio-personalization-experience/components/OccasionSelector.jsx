import React from 'react';
import Icon from '../../../components/AppIcon';

const OccasionSelector = ({ selectedOccasion, onOccasionSelect }) => {
  const occasions = [
    {
      id: 'graduation',
      name: 'Graduation',
      icon: 'GraduationCap',
      description: 'Celebrate academic achievements',
      color: 'bg-primary',
      themes: ['Academic Excellence', 'Future Success', 'Knowledge Journey']
    },
    {
      id: 'religious',
      name: 'Religious Holidays',
      icon: 'Star',
      description: 'Honor spiritual celebrations',
      color: 'bg-accent',
      themes: ['Islamic Traditions', 'Spiritual Growth', 'Faith Journey']
    },
    {
      id: 'back-to-school',
      name: 'Back to School',
      icon: 'BookOpen',
      description: 'Start the learning year right',
      color: 'bg-secondary',
      themes: ['New Beginnings', 'Learning Adventure', 'School Spirit']
    },
    {
      id: 'birthday',
      name: 'Birthday',
      icon: 'Gift',
      description: 'Make birthdays memorable',
      color: 'bg-success',
      themes: ['Personal Growth', 'Age Milestones', 'Celebration']
    },
    {
      id: 'achievement',
      name: 'Achievement',
      icon: 'Award',
      description: 'Recognize special accomplishments',
      color: 'bg-warning',
      themes: ['Success Recognition', 'Milestone Moments', 'Pride & Joy']
    },
    {
      id: 'general',
      name: 'Just Because',
      icon: 'Heart',
      description: 'Show you care anytime',
      color: 'bg-muted',
      themes: ['Thoughtful Gesture', 'Encouragement', 'Love & Support']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose an Occasion</h2>
        <p className="text-text-secondary">Select the perfect occasion to create a meaningful personalized gift</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {occasions.map((occasion) => (
          <div
            key={occasion.id}
            onClick={() => onOccasionSelect(occasion)}
            className={`card-educational p-6 cursor-pointer transition-educational hover-lift ${
              selectedOccasion?.id === occasion.id 
                ? 'ring-2 ring-primary bg-primary/5' :'hover:shadow-educational-strong'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`w-16 h-16 ${occasion.color} rounded-full flex items-center justify-center`}>
                <Icon name={occasion.icon} size={28} color="white" />
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{occasion.name}</h3>
                <p className="text-sm text-text-secondary mb-3">{occasion.description}</p>
                
                <div className="flex flex-wrap gap-1 justify-center">
                  {occasion.themes.slice(0, 2).map((theme, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-xs rounded-full text-text-secondary"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedOccasion && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${selectedOccasion.color} rounded-full flex items-center justify-center`}>
              <Icon name={selectedOccasion.icon} size={20} color="white" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{selectedOccasion.name} Selected</h4>
              <p className="text-sm text-text-secondary">Perfect themes available: {selectedOccasion.themes.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OccasionSelector;