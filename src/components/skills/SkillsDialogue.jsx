import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const SkillsDialogue = ({
  activeCategory = 'all',
  activeNode = null,
  onSpeakingChange,
  onLineChange
}) => {
  const dialogueDict = PROFILE_DATA.skillsDialogueLines || {};
  const currentLines = dialogueDict[activeCategory] || dialogueDict.default || [
    "I don't collect technologies just to list them. I use them to solve different engineering problems.",
    "Explore the interactive tech universe to inspect my core backend stack, databases, AI pipelines, and cloud tooling."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const timerRef = useRef(null);

  // Reset dialogue line on category or node change
  useEffect(() => {
    setCurrentLineIndex(0);
    setDisplayedText('');
    setIsTyping(true);
  }, [activeCategory]);

  // Typewriter effect
  useEffect(() => {
    const fullText = currentLines[currentLineIndex] || currentLines[0];
    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    if (onSpeakingChange) onSpeakingChange(true);
    if (onLineChange) onLineChange(fullText);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(timerRef.current);
        setIsTyping(false);
        if (onSpeakingChange) onSpeakingChange(false);
      }
    }, 20);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentLineIndex, activeCategory, currentLines, onSpeakingChange, onLineChange]);

  const handleSkip = () => {
    const fullText = currentLines[currentLineIndex] || currentLines[0];
    if (isTyping) {
      if (timerRef.current) clearInterval(timerRef.current);
      setDisplayedText(fullText);
      setIsTyping(false);
      if (onSpeakingChange) onSpeakingChange(false);
    } else {
      if (currentLineIndex < currentLines.length - 1) {
        setCurrentLineIndex((prev) => prev + 1);
      } else {
        setCurrentLineIndex(0);
      }
    }
  };

  return (
    <div
      className="skills-dialogue-wrapper ui-interactive"
      onClick={handleSkip}
      title="Click to advance monologue"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleSkip()}
    >
      <div className="dialogue-card skills-dialogue-card" role="region" aria-label="Skills chapter character monologue">
        <div className="avatar-pulse-container">
          <div className="avatar-pulse-icon skills-pulse-icon">
            <Terminal size={16} />
          </div>
          {isTyping && <div className="speaking-waves skills-speaking-waves" />}
        </div>

        <div className="dialogue-content">
          <div className="dialogue-meta">
            <span className="dialogue-status skills-dialogue-status">
              <span className="status-dot skills-status-dot" style={{ width: 5, height: 5 }}></span>
              {isTyping ? 'SHUBHAM IS PRESENTING...' : 'TECH UNIVERSE TRANSMISSION'}
            </span>
            <span>{currentLineIndex + 1} / {currentLines.length}</span>
          </div>

          <p className="dialogue-text">
            {displayedText}
            <span className="typing-cursor skills-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};
