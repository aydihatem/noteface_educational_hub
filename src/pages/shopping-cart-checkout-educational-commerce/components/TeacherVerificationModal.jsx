import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const TeacherVerificationModal = ({ isOpen, onClose, onVerify }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolDistrict: '',
    teacherEmail: '',
    employeeId: '',
    gradeLevel: '',
    subject: '',
    verificationMethod: 'email'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const verificationMethods = [
    { value: 'email', label: 'School Email Verification' },
    { value: 'id', label: 'Employee ID Verification' },
    { value: 'document', label: 'Document Upload' }
  ];

  const gradeLevels = [
    { value: 'pre-k', label: 'Pre-K' },
    { value: 'elementary', label: 'Elementary (K-5)' },
    { value: 'middle', label: 'Middle School (6-8)' },
    { value: 'high', label: 'High School (9-12)' },
    { value: 'college', label: 'College/University' },
    { value: 'adult', label: 'Adult Education' }
  ];

  const subjects = [
    { value: 'islamic-studies', label: 'Islamic Studies' },
    { value: 'literature', label: 'Literature' },
    { value: 'science', label: 'Science' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'history', label: 'History' },
    { value: 'language-arts', label: 'Language Arts' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }
    
    if (!formData.teacherEmail.trim()) {
      newErrors.teacherEmail = 'School email is required';
    } else if (!formData.teacherEmail.includes('@') || 
               (!formData.teacherEmail.includes('.edu') && 
                !formData.teacherEmail.includes('.k12'))) {
      newErrors.teacherEmail = 'Please use your official school email address';
    }
    
    if (formData.verificationMethod === 'id' && !formData.employeeId.trim()) {
      newErrors.employeeId = 'Employee ID is required';
    }
    
    if (!formData.gradeLevel) {
      newErrors.gradeLevel = 'Grade level is required';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Subject area is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate verification process
    setTimeout(() => {
      onVerify(formData);
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-educational-strong max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
              <Icon name="GraduationCap" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Teacher Verification
              </h2>
              <p className="text-sm text-text-secondary">
                Verify your educator status for 15% discount
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            className="text-text-secondary hover:text-foreground"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Verification Method */}
          <Select
            label="Verification Method"
            options={verificationMethods}
            value={formData.verificationMethod}
            onChange={(value) => handleInputChange('verificationMethod', value)}
            description="Choose how you'd like to verify your educator status"
          />

          {/* School Information */}
          <div className="space-y-4">
            <Input
              label="School/Institution Name"
              type="text"
              value={formData.schoolName}
              onChange={(e) => handleInputChange('schoolName', e.target.value)}
              error={errors.schoolName}
              placeholder="Enter your school name"
              required
            />

            <Input
              label="School District"
              type="text"
              value={formData.schoolDistrict}
              onChange={(e) => handleInputChange('schoolDistrict', e.target.value)}
              placeholder="Enter your school district (optional)"
            />

            <Input
              label="School Email Address"
              type="email"
              value={formData.teacherEmail}
              onChange={(e) => handleInputChange('teacherEmail', e.target.value)}
              error={errors.teacherEmail}
              placeholder="teacher@school.edu"
              description="Must be your official school email address"
              required
            />

            {formData.verificationMethod === 'id' && (
              <Input
                label="Employee ID"
                type="text"
                value={formData.employeeId}
                onChange={(e) => handleInputChange('employeeId', e.target.value)}
                error={errors.employeeId}
                placeholder="Enter your employee ID"
                required
              />
            )}
          </div>

          {/* Teaching Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Grade Level"
              options={gradeLevels}
              value={formData.gradeLevel}
              onChange={(value) => handleInputChange('gradeLevel', value)}
              error={errors.gradeLevel}
              required
            />

            <Select
              label="Primary Subject"
              options={subjects}
              value={formData.subject}
              onChange={(value) => handleInputChange('subject', value)}
              error={errors.subject}
              required
            />
          </div>

          {/* Benefits Information */}
          <div className="bg-primary/5 rounded-lg p-4 mt-6">
            <h3 className="font-medium text-foreground mb-2 flex items-center">
              <Icon name="Gift" size={16} className="text-primary mr-2" />
              Teacher Benefits
            </h3>
            <ul className="text-sm text-text-secondary space-y-1">
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-success mr-2" />
                15% discount on all educational materials
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-success mr-2" />
                Free shipping on orders over $25
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-success mr-2" />
                Access to exclusive teacher resources
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-success mr-2" />
                Early access to new curriculum materials
              </li>
            </ul>
          </div>

          {/* Mock Credentials Info */}
          <div className="bg-warning/10 rounded-lg p-4 mt-4">
            <h4 className="font-medium text-warning-foreground mb-2 flex items-center">
              <Icon name="Info" size={16} className="text-warning mr-2" />
              Demo Credentials
            </h4>
            <p className="text-sm text-warning-foreground">
              For demonstration purposes, use:
              <br />
              <strong>Email:</strong> teacher@demo.edu
              <br />
              <strong>Employee ID:</strong> DEMO123
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName="Shield"
              iconPosition="left"
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Verifying...' : 'Verify Status'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherVerificationModal;