import { useEffect, useState } from 'react';
import anime from 'animejs';
import Hero from './components/Hero';
import TechnologySection from './components/TechnologySection';
import ProblemsSection from './components/ProblemsSection';
import ComparisonSection from './components/ComparisonSection';
import ApplicationsSection from './components/ApplicationsSection';
import Footer from './components/Footer';

function App() {
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
