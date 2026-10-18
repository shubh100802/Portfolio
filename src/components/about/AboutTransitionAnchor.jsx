import React from 'react';
import { ArrowDown, Briefcase } from 'lucide-react';

export const AboutTransitionAnchor = () => {
  return (
    <div className="about-transition-footer" aria-label="Next Chapter Indicator">
      <div className="transition-pill">
        <Briefcase size={14} style={{ color: 'var(--accent-violet)' }} />
        <span>NEXT CHAPTER: EXPERIENCE & PROJECTS</span>
        <span className="phase-pill-tag">PHASE 3 SOON</span>
      </div>
      <div className="scroll-cue">
        <span className="scroll-cue-line" />
      </div>
    </div>
  );
};
