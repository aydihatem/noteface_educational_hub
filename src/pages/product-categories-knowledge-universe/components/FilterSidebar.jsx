import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle,
  selectedCategory 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const ageGroups = [
    { value: 'preschool', label: 'Preschool (3-5 years)' },
    { value: 'elementary', label: 'Elementary (6-10 years)' },
    { value: 'middle', label: 'Middle School (11-13 years)' },
    { value: 'high', label: 'High School (14-18 years)' },
    { value: 'adult', label: 'Adult Learning' }
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'urdu', label: 'Urdu' },
    { value: 'french', label: 'French' }
  ];

  const curriculumStandards = [
    { value: 'common-core', label: 'Common Core' },
    { value: 'islamic-curriculum', label: 'Islamic Curriculum' },
    { value: 'montessori', label: 'Montessori' },
    { value: 'waldorf', label: 'Waldorf' }
  ];

  const priceRanges = [
    { value: '0-25', label: 'Under $25' },
    { value: '25-50', label: '$25 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100+', label: 'Over $100' }
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange('search', e.target.value);
  };

  const handleCheckboxChange = (filterType, value, checked) => {
    const currentValues = filters[filterType] || [];
    const newValues = checked 
      ? [...currentValues, value]
      : currentValues.filter(v => v !== value);
    onFilterChange(filterType, newValues);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          iconName="Filter"
          iconPosition="left"
          onClick={onToggle}
          className="w-full"
        >
          Filters & Search
        </Button>
      </div>

      {/* Filter Sidebar */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} lg:sticky lg:top-24`}>
        <div className="card-educational p-6 space-y-6">
          {/* Search */}
          <div>
            <Input
              type="search"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>

          {/* Age Group */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Icon name="Users" size={18} className="mr-2 text-primary" />
              Age Group
            </h3>
            <div className="space-y-2">
              {ageGroups.map((age) => (
                <Checkbox
                  key={age.value}
                  label={age.label}
                  checked={filters.ageGroups?.includes(age.value) || false}
                  onChange={(e) => handleCheckboxChange('ageGroups', age.value, e.target.checked)}
                />
              ))}
            </div>
          </div>

          {/* Language */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Icon name="Globe" size={18} className="mr-2 text-primary" />
              Language
            </h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <Checkbox
                  key={lang.value}
                  label={lang.label}
                  checked={filters.languages?.includes(lang.value) || false}
                  onChange={(e) => handleCheckboxChange('languages', lang.value, e.target.checked)}
                />
              ))}
            </div>
          </div>

          {/* Curriculum Standards */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Icon name="BookOpen" size={18} className="mr-2 text-primary" />
              Curriculum
            </h3>
            <div className="space-y-2">
              {curriculumStandards.map((standard) => (
                <Checkbox
                  key={standard.value}
                  label={standard.label}
                  checked={filters.curriculum?.includes(standard.value) || false}
                  onChange={(e) => handleCheckboxChange('curriculum', standard.value, e.target.checked)}
                />
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Icon name="DollarSign" size={18} className="mr-2 text-primary" />
              Price Range
            </h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <Checkbox
                  key={range.value}
                  label={range.label}
                  checked={filters.priceRange?.includes(range.value) || false}
                  onChange={(e) => handleCheckboxChange('priceRange', range.value, e.target.checked)}
                />
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Icon name="Star" size={18} className="mr-2 text-primary" />
              Minimum Rating
            </h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <Checkbox
                  key={rating}
                  label={
                    <div className="flex items-center">
                      <span className="mr-2">{rating}+</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < rating ? 'text-secondary fill-current' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                  }
                  checked={filters.rating === rating}
                  onChange={(e) => onFilterChange('rating', e.target.checked ? rating : null)}
                />
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <Button
            variant="outline"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </div>

        {/* Community Recommendations */}
        <div className="card-educational p-6 mt-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Heart" size={18} className="mr-2 text-accent" />
            Community Favorites
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-educational">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Quran Stories for Kids</p>
                <p className="text-xs text-text-secondary">95% teacher approval</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-educational">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Microscope" size={20} className="text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Science Experiments</p>
                <p className="text-xs text-text-secondary">Popular this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;