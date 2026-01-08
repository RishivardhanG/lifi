import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// --- 1. THE PHOTONIC GRID (Optimized) ---
const LifiGrid = () => {
  const mesh = useRef();
  
  const count = 40; 
  const sep = 0.8; 
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const { positions } = useMemo(() => {
    const pos = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        pos.push(x, 0, z);
      }
    }
    return { positions: new Float32Array(pos) };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    let idx = 0;

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = positions[idx * 3];
        const z = positions[idx * 3 + 2];
        
        const y = Math.sin(x * 0.5 + t * 2) * Math.cos(z * 0.5 + t) * 0.8;
        
        const dist = Math.sqrt(x*x + z*z);
        const scale = Math.max(0, (1.5 - dist * 0.08) * (0.2 + y * 0.1));

        dummy.position.set(x, y - 2, z); 
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        mesh.current.setMatrixAt(idx, dummy.matrix);
        idx++;
      }
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      <instancedMesh ref={mesh} args={[null, null, count * count]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 12]} /> 
        <meshStandardMaterial 
          color="#00f0ff" 
          emissive="#00f0ff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
};

// --- 2. HERO COMPONENT ---
const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#02040a] overflow-hidden flex flex-col justify-center">
      
      {/* --- 3D BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas 
          dpr={[1, 1.5]} 
          gl={{ antialias: false, powerPreference: "high-performance" }} 
        >
          <PerspectiveCamera makeDefault position={[0, 4, 14]} fov={45} />
          <color attach="background" args={['#02040a']} />
          <fog attach="fog" args={['#02040a', 5, 30]} />

          <ambientLight intensity={0.2} />
          <spotLight position={[0, 15, 0]} angle={0.6} penumbra={0.5} intensity={4} color="#ccfbf1" />
          <pointLight position={[10, 5, 5]} intensity={2} color="#2dd4bf" />

          <Suspense fallback={null}>
             <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
               <LifiGrid />
             </Float>
          </Suspense>

          <EffectComposer disableNormalPass multisampling={0}>
             <Bloom luminanceThreshold={0.6} mipmapBlur intensity={1.5} radius={0.4} />
             <ChromaticAberration offset={[0.002, 0.002]} /> 
          </EffectComposer>
        </Canvas>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Text Content */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
               <div className="flex items-center gap-3 mb-6">
                   <div className="h-px w-8 bg-cyan-500"></div>
                   <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.25em]">
                       Optical Wireless Communication
                   </span>
               </div>

               <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                   Data transmission <br/>
                   via <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-100 to-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Light Spectrum</span>.
               </h1>

               <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10 border-l border-white/10 pl-6">
                   Secure, high-speed connectivity using the visible light spectrum. 
                   Eliminate RF interference and unlock 100x bandwidth capacity 
                   for enterprise environments.
               </p>

               <div className="flex flex-wrap gap-4">
                   {/* LINKED BUTTONS */}
                   <a href="#contact" className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                       DEPLOY PILOT
                   </a>
                   <a href="#technology" className="px-8 py-3.5 border border-white/20 hover:border-white/50 text-white font-medium rounded text-sm tracking-wide transition-all backdrop-blur-sm bg-white/5">
                       VIEW TECHNICAL SPECS
                   </a>
               </div>
            </motion.div>

            {/* RIGHT: Spacer */}
            <div className="hidden lg:block"></div>
         </div>
      </div>

      {/* --- BOTTOM HUD --- */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-[#02040a]/90 z-20">
         <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded bg-cyan-950/50 border border-cyan-800/30 flex items-center justify-center text-cyan-400">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div>
                   <div className="text-2xl font-bold text-white font-mono">224 Gbps</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold group-hover:text-cyan-400 transition-colors">Peak Data Rate</div>
               </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded bg-cyan-950/50 border border-cyan-800/30 flex items-center justify-center text-cyan-400">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
               </div>
               <div>
                   <div className="text-2xl font-bold text-white font-mono">AES-256</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold group-hover:text-cyan-400 transition-colors">Physical Layer Security</div>
               </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded bg-cyan-950/50 border border-cyan-800/30 flex items-center justify-center text-cyan-400">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               </div>
               <div>
                   <div className="text-2xl font-bold text-white font-mono">0% RF</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold group-hover:text-cyan-400 transition-colors">Interference Free</div>
               </div>
            </div>

         </div>
      </div>
    </section>
  );
};

export default Hero;