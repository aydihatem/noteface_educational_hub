import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EducationalSupport = ({ product }) => {
  const [downloadingResource, setDownloadingResource] = useState(null);

  const handleDownload = async (resourceId, resourceName) => {
    setDownloadingResource(resourceId);
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setDownloadingResource(null);
    // Show success message
    alert(`${resourceName} downloaded successfully!`);
  };

  const supportResources = [
    {
      id: 'lesson-plan',
      title: 'Comprehensive Lesson Plans',
      description: 'Ready-to-use lesson plans aligned with curriculum standards, including objectives, activities, and assessment rubrics.',
      icon: 'FileText',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      featured: true
    },
    {
      id: 'discussion-guide',
      title: 'Discussion Guide & Questions',
      description: 'Thought-provoking questions and discussion prompts to enhance classroom engagement and critical thinking.',
      icon: 'MessageSquare',
      type: 'PDF',
      size: '1.1 MB',
      downloads: 892,
      featured: true
    },
    {
      id: 'activity-worksheets',
      title: 'Interactive Worksheets',
      description: 'Printable worksheets and activities that reinforce key concepts and provide hands-on learning experiences.',
      icon: 'Edit3',
      type: 'PDF',
      size: '3.2 MB',
      downloads: 1456,
      featured: false
    },
    {
      id: 'assessment-tools',
      title: 'Assessment & Evaluation Tools',
      description: 'Comprehensive assessment materials including quizzes, rubrics, and progress tracking sheets.',
      icon: 'CheckSquare',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 734,
      featured: false
    },
    {
      id: 'extension-activities',
      title: 'Extension Activities',
      description: 'Additional activities for advanced learners and cross-curricular connections to enhance learning depth.',
      icon: 'Zap',
      type: 'PDF',
      size: '2.1 MB',
      downloads: 623,
      featured: false
    },
    {
      id: 'parent-guide',
      title: 'Parent Engagement Guide',
      description: 'Resources to help parents support their children\'s learning at home with practical tips and activities.',
      icon: 'Users',
      type: 'PDF',
      size: '1.5 MB',
      downloads: 445,
      featured: false
    }
  ];

  const implementationTips = [
    {
      title: 'Classroom Integration',
      content: 'Start with a brief introduction to the cultural context, then use the discussion questions to engage students before reading. Follow up with the interactive worksheets to reinforce key concepts.',
      icon: 'BookOpen'
    },
    {
      title: 'Differentiated Learning',
      content: 'Use the extension activities for advanced learners while providing additional support materials for students who need extra help. The assessment tools help track individual progress.',
      icon: 'Users'
    },
    {
      title: 'Home-School Connection',
      content: 'Share the parent guide to create continuity between classroom and home learning. Encourage families to discuss the themes and values presented in the material.',
      icon: 'Home'
    },
    {
      title: 'Cultural Sensitivity',
      content: 'Review the cultural context section before teaching. Be prepared to address questions about different perspectives and encourage respectful dialogue among students.',
      icon: 'Globe'
    }
  ];

  return (
    <div className="bg-background border border-border rounded-lg shadow-educational">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
          <Icon name="BookOpen" size={24} className="mr-3 text-primary" />
          Educational Support Resources
        </h3>
        <p className="text-text-secondary">
          Comprehensive teaching materials and resources to maximize the educational impact of this book.
        </p>
      </div>

      <div className="p-6">
        {/* Featured Resources */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Star" size={18} className="mr-2 text-secondary" />
            Featured Resources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportResources.filter(resource => resource.featured).map((resource) => (
              <div key={resource.id} className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={resource.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-foreground mb-1">{resource.title}</h5>
                    <p className="text-text-secondary text-sm mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span className="flex items-center">
                          <Icon name="File" size={12} className="mr-1" />
                          {resource.type}
                        </span>
                        <span className="flex items-center">
                          <Icon name="HardDrive" size={12} className="mr-1" />
                          {resource.size}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Download" size={12} className="mr-1" />
                          {resource.downloads}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        loading={downloadingResource === resource.id}
                        onClick={() => handleDownload(resource.id, resource.title)}
                        iconName="Download"
                        iconPosition="left"
                      >
                        {downloadingResource === resource.id ? 'Downloading...' : 'Download'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Resources */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4">All Resources</h4>
          <div className="space-y-3">
            {supportResources.map((resource) => (
              <div key={resource.id} className="flex items-center space-x-4 p-4 bg-surface-warm rounded-lg hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={resource.icon} size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-foreground">{resource.title}</h5>
                  <p className="text-text-secondary text-sm">{resource.description}</p>
                </div>
                <div className="flex items-center space-x-4 text-xs text-text-secondary">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  loading={downloadingResource === resource.id}
                  onClick={() => handleDownload(resource.id, resource.title)}
                  iconName="Download"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Tips */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Lightbulb" size={18} className="mr-2 text-secondary" />
            Implementation Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {implementationTips.map((tip, index) => (
              <div key={index} className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h5 className="font-medium text-foreground mb-2 flex items-center">
                  <Icon name={tip.icon} size={16} className="mr-2 text-secondary" />
                  {tip.title}
                </h5>
                <p className="text-text-secondary text-sm">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Icon name="GraduationCap" size={18} className="mr-2 text-accent" />
            Professional Development Opportunities
          </h4>
          <p className="text-text-secondary text-sm mb-4">
            Enhance your teaching skills with our professional development resources and workshops related to this material.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              iconName="Video"
              iconPosition="left"
              className="flex-1"
            >
              Watch Training Videos
            </Button>
            <Button
              variant="outline"
              iconName="Calendar"
              iconPosition="left"
              className="flex-1"
            >
              Join Live Workshop
            </Button>
            <Button
              variant="outline"
              iconName="Users"
              iconPosition="left"
              className="flex-1"
            >
              Teacher Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSupport;