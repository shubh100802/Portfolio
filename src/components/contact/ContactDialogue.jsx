import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const ContactDialogue = ({
  onSpeakingChange,
  onLineChange
}) => {
  const currentLines = PROFILE_DATA.contactDialogueLines || [
    "Thanks for making it this far.",
    "If you're building something interesting, I'd love to hear about it.",
    "Let's build what's next."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const timerRef = useRef(null);

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
  }, [currentLineIndex, currentLines, onSpeakingChange, onLineChange]);

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
      className="contact-dialogue-wrapper ui-interactive"
      onClick={handleSkip}
      title="Click to advance monologue"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleSkip()}
    >
      <div className="dialogue-card contact-dialogue-card" role="region" aria-label="Contact character transmission">
        <div className="avatar-pulse-container">
          <div className="avatar-pulse-icon contact-pulse-icon">
            <MessageSquare size={16} />
          </div>
          {isTyping && <div className="speaking-waves contact-speaking-waves" />}
        </div>

        <div className="dialogue-content">
          <div className="dialogue-meta">
            <span className="dialogue-status contact-dialogue-status">
              <span className="status-dot contact-status-dot" style={{ width: 5, height: 5 }}></span>
              {isTyping ? 'SHUBHAM IS PRESENTING...' : 'FINAL TRANSMISSION'}
            </span>
            <span>{currentLineIndex + 1} / {currentLines.length}</span>
          </div>

          <p className="dialogue-text">
            {displayedText}
            <span className="typing-cursor contact-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};
