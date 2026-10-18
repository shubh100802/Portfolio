import React from 'react';
import { CHARACTER_CONFIG } from '../../data/characterAnimations';
import { Video, Layers } from 'lucide-react';

export const CharacterPlaceholder = ({ animationConfig }) => {
  const config = animationConfig || CHARACTER_CONFIG.animations.hero_idle;

  return (
    <div className="character-placeholder-stage" role="region" aria-label={`Character Stage: ${config.title}`}>
      {/* Neutral Minimal Wireframe Stage */}
      <div className="character-stage-wireframe">
        {/* Corner alignment markers */}
        <span className="wireframe-corner top-left">+</span>
        <span className="wireframe-corner top-right">+</span>
        <span className="wireframe-corner bottom-left">+</span>
        <span className="wireframe-corner bottom-right">+</span>

        <div className="wireframe-header">
          <span className="wireframe-badge">
            <Layers size={12} />
            <span>CHARACTER STAGE</span>
          </span>
          <span className="wireframe-section">{config.section} [0{config.index}]</span>
        </div>

        <div className="wireframe-body">
          <div className="wireframe-crosshair">
            <div className="crosshair-h" />
            <div className="crosshair-v" />
          </div>
          <p className="wireframe-status">AWAITING 3D ASSET</p>
          <p className="wireframe-desc">{config.title}</p>
        </div>

        <div className="wireframe-footer">
          <Video size={12} />
          <span className="wireframe-path">public{config.webm}</span>
        </div>
      </div>
    </div>
  );
};

