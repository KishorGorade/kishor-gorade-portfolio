"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeShield() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0035;
      groupRef.current.rotation.x += (mouse.current.y * 0.4 - groupRef.current.rotation.x) * 0.03;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= 0.006;
      coreRef.current.rotation.x -= 0.003;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0015;
    }
  });

  const nodeCount = 40;
  const positions = new Float32Array(nodeCount * 3);
  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / nodeCount);
    const theta = Math.sqrt(nodeCount * Math.PI) * phi;
    const r = 2.6;
    positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        mouse.current.x = e.point.x / 3;
        mouse.current.y = e.point.y / 3;
      }}
    >
      <mesh>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#00FF99" wireframe transparent opacity={0.4} />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodeCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00E5FF" size={0.06} transparent opacity={0.9} />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 opacity-85 md:h-[440px] md:w-[440px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <WireframeShield />
      </Canvas>
    </div>
  );
}
