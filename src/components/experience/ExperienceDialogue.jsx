import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Terminal } from 'lucide-react';

export const ExperienceDialogue = ({ onSpeakingChange, onLineChange }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const lines = PROFILE_DATA.experienceDialogueLines || [
    "Welcome to Chapter 03 — Engineering in Practice.",
    "At Graphura, I worked across the MERN stack, building secure authentication flows.",
    "Before that, at CNC Web World, I engineered backend systems for a Geo-Attendance platform tested by 120+ users."
  ];
  const currentFullText = lines[currentLineIndex];

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
          setCurrentLineIndex((prev) => (prev + 1) % lines.length);
        }, 3400);

        return () => clearTimeout(holdTimeout);
      }
    }, 38);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentLineIndex, currentFullText, onSpeakingChange, lines.length]);

  const handleSkip = () => {
    setCurrentLineIndex((prev) => (prev + 1) % lines.length);
  };

  return (
    <div
      className="experience-dialogue-wrapper ui-interactive"
      onClick={handleSkip}
      title="Click to advance transmission"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleSkip()}
    >
      <div className="dialogue-card experience-dialogue-card" role="region" aria-label="Experience chapter character monologue">
        <div className="avatar-pulse-container">
          <div className="avatar-pulse-icon experience-pulse-icon">
            <Terminal size={16} />
          </div>
          {isTyping && <div className="speaking-waves experience-speaking-waves" />}
        </div>

        <div className="dialogue-content">
          <div className="dialogue-meta">
            <span className="dialogue-status experience-dialogue-status">
              <span className="status-dot experience-status-dot" style={{ width: 5, height: 5 }}></span>
              {isTyping ? 'SHUBHAM IS PRESENTING...' : 'EXPERIENCE TRANSMISSION'}
            </span>
            <span>{currentLineIndex + 1} / {lines.length}</span>
          </div>

          <p className="dialogue-text">
            {displayedText}
            <span className="typing-cursor experience-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};
