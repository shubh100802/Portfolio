import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const HeroResumeCTA = () => {
  return (
    <div className="ui-interactive">
      <a
        href={PROFILE_DATA.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        aria-label="View Resume PDF (opens in new tab)"
      >
        <FileText size={16} style={{ color: 'var(--accent-cyan)' }} />
        <span>RESUME</span>
        <ArrowUpRight size={18} className="resume-icon" />
      </a>
    </div>
  );
};
