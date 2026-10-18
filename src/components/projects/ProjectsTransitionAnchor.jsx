import React from 'react';
import { ArrowDownRight, Cpu } from 'lucide-react';

export const ProjectsTransitionAnchor = () => {
  return (
    <div className="projects-transition-footer ui-interactive">
      <div className="next-chapter-hint">
        <Cpu size={15} style={{ color: 'var(--accent-cyan)' }} />
        <span>NEXT CHAPTER: SKILLS & DOMAIN EXPERTISE</span>
        <span className="phase-pill">CHAPTER 05</span>
      </div>

      <div className="scroll-hint-link disabled-hint" aria-hidden="true">
        <span>CONTINUE STORY</span>
        <ArrowDownRight size={14} />
      </div>
    </div>
  );
};
