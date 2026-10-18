import React from 'react';
import { ExperienceDialogue } from './ExperienceDialogue';
import { ExperienceList } from './ExperienceList';
import { MasterCharacter } from '../character/MasterCharacter';

export const Experience = ({
  onSpeakingChange,
  onLineChange
}) => {
  return (
    <section className="experience-section-container" id="experience" aria-label="Experience Chapter">
      <div className="experience-ui-wrapper">
        {/* Chapter Header */}
        <header className="experience-header ui-interactive">
          <div className="chapter-indicator">
            <span className="chapter-title">EXPERIENCE</span>
          </div>

          <h2 className="experience-headline">
            ENGINEERING <span className="experience-headline-gradient">IN PRACTICE</span>
          </h2>
        </header>

        {/* 2-Column Split Content Grid */}
        <div className="experience-content-grid">
          {/* Left Column: Master Character Presentation Stage */}
          <div className="experience-character-stage-container ui-interactive">
            <MasterCharacter
              animation="experience_point"
              className="experience-character-placement"
            />
          </div>

          {/* Right Column: Narrative & Professional Track Record */}
          <div className="experience-narrative-column">
            {/* Monologue HUD */}
            <ExperienceDialogue
              onSpeakingChange={onSpeakingChange}
              onLineChange={onLineChange}
            />

            {/* Experience List & Highlights */}
            <ExperienceList />
          </div>
        </div>
      </div>
    </section>
  );
};
