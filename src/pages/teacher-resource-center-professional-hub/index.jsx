import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import WelcomeHeader from './components/WelcomeHeader';
import QuickActions from './components/QuickActions';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import ResourceManagement from './components/ResourceManagement';
import CurriculumAlignment from './components/CurriculumAlignment';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import CommunityForum from './components/CommunityForum';
import CulturalBridge from './components/CulturalBridge';
import BulkOrdering from './components/BulkOrdering';

const TeacherResourceCenter = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock teacher profile data
  const teacherProfile = {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    school: "Al-Noor Islamic Academy",
    subject: "Islamic Studies & Literature",
    grade: "6-8",
    memberSince: "2022",
    resourcesShared: 23,
    studentsReached: 156,
    lessonPlans: 34,
    communityRank: "#12"
  };

  const navigationTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'Home' },
    { id: 'resources', label: 'Resource Management', icon: 'FolderOpen' },
    { id: 'curriculum', label: 'Curriculum Alignment', icon: 'BookOpen' },
    { id: 'development', label: 'Professional Development', icon: 'GraduationCap' },
    { id: 'community', label: 'Community Forum', icon: 'MessageCircle' },
    { id: 'cultural', label: 'Cultural Bridge', icon: 'Globe' },
    { id: 'bulk', label: 'Bulk Ordering', icon: 'ShoppingCart' }
  ];

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <QuickActions />
            <PersonalizedRecommendations />
          </div>
        );
      case 'resources':
        return <ResourceManagement />;
      case 'curriculum':
        return <CurriculumAlignment />;
      case 'development':
        return <ProfessionalDevelopment />;
      case 'community':
        return <CommunityForum />;
      case 'cultural':
        return <CulturalBridge />;
      case 'bulk':
        return <BulkOrdering />;
      default:
        return (
          <div className="space-y-8">
            <QuickActions />
            <PersonalizedRecommendations />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container-educational">
          {/* Welcome Header */}
          <div className="mb-8">
            <WelcomeHeader teacherProfile={teacherProfile} />
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="bg-card rounded-xl p-2 shadow-educational">
              <div className="flex flex-wrap gap-1">
                {navigationTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-educational ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-text-secondary hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Content */}
          <div className="min-h-[600px]">
            {renderActiveContent()}
          </div>

          {/* Mobile Quick Access */}
          <div className="fixed bottom-6 right-6 lg:hidden">
            <div className="flex flex-col gap-2">
              <Button
                variant="default"
                size="icon"
                iconName="MessageCircle"
                className="w-12 h-12 rounded-full shadow-educational-strong"
              />
              <Button
                variant="secondary"
                size="icon"
                iconName="Plus"
                className="w-12 h-12 rounded-full shadow-educational-strong"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container-educational">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={16} color="white" />
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">
                  Noteface Educational Hub
                </div>
                <div className="text-sm text-text-secondary">
                  Empowering educators worldwide
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <span>© {new Date().getFullYear()} Noteface. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <button className="hover:text-primary transition-educational">
                  Help Center
                </button>
                <button className="hover:text-primary transition-educational">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeacherResourceCenter;