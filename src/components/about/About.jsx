import React from 'react';
import { AboutDialogue } from './AboutDialogue';
import { AboutEducation } from './AboutEducation';
import { AboutTechGrid } from './AboutTechGrid';
import { MasterCharacter } from '../character/MasterCharacter';

export const About = ({
  onSpeakingChange,
  onLineChange,
  activeTechNodeId,
  onSelectTechNode
}) => {
  return (
    <section className="about-section-container" id="about" aria-label="About Chapter">
      <div className="about-ui-wrapper">
        {/* Chapter Header */}
        <header className="about-header ui-interactive">
          <div className="chapter-indicator">
            <span className="chapter-title">WHO I AM</span>
          </div>

          <h2 className="about-headline">
            ENGINEERING <span className="about-headline-gradient">IDENTITY</span>
          </h2>
        </header>

        {/* 50/50 Split Content Grid */}
        <div className="about-content-grid">
          {/* Left Column: Master Character Presentation Stage */}
          <div className="about-character-stage-container ui-interactive">
            <MasterCharacter
              animation="about_explain"
              className="about-character-placement"
            />
          </div>

          {/* Right Column: Narrative & Technical Architecture */}
          <div className="about-narrative-column">
            {/* Monologue HUD */}
            <AboutDialogue
              onSpeakingChange={onSpeakingChange}
              onLineChange={onLineChange}
            />

            {/* Interactive 3D Synced Tech Architecture */}
            <AboutTechGrid
              activeNodeId={activeTechNodeId}
              onSelectNode={onSelectTechNode}
            />

            {/* Academic Foundation Card */}
            <AboutEducation />
          </div>
        </div>
      </div>
    </section>
  );
};
