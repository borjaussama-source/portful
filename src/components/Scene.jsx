import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// A "Cloud Node" - distorted sphere representing infrastructure
const CloudNode = ({ position, color, speed = 1, size = 1 }) => {
  return (
    <Float speed={1.5 * speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere position={position} args={[size, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={0.4}
          radius={size}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

// Represents a network of points/nodes
const NetworkParticles = () => {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <Points positions={positions} ref={pointsRef}>
      <PointMaterial
        transparent
        color="#14b8a6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#14b8a6" />

        <CloudNode position={[-5, 3, -2]} color="#3b82f6" speed={2} size={0.8} />
        <CloudNode position={[6, -2, -4]} color="#8b5cf6" speed={1.5} size={1.2} />
        <CloudNode position={[-2, -5, -6]} color="#14b8a6" speed={1} size={1} />

        <NetworkParticles />
      </Canvas>
    </div>
  );
}
