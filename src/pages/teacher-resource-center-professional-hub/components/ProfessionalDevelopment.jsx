import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProfessionalDevelopment = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "Integrating Islamic Values in Modern Curriculum",
      presenter: "Dr. Fatima Al-Zahra",
      date: "July 20, 2025",
      time: "2:00 PM EST",
      duration: "90 minutes",
      attendees: 234,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
      tags: ["Islamic Education", "Curriculum Design"]
    },
    {
      id: 2,
      title: "Effective Science Teaching Strategies",
      presenter: "Prof. Michael Chen",
      date: "July 25, 2025",
      time: "4:00 PM EST",
      duration: "60 minutes",
      attendees: 189,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop",
      tags: ["Science Education", "Teaching Methods"]
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Building Cultural Sensitivity in the Classroom",
      author: "Dr. Sarah Ahmed",
      readTime: "8 min read",
      category: "Cultural Education",
      excerpt: "Explore practical strategies for creating inclusive learning environments that honor diverse cultural backgrounds while maintaining educational excellence.",
      publishDate: "July 10, 2025",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Digital Tools for Enhanced Learning",
      author: "Prof. James Wilson",
      readTime: "12 min read",
      category: "Educational Technology",
      excerpt: "Discover innovative digital tools and platforms that can transform your teaching approach and engage students in meaningful ways.",
      publishDate: "July 8, 2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Assessment Strategies That Work",
      author: "Dr. Lisa Rodriguez",
      readTime: "10 min read",
      category: "Assessment",
      excerpt: "Learn about effective assessment techniques that provide meaningful feedback while supporting student growth and development.",
      publishDate: "July 5, 2025",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Upcoming Webinars */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-1">
              Upcoming Webinars
            </h2>
            <p className="text-sm text-text-secondary">
              Join expert-led sessions to enhance your teaching skills
            </p>
          </div>
          <Button variant="outline" size="sm" iconName="Calendar">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingWebinars.map((webinar) => (
            <div key={webinar.id} className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-educational hover-lift">
              <div className="relative">
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  {webinar.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {webinar.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {webinar.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-3">
                  by {webinar.presenter}
                </p>
                
                <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {webinar.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {webinar.time}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    {webinar.attendees}
                  </span>
                </div>
                
                <Button variant="default" size="sm" fullWidth iconName="Video">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Articles */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-1">
              Professional Articles
            </h2>
            <p className="text-sm text-text-secondary">
              Expert insights and pedagogical guidance
            </p>
          </div>
          <Button variant="outline" size="sm" iconName="BookOpen">
            Browse Library
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="group border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-educational hover-lift">
              <div className="relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-educational"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-educational line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-3 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
                  <span>by {article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">{article.publishDate}</span>
                  <Button variant="ghost" size="sm" iconName="ArrowRight">
                    Read
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDevelopment;