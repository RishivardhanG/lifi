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
