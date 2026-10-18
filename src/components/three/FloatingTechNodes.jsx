import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const FloatingTechNodes = () => {
  const dbRef = useRef();
  const bracketRef = useRef();
  const aiRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Restrained floating
    if (dbRef.current) {
      dbRef.current.position.y = -0.4 + Math.sin(t * 0.8) * 0.06;
      dbRef.current.rotation.y = t * 0.25;
    }

    if (bracketRef.current) {
      bracketRef.current.position.y = 1.35 + Math.cos(t * 0.7 + 1) * 0.07;
      bracketRef.current.rotation.y = -t * 0.2;
      bracketRef.current.rotation.z = Math.sin(t * 0.4) * 0.08;
    }

    if (aiRef.current) {
      aiRef.current.position.y = 0.5 + Math.sin(t * 0.9 + 2) * 0.06;
      aiRef.current.rotation.x = t * 0.3;
      aiRef.current.rotation.y = t * 0.25;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Database Cylindrical Node (Backend) - Placed lower right */}
      <group ref={dbRef} position={[1.7, -0.4, -0.2]}>
        <mesh position={[0, 0.16, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.07, 24]} />
          <meshStandardMaterial
            color="#080e1e"
            emissive="#00e5ff"
            emissiveIntensity={0.28}
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>
        <mesh position={[0, 0.05, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.07, 24]} />
          <meshStandardMaterial
            color="#080e1e"
            emissive="#38bdf8"
            emissiveIntensity={0.25}
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>
        <mesh position={[0, -0.06, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.07, 24]} />
          <meshStandardMaterial
            color="#080e1e"
            emissive="#7c3aed"
            emissiveIntensity={0.28}
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* 2. Abstract Code Bracket Ring (Full Stack) - Repositioned to upper-left margin to prevent video overlap */}
      <group ref={bracketRef} position={[-1.85, 1.1, -0.6]}>
        <mesh castShadow>
          <torusGeometry args={[0.16, 0.03, 16, 32, Math.PI * 1.4]} />
          <meshStandardMaterial
            color="#050b18"
            emissive="#00e5ff"
            emissiveIntensity={0.25}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[0.165, 0.032, 12, 24, Math.PI * 1.4]} />
          <meshStandardMaterial
            color="#00e5ff"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>

      {/* 3. AI Neural Spark (AI / LLM) - Placed upper right */}
      <group ref={aiRef} position={[1.5, 0.5, -0.8]}>
        <mesh castShadow>
          <octahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial
            color="#140f2b"
            emissive="#c084fc"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>
        <mesh>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial
            color="#7c3aed"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </group>
  );
};
