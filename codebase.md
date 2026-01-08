# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LiFi - Light Fidelity Technology</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@react-three/postprocessing": "^3.0.4",
    "@types/three": "^0.182.0",
    "animejs": "^3.2.2",
    "framer-motion": "^12.24.10",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-intersection-observer": "^10.0.0",
    "three": "^0.182.0",
    "uuid": "^13.0.0",
    "vite-plugin-glsl": "^1.5.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react-swc": "^4.2.2",
    "autoprefixer": "^10.4.16",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "vite": "^7.2.4"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public\vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

# src\App.css

```css

```

# src\App.jsx

```jsx
import { useEffect, useState } from 'react';
import anime from 'animejs';
import Hero from './components/Hero';
import TechnologySection from './components/TechnologySection';
import ProblemsSection from './components/ProblemsSection';
import ComparisonSection from './components/ComparisonSection';
import ApplicationsSection from './components/ApplicationsSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {/* DYNAMIC ISLAND NAVBAR */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-out"
        style={{
          padding: scrolled ? '1rem 0' : '1.5rem 0'
        }}
      >
        <div 
          className="transition-all duration-700 ease-out"
          style={{
            width: scrolled ? 'auto' : '100%',
            maxWidth: scrolled ? '900px' : '1280px',
            padding: scrolled ? '0 2rem' : '0 3rem'
          }}
        >
          <div 
            className="flex justify-between items-center transition-all duration-700 ease-out"
            style={{
              background: scrolled 
                ? 'rgba(10, 25, 41, 0.8)' 
                : 'transparent',
              backdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'none',
              borderRadius: scrolled ? '24px' : '0px',
              border: scrolled ? '1px solid rgba(0, 229, 255, 0.15)' : 'none',
              padding: scrolled ? '0.75rem 1.5rem' : '1rem 0',
              boxShadow: scrolled 
                ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)' 
                : 'none'
            }}
          >
            {/* Logo */}
            <a 
              href="#hero" 
              className="relative group"
              onClick={() => setActiveSection('home')}
            >
              <h1 
                className="font-bold tracking-tight transition-all duration-500"
                style={{
                  fontSize: scrolled ? '1.5rem' : '2rem',
                  color: '#00E5FF',
                  textShadow: '0 0 30px rgba(0, 229, 255, 0.5)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em'
                }}
              >
                LiFi
              </h1>
            </a>
            
            {/* Navigation Links - Dynamic Island Style */}
            <div 
              className="flex items-center transition-all duration-700"
              style={{
                gap: scrolled ? '0.5rem' : '2.5rem'
              }}
            >
              {[
                { id: 'home', label: 'Home', href: '#hero' },
                { id: 'technology', label: 'Technology', href: '#technology' },
                { id: 'solutions', label: 'Solutions', href: '#problems' },
                { id: 'comparison', label: 'Comparison', href: '#comparison' },
                { id: 'applications', label: 'Applications', href: '#applications' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className="relative px-4 py-2 rounded-full transition-all duration-300"
                  style={{
                    color: activeSection === item.id ? '#00E5FF' : 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    background: activeSection === item.id && scrolled 
                      ? 'rgba(0, 229, 255, 0.1)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (scrolled) {
                      e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
                    }
                    e.currentTarget.style.color = '#00E5FF';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              className="font-semibold transition-all duration-500 rounded-full"
              style={{
                padding: scrolled ? '0.5rem 1.25rem' : '0.625rem 1.5rem',
                background: scrolled ? '#00E5FF' : 'transparent',
                border: scrolled ? 'none' : '2px solid #00E5FF',
                color: scrolled ? '#0A1929' : '#00E5FF',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                boxShadow: scrolled ? '0 4px 20px rgba(0, 229, 255, 0.4)' : 'none'
              }}
              onMouseEnter={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1.05,
                  boxShadow: scrolled 
                    ? '0 6px 30px rgba(0, 229, 255, 0.6)'
                    : '0 4px 20px rgba(0, 229, 255, 0.3)',
                  duration: 300
                });
              }}
              onMouseLeave={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1,
                  boxShadow: scrolled 
                    ? '0 4px 20px rgba(0, 229, 255, 0.4)'
                    : '0 0 0 rgba(0, 229, 255, 0)',
                  duration: 300
                });
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div id="hero"><Hero /></div>
      <div id="technology"><TechnologySection /></div>
      <div id="problems"><ProblemsSection /></div>
      <div id="comparison"><ComparisonSection /></div>
      <div id="applications"><ApplicationsSection /></div>
      <Footer />
    </div>
  );
}

export default App;

```

# src\assets\react.svg

This is a file of the type: SVG Image

# src\components\3d\DataStream.jsx

```jsx
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

```

# src\components\3d\LightBeam.jsx

```jsx
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

```

# src\components\3d\LightParticles.jsx

```jsx
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function LightParticles({ count = 2000 }) {
  const particles = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00d4ff" />
    </points>
  );
}

```

# src\components\ApplicationsSection.jsx

```jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

export default function ApplicationsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const cardsRef = useRef(null);

  useEffect(() => {
    if (inView && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.app-card');
      anime({
        targets: cards,
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
      });
    }
  }, [inView]);

  const applications = [
    {
      title: 'Smart Homes',
      description: 'Connect all IoT devices through your lighting system',
      color: '#00d4ff'
    },
    {
      title: 'Hospitals',
      description: 'Safe communication without RF interference with medical equipment',
      color: '#00ff88'
    },
    {
      title: 'Aircraft',
      description: 'In-flight connectivity without electromagnetic interference',
      color: '#ff00ff'
    },
    {
      title: 'Underwater',
      description: 'Light travels better in water than radio waves',
      color: '#ffaa00'
    },
    {
      title: 'Retail',
      description: 'Location-based services and targeted advertising through lights',
      color: '#ff0066'
    },
    {
      title: 'Industrial',
      description: 'Reliable communication in RF-sensitive manufacturing environments',
      color: '#00ffff'
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-text">Applications</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Transforming industries with light-based communication
        </p>

        {/* Application Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="app-card glow-card p-8 rounded-xl opacity-0 group cursor-pointer"
            >
              <div 
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: `${app.color}20`,
                  boxShadow: `0 0 20px ${app.color}40`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: app.color }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{app.title}</h3>
              <p className="text-gray-400 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

# src\components\ComparisonSection.jsx

```jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

