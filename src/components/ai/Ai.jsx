import React, { useState } from 'react';
import { AiDialogue } from './AiDialogue';
import { AiPipelineVisual } from './AiPipelineVisual';
import { AiAchievementsList } from './AiAchievementsList';
import { MasterCharacter } from '../character/MasterCharacter';

export const Ai = ({
  onSpeakingChange,
  onLineChange
}) => {
  const [activeTab, setActiveTab] = useState('capabilities');

  return (
    <section className="ai-section-container" id="ai" aria-label="AI and Achievements Chapter">
      <div className="ai-ui-wrapper">
        {/* Chapter Header */}
        <header className="ai-header ui-interactive">
          <div className="chapter-indicator">
            <span className="chapter-title">AI + ACHIEVEMENTS</span>
          </div>

          <h2 className="ai-headline">
            BUILDING WITH <span className="ai-headline-gradient">INTELLIGENCE</span>
          </h2>

          <p className="ai-sub-headline">
            Exploring AI, LLMs, automation and new ways of solving engineering problems.
          </p>
        </header>

        {/* 2-Column Split Content Grid */}
        <div className="ai-content-grid">
          {/* Left Column: Master Character Presentation Stage & Abstract Pipeline Visual */}
          <div className="ai-character-stage-container ui-interactive">
            <MasterCharacter
              animation="ai_interact"
              className="ai-character-placement"
            />
            <AiPipelineVisual />
          </div>

          {/* Right Column: Narrative HUD & Interactive Workstation */}
          <div className="ai-narrative-column ui-interactive">
            {/* Monologue HUD */}
            <AiDialogue
              activeTab={activeTab}
              onSpeakingChange={onSpeakingChange}
              onLineChange={onLineChange}
            />

            {/* Interactive Capabilities, Achievements & Certifications */}
            <AiAchievementsList
              activeTab={activeTab}
              onSelectTab={setActiveTab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
