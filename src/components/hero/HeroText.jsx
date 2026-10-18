import React from 'react';
import { HeroDialogue } from './HeroDialogue';
import { PROFILE_DATA } from '../../data/profile';
import { Sparkles, Code2 } from 'lucide-react';

export const HeroText = ({ onSpeakingChange, onLineChange }) => {
  return (
    <div className="hero-content-grid">
      {/* Left Column: Intro & Name & Monologue */}
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-pill">
            <Code2 size={13} className="eyebrow-icon" />
            <span>SOFTWARE ENGINEER</span>
          </span>
          <span className="hero-eyebrow-tag">PORTFOLIO '26</span>
        </div>

        <h1 className="hero-name">
          <span className="hero-name-row">
            <span className="hero-name-first">SHUBHAM</span>
          </span>
          <span className="hero-name-row">
            <span className="hero-name-last">RAJ SHARMA</span>
          </span>
        </h1>

        {/* Character Dialogue Monologue */}
        <HeroDialogue
          onSpeakingChange={onSpeakingChange}
          onLineChange={onLineChange}
        />
      </div>

      {/* Right Column: Role Label, Large Headline & Supporting Focus */}
      <div className="hero-right">
        <div className="role-label-container">
          <Sparkles size={13} style={{ color: 'var(--accent-violet)' }} />
          <span className="role-eyebrow">SOFTWARE DEVELOPMENT</span>
        </div>

        <h2 className="role-headline">
          <span className="role-headline-solid">ENGIN</span>
          <span className="role-headline-outline">EER</span>
        </h2>

        <div className="role-support-badge">
          <span className="support-tag">Backend</span>
          <span className="support-dot">•</span>
          <span className="support-tag">Full Stack</span>
          <span className="support-dot">•</span>
          <span className="support-tag">AI / LLM</span>
        </div>
      </div>
    </div>
  );
};
