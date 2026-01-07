import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DataStream() {
  const streamRef = useRef();
  const particleCount = 500;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 8;
      const radius = 2 + Math.random() * 0.5;
      const height = (i / particleCount) * 15 - 7.5;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      sizes[i] = Math.random() * 0.1 + 0.05;
    }

    return { positions, sizes };
  }, []);

  useFrame((state) => {
    if (streamRef.current) {
      const time = state.clock.elapsedTime;
      streamRef.current.rotation.y = time * 0.2;
      
      const positions = streamRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += 0.02;
        
        if (positions[i3 + 1] > 7.5) {
          positions[i3 + 1] = -7.5;
        }
      }
      streamRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={streamRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#00ff88"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
