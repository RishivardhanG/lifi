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
