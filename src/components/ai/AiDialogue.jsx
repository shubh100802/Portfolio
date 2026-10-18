import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const AiDialogue = ({
  activeTab = 'capabilities',
  onSpeakingChange,
  onLineChange
}) => {
  const dialogueDict = PROFILE_DATA.aiDialogueLines || {};
  const currentLines = dialogueDict[activeTab] || dialogueDict.default || [
    "I've been exploring AI not just as a tool, but as another layer for building useful software.",
    "Focusing on deterministic prompt engineering, Gemini API integration, and verifiable agent loops."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const timerRef = useRef(null);

  // Reset monologue line on tab change
  useEffect(() => {
    setCurrentLineIndex(0);
    setDisplayedText('');
    setIsTyping(true);
  }, [activeTab]);

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
  }, [currentLineIndex, activeTab, currentLines, onSpeakingChange, onLineChange]);

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
      className="ai-dialogue-wrapper ui-interactive"
      onClick={handleSkip}
      title="Click to advance monologue"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleSkip()}
    >
      <div className="dialogue-card ai-dialogue-card" role="region" aria-label="AI and achievements character monologue">
        <div className="avatar-pulse-container">
          <div className="avatar-pulse-icon ai-pulse-icon">
            <Sparkles size={16} />
          </div>
          {isTyping && <div className="speaking-waves ai-speaking-waves" />}
        </div>

        <div className="dialogue-content">
          <div className="dialogue-meta">
            <span className="dialogue-status ai-dialogue-status">
              <span className="status-dot ai-status-dot" style={{ width: 5, height: 5 }}></span>
              {isTyping ? 'SHUBHAM IS PRESENTING...' : 'AI TRANSMISSION'}
            </span>
            <span>{currentLineIndex + 1} / {currentLines.length}</span>
          </div>

          <p className="dialogue-text">
            {displayedText}
            <span className="typing-cursor ai-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};
