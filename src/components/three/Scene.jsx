import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Lighting } from './Lighting';
import { CameraController } from './CameraController';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export const Scene = ({
  scrollProgress = 0
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="webgl-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0.05, 0.05, 4.0], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
      >
        <CameraController scrollProgress={scrollProgress} />
        <Lighting />
      </Canvas>
    </div>
  );
};

