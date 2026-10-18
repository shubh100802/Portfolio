import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Terminal } from 'lucide-react';

export const ProjectsDialogue = ({ onSpeakingChange, onLineChange, activeProject }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const defaultLines = PROFILE_DATA.projectsDialogueLines || [
    "These are the systems I've built beyond tutorials — from secure attendance infrastructure to real-world loan workflows.",
    "For Geo-Attendance, I focused on secure APIs, geofencing algorithms, and role-aware access control.",
    "On MyLoanCredit.com, I engineered structured loan processing workflows and administrative approval pipelines.",
    "For Hostel Roommate Sync, I built indexed database systems and RBAC serving over 1,000 students."
  ];

  // If activeProject changes, update transmission line to correspond
  useEffect(() => {
    if (activeProject) {
      const idx = PROFILE_DATA.projects.findIndex(p => p.id === activeProject.id);
      if (idx !== -1) {
        setCurrentLineIndex(idx + 1 < defaultLines.length ? idx + 1 : 0);
      }
    }
  }, [activeProject?.id]);

  const currentFullText = defaultLines[currentLineIndex];

  useEffect(() => {
    if (onLineChange) onLineChange(currentLineIndex);
  }, [currentLineIndex, onLineChange]);

  useEffect(() => {
    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);
    if (onSpeakingChange) onSpeakingChange(true);

    const typingInterval = setInterval(() => {
      charIndex++;
      setDisplayedText(currentFullText.slice(0, charIndex));

      if (charIndex >= currentFullText.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
        if (onSpeakingChange) onSpeakingChange(false);

        const holdTimeout = setTimeout(() => {
          setCurrentLineIndex((prev) => (prev + 1) % defaultLines.length);
        }, 3600);

        return () => clearTimeout(holdTimeout);
      }
    }, 35);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentLineIndex, currentFullText, onSpeakingChange, defaultLines.length]);

  const handleSkip = () => {
    setCurrentLineIndex((prev) => (prev + 1) % defaultLines.length);
  };

  return (
    <div
      className="projects-dialogue-wrapper ui-interactive"
      onClick={handleSkip}
      title="Click to advance transmission"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleSkip()}
    >
      <div className="dialogue-card projects-dialogue-card" role="region" aria-label="Projects chapter character monologue">
        <div className="avatar-pulse-container">
          <div className="avatar-pulse-icon projects-pulse-icon">
            <Terminal size={16} />
          </div>
          {isTyping && <div className="speaking-waves projects-speaking-waves" />}
        </div>

        <div className="dialogue-content">
          <div className="dialogue-meta">
            <span className="dialogue-status projects-dialogue-status">
              <span className="status-dot projects-status-dot" style={{ width: 5, height: 5 }}></span>
              {isTyping ? 'SHUBHAM IS PRESENTING...' : 'PROJECTS TRANSMISSION'}
            </span>
            <span>{currentLineIndex + 1} / {defaultLines.length}</span>
          </div>

          <p className="dialogue-text">
            {displayedText}
            <span className="typing-cursor projects-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};
