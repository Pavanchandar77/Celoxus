import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, ArrowRight, Cloud, Server, Activity, Globe, Headphones, ChevronRight, Code, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
      {/* Dynamic Master Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
          alt="Enterprise Data Center" 
          className="w-full h-full object-cover opacity-[0.35] mix-blend-screen scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50"></div>
        {/* Deep fade gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-transparent to-transparent"></div>
      </div>

      {/* Advanced Animated Glowing Orbs */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 3 }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[130px] mix-blend-screen pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"
      />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 3, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[130px] mix-blend-screen pointer-events-none animate-[pulse_10s_ease-in-out_infinite_alternate]"
      />

      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 pb-12">
        
        {/* Left Typography Block */}
        <div className="lg:w-3/5 text-left pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-xl mb-10 group cursor-pointer hover:bg-white/10 transition-colors"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="text-sm font-bold tracking-wide">Live: Global Systems Operational</span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-[5.5rem] lg:text-[6rem] font-black font-display tracking-tighter text-white mb-8 leading-[1.05]"
          >
            Cisco Contact Centers. <br className="hidden lg:block" />
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                Built Right.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            We design, deploy, and manage Cisco Webex Contact Centers, Webex Calling, and custom integrations — with zero-downtime implementations by certified architects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 relative z-20"
          >
            <Link to="/products" className="h-16 px-10 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out opacity-50"></div>
              View Our Solutions <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
            <Link to="/contact" className="h-16 px-10 rounded-full bg-transparent border border-slate-600 text-white font-bold hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-3 text-lg backdrop-blur-md">
              <Activity className="w-5 h-5 flex-shrink-0 text-blue-400" /> Get a Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Right Graphical Element - Glassmorphic Server Status */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:block lg:w-2/5 relative"
        >
           <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-900/80 to-[#020617]/90 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden p-8 flex flex-col">
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/20 blur-[80px] rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/20 blur-[80px] rounded-full"></div>
             
             {/* Fake Code / Metrics UI */}
             <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-5">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
               </div>
               <span className="ml-4 text-xs font-mono text-slate-400">root@celoxus-core-v2.0 ~ %</span>
             </div>

             <div className="flex-1 flex flex-col justify-center gap-5">
               {[
                 { icon: <Database className="w-5 h-5 text-indigo-400" />, label: "Database Shards" },
                 { icon: <Cloud className="w-5 h-5 text-blue-400" />, label: "Edge Routing" },
                 { icon: <Shield className="w-5 h-5 text-purple-400" />, label: "Zero-Trust Firewalls" },
                 { icon: <Server className="w-5 h-5 text-emerald-400" />, label: "Contact Center SIP" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                     {item.icon}
                   </div>
                   <div className="flex-1">
                     <div className="text-sm font-bold text-white mb-1.5">{item.label}</div>
                     <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: "100%" }}
                         transition={{ duration: 1.5, delay: 0.8 + (i * 0.2), ease: "easeOut" }}
                         className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full"
                       />
                     </div>
                   </div>
                   <div className="text-emerald-400 font-mono text-xs font-bold pl-2 flex items-center gap-1">
                     <Activity className="w-3 h-3" /> OK
                   </div>
                 </div>
               ))}
             </div>
             
             {/* Bottom glowing connector */}
             <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
               <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Network Backbone</span>
               <span className="inline-flex items-center gap-2 text-indigo-300 font-mono text-sm font-bold shadow-[0_0_15px_rgba(99,102,241,0.3)] bg-indigo-500/20 px-3 py-1.5 rounded-full border border-indigo-500/30">
                 <Globe className="w-4 h-4 animate-spin-slow" /> SYNCED
               </span>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export const TrustBanner = () => {
  return (
    <div className="bg-[#020617] border-b border-slate-800 py-16 relative z-20 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center mb-10 relative z-20">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Trusted by forward-thinking enterprises & IT engineering teams
        </p>
      </div>
      
      {/* Infinite Marquee */}
      <div className="flex w-[200%] gap-24 relative overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-nowrap items-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 w-full justify-around"
        >
          {/* First Set */}
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Cloud className="w-10 h-10" /> VORTEX</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Server className="w-10 h-10" /> SYNTHESIS</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Activity className="w-10 h-10" /> LUMINA</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Globe className="w-10 h-10" /> NEXUS</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Shield className="w-10 h-10" /> VERITAS</div>
          {/* Second Set (Duplicate for smooth infinite scroll) */}
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Cloud className="w-10 h-10" /> VORTEX</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Server className="w-10 h-10" /> SYNTHESIS</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Activity className="w-10 h-10" /> LUMINA</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Globe className="w-10 h-10" /> NEXUS</div>
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter text-slate-100 shrink-0"><Shield className="w-10 h-10" /> VERITAS</div>
        </motion.div>
      </div>
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="py-32 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900 mb-6">
            Transforming complexity into <span className="text-[#2b3c98]">competitive advantage.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            From seamless Webex collaboration to bespoke software integrations, we architect the engines that drive enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group border border-slate-100"
          >
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" alt="Tech" className="w-full h-full object-cover opacity-10 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>
            
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-50/50 to-blue-50/30 rounded-full blur-[80px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg">
              <Headphones className="w-8 h-8 text-[#2b3c98] flex-shrink-0" />
            </div>
            <h3 className="text-3xl font-extrabold font-display text-slate-900 mb-4 relative z-10">Cisco Contact Center Solution</h3>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed relative z-10">
              Next-generation Cisco contact center solutions integrated with real-time AI agents. We map the customer journey for flawless, zero-friction resolution.
            </p>
            <div className="mt-12 relative z-10">
              <Link to="/products" className="inline-flex items-center gap-2 font-bold text-[#2b3c98] hover:text-indigo-800 transition-colors">
                Explore Solutions <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#020617] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-500 group border border-slate-700/50"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.15] mix-blend-overlay group-hover:opacity-[0.25] transition-opacity duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Code className="w-8 h-8 text-white flex-shrink-0" />
              </div>
              <h3 className="text-2xl font-extrabold font-display text-white mb-4">Custom Integration</h3>
              <p className="text-slate-300 leading-relaxed mb-12">
                Bespoke middleware and software adapters driving interoperability across fragmented legacy systems.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-white group-hover:text-indigo-300 transition-colors">
                View Architecture <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#020617] p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500 group border border-slate-800"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 backdrop-blur-md border border-white/20">
                <Activity className="w-8 h-8 text-[#8fa1d5] flex-shrink-0" />
              </div>
              <h3 className="text-2xl font-extrabold font-display text-white mb-4">Contact Center Monitoring</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Proactive alerts and real-time dashboarding for your Cisco infrastructure. Never fly blind again.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group border border-slate-100"
          >
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" alt="Cloud Network" className="w-full h-full object-cover mix-blend-luminosity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>
            
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-purple-50 to-pink-50/50 rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-purple-600"></div>
            <div className="w-16 h-16 rounded-2xl bg-[#2b3c98] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg shadow-[#2b3c98]/30">
              <Cloud className="w-8 h-8 text-white flex-shrink-0" />
            </div>
            <h3 className="text-3xl font-extrabold font-display text-[#2b3c98] mb-4 relative z-10">Cisco Cloud Applications</h3>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed relative z-10">
              Transition smoothly to Webex Calling and cloud-native application ecosystems with our certified deployment engineers.
            </p>
            <div className="mt-12">
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-purple-600 hover:text-purple-800 transition-colors">
                Discover Cloud <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const SplitMission = () => {
  return (
    <section className="py-32 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-bold mb-8">
              <Shield className="w-4 h-4 text-indigo-600 flex-shrink-0" /> Sovereign Delivery
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Engineering trusted by the <span className="text-indigo-600">world's most demanding</span> organizations.
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We don't just supply software. We embed senior architects into your workflow to dissolve technical debt and build resilient, compliance-ready frameworks.
            </p>
            
            <ul className="space-y-8 mb-12">
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Cisco Certification Excellence</h4>
                  <p className="text-slate-600 text-lg">Deep expertise across Voice, Network, and Security domains.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Zero-Downtime Implementations</h4>
                  <p className="text-slate-600 text-lg">Phased rollout methodologies protecting your active revenue streams.</p>
                </div>
              </li>
            </ul>

            <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-indigo-600 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:-translate-y-1">
              Meet Our Architects
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="relative aspect-square w-full max-w-[600px] mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-[3rem] transform rotate-3 scale-105 opacity-50 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-white border border-slate-100 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
                 <div className="h-16 border-b border-slate-100 bg-slate-50/50 flex items-center px-8 gap-3">
                   <div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                   <div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                   <div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                 </div>
                 <div className="flex-1 p-8 relative flex items-center justify-center bg-slate-900 overflow-hidden group">
                     {/* Background Image */}
                     <div className="absolute inset-0 z-0">
                       <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Consulting Architects" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 hue-rotate-[10deg] opacity-40 mix-blend-luminosity" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                     </div>
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik00MCAwTDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-[0.2]"></div>
                     
                     <div className="relative z-10 w-full max-w-sm rounded-[2rem] bg-white/10 border border-white/20 p-6 backdrop-blur-xl shadow-2xl mt-20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#2b3c98] flex items-center justify-center border border-white/20 shadow-xl">
                          <Activity className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-xl">Senior Architects</div>
                          <div className="text-slate-300 font-medium text-sm text-opacity-90">Embedded in your workflow</div>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-6 relative">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "95%" }}
                           transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                           className="absolute top-0 left-0 bottom-0 bg-[#8fa1d5] rounded-full shadow-[0_0_15px_rgba(143,161,213,0.8)]"
                        ></motion.div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="relative py-40 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2850&q=80" alt="Networking" className="w-full h-full object-cover opacity-30 mix-blend-screen sepia-[.1] hue-rotate-[200deg]" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik00MCAwTDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 relative z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full pointer-events-none z-10 mix-blend-screen"></div>
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none z-10 mix-blend-screen"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-8 leading-[1.1]"
        >
          Ready to evolve <br className="hidden md:block" /> your network?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Let's discuss how Celoxus can modernize your contact center with cutting-edge Cisco architecture and custom AI integrations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 hover:scale-[1.03] shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all duration-300 text-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out opacity-50"></div>
            Schedule a Strategy Session <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
