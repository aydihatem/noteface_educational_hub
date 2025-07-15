import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const CurriculumAlignment = () => {
  const [selectedStandard, setSelectedStandard] = useState('common-core');
  const [selectedGrade, setSelectedGrade] = useState('6');

  const standardOptions = [
    { value: 'common-core', label: 'Common Core State Standards' },
    { value: 'ngss', label: 'Next Generation Science Standards' },
    { value: 'islamic-curriculum', label: 'Islamic Curriculum Framework' },
    { value: 'state-standards', label: 'State Standards' }
  ];

  const gradeOptions = [
    { value: '1', label: 'Grade 1' },
    { value: '2', label: 'Grade 2' },
    { value: '3', label: 'Grade 3' },
    { value: '4', label: 'Grade 4' },
    { value: '5', label: 'Grade 5' },
    { value: '6', label: 'Grade 6' },
    { value: '7', label: 'Grade 7' },
    { value: '8', label: 'Grade 8' },
    { value: '9', label: 'Grade 9' },
    { value: '10', label: 'Grade 10' },
    { value: '11', label: 'Grade 11' },
    { value: '12', label: 'Grade 12' }
  ];

  const alignmentData = [
    {
      id: 1,
      standard: "CCSS.ELA-LITERACY.RL.6.1",
      description: "Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.",
      resources: 12,
      coverage: 85,
      status: "well-covered"
    },
    {
      id: 2,
      standard: "CCSS.ELA-LITERACY.RL.6.2",
      description: "Determine a theme or central idea of a text and how it is conveyed through particular details.",
      resources: 8,
      coverage: 65,
      status: "needs-attention"
    },
    {
      id: 3,
      standard: "CCSS.ELA-LITERACY.RL.6.3",
      description: "Describe how a particular story\'s or drama\'s plot unfolds in a series of episodes.",
      resources: 15,
      coverage: 92,
      status: "excellent"
    },
    {
      id: 4,
      standard: "CCSS.ELA-LITERACY.RL.6.4",
      description: "Determine the meaning of words and phrases as they are used in a text.",
      resources: 3,
      coverage: 35,
      status: "gap"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-success bg-success/10';
      case 'well-covered': return 'text-primary bg-primary/10';
      case 'needs-attention': return 'text-warning bg-warning/10';
      case 'gap': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent': return 'CheckCircle2';
      case 'well-covered': return 'CheckCircle';
      case 'needs-attention': return 'AlertCircle';
      case 'gap': return 'XCircle';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-educational">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-display font-semibold text-foreground mb-1">
            Curriculum Alignment
          </h2>
          <p className="text-sm text-text-secondary">
            Track your resource coverage against educational standards
          </p>
        </div>
        <Button variant="outline" size="sm" iconName="Download">
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Select
          label="Educational Standard"
          options={standardOptions}
          value={selectedStandard}
          onChange={setSelectedStandard}
        />
        <Select
          label="Grade Level"
          options={gradeOptions}
          value={selectedGrade}
          onChange={setSelectedGrade}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-success/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-success mb-1">24</div>
          <div className="text-sm text-success">Excellent Coverage</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">18</div>
          <div className="text-sm text-primary">Well Covered</div>
        </div>
        <div className="bg-warning/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-warning mb-1">12</div>
          <div className="text-sm text-warning">Needs Attention</div>
        </div>
        <div className="bg-error/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-error mb-1">6</div>
          <div className="text-sm text-error">Coverage Gaps</div>
        </div>
      </div>

      <div className="space-y-4">
        {alignmentData.map((item) => (
          <div key={item.id} className="border border-border rounded-lg p-4 hover:border-primary/30 transition-educational">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-sm bg-muted px-2 py-1 rounded">
                    {item.standard}
                  </span>
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                    <Icon name={getStatusIcon(item.status)} size={12} />
                    {item.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-text-secondary">
                    {item.resources} resources available
                  </span>
                  <span className="text-text-secondary">
                    {item.coverage}% coverage
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2 ml-4">
                <Button variant="ghost" size="sm" iconName="Eye">
                  View
                </Button>
                <Button variant="ghost" size="sm" iconName="Plus">
                  Add
                </Button>
              </div>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  item.coverage >= 90 ? 'bg-success' :
                  item.coverage >= 70 ? 'bg-primary' :
                  item.coverage >= 50 ? 'bg-warning' : 'bg-error'
                }`}
                style={{ width: `${item.coverage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button variant="outline" iconName="ArrowRight" iconPosition="right">
          View Full Alignment Report
        </Button>
      </div>
    </div>
  );
};

export default CurriculumAlignment;