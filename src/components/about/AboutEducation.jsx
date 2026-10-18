import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const AboutEducation = () => {
  const edu = PROFILE_DATA.education;

  return (
    <div className="education-card ui-interactive" role="region" aria-label="Academic Background">
      <div className="education-header">
        <div className="education-badge-icon">
          <GraduationCap size={18} />
        </div>
        <div className="education-meta">
          <span className="education-eyebrow">ACADEMIC FOUNDATION</span>
          <h4 className="education-institution">{edu.institution}</h4>
        </div>
      </div>

      <div className="education-details">
        <div className="education-degree-row">
          <span className="education-degree">{edu.degree}</span>
          <span className="education-period">{edu.period}</span>
        </div>

        <div className="education-stats-row">
          <div className="education-stat-pill">
            <Award size={14} className="stat-icon" />
            <span className="stat-label">CGPA:</span>
            <span className="stat-value">{edu.cgpa}</span>
          </div>

          <div className="education-stat-pill">
            <BookOpen size={14} className="stat-icon" />
            <span className="stat-label">Core CS:</span>
            <span className="stat-value">OOP • DSA • DB Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};
