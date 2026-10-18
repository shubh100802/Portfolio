import React from 'react';
import { HeroNavigation } from './HeroNavigation';
import { HeroText } from './HeroText';
import { HeroSocials } from './HeroSocials';
import { HeroResumeCTA } from './HeroResumeCTA';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import { MasterCharacter } from '../character/MasterCharacter';

export const Hero = ({ onSpeakingChange, onLineChange }) => {
  return (
    <section className="hero-section-container" id="hero" aria-label="Hero Section">
      {/* Foreground UI Overlay Layer */}
      <div className="ui-overlay">
        {/* Top Navigation */}
        <HeroNavigation />

        {/* Central Stage: Text Wings + Master Character */}
        <div className="hero-stage-composition">
          <HeroText
            onSpeakingChange={onSpeakingChange}
            onLineChange={onLineChange}
          />
          <MasterCharacter
            animation="hero_idle"
            className="hero-character-placement"
          />
        </div>

        {/* Bottom Actions */}
        <footer className="hero-footer" role="contentinfo">
          <HeroSocials />
          <HeroScrollIndicator />
          <HeroResumeCTA />
        </footer>
      </div>
    </section>
  );
};
