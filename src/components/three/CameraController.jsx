import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraController = ({ scrollProgress = 0 }) => {
  const { camera, pointer, size } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 4.0));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));
  const isMobile = size.width < 768;

  useFrame((state) => {
    const parallaxX = pointer.x * (isMobile ? 0.06 : 0.25);
    const parallaxY = pointer.y * (isMobile ? 0.04 : 0.18);

    const time = state.clock.getElapsedTime();
    const autoFloatX = Math.sin(time * 0.4) * 0.03;
    const autoFloatY = Math.cos(time * 0.5) * 0.025;

    const p = Math.min(Math.max(scrollProgress, 0), 1);

    // Camera trajectory:
    // Chapter 01 (Hero): centered on developer console [0.05, 0.05, 4.0]
    // Chapter 02 (About): split-screen wide framing [0.0, -5.3, 4.4]
    const baseX = THREE.MathUtils.lerp(isMobile ? 0 : 0.05, isMobile ? 0 : 0.0, p);
    const baseY = THREE.MathUtils.lerp(isMobile ? 0.15 : 0.05, -5.3, p);
    const baseZ = THREE.MathUtils.lerp(isMobile ? 5.0 : 4.0, isMobile ? 5.2 : 4.4, p);

    targetPos.current.x = baseX + parallaxX + autoFloatX;
    targetPos.current.y = baseY + parallaxY + autoFloatY;
    targetPos.current.z = baseZ;

    camera.position.lerp(targetPos.current, 0.08);

    // LookAt focus:
    // Chapter 01: [0.05, 0.1, 0]
    // Chapter 02: [-0.15, -5.2, 0] (centered between left character and right content)
    const lookX = THREE.MathUtils.lerp(isMobile ? 0 : 0.05, isMobile ? 0 : -0.15, p);
    const lookY = THREE.MathUtils.lerp(0.1, -5.2, p);
    const lookZ = 0;

    targetLook.current.set(lookX, lookY, lookZ);
    camera.lookAt(targetLook.current);
  });

  return null;
};
