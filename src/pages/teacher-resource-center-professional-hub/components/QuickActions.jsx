import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const quickActions = [
    {
      id: 1,
      title: "Create Lesson Plan",
      description: "Start a new lesson with our planning tools",
      icon: "FileText",
      color: "bg-accent",
      link: "/teacher-resource-center-professional-hub"
    },
    {
      id: 2,
      title: "Browse Resources",
      description: "Explore curated educational materials",
      icon: "Search",
      color: "bg-secondary",
      link: "/product-categories-knowledge-universe"
    },
    {
      id: 3,
      title: "Join Discussion",
      description: "Connect with fellow educators",
      icon: "MessageCircle",
      color: "bg-success",
      link: "/teacher-resource-center-professional-hub"
    },
    {
      id: 4,
      title: "Professional Development",
      description: "Enhance your teaching skills",
      icon: "GraduationCap",
      color: "bg-primary",
      link: "/teacher-resource-center-professional-hub"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-educational">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-display font-semibold text-foreground">Quick Actions</h2>
        <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <Link
            key={action.id}
            to={action.link}
            className="group p-4 rounded-lg border border-border hover:border-primary/30 transition-educational hover-lift"
          >
            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-educational`}>
              <Icon name={action.icon} size={20} color="white" />
            </div>
            <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-educational">
              {action.title}
            </h3>
            <p className="text-sm text-text-secondary line-clamp-2">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;