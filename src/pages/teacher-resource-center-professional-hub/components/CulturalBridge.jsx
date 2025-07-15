import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CulturalBridge = () => {
  const culturalResources = [
    {
      id: 1,
      title: "Incorporating Islamic Perspectives in World History",
      description: "Guidelines for presenting Islamic contributions to world civilization while maintaining historical accuracy and cultural sensitivity.",
      category: "Historical Context",
      languages: ["English", "Arabic"],
      grade: "6-12",
      image: "https://images.unsplash.com/photo-1564769625392-651b2b7b8c8f?w=300&h=200&fit=crop",
      downloadCount: 234,
      rating: 4.8
    },
    {
      id: 2,
      title: "Diverse Literature Selection Guide",
      description: "Comprehensive framework for selecting culturally diverse literature that represents various perspectives while meeting curriculum standards.",
      category: "Literature",
      languages: ["English", "French"],
      grade: "K-12",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      downloadCount: 189,
      rating: 4.9
    },
    {
      id: 3,
      title: "Multilingual Science Terminology",
      description: "Essential science terms in multiple languages to support ESL students and promote inclusive learning environments.",
      category: "Science",
      languages: ["English", "Arabic", "Urdu"],
      grade: "3-8",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop",
      downloadCount: 156,
      rating: 4.7
    }
  ];

  const sensitivityTips = [
    {
      id: 1,
      icon: "Globe",
      title: "Cultural Awareness",
      description: "Understand the cultural backgrounds of your students and incorporate diverse perspectives in your teaching materials.",
      color: "bg-primary"
    },
    {
      id: 2,
      icon: "Users",
      title: "Inclusive Language",
      description: "Use language that is inclusive and respectful of all cultures, avoiding assumptions or stereotypes.",
      color: "bg-success"
    },
    {
      id: 3,
      icon: "Heart",
      title: "Empathy Building",
      description: "Create opportunities for students to share their cultural experiences and learn from one another.",
      color: "bg-accent"
    },
    {
      id: 4,
      icon: "BookOpen",
      title: "Diverse Resources",
      description: "Ensure your curriculum includes materials from various cultural perspectives and authors.",
      color: "bg-secondary"
    }
  ];

  const expertConsultants = [
    {
      id: 1,
      name: "Dr. Amina Hassan",
      expertise: "Islamic Education & Cultural Integration",
      languages: ["English", "Arabic"],
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4.9,
      consultations: 156,
      availability: "Available"
    },
    {
      id: 2,
      name: "Prof. Maria Rodriguez",
      expertise: "Multicultural Literature & ESL Support",
      languages: ["English", "Spanish", "French"],
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 4.8,
      consultations: 203,
      availability: "Busy"
    },
    {
      id: 3,
      name: "Dr. Ahmed Khan",
      expertise: "Cross-Cultural Science Education",
      languages: ["English", "Urdu", "Hindi"],
      avatar: "https://randomuser.me/api/portraits/men/58.jpg",
      rating: 4.9,
      consultations: 178,
      availability: "Available"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-accent/80 text-white rounded-xl p-6 lg:p-8 shadow-educational-strong">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="Globe" size={32} color="white" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-display font-bold mb-1">
              Cultural Bridge
            </h1>
            <p className="text-white/80">
              Resources and guidance for culturally sensitive education
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm text-white/70">Cultural Resources</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-white/70">Expert Consultants</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm text-white/70">Languages Supported</div>
          </div>
        </div>
      </div>

      {/* Cultural Resources */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-1">
              Cultural Resources
            </h2>
            <p className="text-sm text-text-secondary">
              Curated materials for inclusive and culturally sensitive teaching
            </p>
          </div>
          <Button variant="outline" size="sm" iconName="Filter">
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {culturalResources.map((resource) => (
            <div key={resource.id} className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-educational hover-lift">
              <div className="relative">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                    Grade {resource.grade}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-3 line-clamp-3">
                  {resource.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {resource.languages.map((lang, index) => (
                    <span key={index} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded">
                      {lang}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} color="#F39C12" />
                    <span>{resource.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Download" size={14} />
                    <span>{resource.downloadCount}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" fullWidth>
                    Preview
                  </Button>
                  <Button variant="default" size="sm" iconName="Download">
                    Get
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Sensitivity Tips */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="mb-6">
          <h2 className="text-xl font-display font-semibold text-foreground mb-1">
            Cultural Sensitivity Guidelines
          </h2>
          <p className="text-sm text-text-secondary">
            Best practices for creating inclusive learning environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sensitivityTips.map((tip) => (
            <div key={tip.id} className="text-center">
              <div className={`w-16 h-16 ${tip.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name={tip.icon} size={24} color="white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expert Consultants */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-1">
              Expert Consultants
            </h2>
            <p className="text-sm text-text-secondary">
              Connect with cultural education specialists for personalized guidance
            </p>
          </div>
          <Button variant="outline" size="sm" iconName="Calendar">
            Schedule
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {expertConsultants.map((consultant) => (
            <div key={consultant.id} className="border border-border rounded-lg p-4 hover:border-primary/30 transition-educational hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <Image
                    src={consultant.avatar}
                    alt={consultant.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    consultant.availability === 'Available' ? 'bg-success' : 'bg-warning'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {consultant.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-2">
                    {consultant.expertise}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} color="#F39C12" />
                      <span>{consultant.rating}</span>
                    </div>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">
                      {consultant.consultations} consultations
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {consultant.languages.map((lang, index) => (
                  <span key={index} className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                    {lang}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm px-2 py-1 rounded-full ${
                  consultant.availability === 'Available' ?'bg-success/20 text-success' :'bg-warning/20 text-warning'
                }`}>
                  {consultant.availability}
                </span>
                <Button 
                  variant={consultant.availability === 'Available' ? 'default' : 'outline'} 
                  size="sm"
                  disabled={consultant.availability !== 'Available'}
                >
                  {consultant.availability === 'Available' ? 'Book Session' : 'Join Waitlist'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalBridge;