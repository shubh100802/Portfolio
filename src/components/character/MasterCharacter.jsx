import React, { useState, useEffect, useRef } from 'react';
import { CHARACTER_CONFIG } from '../../data/characterAnimations';
import { CharacterPlaceholder } from './CharacterPlaceholder';

export const MasterCharacter = ({
  animation = 'hero_idle',
  className = '',
  scale = 1.0,
  interactive = true
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const config = CHARACTER_CONFIG.animations[animation] || CHARACTER_CONFIG.animations.hero_idle;
  const hasVideo = Boolean(config.webm || config.mp4) && !videoError;
  const hasImage = Boolean(config.image) && !imageError && !hasVideo;

  // 1. Ensure video auto-plays when ready and Intersection Observer for Performance
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (video && hasVideo) {
      video.play().catch(() => {});
    }

    if (!el || !hasVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, hasVideo]);

  // 2. Subtle Restrained Pointer Parallax
  useEffect(() => {
    if (!interactive) return;

    const handlePointerMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 14;
      const ny = (e.clientY / innerHeight - 0.5) * 10;
      setParallaxOffset({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, [interactive]);

  const isMediaActive = (hasImage && isImageLoaded) || (hasVideo && isVideoLoaded);

  return (
    <div
      ref={containerRef}
      className={`master-character-stage ${className}`}
      style={{
        '--stage-scale': scale,
        transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`
      }}
      aria-label={config.alt}
    >
      {/* Subtle Environmental Ground Shadow & Ambient Aura (Active when character media is loaded) */}
      {isMediaActive && (
        <>
          <div
            className="character-ground-shadow"
            style={{ '--glow-color': config.glowColor }}
          />
          <div
            className="character-backlight-aura"
            style={{ '--glow-color': config.glowColor }}
          />
        </>
      )}

      {/* 1. Transparent Video Animation Layer (When video asset is supplied) */}
      {hasVideo && (
        <div className={`character-video-wrapper ${isVideoLoaded ? 'loaded' : ''}`}>
          <video
            ref={videoRef}
            key={config.mp4 || config.webm}
            src={config.mp4 || config.webm}
            className="master-character-video"
            playsInline
            autoPlay
            loop
            muted
            preload="auto"
            poster={config.poster}
            onLoadedData={() => setIsVideoLoaded(true)}
            onCanPlay={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            {config.webm && <source src={config.webm} type='video/webm; codecs="vp9, vorbis"' />}
            {config.webm && <source src={config.webm} type="video/webm" />}
            {config.mp4 && <source src={config.mp4} type="video/mp4" />}
          </video>
        </div>
      )}

      {/* 2. Transparent Static Character Image (Fallback if only image supplied) */}
      {hasImage && (
        <div className={`character-image-wrapper ${isImageLoaded ? 'loaded' : ''}`}>
          <img
            src={config.image}
            alt={config.alt}
            className="master-character-img"
            loading="eager"
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      )}

      {/* 3. Clean Neutral Stage Placeholder (When section awaits asset drop) */}
      {!hasImage && !hasVideo && (
        <CharacterPlaceholder animationConfig={config} />
      )}
    </div>
  );
};

