import React from 'react';
import { motion } from 'framer-motion';

// --- 1. UI COMPONENTS (Exact Style Requested) ---

// The "Screenshot Style" Card
const ImpactCard = ({ label, value, desc, icon, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative overflow-hidden bg-[#05080a] border border-green-500/20 rounded-xl p-8 group hover:border-green-500/50 transition-all duration-500 h-full"
  >
    {/* Watermark Icon (Top Right) */}
    <div className="absolute -top-6 -right-6 text-green-500/5 group-hover:text-green-500/10 transition-colors transform rotate-12 scale-[2.5] pointer-events-none">
       {icon}
    </div>
    
    <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-green-500 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
           {label}
        </h3>
        <div className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
           {value}
        </div>
        <p className="text-slate-400 text-sm leading-relaxed font-light">
           {desc}
        </p>
    </div>
  </motion.div>
);

// Technical Specification Row
const TechSpecRow = ({ label, value, detail }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded transition-colors">
     <div className="text-slate-400 text-sm font-medium mb-1 md:mb-0">{label}</div>
     <div className="text-right">
        <div className="text-white font-mono font-bold text-sm">{value}</div>
        <div className="text-[10px] text-green-500/60 uppercase tracking-wider">{detail}</div>
     </div>
  </div>
);

// Section Header Module
const ModuleHeader = ({ number, title, subtitle }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
       <div className="h-px w-8 bg-green-500"></div>
       <span className="text-green-500 font-mono text-xs tracking-widest uppercase">
          Module {number}
       </span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
       {title}
    </h2>
    <p className="text-lg text-slate-400 max-w-3xl leading-relaxed border-l-2 border-white/10 pl-6">
       {subtitle}
    </p>
  </div>
);

// Visual Terminal Component
const TerminalWindow = () => (
  <div className="w-full bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden font-mono text-sm shadow-2xl">
    <div className="bg-white/5 px-4 py-2 flex gap-2 border-b border-white/5 items-center">
      <div className="flex gap-2">
         <div className="w-3 h-3 rounded-full bg-red-500/50" />
         <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
         <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="ml-auto text-xs text-slate-500 opacity-50">/sys/lifi_core/receiver_log</div>
    </div>
    <div className="p-6 space-y-2 text-slate-300">
      <div className="text-slate-500"> {'>'} Hardware: GL5528 Photocell detected.</div>
      <div className="text-slate-500"> {'>'} ADC Resolution: 10-bit [0-1023].</div>
      <br />
      <div className="flex gap-2">
        <span className="text-green-400">$</span>
        <span className="animate-pulse">init_sequence --capture</span>
      </div>
      <div className="mt-2 pl-2 border-l border-white/10 text-xs text-slate-500">
         Bitstream: 01001000 01100101 01101100 01101100...
      </div>
      <div className="mt-4 p-4 bg-green-900/10 border border-green-500/30 rounded text-green-400">
         <strong>[DECODED OUTPUT]</strong>: "Hello World"
         <div className="text-[10px] text-green-500/60 mt-2 font-bold">SIGNAL STRENGTH: 98% | LATENCY: 4ms</div>
      </div>
    </div>
  </div>
);

// --- 2. MAIN PAGE CONTENT ---

const ProjectDetails = () => {
  return (
    <div className="min-h-screen bg-[#02040a] selection:bg-green-500 selection:text-black font-sans">
      
      {/* HEADER SECTION */}
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
         
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/20 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-mono tracking-widest uppercase">Sustainable Tech • 2026</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.05]">
               Li-Fi <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Ecosystem</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
               A comprehensive engineering solution replacing Radio Frequency (RF) with <strong>Visible Light Communication (VLC)</strong>. We merge high-speed data transmission with environmental sustainability.
            </p>
         </motion.div>
      </header>


      {/* --- MODULE 1: SUSTAINABILITY (The Specific Grid UI) --- */}
      <section className="py-20 bg-[#030507] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <ModuleHeader 
               number="01" 
               title="Sustainable Impact" 
               subtitle="Our solution directly addresses the global crisis of 'Invisible Pollution' (RF Radiation) and Electronic Waste, aligning with UN Sustainable Development Goals."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <ImpactCard 
                  label="Biosphere Safety"
                  value="100% Safe"
                  desc="Utilizes the Visible Light Spectrum (400-800 THz). Unlike RF radiation, Li-Fi does not disrupt the navigational systems of birds/bees or pose health risks to humans."
                  icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19h20L12 2zm0 3.8L19.2 17H4.8L12 5.8zM11 10v2h2v-2h-2zm0 4v2h2v-2h-2z"/></svg>}
                  delay={0.1}
               />
               <ImpactCard 
                  label="E-Waste Reduction"
                  value="No Copper"
                  desc="Eliminates the need for extensive, toxic copper cabling. Li-Fi piggybacks on existing LED infrastructure, transforming every lightbulb into a data access point."
                  icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>}
                  delay={0.2}
               />
               <ImpactCard 
                  label="Carbon Footprint"
                  value="Low Energy"
                  desc="Traditional routers consume ~9W constantly. Li-Fi modulation requires negligible extra power over standard room lighting, significantly reducing global energy demand."
                  icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>}
                  delay={0.3}
               />
            </div>
         </div>
      </section>


      {/* --- MODULE 2: ENGINEERING (Deep Info) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <ModuleHeader 
            number="02" 
            title="System Architecture" 
            subtitle="A deep dive into the physics of On-Off Keying (OOK) modulation and the hardware logic governing photon-based data transmission."
         />

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: The Narrative / Logic */}
            <div className="space-y-12">
               
               <div className="relative pl-8 border-l border-green-500/20">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <h3 className="text-xl font-bold text-white mb-2">1. Binary Encoding & Modulation</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     The system begins with a text string (e.g., "Hello"). The Microcontroller converts this ASCII data into a binary stream (0s and 1s). We utilize <strong>Pulse Width Modulation (PWM)</strong> to switch the Laser Diode ON (High) and OFF (Low) at frequencies in the kilohertz range—imperceptible to the human eye.
                  </p>
               </div>

               <div className="relative pl-8 border-l border-green-500/20">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <h3 className="text-xl font-bold text-white mb-2">2. The Optical Channel</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     Unlike WiFi which uses 2.4GHz/5GHz radio waves, our system transmits data via photons in the <strong>Visible Light Spectrum (400-800 THz)</strong>. This provides a bandwidth capacity 10,000 times greater than the RF spectrum, completely immune to electromagnetic interference.
                  </p>
               </div>

               <div className="relative pl-8 border-l border-green-500/20">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <h3 className="text-xl font-bold text-white mb-2">3. Photodetection & Decoding</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     The receiver uses a <strong>Light Dependent Resistor (LDR)</strong> in a voltage divider circuit. Fluctuations in light intensity cause voltage drops, which the Receiver Arduino reads via its Analog-to-Digital Converter (ADC). Thresholding algorithms convert these analog signals back into digital binary, reconstructing the original message.
                  </p>
               </div>

            </div>

            {/* Right: Technical Specs & Comparisons */}
            <div className="bg-[#05080a] border border-white/10 rounded-xl p-6">
               <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                  Technical Specifications
               </h3>
               
               <div className="space-y-1">
                  <TechSpecRow label="Light Source" value="Laser Diode" detail="650nm Wavelength" />
                  <TechSpecRow label="Detector" value="GL5528 LDR" detail="Photo-Resistive" />
                  <TechSpecRow label="Modulation" value="OOK / PWM" detail="On-Off Keying" />
                  <TechSpecRow label="Operating Voltage" value="5V DC" detail="TTL Logic Level" />
                  <TechSpecRow label="Security" value="Line-of-Sight" detail="Physical Layer Security" />
               </div>

               <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">RF vs Li-Fi Comparison</div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                     <div className="w-[10%] h-full bg-red-500" title="WiFi Bandwidth"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-4">
                     <span>WiFi Spectrum (Limited)</span>
                  </div>

                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                     <div className="w-full h-full bg-green-500" title="Li-Fi Bandwidth"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-green-500">
                     <span>Li-Fi Spectrum (10,000x Wider)</span>
                  </div>
               </div>
            </div>

         </div>
      </section>


      {/* --- MODULE 3: PROOF OF CONCEPT (Visual) --- */}
      <section className="py-24 bg-[#05080a] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <ModuleHeader 
               number="03" 
               title="MVP Validation" 
               subtitle="We successfully built a working prototype using Arduino microcontrollers. The system transmitted text data over a distance of 2 meters with 100% data integrity."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <div className="p-6 border border-green-500/20 bg-green-900/5 rounded-xl">
                     <h4 className="text-green-400 font-bold mb-2">Test Scenario</h4>
                     <p className="text-slate-400 text-sm">
                        Transmitting the string "Hello World" from Laptop A (Transmitter) to Laptop B (Receiver) using a purely optical channel in a dark room environment.
                     </p>
                  </div>
                  <ul className="space-y-3">
                     {["Zero Electromagnetic Interference detected.", "Power consumption < 0.5 Watts.", "Instantaneous decoding (<12ms latency).", "Physical security verified (Blocking light stops data)."].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <TerminalWindow />
               </div>
            </div>
         </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="py-20 max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-white/10 pt-12">
            
            <div>
               <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Platinum Jubilee High School</h4>
               <p className="text-slate-500 text-sm mb-1">Class 10th Capstone Project</p>
               <p className="text-slate-500 text-sm">January 2026</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               {[
                  { name: "G. Rishivardhan", role: "Team Lead & Research" },
                  { name: "G. Sai Harshith", role: "Hardware Engineering" },
                  { name: "M. Daiwik", role: "Documentation & Analysis" }
               ].map((member, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-xs">
                        {member.name.charAt(0)}
                     </div>
                     <div>
                        <div className="text-white text-sm font-bold">{member.name}</div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-wider">{member.role}</div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
         
         <div className="mt-12 text-center text-slate-600 text-[10px]">
            REFERENCES: IEEE 802.15.7 Standard for Visible Light Communication • UN SDG Goals 09/13.
         </div>
      </footer>

    </div>
  );
};

export default ProjectDetails;