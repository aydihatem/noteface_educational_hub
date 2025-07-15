import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeHeader = ({ teacherProfile }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl p-6 lg:p-8 shadow-educational-strong">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={teacherProfile.avatar}
              alt={teacherProfile.name}
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white/20 object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
              <Icon name="Check" size={12} color="white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-display font-bold mb-1">
              Welcome back, {teacherProfile.name}
            </h1>
            <p className="text-white/80 text-sm lg:text-base">
              {teacherProfile.school} • {teacherProfile.subject} • Grade {teacherProfile.grade}
            </p>
            <div className="flex items-center gap-4 mt-2 text-sm text-white/70">
              <span className="flex items-center gap-1">
                <Icon name="Calendar" size={14} />
                Member since {teacherProfile.memberSince}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Award" size={14} />
                {teacherProfile.resourcesShared} resources shared
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[120px]">
            <div className="text-2xl font-bold">{teacherProfile.studentsReached}</div>
            <div className="text-xs text-white/70">Students Reached</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[120px]">
            <div className="text-2xl font-bold">{teacherProfile.lessonPlans}</div>
            <div className="text-xs text-white/70">Lesson Plans</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[120px]">
            <div className="text-2xl font-bold">{teacherProfile.communityRank}</div>
            <div className="text-xs text-white/70">Community Rank</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;