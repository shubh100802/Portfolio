import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { UserCheck } from 'lucide-react';

export const AboutDialogue = ({ onSpeakingChange, onLineChange }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const lines = PROFILE_DATA.aboutDialogueLines;
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
        }, 3200);

        return () => clearTimeout(holdTimeout);
      }
    }, 40);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentLineIndex, currentFullText, onSpeakingChange, lines.length]);

  const handleSkip = () => {
    setCurrentLineIndex((prev) => (prev + 1) % lines.length);
  };

  return (
    <div className="about-dialogue-wrapper ui-interactive" onClick={handleSkip} title="Click to advance monologue">
      <div className="dialogue-card about-dialogue-card" role="region" aria-label="About chapter character monologue">
        <div className="avatar-pulse-container">
          <div className="avatar-pulse-icon about-pulse-icon">
            <UserCheck size={16} />
          </div>
          {isTyping && <div className="speaking-waves about-speaking-waves" />}
        </div>

        <div className="dialogue-content">
          <div className="dialogue-meta">
            <span className="dialogue-status about-dialogue-status">
              <span className="status-dot about-status-dot" style={{ width: 5, height: 5 }}></span>
              {isTyping ? 'SHUBHAM IS PRESENTING...' : 'WHO I AM TRANSMISSION'}
            </span>
            <span>{currentLineIndex + 1} / {lines.length}</span>
          </div>

          <p className="dialogue-text">
            {displayedText}
            <span className="typing-cursor about-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};
