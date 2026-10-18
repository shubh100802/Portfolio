import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Briefcase, Calendar, ChevronRight, CheckCircle2, Layers } from 'lucide-react';

export const ExperienceList = () => {
  const [activeExpId, setActiveExpId] = useState('graphura');
  const experiences = PROFILE_DATA.experiences || [];

  return (
    <div className="experience-list-container ui-interactive">
      <div className="experience-timeline-track">
        {experiences.map((exp) => {
          const isActive = activeExpId === exp.id;

          return (
            <article
              key={exp.id}
              className={`experience-card ${isActive ? 'active' : ''}`}
              onClick={() => setActiveExpId(exp.id)}
              onMouseEnter={() => setActiveExpId(exp.id)}
              tabIndex={0}
              role="region"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              {/* Header / Meta */}
              <div className="exp-card-header">
                <div className="exp-index-badge">
                  <span className="exp-index-num">{exp.index}</span>
                  <span className="exp-tag-pill">{exp.tag}</span>
                </div>
                
                <div className="exp-date-badge">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Company & Role */}
              <div className="exp-title-block">
                <h3 className="exp-company-name">{exp.company}</h3>
                <div className="exp-role-title">
                  <Briefcase size={14} className="exp-role-icon" />
                  <span>{exp.role}</span>
                </div>
              </div>

              {/* Summary Description (if present) */}
              {exp.description && <p className="exp-description">{exp.description}</p>}

              {/* Bullet Points / Achievements */}
              <ul className="exp-highlights-list">
                {exp.highlights.map((point, idx) => (
                  <li key={idx} className="exp-highlight-item">
                    <CheckCircle2 size={14} className="exp-check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="exp-tech-cluster">
                <div className="exp-tech-label">
                  <Layers size={12} />
                  <span>TECHNOLOGIES:</span>
                </div>
                <div className="exp-tech-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="exp-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
