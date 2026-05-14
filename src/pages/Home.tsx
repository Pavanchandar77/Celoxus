import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlayCircle, ArrowRight, Cloud, Server, Activity, Globe, Headphones, ChevronRight, Code, Shield, Database, Network, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const bgMainY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgGridY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b1120] overflow-hidden">
      {/* Dynamic Master Background */}
      <div className="absolute inset-0 z-0">
        {/* Modern Engineering Grid */}
        <motion.div 
          style={{ y: bgGridY }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -top-[20%] h-[140%]"
        />
        
        {/* Subtle moving particles/dots layer */}
        <motion.div 
          style={{ y: bgMainY }}
          className="absolute inset-0 bg-[radial-gradient(#049fd9_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-10 animate-[pulse_10s_ease-in-out_infinite] -top-[20%] h-[140%]"
        />

        {/* Deep fade gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent"></div>
      </div>

      {/* Advanced Animated Glowing Orbs for Cisco Blue Theme */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-[#049fd9] blur-[150px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }} 
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-blue-600 blur-[150px] mix-blend-screen pointer-events-none"
      />

      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 pb-12">
        
        {/* Left Typography Block */}
        <div className="lg:w-3/5 text-left pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#049fd9]/20 border border-[#049fd9]/30 text-[#049fd9] shadow-xl mb-10 group cursor-pointer hover:bg-[#049fd9]/30 transition-colors backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold tracking-widest uppercase">Cisco Premier Partner <span className="ml-1 text-emerald-400/80 text-[10px] hidden sm:inline">LIVE STATUS: NOMINAL</span></span>
            <ChevronRight className="w-4 h-4 text-[#049fd9]/70 group-hover:text-[#049fd9] transition-colors" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black font-display tracking-tighter text-white mb-8 leading-[0.95]"
          >
            Engineering<br />
            <span className="relative inline-block">
              <span className="absolute -inset-4 bg-[#049fd9]/20 blur-3xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-[#049fd9] to-blue-400">
                Global Edge.
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            Celoxus architectures power the world's most critical logistics, finance, and enterprise networks with CCIE-certified precision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 relative z-20"
          >
            <Link to="/products" className="h-16 px-10 rounded-full bg-[#049fd9] text-white font-bold hover:bg-[#037bb0] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-[0_15px_40px_rgba(4,159,217,0.4)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
              Initialize Architecture <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
            <Link to="/contact" className="h-16 px-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg">
              <Activity className="w-5 h-5 flex-shrink-0 text-[#049fd9]" /> Book an Engineer
            </Link>
          </motion.div>
        </div>

        {/* Hero Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:block lg:w-2/5 relative"
        >
          <div className="relative w-full aspect-[4/5] overflow-visible">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#049fd9]/30 to-blue-300/10 rounded-[3rem] blur-3xl transform -rotate-3"></div>
             
             {/* 2D Technical Illustration */}
             <div className="absolute inset-0 rounded-[4rem] overflow-hidden border-4 border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative z-10 bg-[#0f172a] flex items-center justify-center p-12">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#049fd9_1.5px,transparent_1.5px)] bg-[size:30px:30px]"></div>
                
                {/* Central Neural Hub Replacement */}
                <div className="relative w-full h-full flex items-center justify-center">
                   {/* Animated Rings */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[80%] h-[80%] border border-[#049fd9]/20 rounded-full"
                   />
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[60%] h-[60%] border border-[#049fd9]/30 rounded-full border-dashed"
                   />
                   
                   {/* Core Node */}
                   <motion.div 
                     animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 50px rgba(4,159,217,0.3)", "0 0 80px rgba(4,159,217,0.6)", "0 0 50px rgba(4,159,217,0.3)"] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="relative z-10 w-24 h-24 bg-[#049fd9] rounded-3xl flex items-center justify-center"
                   >
                     <Network className="w-12 h-12 text-white" />
                   </motion.div>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-white/10"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const TrustBanner = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="bg-[#0b1120] py-32 relative z-20 overflow-hidden border-y border-white/5">
      {/* 3D Globe Background Layer - Minimalist */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.05] translate-y-10"
        >
           <Globe className="w-[500px] h-[500px] text-[#049fd9] animate-[pulse_6s_ease-in-out_infinite]" />
        </motion.div>

        {/* Gradients to blend globe into edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-[#0b1120] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-black text-[#049fd9] uppercase tracking-[0.4em] mb-4 flex justify-center items-center gap-2"
        >
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </span>
           Industry Leaders
        </motion.p>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Enterprise Solutions Powered by <br/> CCIE-Certified Architects
        </h3>
      </div>
      
      {/* Credentials Band */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 w-full">
          {/* Badge 1 */}
          <motion.div 
             whileHover={{ z: 20, scale: 1.05, rotateY: 5 }}
             style={{ perspective: 1000 }}
             className="flex flex-col items-center gap-3 w-48 text-center shrink-0 cursor-default p-6 bg-[#0b1120]/40 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_20px_40px_-15px_rgba(4,159,217,0.2)] relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#049fd9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 mb-2 shadow-sm border border-white/20">
                <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8 text-[#049fd9]" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" aria-label="Cisco Network Icon">
                   <path d="M 20 50 L 20 80 M 35 30 L 35 80 M 50 10 L 50 80 M 65 30 L 65 80 M 80 50 L 80 80" />
                </svg>
             </div>
             <div className="font-bold text-sm tracking-wide text-white relative z-10">Cisco Premier</div>
             <div className="text-xs text-[#049fd9] font-bold tracking-wider relative z-10 flex items-center gap-1 justify-center">
                CERTIFIED PARTNER
             </div>
          </motion.div>
          
          {/* Badge 2 */}
          <motion.div 
             whileHover={{ z: 20, scale: 1.05 }}
             style={{ perspective: 1000 }}
             className="flex flex-col items-center gap-3 w-48 text-center shrink-0 cursor-default p-6 bg-[#0b1120]/40 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_20px_40px_-15px_rgba(4,159,217,0.2)] relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#049fd9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 mb-2 shadow-sm border border-white/20">
                <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8 text-[#049fd9]" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" aria-label="Cisco System Icon">
                   <path d="M 20 50 L 20 80 M 35 30 L 35 80 M 50 10 L 50 80 M 65 30 L 65 80 M 80 50 L 80 80" />
                </svg>
             </div>
             <div className="font-bold text-sm tracking-wide text-white relative z-10">CCIE Collaboration</div>
             <div className="text-xs text-[#049fd9] font-bold tracking-wider relative z-10">CERTIFIED ARCHITECTS</div>
          </motion.div>

          {/* Badge 3 */}
          <motion.div 
             whileHover={{ z: 20, scale: 1.05, rotateY: -5 }}
             style={{ perspective: 1000 }}
             className="flex flex-col items-center gap-3 w-48 text-center shrink-0 hidden md:flex cursor-default p-6 bg-[#0b1120]/40 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_20px_40px_-15px_rgba(4,159,217,0.2)] relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#049fd9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 mb-2 shadow-sm border border-white/20">
                <Shield className="w-8 h-8 text-[#049fd9]" />
             </div>
             <div className="font-bold text-sm tracking-wide text-white relative z-10">Cisco Advanced</div>
             <div className="text-xs text-[#049fd9] font-bold tracking-wider relative z-10">DATA CENTER</div>
          </motion.div>

          {/* Quote */}
          <div className="flex-1 min-w-[300px] hidden lg:block bg-[#0b1120]/40 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/10 shadow-[0_20px_40px_-15px_rgba(4,159,217,0.2)] relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#049fd9]"></div>
            <p className="italic text-slate-400 font-medium text-sm leading-relaxed relative z-10 ml-2">
              "Celoxus engineered our entire multinational contact center migration with zero downtime. Their CCIE-certified team is unmatched."
            </p>
            <p className="text-xs font-bold text-[#049fd9] mt-4 tracking-widest uppercase relative z-10 ml-2 flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               <span className="text-white">—</span> Director of IT, Fortune 500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="py-32 bg-[#0b1120] relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#049fd9]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Transforming complexity into <span className="text-[#049fd9]">modern advantage.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium">
            From seamless Webex collaboration to bespoke software integrations, we architect the systems that drive enterprise efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-[#1e293b]/40 backdrop-blur-xl p-10 md:p-14 border border-white/10 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/20"
          >
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" alt="Tech" className="w-full h-full object-cover opacity-5 mix-blend-screen group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/90 to-[#0b1120]/50"></div>
            </div>
            
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#049fd9]/20 to-transparent rounded-full blur-[80px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm backdrop-blur-md">
              <Headphones className="w-8 h-8 text-[#049fd9] flex-shrink-0" />
            </div>
            <h3 className="text-3xl font-extrabold font-display text-white mb-4 relative z-10">Webex Contact Center</h3>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed relative z-10">
              Deliver exceptional customer experiences with unified communications and AI-powered journey mapping.
            </p>
            <div className="mt-12 relative z-10">
              <Link to="/products" className="inline-flex items-center gap-2 font-bold text-[#049fd9] hover:text-[#037bb0] transition-colors">
                Explore Platform <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#1e293b]/40 backdrop-blur-xl p-10 md:p-14 border border-white/10 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#049fd9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm backdrop-blur-md">
                <Code className="w-8 h-8 text-[#049fd9] flex-shrink-0" />
              </div>
              <h3 className="text-2xl font-extrabold font-display text-white mb-4">Enterprise APIs</h3>
              <p className="text-slate-400 leading-relaxed mb-12">
                Custom middleware driving interoperability across fragmented legacy architectures.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-[#049fd9] hover:text-[#037bb0] transition-colors">
                View Architecture <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <Link to="/contact" className="block relative overflow-hidden rounded-[2.5rem] bg-[#1e293b]/40 backdrop-blur-xl p-10 md:p-14 border border-white/10 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full h-full"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-screen group-hover:opacity-20 transition-opacity duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-[#0b1120]/40 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm backdrop-blur-md">
                  <Activity className="w-8 h-8 text-[#049fd9] flex-shrink-0" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-white mb-4">Network Ops</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Proactive monitoring and real-time observability for your Cisco infrastructure.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-[#1e293b]/40 backdrop-blur-xl p-10 md:p-14 border border-white/10 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/20"
          >
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" alt="Cloud Network" className="w-full h-full object-cover mix-blend-screen" loading="lazy" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/80 to-transparent"></div>
            </div>
            
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#049fd9]/10 to-[#049fd9]/20 rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-16 h-16 rounded-2xl bg-[#049fd9] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg shadow-[#049fd9]/30">
              <Cloud className="w-8 h-8 text-white flex-shrink-0" />
            </div>
            <h3 className="text-3xl font-extrabold font-display text-white mb-4 relative z-10">Cisco Cloud Migration</h3>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed relative z-10">
              Accelerate your transition to Cisco cloud-native application ecosystems with certified engineering precision.
            </p>
            <div className="mt-12 relative z-10">
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-[#049fd9] hover:text-[#037bb0] transition-colors">
                Discover Services <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const SplitMission = () => {
  const { scrollYProgress } = useScroll();
  const yRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  return (
    <section className="py-32 bg-[#0b1120] overflow-hidden border-t border-white/5 relative">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:34px_34px]"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#049fd9]/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white text-sm font-bold mb-8 border border-white/10 uppercase tracking-widest">
              <Shield className="w-4 h-4 text-[#049fd9] flex-shrink-0" /> Trusted Engineering
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-8 leading-[1.1]">
              Architecture trusted by the <span className="text-[#049fd9]">world's leading</span> organizations.
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              We specialize in complex technology swaps and greenfield builds, ensuring your infrastructure is ready for the next decade of enterprise scale.
            </p>
            
            <ul className="space-y-8 mb-12">
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[#049fd9]/10 flex items-center justify-center flex-shrink-0 mt-1 border border-[#049fd9]/20">
                  <span className="text-[#049fd9] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Cisco Systems Specialists</h4>
                  <p className="text-slate-400 text-lg">Deployment and optimization of <span className="font-bold text-white tracking-tight">Collaboration</span> and <span className="font-bold text-white tracking-tight">Enterprise Networking</span>.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[#049fd9]/10 flex items-center justify-center flex-shrink-0 mt-1 border border-[#049fd9]/20">
                  <span className="text-[#049fd9] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">High Availability Protocols</h4>
                  <p className="text-slate-400 text-lg">Resilient architectures designed for 24/7 mission-critical operations.</p>
                </div>
              </li>
            </ul>

            <button className="px-8 py-4 rounded-full bg-[#049fd9] text-white font-bold hover:bg-[#037bb0] transition-all duration-300 shadow-[0_10px_20px_rgba(4,159,217,0.2)] hover:shadow-[0_10px_30px_rgba(4,159,217,0.3)] hover:-translate-y-1">
              Meet Our Architects
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full h-[600px] flex items-center justify-center"
          >
            <div className="w-full h-full bg-slate-800 rounded-[3rem] flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-[radial-gradient(#049fd9_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
               
               {/* 2D Stack Animation */}
               <div className="relative flex flex-col items-center gap-6">
                 {[0, 1, 2].map((i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.2 }}
                     className="w-48 h-16 bg-slate-700/50 backdrop-blur-md rounded-2xl border border-white/10 flex items-center px-6 gap-4 shadow-xl"
                   >
                     <div className="w-8 h-8 rounded-lg bg-[#049fd9]/20 flex items-center justify-center">
                       <Layers className="w-4 h-4 text-[#049fd9]" />
                     </div>
                     <div className="h-2 w-24 bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }}
                         animate={{ x: "100%" }}
                         transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                         className="h-full w-full bg-[#049fd9]"
                       />
                     </div>
                   </motion.div>
                 ))}
                 
                 {/* Floating accents */}
                 <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#049fd9]/10 rounded-full blur-3xl" />
                 <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#049fd9]/10 rounded-full blur-3xl" />
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
    <section className="relative py-40 bg-[#0b1120] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Animated technical background for CTA */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#049fd933_0%,transparent_70%)]"
        />
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-8 leading-[1.1]"
        >
          Evolve your <br className="hidden md:block" /> enterprise network.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Partner with CCIE-certified architects to modernize your Webex infrastructure and contact center performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#049fd9] text-white font-bold hover:bg-[#037bb0] hover:scale-[1.03] shadow-[0_15px_40px_rgba(4,159,217,0.4)] transition-all duration-300 text-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out opacity-50"></div>
            Book a Strategic Assessment <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
