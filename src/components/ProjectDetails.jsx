import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
// For elements that fade in and slide up
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// For staggering children animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// For elements that scale in slightly
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// --- UI COMPONENTS ---

const ImpactCard = ({ label, value, desc, icon }) => (
  <motion.div 
    variants={fadeInUp} // Staggered animation for cards
    whileHover={{ y: -10, borderColor: "rgba(34, 197, 94, 0.4)", boxShadow: "0_0_30px_-10px_rgba(34,197,94,0.15)" }}
    className="relative overflow-hidden bg-[#0a0f14] border border-white/5 rounded-2xl p-8 group transition-all duration-500 h-full cursor-default"
  >
    {/* Background Gradient on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-500" />
    
    <div className="absolute -top-6 -right-6 text-white/5 group-hover:text-green-500/20 transition-colors transform rotate-12 scale-[2.5] pointer-events-none duration-700">
       {icon}
    </div>
    
    <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-green-500 font-mono text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
           {label}
        </h3>
        <div className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
           {value}
        </div>
        <p className="text-slate-400 text-sm leading-relaxed font-light border-t border-white/5 pt-6 mt-auto">
           {desc}
        </p>
    </div>
  </motion.div>
);

const TechSpecRow = ({ label, value, detail }) => (
  <motion.div 
    variants={fadeInUp} // Staggered animation for rows
    className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded transition-colors group cursor-default"
  >
     <div className="text-slate-400 text-sm font-medium mb-1 md:mb-0 group-hover:text-green-400 transition-colors">{label}</div>
     <div className="text-right">
        <div className="text-white font-mono font-bold text-sm">{value}</div>
        <div className="text-[10px] text-green-500/60 uppercase tracking-wider">{detail}</div>
     </div>
  </motion.div>
);

const ModuleHeader = ({ number, title, subtitle }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of element is in view
    variants={staggerContainer}
    className="mb-20"
  >
    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
       <div className="h-px w-12 bg-gradient-to-r from-green-500 to-transparent"></div>
       <span className="text-green-500 font-mono text-xs tracking-[0.3em] uppercase">
          Module {number}
       </span>
    </motion.div>
    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
       {title}
    </motion.h2>
    <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl leading-relaxed border-l-2 border-green-500/20 pl-8">
       {subtitle}
    </motion.p>
  </motion.div>
);

const TerminalWindow = () => (
  <motion.div 
    variants={scaleIn} // Scales in the entire terminal window
    className="w-full bg-[#090c10] rounded-xl border border-white/10 overflow-hidden font-mono text-sm shadow-2xl relative group"
  >
    {/* Dynamic Glow effect behind terminal on hover */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"
    />
    
    <div className="relative bg-[#0d1117]">
        <div className="bg-white/5 px-4 py-3 flex gap-2 border-b border-white/5 items-center">
          <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
             <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="ml-auto text-[10px] text-slate-500 opacity-50 uppercase tracking-wider">/sys/lifi_core/receiver_log</div>
        </div>
        <div className="p-6 space-y-3 text-slate-300 font-mono text-xs md:text-sm">
          <div className="text-slate-500"> {'>'} Hardware: GL5528 Photocell detected... <span className="text-green-500">OK</span></div>
          <div className="text-slate-500"> {'>'} ADC Resolution: 10-bit [0-1023].</div>
          <br />
          <div className="flex gap-2">
            <span className="text-green-400">$</span>
            <span>init_sequence --capture</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} // Blinking cursor
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-2 h-4 bg-green-500 block"
            />
          </div>
          <div className="mt-2 pl-2 border-l border-white/10 text-xs text-slate-500 break-all">
             Bitstream: 01001000 01100101 01101100 01101100 01101111...
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 p-4 bg-green-900/10 border border-green-500/30 rounded-lg text-green-400 relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
             <strong>[DECODED OUTPUT]</strong>: "Hello"
             <div className="text-[10px] text-green-500/60 mt-2 font-bold flex items-center gap-4">
                <span>SIGNAL: 98%</span>
                <span>LATENCY: 4ms</span>
             </div>
          </motion.div>
        </div>
    </div>
  </motion.div>
);

