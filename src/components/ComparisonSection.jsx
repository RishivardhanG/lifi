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
