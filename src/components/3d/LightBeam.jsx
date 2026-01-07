import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function LightParticles({ count = 2000 }) {
  const particles = useRef();
  const light = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Blue to cyan color gradient
      const colorMix = Math.random();
      colors[i3] = 0.0 + colorMix * 0.5;
      colors[i3 + 1] = 0.7 + colorMix * 0.3;
      colors[i3 + 2] = 1.0;
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (particles.current) {
      particles.current.rotation.y = time * 0.05;
      particles.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      
      const positions = particles.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        positions[i3 + 1] += Math.sin(time + x) * 0.002;
      }
      particles.current.geometry.attributes.position.needsUpdate = true;
    }

    if (light.current) {
      light.current.intensity = 1 + Math.sin(time * 2) * 0.3;
    }
  });

  return (
    <group>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particlesPosition.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particlesPosition.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      <pointLight ref={light} position={[0, 0, 0]} intensity={1} color="#00d4ff" distance={50} />
      <ambientLight intensity={0.2} />
    </group>
  );
}
