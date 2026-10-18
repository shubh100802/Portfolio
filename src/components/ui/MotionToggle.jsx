import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const MotionToggle = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleMotion = () => {
    const next = !reducedMotion;
    setReducedMotion(next);
    if (next) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  return (
    <button
      onClick={toggleMotion}
      className={`hud-btn ${reducedMotion ? 'active' : ''}`}
      aria-label={reducedMotion ? 'Enable full 3D motion' : 'Reduce 3D motion'}
      title={reducedMotion ? 'Reduced Motion Active' : 'Full Motion Active'}
    >
      {reducedMotion ? <EyeOff size={14} /> : <Eye size={14} />}
      <span>{reducedMotion ? 'REDUCED MOTION' : 'MOTION ON'}</span>
    </button>
  );
};
