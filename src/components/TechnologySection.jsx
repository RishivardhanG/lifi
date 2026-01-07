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
