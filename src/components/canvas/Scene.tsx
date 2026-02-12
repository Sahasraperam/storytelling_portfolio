'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Constellation() {
  const ref = useRef<THREE.Points>(null!);

  // Generate 500 random points in a sphere
  const positions = useMemo(() => {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 10 + Math.random() * 20; // Spread them out

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    // Slow rotation for the whole galaxy
    if (ref.current) {
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 60;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FFDE95" // Sunny Veranda
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <fog attach="fog" args={['#1A3140', 10, 40]} /> {/* Blue Whale Fog */}
        <Constellation />
      </Canvas>
    </div>
  );
}