const ProjectDetails = () => {
  return (
    <div className="min-h-screen bg-[#02040a] selection:bg-green-500 selection:text-black font-sans overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
         {/* Animated Background Blur (subtle pulse) */}
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" 
         />
         
         <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer} // Staggered animation for header elements
            className="relative"
         >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
                <span className="text-xs text-slate-300 font-mono tracking-widest uppercase">Sustainable Tech • 2026</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1] max-w-4xl">
               Li-Fi <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-600">Ecosystem</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl leading-relaxed">
               A comprehensive engineering solution replacing Radio Frequency (RF) with <strong>Visible Light Communication (VLC)</strong>. We merge high-speed data transmission with environmental sustainability.
            </motion.p>
         </motion.div>
      </header>

      {/* --- MODULE 1: SUSTAINABILITY (ID: applications) --- */}
      <section id="applications" className="py-24 bg-[#030507] border-y border-white/5 relative">
         {/* Subtle radial gradient background */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.02),transparent_70%)] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6">
            <ModuleHeader 
               number="01" 
               title="Sustainable Impact" 
               subtitle="Our solution directly addresses the global crisis of 'Invisible Pollution' (RF Radiation) and Electronic Waste, aligning with UN Sustainable Development Goals."
            />
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is in view
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
               <ImpactCard 
                  label="Biosphere Safety"
                  value="100% Safe"
                  desc="Utilizes the Visible Light Spectrum (400-800 THz). Unlike RF radiation, Li-Fi does not disrupt the navigational systems of birds/bees or pose health risks to humans."
                  icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19h20L12 2zm0 3.8L19.2 17H4.8L12 5.8zM11 10v2h2v-2h-2zm0 4v2h2v-2h-2z"/></svg>}
               />
               <ImpactCard 
                  label="E-Waste Reduction"
                  value="No Copper"
                  desc="Eliminates the need for extensive, toxic copper cabling. Li-Fi piggybacks on existing LED infrastructure, transforming every lightbulb into a data access point."
                  icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>}
               />
               <ImpactCard 
                  label="Carbon Footprint"
                  value="Low Energy"
                  desc="Traditional routers consume ~9W constantly. Li-Fi modulation requires negligible extra power over standard room lighting, significantly reducing global energy demand."
                  icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>}
               />
            </motion.div>
         </div>
      </section>

      {/* --- MODULE 2: ENGINEERING (ID: technology) --- */}
      <section id="technology" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
         {/* Background Decoration: Vertical Line */}
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

         <ModuleHeader 
            number="02" 
            title="System Architecture" 
            subtitle="A deep dive into the physics of On-Off Keying (OOK) modulation and the hardware logic governing photon-based data transmission."
         />

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left: The Narrative (Steps) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="space-y-16"
            >
               {[
                 { title: "Binary Encoding & Modulation", text: "The system begins with a text string (e.g., 'Hello'). The Microcontroller converts this ASCII data into a binary stream (0s and 1s). We utilize Pulse Width Modulation (PWM) to switch the Laser Diode ON (High) and OFF (Low) at frequencies in the kilohertz range—imperceptible to the human eye." },
                 { title: "The Optical Channel", text: "Unlike WiFi which uses 2.4GHz/5GHz radio waves, our system transmits data via photons in the Visible Light Spectrum (400-800 THz). This provides a bandwidth capacity 10,000 times greater than the RF spectrum, completely immune to electromagnetic interference." },
                 { title: "Photodetection & Decoding", text: "The receiver uses a Light Dependent Resistor (LDR) in a voltage divider circuit. Fluctuations in light intensity cause voltage drops, which the Receiver Arduino reads via its Analog-to-Digital Converter (ADC). Thresholding algorithms convert these analog signals back into digital binary, reconstructing the original message." }
               ].map((item, index) => (
                  <motion.div key={index} variants={fadeInUp} className="relative pl-8 border-l border-white/10 group hover:border-green-500/50 transition-colors">
                      {/* Animated bullet point */}
                      <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#02040a] border border-green-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{index + 1}. {item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
               ))}
            </motion.div>

            {/* Right: Technical Specs - PROFESSIONAL UPGRADE */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="sticky top-32" // Makes the card stick during scroll
            >
               {/* THE CARD CONTAINER - Glassmorphism and ambient glow */}
               <div className="relative rounded-2xl border border-white/10 bg-[#0a0f14]/80 backdrop-blur-xl p-8 shadow-2xl shadow-green-900/20 overflow-hidden group">
                  
                  {/* --- VISUAL FX: TOP LIGHT LEAK --- */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 blur-[2px]"></div>
                  
                  {/* --- VISUAL FX: SUBTLE BACKGROUND GLOW (pulsing) --- */}
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/5 rounded-full blur-[80px] pointer-events-none"
                  />

                  <h3 className="text-white font-bold mb-8 flex items-center gap-3 relative z-10">
                     <div className="p-2 bg-gradient-to-br from-green-500/20 to-green-900/10 rounded-lg border border-green-500/20 shadow-[0_0_15px_-3px_rgba(34,197,94,0.3)]">
                       <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                     </div>
                     <span className="tracking-wide">Technical Specifications</span>
                  </h3>
                  
                  <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-1 relative z-10">
                     <TechSpecRow label="Light Source" value="Laser Diode" detail="650nm Wavelength" />
                     <TechSpecRow label="Detector" value="GL5528 LDR" detail="Photo-Resistive" />
                     <TechSpecRow label="Modulation" value="OOK / PWM" detail="On-Off Keying" />
                     <TechSpecRow label="Operating Voltage" value="5V DC" detail="TTL Logic Level" />
                     <TechSpecRow label="Security" value="Line-of-Sight" detail="Physical Layer Security" />
                  </motion.div>

                  <div className="mt-10 pt-8 border-t border-white/5 relative z-10">
                     <div className="text-xs text-slate-500 uppercase tracking-widest mb-5 font-semibold">Spectrum Bandwidth Comparison</div>
                     
                     {/* Animated Bars with Glows and labels */}
                     <div className="mb-6 group/bar">
                        <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                           <span>WiFi (RF)</span>
                           <span className="opacity-50">Limited Spectrum</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "10%" }} 
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
                           />
                        </div>
                     </div>

                     <div className="group/bar">
                        <div className="flex justify-between text-[10px] text-green-400 mb-2 font-bold">
                           <span>Li-Fi (VLC)</span>
                           <span className="text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">10,000x Wider</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "100%" }} 
                              transition={{ duration: 1.5, delay: 0.7 }}
                              className="h-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_15px_rgba(34,197,94,0.6)] relative" 
                           >
                              {/* Shimmer Effect inside the bar */}
                              <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/20 to-transparent opacity-50"></div>
                           </motion.div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

         </div>
      </section>

      {/* --- MODULE 3: PROOF OF CONCEPT (ID: prototype) --- */}
      <section id="prototype" className="py-24 bg-[#05080a] border-y border-white/5 relative overflow-hidden">
         {/* Subtle radial gradient background */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03),transparent_70%)] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ModuleHeader 
               number="03" 
               title="MVP Validation" 
               subtitle="We successfully built a working prototype using Arduino microcontrollers. The system transmitted text data over a distance of 2 meters with 100% data integrity."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                  className="space-y-8"
               >
                  <motion.div variants={fadeInUp} className="p-8 border border-green-500/20 bg-gradient-to-r from-green-900/10 to-transparent rounded-2xl backdrop-blur-sm shadow-md">
                     <h4 className="text-green-400 font-bold mb-3 tracking-wide">Test Scenario</h4>
                     <p className="text-slate-400 text-sm leading-relaxed">
                        Transmitting the string "Hello World" from Laptop A (Transmitter) to Laptop B (Receiver) using a purely optical channel in a dark room environment.
                     </p>
                  </motion.div>
                  
                  <motion.ul variants={staggerContainer} className="space-y-4">
                     {["Zero Electromagnetic Interference detected.", "Power consumption < 0.5 Watts.", "Instantaneous decoding (<12ms latency).", "Physical security verified (Blocking light stops data)."].map((item, i) => (
                        <motion.li variants={fadeInUp} key={i} className="flex items-center gap-4 text-sm text-slate-300">
                           <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                           {item}
                        </motion.li>
                     ))}
                  </motion.ul>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 50, rotateY: 10 }} // Subtle 3D rotation on entry
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ perspective: 1000 }} // For the 3D effect
               >
                  <TerminalWindow />
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- FOOTER (IDs: team, contact) --- */}
      <footer id="team" className="py-24 max-w-7xl mx-auto px-6 relative">
         <div id="contact" className="absolute -top-20"></div> {/* Hidden anchor for contact since it shares the footer space */}

         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-white/10 pt-16"
         >
            <div>
               <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-4">Platinum Jubilee High School</h4>
               <p className="text-slate-500 text-sm mb-1 font-mono">Class 10th Capstone Project</p>
               <p className="text-slate-500 text-sm font-mono">January 2026</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
               {[
                  { name: "Rishivardhan Goranthala", role: "Team Lead, Research & Software" },
                  { name: "Bhuvana Siri Yerramaneni", role: "Hardware & Documentation" },
                  { name: "Sanavi Donthurala ", role: "Documentation & Analysis" }
               ].map((member, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                    key={i} 
                    className="flex items-center gap-4 group"
                  >
                     <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-sm group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all duration-300">
                        {member.name.charAt(0)}
                     </div>
                     <div>
                        <div className="text-white text-sm font-bold group-hover:text-green-400 transition-colors">{member.name}</div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-wider mt-0.5">{member.role}</div>
                     </div>
                  </motion.div>
               ))}
            </div>

         </motion.div>
         
         <div className="mt-16 text-center text-slate-600 text-[10px] uppercase tracking-widest opacity-60">
            REFERENCES: IEEE 802.15.7 Standard for Visible Light Communication • UN SDG Goals 09/13.
         </div>
      </footer>

    </div>
  );
};

export default ProjectDetails;