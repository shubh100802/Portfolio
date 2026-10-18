import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { ProjectsDialogue } from './ProjectsDialogue';
import { ProjectSelector } from './ProjectSelector';
import { ProjectDetail } from './ProjectDetail';
import { MasterCharacter } from '../character/MasterCharacter';

export const Projects = ({
  onSpeakingChange,
  onLineChange
}) => {
  const projects = PROFILE_DATA.projects || [];
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || 'geo-attendance');

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section className="projects-section-container" id="projects" aria-label="Featured Projects Chapter">
      <div className="projects-ui-wrapper">
        {/* Chapter Header */}
        <header className="projects-header ui-interactive">
          <div className="chapter-indicator">
            <span className="chapter-title">PROJECTS</span>
          </div>

          <h2 className="projects-headline">
            BUILT <span className="projects-headline-gradient">IN THE REAL WORLD</span>
          </h2>
        </header>

        {/* 2-Column Split Content Grid */}
        <div className="projects-content-grid">
          {/* Left Column: Master Character Presentation Stage */}
          <div className="projects-character-stage-container ui-interactive">
            <MasterCharacter
              animation="projects_work"
              className="projects-character-placement"
            />
          </div>

          {/* Right Column: Narrative HUD & Project Workstation */}
          <div className="projects-narrative-column ui-interactive">
            {/* Monologue HUD */}
            <ProjectsDialogue
              onSpeakingChange={onSpeakingChange}
              onLineChange={onLineChange}
              activeProject={activeProject}
            />

            {/* Interactive Project Selector */}
            <ProjectSelector
              projects={projects}
              activeProjectId={activeProjectId}
              onSelectProject={setActiveProjectId}
            />

            {/* Selected Project Full Details & Architecture Visuals */}
            <ProjectDetail project={activeProject} />
          </div>
        </div>
      </div>
    </section>
  );
};
