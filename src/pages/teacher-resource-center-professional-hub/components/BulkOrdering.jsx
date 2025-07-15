import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BulkOrdering = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderType, setOrderType] = useState('institutional');

  const orderTypeOptions = [
    { value: 'institutional', label: 'Institutional Order' },
    { value: 'classroom', label: 'Classroom Set' },
    { value: 'department', label: 'Department Order' },
    { value: 'district', label: 'District Purchase' }
  ];

  const bulkItems = [
    {
      id: 1,
      title: "Islamic Studies Curriculum Set",
      author: "Dr. Amina Hassan",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      unitPrice: 29.99,
      minQuantity: 10,
      bulkDiscount: 15,
      category: "Islamic Studies",
      grade: "6-8",
      description: "Complete curriculum package with teacher guides, student workbooks, and assessment materials."
    },
    {
      id: 2,
      title: "Science Experiment Kit Bundle",
      author: "Prof. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop",
      unitPrice: 45.99,
      minQuantity: 5,
      bulkDiscount: 20,
      category: "Science",
      grade: "4-6",
      description: "Hands-on science experiments with all necessary materials and detailed instruction guides."
    },
    {
      id: 3,
      title: "Literature Circle Collection",
      author: "Ms. Rachel Martinez",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      unitPrice: 34.99,
      minQuantity: 8,
      bulkDiscount: 12,
      category: "Literature",
      grade: "7-9",
      description: "Diverse collection of novels with discussion guides and cultural context materials."
    }
  ];

  const approvalWorkflow = [
    {
      step: 1,
      title: "Request Submission",
      description: "Submit your bulk order request with required documentation",
      status: "completed",
      icon: "FileText"
    },
    {
      step: 2,
      title: "Department Review",
      description: "Department head reviews and approves the educational content",
      status: "current",
      icon: "Eye"
    },
    {
      step: 3,
      title: "Budget Approval",
      description: "Finance team verifies budget allocation and approves purchase",
      status: "pending",
      icon: "DollarSign"
    },
    {
      step: 4,
      title: "Final Processing",
      description: "Order is processed and scheduled for delivery",
      status: "pending",
      icon: "Truck"
    }
  ];

  const budgetTracking = {
    totalBudget: 5000,
    usedBudget: 2350,
    pendingOrders: 1200,
    availableBudget: 1450
  };

  const toggleItemSelection = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const calculateBulkPrice = (item, quantity) => {
    const discount = quantity >= item.minQuantity ? item.bulkDiscount : 0;
    const discountedPrice = item.unitPrice * (1 - discount / 100);
    return discountedPrice * quantity;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-1">
              Bulk Ordering & Institutional Discounts
            </h2>
            <p className="text-sm text-text-secondary">
              Special pricing and approval workflows for educational institutions
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" iconName="Download">
              Export Quote
            </Button>
            <Button variant="default" size="sm" iconName="ShoppingCart">
              Create Order
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Order Type"
            options={orderTypeOptions}
            value={orderType}
            onChange={setOrderType}
          />
          <Input
            label="Institution Name"
            type="text"
            placeholder="Enter your institution name"
          />
        </div>
      </div>

      {/* Budget Tracking */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <h3 className="text-lg font-display font-semibold text-foreground mb-4">
          Budget Tracking
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              ${budgetTracking.totalBudget.toLocaleString()}
            </div>
            <div className="text-sm text-primary">Total Budget</div>
          </div>
          <div className="bg-success/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-success mb-1">
              ${budgetTracking.usedBudget.toLocaleString()}
            </div>
            <div className="text-sm text-success">Used Budget</div>
          </div>
          <div className="bg-warning/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-warning mb-1">
              ${budgetTracking.pendingOrders.toLocaleString()}
            </div>
            <div className="text-sm text-warning">Pending Orders</div>
          </div>
          <div className="bg-accent/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">
              ${budgetTracking.availableBudget.toLocaleString()}
            </div>
            <div className="text-sm text-accent">Available</div>
          </div>
        </div>

        <div className="w-full bg-muted rounded-full h-3">
          <div 
            className="bg-primary h-3 rounded-full transition-all duration-300"
            style={{ width: `${(budgetTracking.usedBudget / budgetTracking.totalBudget) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-text-secondary mt-2">
          <span>Budget Utilization</span>
          <span>{Math.round((budgetTracking.usedBudget / budgetTracking.totalBudget) * 100)}%</span>
        </div>
      </div>

      {/* Bulk Items */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground">
            Available for Bulk Purchase
          </h3>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Icon name="Info" size={16} />
            <span>Minimum quantities apply for bulk discounts</span>
          </div>
        </div>

        <div className="space-y-4">
          {bulkItems.map((item) => (
            <div key={item.id} className="border border-border rounded-lg p-4 hover:border-primary/30 transition-educational">
              <div className="flex items-start gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItemSelection(item.id)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                </div>
                
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-secondary mb-1">
                        by {item.author}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                          Grade {item.grade}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        ${item.unitPrice}
                      </div>
                      <div className="text-sm text-text-secondary">per unit</div>
                      <div className="text-xs text-success">
                        {item.bulkDiscount}% bulk discount
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-text-secondary">Quantity:</label>
                        <Input
                          type="number"
                          min={item.minQuantity}
                          defaultValue={item.minQuantity}
                          className="w-20"
                        />
                      </div>
                      <div className="text-sm text-text-secondary">
                        Min: {item.minQuantity} units
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-text-secondary">Bulk Price:</div>
                      <div className="font-semibold text-success">
                        ${calculateBulkPrice(item, item.minQuantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Approval Workflow */}
      <div className="bg-card rounded-xl p-6 shadow-educational">
        <h3 className="text-lg font-display font-semibold text-foreground mb-6">
          Approval Workflow
        </h3>
        
        <div className="space-y-4">
          {approvalWorkflow.map((step, index) => (
            <div key={step.step} className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.status === 'completed' ? 'bg-success text-white' :
                step.status === 'current'? 'bg-primary text-white' : 'bg-muted text-text-secondary'
              }`}>
                {step.status === 'completed' ? (
                  <Icon name="Check" size={20} />
                ) : (
                  <Icon name={step.icon} size={20} />
                )}
              </div>
              
              <div className="flex-1">
                <h4 className={`font-semibold mb-1 ${
                  step.status === 'current' ? 'text-primary' : 'text-foreground'
                }`}>
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
              
              <div className={`text-xs px-2 py-1 rounded-full ${
                step.status === 'completed' ? 'bg-success/20 text-success' :
                step.status === 'current'? 'bg-primary/20 text-primary' : 'bg-muted text-text-secondary'
              }`}>
                {step.status === 'completed' ? 'Completed' :
                 step.status === 'current' ? 'In Progress' : 'Pending'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulkOrdering;