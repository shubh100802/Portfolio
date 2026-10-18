import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroScrollIndicator = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#about"
      onClick={handleScrollDown}
      className="hero-scroll-indicator ui-interactive"
      aria-label="Scroll down to About section"
    >
      <span className="scroll-indicator-text">SCROLL DOWN</span>
      <div className="scroll-indicator-arrow-box">
        <ChevronDown size={18} className="scroll-indicator-arrow" />
      </div>
    </a>
  );
};
