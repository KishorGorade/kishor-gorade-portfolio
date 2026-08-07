"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlobeNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0022;
    if (coreRef.current) coreRef.current.rotation.y -= 0.0035;
  });

  const nodeCount = 60;
  const positions = new Float32Array(nodeCount * 3);
  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / nodeCount);
    const theta = Math.sqrt(nodeCount * Math.PI) * phi;
    const r = 2.4;
    positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[2.05, 24, 24]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.5} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={nodeCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#60A5FA" size={0.045} transparent opacity={0.85} />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 6.4], fov: 42 }} gl={{ alpha: true, antialias: true }}>
        <GlobeNetwork />
      </Canvas>
    </div>
  );
}
