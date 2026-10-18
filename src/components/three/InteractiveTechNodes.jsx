import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { PROFILE_DATA } from '../../data/profile';

export const InteractiveTechNodes = ({ activeNodeId, onSelectNode }) => {
  const groupRef = useRef();
  const [hoveredId, setHoveredId] = useState(null);
  const { size } = useThree();
  const isMobile = size.width < 768;

  const nodes = PROFILE_DATA.techNodes;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle orbital sway around the left-side presenting character
      groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.08;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[isMobile ? 0 : -1.6, -5.7, 0]}
      scale={isMobile ? 0.82 : 0.95}
    >
      {nodes.map((node, i) => (
        <TechNodeItem
          key={node.id}
          node={node}
          index={i}
          isActive={activeNodeId === node.id || hoveredId === node.id}
          onHover={(hover) => setHoveredId(hover ? node.id : null)}
          onClick={() => onSelectNode(node.id === activeNodeId ? null : node.id)}
        />
      ))}
    </group>
  );
};

const TechNodeItem = ({ node, index, isActive, onHover, onClick }) => {
  const meshRef = useRef();
  const basePos = useRef(new THREE.Vector3(...node.position));
  const currentPos = useRef(new THREE.Vector3(...node.position));

  useFrame((state) => {
    const t = state.clock.getElapsedTime() + index * 1.2;

    // Organic floating trajectory
    const floatY = Math.sin(t * 1.2) * 0.07;
    const floatX = Math.cos(t * 0.9) * 0.05;

    // Push forward slightly when active / hovered
    const targetZ = isActive ? basePos.current.z + 0.35 : basePos.current.z;
    const targetY = basePos.current.y + floatY;
    const targetX = basePos.current.x + floatX;

    currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, targetX, 0.1);
    currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, targetY, 0.1);
    currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, targetZ, 0.1);

    if (meshRef.current) {
      meshRef.current.position.copy(currentPos.current);
      const rotSpeed = isActive ? 1.8 : 0.6;
      meshRef.current.rotation.y += 0.01 * rotSpeed;
      meshRef.current.rotation.x = Math.sin(t * 0.8) * 0.2;
    }
  });

  const renderGeometry = () => {
    switch (node.id) {
      case 'java':
        return <octahedronGeometry args={[0.18, 0]} />;
      case 'nodejs':
        return <cylinderGeometry args={[0.16, 0.16, 0.12, 6]} />;
      case 'mongodb':
        return <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />;
      case 'sql':
        return <boxGeometry args={[0.22, 0.22, 0.22]} />;
      case 'restapi':
        return <torusGeometry args={[0.14, 0.035, 16, 32]} />;
      case 'ai':
        return <dodecahedronGeometry args={[0.18, 0]} />;
      default:
        return <sphereGeometry args={[0.16, 16, 16]} />;
    }
  };

  return (
    <group
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        onHover(false);
        document.body.style.cursor = 'auto';
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <mesh castShadow>
        {renderGeometry()}
        <meshStandardMaterial
          color="#0f172a"
          emissive={node.color}
          emissiveIntensity={isActive ? 1.4 : 0.6}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      <mesh scale={isActive ? 1.35 : 1.2}>
        {renderGeometry()}
        <meshStandardMaterial
          color={node.color}
          wireframe
          transparent
          opacity={isActive ? 0.7 : 0.25}
        />
      </mesh>
    </group>
  );
};
