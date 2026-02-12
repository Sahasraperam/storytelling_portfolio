"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, PerspectiveCamera, Environment, Float, Text, Grid } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Particles({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
      mesh.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Initial camera position
    camera.position.set(0, 0, 10);

    // Scroll-driven camera movement
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // Chapter 1 -> Chapter 2 (Zoom in)
    tl.to(camera.position, {
      z: 5,
      y: 0,
      x: 0,
      ease: "power2.inOut",
    }, 0);

    // Chapter 2 -> Chapter 3 (Pan sideways)
    tl.to(camera.position, {
      x: 5,
      z: 8,
      ease: "power2.inOut",
    }, 1);

    // Chapter 3 -> Chapter 4 (Move into grid)
    tl.to(camera.position, {
      x: 0,
      y: -2,
      z: 4,
      ease: "power2.inOut",
    }, 2);

    // Chapter 4 -> Chapter 5 (Fly through)
    tl.to(camera.position, {
      y: 2,
      z: 12,
      ease: "power2.inOut",
    }, 3);

    // Chapter 5 -> Chapter 6 (Ambient glow)
    tl.to(camera.position, {
      x: -2,
      y: 0,
      z: 8,
      ease: "power2.inOut",
    }, 4);

  }, [camera]);

  return null;
}

function Hero3D() {
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={textRef}>
        <Text
          fontSize={1.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
        >
          FUTURE
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
        </Text>
      </group>
    </Float>
  );
}

function Skills3D() {
  const panelData = [
    { title: "PYTHON", pos: [-3, 0, 0], color: "#ffd43b" },
    { title: "REACT", pos: [-1, 2, 0], color: "#61dafb" },
    { title: "AI/ML", pos: [1, -1, 0], color: "#ff007a" },
    { title: "CYBER", pos: [3, 1, 0], color: "#00ff41" },
  ];

  return (
    <group position={[0, -10, 0]}> {/* Positioned for Chapter 3 */}
      {panelData.map((panel, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={panel.pos as any}>
            <boxGeometry args={[1.5, 2, 0.1]} />
            <meshStandardMaterial color={panel.color} metalness={0.8} roughness={0.2} transparent opacity={0.6} />
            <Text
              position={[0, 0, 0.06]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {panel.title}
            </Text>
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Contact3D() {
  const mesh = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.002;
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={[-5, 5, -10]} ref={mesh}> {/* Deep in space */}
      <mesh>
        <torusKnotGeometry args={[3, 0.5, 200, 32]} />
        <meshStandardMaterial color="#FFDE95" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 75 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />

        <Particles />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Hero3D />
        <Skills3D />
        <Contact3D />

        <Grid
          position={[0, -2, 0]}
          args={[100, 100]}
          cellSize={1}
          cellThickness={1}
          cellColor="#202020"
          sectionSize={5}
          sectionThickness={1.5}
          sectionColor="#2a4b60"
          fadeDistance={30}
        />

        <CameraController />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
