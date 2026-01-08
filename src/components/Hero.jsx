// src/components/Hero.jsx - Updated with advanced 3D
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function LightBeam({ progress }) {
  const ref = useRef();
  const particlesRef = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.material.opacity = 0.4 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.01;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      {/* Data pulse traveling along beam */}
      <mesh ref={ref} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.3, 4, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* LED source */}
      <Float speed={1} rotationIntensity={0.5}>
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Receiver */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.3, 32]} />
        <meshStandardMaterial
          color="#1e40af"
          emissive="#1d4ed8"
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Floating data particles */}
      <Float speed={0.8}>
        <instancedMesh
          ref={particlesRef}
          args={[null, null, 100]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <sphereGeometry args={[0.02]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#38bdf8"
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </instancedMesh>
      </Float>
    </group>
  );
}

export default function Hero() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -2]);

  return (
    <section ref={ref} className="w-full min-h-screen relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#020617] to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#38bdf8_0%,transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-6 h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          {/* Enhanced 3D Canvas */}
          <motion.div
            style={{ y }}
            className="h-[500px] rounded-3xl overflow-hidden border border-slate-800/50 bg-gradient-to-br from-slate-900/30 to-transparent shadow-2xl backdrop-blur-xl"
          >
            <Canvas camera={{ position: [4, 1, 6], fov: 45 }}>
              <color attach="background" args={["#020617"]} />
              <Environment preset="night" />
              <ambientLight intensity={0.3} />
              <LightBeam />
              <OrbitControls 
                enablePan={false} 
                enableZoom={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2.5}
              />
            </Canvas>
          </motion.div>

          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-sm font-medium tracking-wide">
              LIFI TECHNOLOGY
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] bg-gradient-to-r from-slate-100 via-sky-200 to-sky-400 bg-clip-text text-transparent">
                Light‑Powered <br />
                <span className="text-sky-400">Internet</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                LiFi transmits data through light beams at unprecedented speeds.
                Secure. Interference‑free. Environmentally friendly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 text-slate-950 font-semibold shadow-2xl shadow-sky-500/50 hover:shadow-sky-500/70 transition-all duration-300 text-lg"
              >
                View Prototype →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl border-2 border-slate-600/50 hover:border-sky-400 text-slate-300 hover:text-sky-300 backdrop-blur-sm bg-slate-900/30 font-semibold text-lg transition-all duration-300"
              >
                How LiFi Works
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