export default function ComparisonSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const tableRef = useRef(null);

  useEffect(() => {
    if (inView && tableRef.current) {
      const rows = tableRef.current.querySelectorAll('tr');
      anime({
        targets: rows,
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(80),
        duration: 600,
        easing: 'easeOutQuad'
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-text">LiFi vs WiFi</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          See how LiFi outperforms traditional wireless technology
        </p>

        <div className="overflow-x-auto glow-card rounded-2xl">
          <table ref={tableRef} className="w-full text-left">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="p-6 text-gray-400 font-semibold">Feature</th>
                <th className="p-6 text-cyan-400 font-bold text-xl">LiFi</th>
                <th className="p-6 text-gray-400 font-semibold">WiFi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="opacity-0 hover:bg-cyan-500/5 transition-colors">
                <td className="p-6 font-semibold text-gray-300">Data Transfer Speed</td>
                <td className="p-6 text-green-400 font-bold">Up to 224 Gbps</td>
                <td className="p-6 text-gray-400">Up to 2 Gbps</td>
              </tr>
              <tr className="opacity-0 hover:bg-cyan-500/5 transition-colors">
                <td className="p-6 font-semibold text-gray-300">Bandwidth</td>
                <td className="p-6 text-green-400 font-bold">10,000x larger spectrum</td>
                <td className="p-6 text-gray-400">Limited RF spectrum</td>
              </tr>
              <tr className="opacity-0 hover:bg-cyan-500/5 transition-colors">
                <td className="p-6 font-semibold text-gray-300">Security</td>
                <td className="p-6 text-green-400 font-bold">Highly secure</td>
                <td className="p-6 text-yellow-400">Vulnerable to hacking</td>
              </tr>
              <tr className="opacity-0 hover:bg-cyan-500/5 transition-colors">
                <td className="p-6 font-semibold text-gray-300">Health Impact</td>
                <td className="p-6 text-green-400 font-bold">100% safe</td>
                <td className="p-6 text-red-400">RF radiation concerns</td>
              </tr>
              <tr className="opacity-0 hover:bg-cyan-500/5 transition-colors">
                <td className="p-6 font-semibold text-gray-300">Interference</td>
                <td className="p-6 text-green-400 font-bold">No RF interference</td>
                <td className="p-6 text-yellow-400">Can interfere</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

```

# src\components\Footer.jsx

```jsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">LiFi</h3>
            <p className="text-gray-400">
              Revolutionizing wireless communication through the power of light.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">How It Works</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Specifications</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Research Papers</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Applications</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Smart Homes</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Healthcare</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Industrial</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Commercial</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 LiFi Technology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

# src\components\Hero.jsx

```jsx
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Hero() {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 50, y: 50 });

  // Smooth mouse interpolation
  useEffect(() => {
    let animationFrameId;
    const updateSmoothMouse = () => {
      setSmoothMouse(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08
      }));
      animationFrameId = requestAnimationFrame(updateSmoothMouse);
    };
    updateSmoothMouse();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  useEffect(() => {
    // Smooth entrance animations
    anime.timeline()
      .add({
        targets: '.hero-badge',
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.hero-title span',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(80),
        duration: 1200,
        easing: 'easeOutExpo'
      }, '-=500')
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=800')
      .add({
        targets: '.hero-description',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=700')
      .add({
        targets: '.hero-cta',
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.95, 1],
        delay: anime.stagger(100),
        duration: 900,
        easing: 'easeOutExpo'
      }, '-=600')
      .add({
        targets: '.hero-stat',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
      }, '-=400')
      .add({
        targets: '.floating-element',
        opacity: [0, 1],
        scale: [0.7, 1],
        rotate: [15, 0],
        delay: anime.stagger(150),
        duration: 1500,
        easing: 'easeOutElastic(1, .6)'
      }, '-=600');

    // Continuous floating animation
    anime({
      targets: '.floating-element',
      translateY: [-20, 20],
      duration: 4000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(300)
    });

    // Light particles
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1.5;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: rgba(0, 229, 255, ${Math.random() * 0.4 + 0.3});
        border-radius: 50%;
        pointer-events: none;
        filter: blur(1px);
        box-shadow: 0 0 ${size * 3}px rgba(0, 229, 255, 0.6);
      `;
      heroRef.current?.appendChild(particle);

      anime({
        targets: particle,
        translateY: [0, -150],
        translateX: [0, (Math.random() - 0.5) * 100],
        opacity: [0, 0.8, 0],
        scale: [0, 1.5, 0],
        duration: 4000,
        easing: 'easeOutQuad',
        complete: () => particle.remove()
      });
    };

    const particleInterval = setInterval(createParticle, 400);
    return () => clearInterval(particleInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0A0E27 0%, #0D1229 40%, #151B35 100%)'
      }}
    >
      {/* Smooth animated mesh gradient */}
      <div 
        className="absolute inset-0 opacity-50 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(circle 800px at ${smoothMouse.x}% ${smoothMouse.y}%, rgba(0, 229, 255, 0.15) 0%, transparent 70%),
            radial-gradient(circle 600px at ${100 - smoothMouse.x}% ${smoothMouse.y}%, rgba(139, 92, 246, 0.12) 0%, transparent 70%),
            radial-gradient(circle 900px at ${smoothMouse.x}% ${100 - smoothMouse.y}%, rgba(6, 182, 212, 0.08) 0%, transparent 70%)
          `
        }}
      />

      {/* Animated gradient orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.4), transparent 70%)',
          left: `${smoothMouse.x - 20}%`,
          top: `${smoothMouse.y - 20}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 229, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `translate(${(smoothMouse.x - 50) * 0.02}px, ${(smoothMouse.y - 50) * 0.02}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />

      {/* Floating cards - Right side */}
      <div className="absolute right-0 top-1/4 w-1/2 h-3/4 pointer-events-none hidden lg:block">
        {/* Speed Card */}
        <div 
          className="floating-element absolute top-20 right-24 w-72 h-52 rounded-2xl opacity-0"
          style={{
            background: 'rgba(0, 229, 255, 0.06)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            boxShadow: '0 25px 50px rgba(0, 229, 255, 0.15)',
            transform: `perspective(1000px) rotateY(-12deg) rotateX(5deg) translateX(${(smoothMouse.x - 50) * 0.3}px) translateY(${(smoothMouse.y - 50) * 0.2}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wider opacity-70">Speed</div>
              <div className="text-5xl font-bold text-white mb-1">224</div>
              <div className="text-cyan-300 text-sm">Gbps Maximum</div>
            </div>
            <div className="h-16 rounded-xl overflow-hidden" 
                 style={{ background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.3) 0%, rgba(0, 180, 255, 0.15) 100%)' }}>
              <div className="h-full bg-gradient-to-r from-cyan-400/50 to-transparent animate-pulse" style={{ width: '85%' }} />
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div 
          className="floating-element absolute bottom-28 right-36 w-64 h-44 rounded-2xl opacity-0"
          style={{
            background: 'rgba(139, 92, 246, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
            transform: `perspective(1000px) rotateY(-15deg) rotateX(-5deg) translateX(${(smoothMouse.x - 50) * 0.25}px) translateY(${(smoothMouse.y - 50) * 0.15}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <div className="p-6 h-full flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-bold text-lg mb-1">100% Secure</div>
            <div className="text-purple-300 text-xs opacity-80">No RF interference</div>
          </div>
        </div>

        {/* Range Card */}
        <div 
          className="floating-element absolute top-1/2 right-12 w-40 h-40 rounded-xl opacity-0"
          style={{
            background: 'rgba(6, 182, 212, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            boxShadow: '0 15px 30px rgba(6, 182, 212, 0.2)',
            transform: `perspective(1000px) rotateY(-20deg) rotateX(8deg) translateX(${(smoothMouse.x - 50) * 0.2}px) translateY(${(smoothMouse.y - 50) * 0.1}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <div className="p-5 h-full flex flex-col justify-center">
            <div className="text-cyan-300 text-xs mb-1 opacity-70">Range</div>
            <div className="text-3xl font-bold text-white">10m</div>
            <div className="text-cyan-400 text-xs mt-1 opacity-60">Optimal</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-24">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 opacity-0 transition-all duration-300 hover:scale-105 cursor-pointer"
               style={{
                 background: 'rgba(0, 229, 255, 0.1)',
                 border: '1px solid rgba(0, 229, 255, 0.3)',
                 backdropFilter: 'blur(10px)'
               }}>
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">Next-Gen Wireless</span>
          </div>

          {/* Title */}
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6">
            <span className="inline-block opacity-0" style={{ color: '#FFFFFF' }}>Wireless </span>
            <span className="inline-block opacity-0" 
                  style={{ 
                    background: 'linear-gradient(135deg, #00E5FF 0%, #06B6D4 50%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(0, 229, 255, 0.4))'
                  }}>
              Through 
            </span>
            <br />
            <span className="inline-block opacity-0" style={{ color: '#FFFFFF' }}>Light</span>
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle opacity-0 mb-6">
            <p className="text-xl lg:text-2xl text-gray-300 font-normal leading-relaxed">
              Experience <span className="text-cyan-400 font-semibold">LiFi</span> — high-speed, secure data transmission powered by visible light
            </p>
          </div>

          {/* Description */}
          <div className="hero-description opacity-0 mb-10">
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl">
              Revolutionary wireless communication that's 100x faster than WiFi, completely secure, and environmentally safe.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button 
              className="hero-cta opacity-0 group relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00E5FF 0%, #06B6D4 100%)',
                color: '#0A0E27',
                boxShadow: '0 10px 40px rgba(0, 229, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 229, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 229, 255, 0.3)';
              }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Technology
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button 
              className="hero-cta opacity-0 group px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span className="flex items-center gap-2">
                Watch Demo
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 lg:gap-10 pt-8 border-t border-white/10">
            <div className="hero-stat opacity-0 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">224 Gbps</div>
              <div className="text-xs lg:text-sm text-gray-400">Peak Speed</div>
            </div>
            <div className="hero-stat opacity-0 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">99.9%</div>
              <div className="text-xs lg:text-sm text-gray-400">Uptime</div>
            </div>
            <div className="hero-stat opacity-0 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">10m</div>
              <div className="text-xs lg:text-sm text-gray-400">Range</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>
    </div>
  );
}

```

# src\components\ProblemsSection.jsx

```jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

export default function ProblemsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const problemsRef = useRef(null);

  useEffect(() => {
    if (inView && problemsRef.current) {
      const items = problemsRef.current.querySelectorAll('.problem-item');
      anime({
        targets: items,
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }, [inView]);

  const problems = [
    {
      problem: 'WiFi Radiation Concerns',
      solution: 'LiFi uses harmless visible light instead of radio waves',
      impact: 'Safe for prolonged exposure in homes, offices, and hospitals'
    },
    {
      problem: 'Network Congestion',
      solution: 'Utilizes the vast visible light spectrum (10,000x larger than RF)',
      impact: 'Unlimited bandwidth potential for multiple devices'
    },
    {
      problem: 'Security Vulnerabilities',
      solution: 'Light cannot pass through walls, creating natural barriers',
      impact: 'Prevents external hacking and unauthorized access'
    },
    {
      problem: 'Slow Data Speeds',
      solution: 'Achieves speeds up to 224 Gbps',
      impact: '100x faster than current WiFi technology'
    },
    {
      problem: 'RF Interference',
      solution: 'No electromagnetic interference with other devices',
      impact: 'Perfect for aircraft, hospitals, and industrial settings'
    },
    {
      problem: 'Energy Consumption',
      solution: 'Uses existing LED infrastructure',
      impact: 'Dual-purpose lighting and data transmission reduces power usage'
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
            style={{
              left: `${(i * 5)}%`,
              height: '100%',
              animation: `pulse ${2 + i * 0.2}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-text">Problems & Solutions</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Addressing critical challenges in modern wireless communication
        </p>

        <div ref={problemsRef} className="space-y-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="problem-item glow-card p-8 rounded-xl opacity-0 grid md:grid-cols-3 gap-6"
            >
              <div>
                <h3 className="text-red-400 font-semibold mb-2 text-sm uppercase tracking-wider">Problem</h3>
                <p className="text-xl font-bold text-white">{item.problem}</p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">LiFi Solution</h3>
                <p className="text-lg text-gray-300">{item.solution}</p>
              </div>
              <div>
                <h3 className="text-green-400 font-semibold mb-2 text-sm uppercase tracking-wider">Impact</h3>
                <p className="text-base text-gray-400">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

# src\components\TechnologySection.jsx

```jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

export default function TechnologySection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const cardsRef = useRef(null);

  useEffect(() => {
    if (inView && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.tech-card');
      anime({
        targets: cards,
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }
  }, [inView]);

  const technologies = [
    {
      title: 'High-Speed Data',
      description: 'Transmit data at speeds up to 224 Gbps through visible light spectrum',
      icon: '⚡'
    },
    {
      title: 'Secure Connection',
      description: 'Light cannot penetrate walls, ensuring your data stays within physical boundaries',
      icon: '🔒'
    },
    {
      title: 'Energy Efficient',
      description: 'Uses LED technology that consumes less power than traditional wireless systems',
      icon: '🌱'
    },
    {
      title: 'No RF Interference',
      description: 'Safe for hospitals, aircraft, and RF-sensitive environments',
      icon: '🏥'
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-text">How It Works</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          LiFi uses LED bulbs to transmit data through light waves, providing a revolutionary alternative to traditional WiFi
        </p>

        {/* Technology Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card glow-card p-6 rounded-xl opacity-0"
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-300">{tech.title}</h3>
              <p className="text-gray-400 leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glow-card p-6 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">224 Gbps</div>
            <div className="text-gray-400">Max Speed</div>
          </div>
          <div className="glow-card p-6 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">100x</div>
            <div className="text-gray-400">Faster than WiFi</div>
          </div>
          <div className="glow-card p-6 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">0%</div>
            <div className="text-gray-400">RF Interference</div>
          </div>
          <div className="glow-card p-6 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-400">Secure</div>
          </div>
        </div>
      </div>
    </section>
  );
}

```

# src\index.css

```css
/* FONTS MUST BE FIRST */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* Then Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Animations */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  33% { 
    transform: translateY(-30px) rotate(10deg); 
  }
  66% { 
    transform: translateY(-15px) rotate(-10deg); 
  }
}

@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 229, 255, 0.6);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #000000;
  color: #ffffff;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #00d4ff, #0066ff);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #00e4ff, #0076ff);
}

.gradient-text {
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 50%, #6600ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

.light-ray {
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(180deg, transparent, #00d4ff, transparent);
  animation: ray-fall 3s linear infinite;
  opacity: 0.6;
}

@keyframes ray-fall {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.glow-card {
  position: relative;
  background: rgba(0, 20, 40, 0.5);
  border: 1px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;
}

.glow-card:hover {
  border-color: rgba(0, 212, 255, 0.6);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
  transform: translateY(-5px);
}

.glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 212, 255, 0.1), transparent 40%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.glow-card:hover::before {
  opacity: 1;
}


@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  33% { 
    transform: translateY(-30px) rotate(10deg); 
  }
  66% { 
    transform: translateY(-15px) rotate(-10deg); 
  }
}

@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}


@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

@keyframes pulse-beam {
  0%, 100% { 
    opacity: 0.3;
    transform: scaleY(1);
  }
  50% { 
    opacity: 0.6;
    transform: scaleY(1.1);
  }
}

```

# src\main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

# vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})

```

