import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const CharacterModel = ({ isSpeaking = false, dialogueIndex = 0 }) => {
  const groupRef = useRef();
  const spineRef = useRef();
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const laptopScreenRef = useRef();
  const headsetGlowRef = useRef();
  const deskGlowRef = useRef();

  const { pointer, size } = useThree();
  const isMobile = size.width < 768;

  // Blinking cycle
  const nextBlinkTime = useRef(2.5);
  const isBlinking = useRef(false);
  const blinkProgress = useRef(0);

  // Micro-gesture reaction on dialogue line transition
  const reactionTimer = useRef(0);

  useEffect(() => {
    reactionTimer.current = 1.0;
  }, [dialogueIndex]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 1. Natural Sinusoidal Breathing
    const breathOffset = Math.sin(t * 1.5) * 0.02;
    if (spineRef.current) {
      spineRef.current.position.y = breathOffset;
      spineRef.current.rotation.x = Math.sin(t * 1.5) * 0.012;
    }

    // 2. Smooth Head Tracking with dampening
    if (headRef.current) {
      const maxHeadYaw = 0.38;
      const maxHeadPitch = 0.25;

      let targetYaw = isMobile ? Math.sin(t * 0.7) * 0.08 : pointer.x * maxHeadYaw;
      let targetPitch = isMobile ? Math.cos(t * 0.8) * 0.05 : -pointer.y * maxHeadPitch;

      // Micro gesture nod when reactionTimer is active
      if (reactionTimer.current > 0) {
        reactionTimer.current -= delta * 2.2;
        targetPitch += Math.sin((1 - reactionTimer.current) * Math.PI * 2) * 0.045;
      }

      // Subtle talking micro-gesture if speaking
      if (isSpeaking) {
        targetYaw += Math.sin(t * 7.5) * 0.01;
        targetPitch += Math.cos(t * 6.5) * 0.008;
      }

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetYaw, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetPitch, 0.08);
      headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, -targetYaw * 0.12, 0.08);
    }

    // 3. Organic Blinking Cycle
    if (t > nextBlinkTime.current) {
      isBlinking.current = true;
      blinkProgress.current += delta * 12;
      if (blinkProgress.current >= Math.PI) {
        isBlinking.current = false;
        blinkProgress.current = 0;
        nextBlinkTime.current = t + 3.0 + Math.random() * 3.5;
      }
    }

    const eyeScaleY = isBlinking.current ? Math.max(0.08, 1 - Math.sin(blinkProgress.current)) : 1.0;
    if (leftEyeRef.current && rightEyeRef.current) {
      leftEyeRef.current.scale.y = eyeScaleY;
      rightEyeRef.current.scale.y = eyeScaleY;
    }

    // 4. Laptop & Headset Glow Pulse
    if (laptopScreenRef.current) {
      laptopScreenRef.current.material.emissiveIntensity = 0.85 + Math.sin(t * 3.0) * 0.15;
    }
    if (headsetGlowRef.current) {
      headsetGlowRef.current.material.emissiveIntensity = 0.7 + Math.cos(t * 2.2) * 0.2;
    }
    if (deskGlowRef.current) {
      deskGlowRef.current.material.opacity = 0.4 + Math.sin(t * 1.8) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[isMobile ? 0 : 0.05, -0.92, 0]}
      scale={isMobile ? 0.92 : 1.08}
    >
      {/* ------------------------------------------------------------- */}
      {/* SLEEK FLOATING WORKSTATION DESK & LAPTOP                      */}
      {/* ------------------------------------------------------------- */}
      <group position={[0, -0.05, 0.45]}>
        {/* Floating Pod Table Top */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 0.03, 0.65]} />
          <meshStandardMaterial color="#0b0f19" roughness={0.3} metalness={0.8} />
        </mesh>
        
        {/* Glowing Edge Border on Desk */}
        <mesh ref={deskGlowRef} position={[0, -0.018, 0]}>
          <boxGeometry args={[1.02, 0.008, 0.67]} />
          <meshBasicMaterial color="#00f5d4" transparent opacity={0.4} />
        </mesh>

        {/* Modern Laptop Base */}
        <mesh position={[0, 0.025, 0.02]} castShadow receiveShadow>
          <boxGeometry args={[0.62, 0.015, 0.42]} />
          <meshStandardMaterial color="#1e293b" roughness={0.25} metalness={0.9} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.034, 0.12]}>
          <planeGeometry args={[0.18, 0.1]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} />
        </mesh>

        {/* Keyboard Key Surface */}
        <mesh position={[0, 0.034, -0.04]}>
          <planeGeometry args={[0.54, 0.18]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} />
        </mesh>

        {/* Laptop Display Screen */}
        <group position={[0, 0.04, -0.19]} rotation={[-0.24, 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.62, 0.38, 0.012]} />
            <meshStandardMaterial color="#090d16" roughness={0.2} metalness={0.95} />
          </mesh>
          {/* Glowing Code Screen */}
          <mesh ref={laptopScreenRef} position={[0, 0, 0.008]}>
            <planeGeometry args={[0.58, 0.34]} />
            <meshStandardMaterial
              color="#021a24"
              emissive="#00f5d4"
              emissiveIntensity={0.85}
              roughness={0.1}
            />
          </mesh>
        </group>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* CHARACTER BODY (Torso, Shoulders, Arms, Hands)                 */}
      {/* ------------------------------------------------------------- */}
      <group ref={spineRef}>
        {/* Torso / Developer Jacket */}
        <mesh position={[0, 0.6, -0.05]} castShadow receiveShadow>
          <capsuleGeometry args={[0.26, 0.42, 16, 32]} />
          <meshStandardMaterial
            color="#141a29"
            roughness={0.7}
            metalness={0.15}
          />
        </mesh>

        {/* Jacket Zipper / Tech Seam Line */}
        <mesh position={[0, 0.6, 0.22]}>
          <boxGeometry args={[0.012, 0.4, 0.005]} />
          <meshStandardMaterial color="#00f5d4" emissive="#00f5d4" emissiveIntensity={0.4} />
        </mesh>

        {/* High Collar */}
        <mesh position={[0, 0.88, -0.02]} rotation={[0.2, 0, 0]}>
          <torusGeometry args={[0.15, 0.04, 16, 32]} />
          <meshStandardMaterial color="#1e293b" roughness={0.8} />
        </mesh>

        {/* Left Arm (Reaching cleanly to keyboard) */}
        <group position={[-0.32, 0.74, 0.0]}>
          <mesh rotation={[0.5, -0.2, 0.25]} castShadow>
            <capsuleGeometry args={[0.07, 0.35, 12, 24]} />
            <meshStandardMaterial color="#141a29" roughness={0.7} />
          </mesh>
          {/* Forearm */}
          <mesh position={[0.1, -0.32, 0.2]} rotation={[-0.95, 0.35, -0.3]} castShadow>
            <capsuleGeometry args={[0.06, 0.3, 12, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
          {/* Left Hand resting flat on keyboard */}
          <mesh position={[0.16, -0.45, 0.38]} rotation={[-0.2, 0.2, 0]}>
            <boxGeometry args={[0.08, 0.025, 0.1]} />
            <meshStandardMaterial color="#d4a373" roughness={0.5} />
          </mesh>
        </group>

        {/* Right Arm (Reaching cleanly to keyboard) */}
        <group position={[0.32, 0.74, 0.0]}>
          <mesh rotation={[0.5, 0.2, -0.25]} castShadow>
            <capsuleGeometry args={[0.07, 0.35, 12, 24]} />
            <meshStandardMaterial color="#141a29" roughness={0.7} />
          </mesh>
          {/* Forearm */}
          <mesh position={[-0.1, -0.32, 0.2]} rotation={[-0.95, -0.35, 0.3]} castShadow>
            <capsuleGeometry args={[0.06, 0.3, 12, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
          {/* Right Hand resting flat on keyboard */}
          <mesh position={[-0.16, -0.45, 0.38]} rotation={[-0.2, -0.2, 0]}>
            <boxGeometry args={[0.08, 0.025, 0.1]} />
            <meshStandardMaterial color="#d4a373" roughness={0.5} />
          </mesh>
        </group>

        {/* ----------------------------------------------------------- */}
        {/* CHARACTER HEAD (Neck, Face, Hair, Eyes, Glasses, Headset)    */}
        {/* ----------------------------------------------------------- */}
        <group ref={headRef} position={[0, 1.02, -0.03]}>
          {/* Neck */}
          <mesh position={[0, -0.06, 0]}>
            <cylinderGeometry args={[0.075, 0.085, 0.11, 16]} />
            <meshStandardMaterial color="#d4a373" roughness={0.45} />
          </mesh>

          {/* Head Shape */}
          <mesh position={[0, 0.12, 0]} castShadow>
            <sphereGeometry args={[0.19, 32, 32]} />
            <meshStandardMaterial color="#e0b084" roughness={0.4} />
          </mesh>

          {/* Dark Modern Hairstyle */}
          <group position={[0, 0.16, -0.02]}>
            <mesh position={[0, 0.07, 0.02]} rotation={[-0.1, 0, 0]} castShadow>
              <sphereGeometry args={[0.2, 24, 24]} />
              <meshStandardMaterial color="#0d0f15" roughness={0.75} />
            </mesh>
            <mesh position={[0, 0.11, 0.13]} rotation={[0.4, 0, 0]}>
              <boxGeometry args={[0.2, 0.07, 0.1]} />
              <meshStandardMaterial color="#0d0f15" roughness={0.75} />
            </mesh>
          </group>

          {/* Eyes */}
          <group position={[0, 0.12, 0.17]}>
            <mesh ref={leftEyeRef} position={[-0.07, 0, 0]}>
              <sphereGeometry args={[0.026, 16, 16]} />
              <meshStandardMaterial color="#090d16" roughness={0.1} />
            </mesh>
            <mesh ref={rightEyeRef} position={[0.07, 0, 0]}>
              <sphereGeometry args={[0.026, 16, 16]} />
              <meshStandardMaterial color="#090d16" roughness={0.1} />
            </mesh>
          </group>

          {/* Sleek Developer Tech Glasses */}
          <group position={[0, 0.12, 0.16]}>
            <mesh position={[0, 0, 0.032]}>
              <boxGeometry args={[0.045, 0.007, 0.007]} />
              <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.4} metalness={0.9} />
            </mesh>
            <mesh position={[-0.07, 0, 0.032]}>
              <ringGeometry args={[0.038, 0.045, 24]} />
              <meshStandardMaterial color="#38bdf8" emissive="#00f5d4" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0.07, 0, 0.032]}>
              <ringGeometry args={[0.038, 0.045, 24]} />
              <meshStandardMaterial color="#38bdf8" emissive="#00f5d4" emissiveIntensity={0.5} />
            </mesh>
          </group>

          {/* Sleek Audio Headset */}
          <group position={[0, 0.13, 0]}>
            <mesh rotation={[0, 0, 0]}>
              <torusGeometry args={[0.21, 0.015, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[-0.21, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.035, 24]} />
              <meshStandardMaterial color="#0f172a" metalness={0.7} />
            </mesh>
            <mesh position={[0.21, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.035, 24]} />
              <meshStandardMaterial color="#0f172a" metalness={0.7} />
            </mesh>
            <mesh ref={headsetGlowRef} position={[0.235, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
              <ringGeometry args={[0.038, 0.05, 24]} />
              <meshStandardMaterial
                color="#00f5d4"
                emissive="#00f5d4"
                emissiveIntensity={0.8}
              />
            </mesh>
          </group>

          {/* Calm smile / mouth */}
          <mesh position={[0, 0.04, 0.18]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[0.045, 0.005, 0.005]} />
            <meshStandardMaterial color="#a7684b" roughness={0.6} />
          </mesh>
        </group>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* SOFT GROUND SHADOW DISC                                       */}
      {/* ------------------------------------------------------------- */}
      <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.3, 32]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
};
