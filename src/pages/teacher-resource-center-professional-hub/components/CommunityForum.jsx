import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunityForum = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Discussions', count: 156 },
    { id: 'islamic-studies', label: 'Islamic Studies', count: 42 },
    { id: 'science', label: 'Science', count: 38 },
    { id: 'literature', label: 'Literature', count: 29 },
    { id: 'general', label: 'General Teaching', count: 47 }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best practices for teaching Quran recitation to young children",
      author: {
        name: "Amina Hassan",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        role: "Islamic Studies Teacher",
        school: "Al-Noor Academy"
      },
      category: "Islamic Studies",
      replies: 23,
      views: 156,
      lastActivity: "2 hours ago",
      isAnswered: true,
      excerpt: "I\'m looking for effective methods to teach proper Quran recitation to children aged 6-8. What techniques have worked best in your experience?",
      tags: ["Quran", "Early Childhood", "Recitation"]
    },
    {
      id: 2,
      title: "Integrating hands-on experiments in elementary science curriculum",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        role: "Science Teacher",
        school: "Greenwood Elementary"
      },
      category: "Science",
      replies: 18,
      views: 89,
      lastActivity: "4 hours ago",
      isAnswered: false,
      excerpt: "How do you balance safety concerns with engaging hands-on science experiments for grades 3-5? Looking for practical advice and resource recommendations.",
      tags: ["Experiments", "Safety", "Elementary"]
    },
    {
      id: 3,
      title: "Cultural sensitivity in literature selection for diverse classrooms",
      author: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        role: "English Teacher",
        school: "Unity High School"
      },
      category: "Literature",
      replies: 31,
      views: 203,
      lastActivity: "6 hours ago",
      isAnswered: true,
      excerpt: "What criteria do you use when selecting literature for culturally diverse classrooms? How do you ensure representation while maintaining academic rigor?",
      tags: ["Diversity", "Cultural Sensitivity", "Book Selection"]
    },
    {
      id: 4,
      title: "Effective parent-teacher communication strategies",
      author: {
        name: "David Chen",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        role: "Middle School Teacher",
        school: "Riverside Academy"
      },
      category: "General Teaching",
      replies: 15,
      views: 67,
      lastActivity: "8 hours ago",
      isAnswered: false,
      excerpt: "What are your most effective strategies for maintaining positive communication with parents, especially when discussing challenging topics?",
      tags: ["Parent Communication", "Classroom Management"]
    }
  ];

  const topContributors = [
    {
      name: "Dr. Fatima Al-Zahra",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      contributions: 89,
      reputation: 2456,
      badge: "Expert Contributor"
    },
    {
      name: "Prof. James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      contributions: 67,
      reputation: 1892,
      badge: "Helpful Teacher"
    },
    {
      name: "Ms. Lisa Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      contributions: 54,
      reputation: 1634,
      badge: "Active Member"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Forum Header */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-1">
              Community Forum
            </h2>
            <p className="text-sm text-text-secondary">
              Connect with fellow educators and share knowledge
            </p>
          </div>
          <Button variant="default" iconName="Plus" iconPosition="left">
            Start Discussion
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search discussions..."
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-educational ${
                  activeCategory === category.id
                    ? 'bg-primary text-white' :'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Discussions List */}
        <div className="lg:col-span-2 space-y-4">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-card rounded-xl p-6 shadow-educational hover:shadow-educational-strong transition-educational">
              <div className="flex items-start gap-4">
                <Image
                  src={discussion.author.avatar}
                  alt={discussion.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-educational cursor-pointer line-clamp-2">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium text-text-secondary">
                          {discussion.author.name}
                        </span>
                        <span className="text-xs text-text-secondary">•</span>
                        <span className="text-xs text-text-secondary">
                          {discussion.author.role}
                        </span>
                        <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                          {discussion.category}
                        </span>
                      </div>
                    </div>
                    
                    {discussion.isAnswered && (
                      <div className="flex items-center gap-1 text-success text-xs bg-success/10 px-2 py-1 rounded-full">
                        <Icon name="CheckCircle" size={12} />
                        Answered
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                    {discussion.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {discussion.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-text-secondary">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="MessageCircle" size={14} />
                        {discussion.replies} replies
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Eye" size={14} />
                        {discussion.views} views
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {discussion.lastActivity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <Button variant="outline" iconName="ArrowDown">
              Load More Discussions
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <div className="bg-card rounded-xl p-6 shadow-educational">
            <h3 className="font-display font-semibold text-foreground mb-4">
              Top Contributors
            </h3>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">
                      {contributor.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <span>{contributor.contributions} posts</span>
                      <span>•</span>
                      <span>{contributor.reputation} reputation</span>
                    </div>
                    <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                      {contributor.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Forum Guidelines */}
          <div className="bg-card rounded-xl p-6 shadow-educational">
            <h3 className="font-display font-semibold text-foreground mb-4">
              Forum Guidelines
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <span>Be respectful and professional in all interactions</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <span>Share resources and experiences to help others</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <span>Use clear, descriptive titles for your posts</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <span>Search before posting to avoid duplicates</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4" iconName="BookOpen">
              Read Full Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;