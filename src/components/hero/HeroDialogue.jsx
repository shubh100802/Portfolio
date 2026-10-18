import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Terminal } from 'lucide-react';

export const HeroDialogue = ({ onSpeakingChange, onLineChange }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const lines = PROFILE_DATA.dialogueLines;
  const currentFullText = lines[currentLineIndex];

  // Notify parent of line change
  useEffect(() => {
    if (onLineChange) onLineChange(currentLineIndex);
  }, [currentLineIndex, onLineChange]);

  // Handle character-by-character typing effect
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

        // Pause before moving to next dialogue line
        const holdTimeout = setTimeout(() => {
          setCurrentLineIndex((prev) => (prev + 1) % lines.length);
        }, 2800);

        return () => clearTimeout(holdTimeout);
      }
    }, 45);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentLineIndex, currentFullText, onSpeakingChange, lines.length]);

  const handleSkip = () => {
    setCurrentLineIndex((prev) => (prev + 1) % lines.length);
  };

  return (
    <div className="hero-dialogue-wrapper ui-interactive" onClick={handleSkip} title="Click to advance monologue">
      <div className="dialogue-card" role="region" aria-label="Interactive character monologue">
        <div className="avatar-pulse-container">
          <div className="avatar-pulse-icon">
            <Terminal size={16} />
          </div>
          {isTyping && <div className="speaking-waves" />}
        </div>

        <div className="dialogue-content">
          <div className="dialogue-meta">
            <span className="dialogue-status">
              <span className="status-dot" style={{ width: 5, height: 5 }}></span>
              {isTyping ? 'SHUBHAM IS COMMUNICATING...' : 'LIVE TRANSMISSION'}
            </span>
            <span>{currentLineIndex + 1} / {lines.length}</span>
          </div>

          <p className="dialogue-text">
            {displayedText}
            <span className="typing-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};
