import React from 'react';

export const Lighting = () => {
  return (
    <group name="studio-lighting">
      {/* Studio ambient base */}
      <ambientLight intensity={0.65} color="#141829" />

      {/* ============================================================= */}
      {/* CHAPTER 01 (HERO) LIGHTING RIG (Y ~ 0)                        */}
      {/* ============================================================= */}
      <group position={[0, 0, 0]}>
        {/* Primary Key Light - Cyan / Teal (Front Left) */}
        <directionalLight
          position={[-3, 3.5, 4.5]}
          intensity={2.8}
          color="#00e5ff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Secondary Rim Light - Crisp Violet / Magenta (Back Right) */}
        <directionalLight
          position={[4, 3, -2]}
          intensity={3.2}
          color="#c084fc"
        />

        {/* Front Soft Fill Light */}
        <pointLight
          position={[0, 1.2, 3.5]}
          intensity={1.2}
          color="#e2e8f0"
          distance={7}
        />

        {/* Upward Laptop / Terminal Screen Glow */}
        <pointLight
          position={[0, -0.2, 0.9]}
          intensity={2.0}
          color="#38bdf8"
          distance={3.2}
        />
      </group>

      {/* ============================================================= */}
      {/* CHAPTER 02 (ABOUT) LIGHTING RIG (Y ~ -5.5)                    */}
      {/* ============================================================= */}
      <group position={[0, -5.5, 0]}>
        {/* About Primary Key Light - Crisp Violet / Indigo */}
        <directionalLight
          position={[3.5, 3.5, 4.0]}
          intensity={3.0}
          color="#c084fc"
          castShadow
        />

        {/* About Secondary Rim Light - Cyan / Teal Backlight */}
        <directionalLight
          position={[-4.0, 2.5, -2.5]}
          intensity={2.6}
          color="#00e5ff"
        />

        {/* Holographic Tablet Upward Illumination */}
        <pointLight
          position={[-0.8, 0.6, 0.8]}
          intensity={2.2}
          color="#38bdf8"
          distance={4.0}
        />

        {/* Center Fill Light */}
        <pointLight
          position={[-0.5, 1.0, 3.0]}
          intensity={1.0}
          color="#ffffff"
          distance={6.0}
        />
      </group>
    </group>
  );
};
