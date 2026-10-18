import React from 'react';
import { ArrowDownRight, FolderGit2 } from 'lucide-react';

export const ExperienceTransitionAnchor = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="experience-transition-footer ui-interactive">
      <div className="next-chapter-hint">
        <FolderGit2 size={15} style={{ color: 'var(--accent-cyan)' }} />
        <span>NEXT CHAPTER: FEATURED PROJECTS</span>
        <span className="phase-pill">CHAPTER 04</span>
      </div>

      <a
        href="#projects"
        onClick={handleScroll}
        className="scroll-hint-link"
        aria-label="Scroll to Projects section"
      >
        <span>EXPLORE PROJECTS</span>
        <ArrowDownRight size={14} />
      </a>
    </div>
  );
};
