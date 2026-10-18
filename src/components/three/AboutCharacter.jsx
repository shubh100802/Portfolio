import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const AboutCharacter = ({ isSpeaking = false, dialogueIndex = 0 }) => {
  const groupRef = useRef();
  const spineRef = useRef();
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const headsetGlowRef = useRef();

  const { pointer, size } = useThree();
  const isMobile = size.width < 768;

  // Blinking cycle
  const nextBlinkTime = useRef(2.0);
  const isBlinking = useRef(false);
  const blinkProgress = useRef(0);

  // Micro-gesture reaction on dialogue line change
  const reactionTimer = useRef(0);

  useEffect(() => {
    reactionTimer.current = 1.2;
  }, [dialogueIndex]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 1. Dynamic Breathing & Leaning Idle
    const breathOffset = Math.sin(t * 1.8) * 0.02;
    if (spineRef.current) {
      spineRef.current.position.y = breathOffset;
      // Slight dynamic lean back
      spineRef.current.rotation.x = -0.05 + Math.sin(t * 1.8) * 0.015;
      spineRef.current.rotation.z = -0.04 + Math.cos(t * 1.4) * 0.01;
    }

    // 2. Head Tracking towards Right Content & Cursor
    if (headRef.current) {
      const maxHeadYaw = 0.3;
      const maxHeadPitch = 0.22;

      // Base yaw turned towards right content (+0.28 rad)
      const baseContentAngle = isMobile ? 0 : 0.28;
      let targetYaw = baseContentAngle + (isMobile ? Math.sin(t * 0.7) * 0.06 : pointer.x * maxHeadYaw);
      let targetPitch = -0.04 + (isMobile ? Math.cos(t * 0.8) * 0.05 : -pointer.y * maxHeadPitch);

      // Nod reaction on dialogue sentence switch
      if (reactionTimer.current > 0) {
        reactionTimer.current -= delta * 2.0;
        targetPitch += Math.sin((1 - reactionTimer.current) * Math.PI * 2) * 0.05;
      }

      // Subtle talking micro gesture
      if (isSpeaking) {
        targetYaw += Math.sin(t * 7.5) * 0.012;
        targetPitch += Math.cos(t * 6.5) * 0.01;
      }

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetYaw, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetPitch, 0.08);
      headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, -targetYaw * 0.08, 0.08);
    }

    // 3. Double-Arm Finger Pointing Gestures (Both arms pointing enthusiastically right)
    if (rightArmRef.current) {
      // Forward right arm pointing bounce
      const pointBounce = Math.sin(t * 1.6) * 0.05 + (isSpeaking ? Math.sin(t * 4.0) * 0.04 : 0);
      rightArmRef.current.rotation.z = -0.65 + pointBounce;
      rightArmRef.current.rotation.y = 0.42 + Math.sin(t * 1.2) * 0.03;
    }

    if (leftArmRef.current) {
      // Crossing left arm pointing bounce
      const pointBounce2 = Math.sin(t * 1.6 + 0.3) * 0.05 + (isSpeaking ? Math.sin(t * 4.0 + 0.3) * 0.04 : 0);
      leftArmRef.current.rotation.z = -0.48 + pointBounce2;
      leftArmRef.current.rotation.y = 0.55 + Math.cos(t * 1.2) * 0.03;
    }

    // 4. Organic Blinking
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

    if (headsetGlowRef.current) {
      headsetGlowRef.current.material.emissiveIntensity = 0.7 + Math.cos(t * 2.5) * 0.2;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[isMobile ? 0 : -1.6, -5.7, 0]}
      rotation={[0, isMobile ? 0 : 0.35, 0]}
      scale={isMobile ? 0.92 : 1.12}
    >
      {/* ------------------------------------------------------------- */}
      {/* STANDING ENTHUSIASTIC CHARACTER (Double Pointing Gesture)     */}
      {/* ------------------------------------------------------------- */}
      <group ref={spineRef}>
        {/* Torso / Developer Jacket */}
        <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
          <capsuleGeometry args={[0.26, 0.52, 16, 32]} />
          <meshStandardMaterial
            color="#141a29"
            roughness={0.65}
            metalness={0.2}
          />
        </mesh>

        {/* Jacket Violet Tech Accent Line */}
        <mesh position={[0, 0.75, 0.22]}>
          <boxGeometry args={[0.012, 0.46, 0.005]} />
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.5} />
        </mesh>

        {/* High Collar */}
        <mesh position={[0, 1.05, 0.02]} rotation={[0.15, 0, 0]}>
          <torusGeometry args={[0.15, 0.04, 16, 32]} />
          <meshStandardMaterial color="#1e293b" roughness={0.75} />
        </mesh>

        {/* ----------------------------------------------------------- */}
        {/* LEFT ARM: RAISED & POINTING RIGHT (Inside Arm)              */}
        {/* ----------------------------------------------------------- */}
        <group ref={leftArmRef} position={[-0.28, 0.88, 0.08]}>
          {/* Upper Arm raised towards center-right */}
          <mesh rotation={[0.6, 0.7, -0.4]} castShadow>
            <capsuleGeometry args={[0.065, 0.35, 12, 24]} />
            <meshStandardMaterial color="#141a29" roughness={0.65} />
          </mesh>
          {/* Forearm extending and pointing up-right */}
          <mesh position={[0.15, 0.06, 0.28]} rotation={[-0.5, 0.9, 0.5]} castShadow>
            <capsuleGeometry args={[0.055, 0.32, 12, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
          {/* Hand with pointing index finger */}
          <group position={[0.26, 0.16, 0.46]} rotation={[-0.2, 0.9, 0.3]}>
            {/* Palm */}
            <mesh>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshStandardMaterial color="#d4a373" roughness={0.5} />
            </mesh>
            {/* Extended Index Finger pointing right */}
            <mesh position={[0.06, 0.02, 0.04]} rotation={[0, 0.3, 0.2]}>
              <capsuleGeometry args={[0.016, 0.08, 8, 16]} />
              <meshStandardMaterial color="#d4a373" roughness={0.5} />
            </mesh>
          </group>
        </group>

        {/* ----------------------------------------------------------- */}
        {/* RIGHT ARM: EXTENDED & POINTING RIGHT (Outer Arm)            */}
        {/* ----------------------------------------------------------- */}
        <group ref={rightArmRef} position={[0.3, 0.9, 0.06]}>
          {/* Upper Arm angled right */}
          <mesh rotation={[0.5, 0.7, -0.6]} castShadow>
            <capsuleGeometry args={[0.065, 0.36, 12, 24]} />
            <meshStandardMaterial color="#141a29" roughness={0.65} />
          </mesh>
          {/* Forearm extended pointing up-right */}
          <mesh position={[0.12, 0.08, 0.3]} rotation={[-0.4, 0.9, 0.6]} castShadow>
            <capsuleGeometry args={[0.055, 0.34, 12, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
          {/* Hand with pointing index finger */}
          <group position={[0.24, 0.18, 0.5]} rotation={[-0.1, 0.9, 0.4]}>
            {/* Palm */}
            <mesh>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshStandardMaterial color="#d4a373" roughness={0.5} />
            </mesh>
            {/* Extended Index Finger pointing right */}
            <mesh position={[0.06, 0.02, 0.04]} rotation={[0, 0.3, 0.2]}>
              <capsuleGeometry args={[0.016, 0.08, 8, 16]} />
              <meshStandardMaterial color="#d4a373" roughness={0.5} />
            </mesh>
          </group>
        </group>

        {/* ----------------------------------------------------------- */}
        {/* CHARACTER HEAD (Hair, Stylish Beard, Eyes, Glasses, Smile)  */}
        {/* ----------------------------------------------------------- */}
        <group ref={headRef} position={[0, 1.18, -0.01]}>
          {/* Neck */}
          <mesh position={[0, -0.06, 0]}>
            <cylinderGeometry args={[0.075, 0.085, 0.12, 16]} />
            <meshStandardMaterial color="#d4a373" roughness={0.45} />
          </mesh>

          {/* Head Base */}
          <mesh position={[0, 0.12, 0]} castShadow>
            <sphereGeometry args={[0.19, 32, 32]} />
            <meshStandardMaterial color="#e0b084" roughness={0.4} />
          </mesh>

          {/* Dark Fade Hairstyle */}
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

          {/* Clean Trimmed Beard Contour */}
          <group position={[0, 0.02, 0.08]}>
            <mesh position={[0, 0.02, 0.08]}>
              <torusGeometry args={[0.13, 0.028, 12, 24, Math.PI * 0.9]} />
              <meshStandardMaterial color="#0d0f15" roughness={0.8} />
            </mesh>
            {/* Chin beard tip */}
            <mesh position={[0, -0.06, 0.08]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color="#0d0f15" roughness={0.8} />
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

          {/* Modern Developer Glasses */}
          <group position={[0, 0.12, 0.16]}>
            <mesh position={[0, 0, 0.032]}>
              <boxGeometry args={[0.045, 0.007, 0.007]} />
              <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.4} metalness={0.9} />
            </mesh>
            <mesh position={[-0.07, 0, 0.032]}>
              <ringGeometry args={[0.038, 0.045, 24]} />
              <meshStandardMaterial color="#c084fc" emissive="#818cf8" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0.07, 0, 0.032]}>
              <ringGeometry args={[0.038, 0.045, 24]} />
              <meshStandardMaterial color="#c084fc" emissive="#818cf8" emissiveIntensity={0.5} />
            </mesh>
          </group>

          {/* Tech Headset */}
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
                color="#c084fc"
                emissive="#c084fc"
                emissiveIntensity={0.8}
              />
            </mesh>
          </group>

          {/* Expressive Friendly Smile */}
          <mesh position={[0, 0.03, 0.18]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[0.055, 0.008, 0.005]} />
            <meshStandardMaterial color="#a7684b" roughness={0.6} />
          </mesh>
        </group>

        {/* Dynamic Standing Legs (Slight knee bend stance) */}
        <group position={[0, 0.1, 0]}>
          {/* Left Leg */}
          <mesh position={[-0.14, -0.32, -0.04]} rotation={[-0.1, 0, 0.08]} castShadow>
            <capsuleGeometry args={[0.085, 0.55, 12, 24]} />
            <meshStandardMaterial color="#0f1422" roughness={0.7} />
          </mesh>
          {/* Right Leg */}
          <mesh position={[0.14, -0.32, 0.04]} rotation={[0.08, 0, -0.06]} castShadow>
            <capsuleGeometry args={[0.085, 0.55, 12, 24]} />
            <meshStandardMaterial color="#0f1422" roughness={0.7} />
          </mesh>
        </group>
      </group>

      {/* Ground Shadow Disc */}
      <mesh position={[0, -0.58, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.35, 32]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.45} />
      </mesh>
    </group>
  );
};
