import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ResourceManagement = () => {
  const [activeTab, setActiveTab] = useState('collections');
  const [searchTerm, setSearchTerm] = useState('');

  const collections = [
    {
      id: 1,
      name: "Islamic History Unit",
      resources: 12,
      lastUpdated: "2 days ago",
      shared: true,
      color: "bg-primary"
    },
    {
      id: 2,
      name: "Science Experiments",
      resources: 8,
      lastUpdated: "1 week ago",
      shared: false,
      color: "bg-success"
    },
    {
      id: 3,
      name: "Literature Circle Guides",
      resources: 15,
      lastUpdated: "3 days ago",
      shared: true,
      color: "bg-accent"
    }
  ];

  const recentResources = [
    {
      id: 1,
      title: "Quran Recitation Guide",
      type: "PDF",
      size: "2.4 MB",
      addedDate: "July 12, 2025",
      downloads: 45
    },
    {
      id: 2,
      title: "Photosynthesis Worksheet",
      type: "DOC",
      size: "1.2 MB",
      addedDate: "July 10, 2025",
      downloads: 23
    },
    {
      id: 3,
      title: "Poetry Analysis Template",
      type: "PDF",
      size: "856 KB",
      addedDate: "July 8, 2025",
      downloads: 67
    }
  ];

  const tabs = [
    { id: 'collections', label: 'My Collections', icon: 'FolderOpen' },
    { id: 'recent', label: 'Recent Resources', icon: 'Clock' },
    { id: 'shared', label: 'Shared with Me', icon: 'Users' }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-educational">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-display font-semibold text-foreground">
          Resource Management
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" iconName="Upload">
            Upload
          </Button>
          <Button variant="default" size="sm" iconName="Plus">
            New Collection
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex border border-border rounded-lg p-1 bg-muted">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-educational ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'collections' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collections.map((collection) => (
            <div key={collection.id} className="border border-border rounded-lg p-4 hover:border-primary/30 transition-educational hover-lift">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 ${collection.color} rounded-lg flex items-center justify-center`}>
                  <Icon name="FolderOpen" size={20} color="white" />
                </div>
                <div className="flex gap-1">
                  {collection.shared && (
                    <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={12} color="var(--color-success)" />
                    </div>
                  )}
                  <Button variant="ghost" size="sm" iconName="MoreVertical" />
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1">{collection.name}</h3>
              <p className="text-sm text-text-secondary mb-2">
                {collection.resources} resources
              </p>
              <p className="text-xs text-text-secondary">
                Updated {collection.lastUpdated}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'recent' && (
        <div className="space-y-3">
          {recentResources.map((resource) => (
            <div key={resource.id} className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/30 transition-educational">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={20} color="var(--color-text-secondary)" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{resource.title}</h4>
                  <p className="text-sm text-text-secondary">
                    {resource.type} • {resource.size} • Added {resource.addedDate}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{resource.downloads}</p>
                  <p className="text-xs text-text-secondary">downloads</p>
                </div>
                <Button variant="ghost" size="sm" iconName="Download" />
                <Button variant="ghost" size="sm" iconName="MoreVertical" />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'shared' && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Users" size={24} color="var(--color-text-secondary)" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">No Shared Resources</h3>
          <p className="text-text-secondary mb-4">
            Resources shared by colleagues will appear here
          </p>
          <Button variant="outline" iconName="UserPlus">
            Connect with Teachers
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResourceManagement;