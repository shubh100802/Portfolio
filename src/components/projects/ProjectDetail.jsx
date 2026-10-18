import React from 'react';
import { CheckCircle2, Layers, Cpu, ExternalLink, Github } from 'lucide-react';
import { ProjectVisuals } from './ProjectVisuals';

export const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <article className="project-detail-card ui-interactive" aria-label={`Project details for ${project.name}`}>
      {/* Header & Meta */}
      <div className="project-detail-header">
        <div className="project-index-pill-group">
          <span className="project-index-badge">{project.index}</span>
          <span className="project-category-tag">{project.category}</span>
        </div>

        <div className="project-action-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn project-github-btn"
              aria-label={`View ${project.name} on GitHub (opens in new tab)`}
            >
              <Github size={13} />
              <span>GITHUB</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn project-live-btn"
              aria-label={`Open live system for ${project.name} (opens in new tab)`}
            >
              <span>LIVE DEMO</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Project Title Block */}
      <div className="project-title-block">
        <h3 className="project-main-title">{project.name}</h3>
        <p className="project-short-desc">{project.shortDescription}</p>
      </div>

      {/* Technical Architecture Visualization */}
      <ProjectVisuals project={project} />

      {/* Key Engineering Details */}
      <div className="project-engineering-section">
        <div className="section-sub-eyebrow">
          <Cpu size={13} style={{ color: 'var(--accent-cyan)' }} />
          <span>KEY ENGINEERING OUTCOMES</span>
        </div>
        <ul className="project-highlights-list">
          {project.highlights.map((point, idx) => (
            <li key={idx} className="project-highlight-item">
              <CheckCircle2 size={14} className="project-check-icon" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technology Stack Cluster */}
      <div className="project-tech-cluster">
        <div className="project-tech-header">
          <Layers size={13} />
          <span>TECHNOLOGY STACK:</span>
        </div>
        <div className="project-tech-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
