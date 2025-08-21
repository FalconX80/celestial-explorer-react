import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { solarSystemData, sunData } from '@/data/solarSystem';

interface PlanetProps {
  planet: typeof solarSystemData[0];
  onPlanetClick: (planet: typeof solarSystemData[0]) => void;
}

const Planet: React.FC<PlanetProps> = ({ planet, onPlanetClick }) => {
  const meshRef = useRef<Mesh>(null);
  const orbitRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = clock.getElapsedTime() * planet.orbitSpeed * 0.1;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 2;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh
        ref={meshRef}
        position={[planet.distance, 0, 0]}
        onClick={() => onPlanetClick(planet)}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        <sphereGeometry args={[planet.radius, 32, 32]} />
        <meshStandardMaterial color={planet.color} />
      </mesh>
      
      {/* Orbital path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[planet.distance - 0.02, planet.distance + 0.02, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent />
      </mesh>
    </group>
  );
};

const Sun: React.FC<{ onSunClick: () => void }> = ({ onSunClick }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={onSunClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      <sphereGeometry args={[sunData.radius, 32, 32]} />
      <meshStandardMaterial 
        color={sunData.color}
        emissive={sunData.color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

interface SolarSystemProps {
  onCelestialBodyClick: (body: any) => void;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ onCelestialBodyClick }) => {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 50, 50], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        
        {/* Background stars */}
        <Stars 
          radius={300}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        {/* Sun */}
        <Sun onSunClick={() => onCelestialBodyClick({ type: 'sun', data: sunData })} />
        
        {/* Planets */}
        {solarSystemData.map((planet) => (
          <Planet
            key={planet.id}
            planet={planet}
            onPlanetClick={(planet) => onCelestialBodyClick({ type: 'planet', data: planet })}
          />
        ))}
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.8}
          panSpeed={0.8}
          rotateSpeed={0.4}
          minDistance={10}
          maxDistance={200}
        />
      </Canvas>
    </div>
  );
};

export default SolarSystem;