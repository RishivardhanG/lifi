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
