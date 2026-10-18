import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export const Loader = ({ onLoaded }) => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress interpolation
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const target = Math.max(progress, 100);
        const next = prev + (target - prev) * 0.2 + 2;
        if (next >= 99.5) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onLoaded) onLoaded();
          }, 350);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [progress, onLoaded]);

  return (
    <div className={`loader-overlay ${isFinished ? 'hidden' : ''}`} role="status" aria-live="polite">
      <div className="loader-badge">
        <span style={{ color: 'var(--accent-cyan)' }}>SR</span>
        <span>•</span>
        <span>ENGINEER</span>
      </div>

      <div className="loader-bar-bg">
        <div 
          className="loader-bar-fill" 
          style={{ width: `${Math.round(displayProgress)}%` }}
        />
      </div>

      <div className="loader-status">
        INITIALIZING 3D ENVIRONMENT {Math.round(displayProgress)}%
      </div>
    </div>
  );
};
