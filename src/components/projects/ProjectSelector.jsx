import React from 'react';
import { Layers } from 'lucide-react';

export const ProjectSelector = ({ projects, activeProjectId, onSelectProject }) => {
  return (
    <div className="project-selector-container ui-interactive" role="tablist" aria-label="Project Selector">
      <div className="project-selector-header">
        <div className="selector-eyebrow">
          <Layers size={13} style={{ color: 'var(--accent-cyan)' }} />
          <span>PRODUCTION SYSTEMS</span>
        </div>
        <span className="selector-sublabel">Select system architecture</span>
      </div>

      <div className="project-tabs-row">
        {projects.map((project) => {
          const isSelected = activeProjectId === project.id;
          return (
            <button
              key={project.id}
              role="tab"
              aria-selected={isSelected}
              className={`project-tab-btn ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectProject(project.id)}
            >
              <div className="project-tab-index-box">
                <span className="project-tab-num">{project.index}</span>
              </div>
              <div className="project-tab-meta">
                <span className="project-tab-title">{project.name}</span>
                <span className="project-tab-tag">{project.tag}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
