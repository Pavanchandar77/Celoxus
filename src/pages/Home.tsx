import React, { Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { PlayCircle, ArrowRight, Cloud, Server, Activity, Globe, Headphones, ChevronRight, Code, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroNode3D, Globe3D, LogisticsContainers3D } from '../components/ThreeAssets';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Dynamic Master Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle dot pattern with invert for white bg */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-30 filter invert"></div>
        
        {/* Deep fade gradients for white background */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent"></div>
      </div>

      {/* Advanced Animated Glowing Orbs for Cisco Blue Theme */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 3 }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#049fd9]/10 blur-[130px] mix-blend-multiply pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"
      />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 3, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#049fd9]/5 blur-[130px] mix-blend-multiply pointer-events-none animate-[pulse_10s_ease-in-out_infinite_alternate]"
      />

      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 pb-12">
        
        {/* Left Typography Block */}
        <div className="lg:w-3/5 text-left pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#049fd9]/5 border border-[#049fd9]/20 text-slate-700 shadow-sm backdrop-blur-xl mb-10 group cursor-pointer hover:bg-[#049fd9]/10 transition-colors"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#049fd9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#049fd9]"></span>
            </span>
            <span className="text-sm font-bold tracking-wide">Live: Global Systems Operational</span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#049fd9] transition-colors" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-[5.5rem] lg:text-[6rem] font-black font-display tracking-tighter text-slate-900 mb-8 leading-[1.05]"
          >
            Engineering the <br className="hidden lg:block" />
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-[#049fd9]/10 blur-xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#049fd9] to-blue-800">
                Intelligence Age.
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            Celoxus delivers zero-trust infrastructure, bespoke middleware, and AI-powered contact centers that redefine the enterprise baseline.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 relative z-20"
          >
            <Link to="/products" className="h-16 px-10 rounded-full bg-[#049fd9] text-white font-bold hover:bg-[#037bb0] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-[0_10px_30px_rgba(4,159,217,0.3)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
              Initialize Architecture <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
            <Link to="/contact" className="h-16 px-10 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-[#049fd9]/30 transition-all duration-300 flex items-center justify-center gap-3 text-lg backdrop-blur-md shadow-sm">
              <Activity className="w-5 h-5 flex-shrink-0 text-[#049fd9]" /> Book an Engineer
            </Link>
          </motion.div>
        </div>

        {/* Right Graphical Element - 3D Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:block lg:w-2/5 relative"
        >
          <div className="relative w-full aspect-[4/5] overflow-visible">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#049fd9]/20 to-blue-300/10 rounded-[3rem] blur-2xl transform -rotate-3"></div>
             
             {/* 3D Canvas container */}
             <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-[#049fd9]/20 shadow-[0_20px_50px_rgba(4,159,217,0.15)] relative z-10 bg-gradient-to-b from-slate-50 to-white">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                   <ambientLight intensity={1} color="#ffffff" />
                   <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                   <directionalLight position={[-5, 5, -5]} intensity={1} color="#049fd9" />
                   <Suspense fallback={
                     <mesh>
                       <boxGeometry args={[1, 1, 1]} />
                       <meshBasicMaterial color="#f0f9ff" />
                     </mesh>
                   }>
                     <HeroNode3D />
                   </Suspense>
                   <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2 + 0.2} minPolarAngle={Math.PI / 2 - 0.2} />
                </Canvas>
                <div className="absolute inset-0 pointer-events-none rounded-[3rem] border border-white/40 mix-blend-overlay"></div>
             </div>

             {/* Floating cards */}
             {/* Card 1 */}
             <div className="absolute -left-12 top-16 bg-white/80 backdrop-blur-xl border border-slate-200 p-5 rounded-3xl shadow-xl z-20 flex items-center gap-5 animate-[bounce_8s_infinite]">
                 <div className="w-12 h-12 rounded-xl bg-[#049fd9]/10 border border-[#049fd9]/20 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-[#049fd9]" />
                 </div>
                 <div>
                    <div className="text-slate-800 font-bold text-sm tracking-wide">Global CDN Nodes</div>
                    <div className="text-[#049fd9] text-xs font-mono mt-1 font-semibold tracking-widest">99.999% UPTIME</div>
                 </div>
             </div>
             
             {/* Card 3 */}
             <div className="absolute -bottom-8 right-12 bg-white/90 backdrop-blur-xl border border-slate-200 p-5 rounded-3xl shadow-xl z-20 flex items-center gap-5">
                 <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm">
                    <Server className="w-6 h-6 text-emerald-500" />
                 </div>
                 <div>
                    <div className="text-slate-800 font-bold text-sm tracking-wide">Active Streams</div>
                    <div className="text-emerald-500 font-mono text-xs font-bold flex items-center gap-1.5 mt-1 tracking-widest">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      ROUTING OPTIMAL
                    </div>
                 </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const TrustBanner = () => {
  return (
    <div className="bg-[#0f172a] py-24 relative z-20 overflow-hidden">
      {/* 3D Globe Background Layer - Minimalist */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <Suspense fallback={null}>
             <Globe3D />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
        {/* Gradients to blend globe into edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-[#0f172a] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-20">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
           Certified Experts in Enterprise Network Architecture
        </p>
      </div>
      
      {/* Credentials Band */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 w-full">
          {/* Badge 1 */}
          <motion.div 
             whileHover={{ z: 20, scale: 1.05, rotateY: 5 }}
             style={{ perspective: 1000 }}
             className="flex flex-col items-center gap-3 w-48 text-center shrink-0 cursor-default"
          >
             <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 mb-2 shadow-[0_0_30px_rgba(4,159,217,0.2)] border border-white/10">
                <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8 text-[#049fd9]" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" aria-label="Cisco Network Icon">
                   <path d="M 20 50 L 20 80 M 35 30 L 35 80 M 50 10 L 50 80 M 65 30 L 65 80 M 80 50 L 80 80" />
                </svg>
             </div>
             <div className="font-bold text-sm tracking-wide text-white">Cisco Premier</div>
             <div className="text-xs text-[#049fd9] font-bold tracking-wider">CERTIFIED PARTNER</div>
          </motion.div>
          
          {/* Badge 2 */}
          <motion.div 
             whileHover={{ z: 20, scale: 1.05 }}
             style={{ perspective: 1000 }}
             className="flex flex-col items-center gap-3 w-48 text-center shrink-0 cursor-default"
          >
             <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 mb-2 shadow-[0_0_30px_rgba(4,159,217,0.2)] border border-white/10">
                <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8 text-[#049fd9]" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" aria-label="Cisco System Icon">
                   <path d="M 20 50 L 20 80 M 35 30 L 35 80 M 50 10 L 50 80 M 65 30 L 65 80 M 80 50 L 80 80" />
                </svg>
             </div>
             <div className="font-bold text-sm tracking-wide text-white">CCIE Collaboration</div>
             <div className="text-xs text-[#049fd9] font-bold tracking-wider">CERTIFIED ARCHITECTS</div>
          </motion.div>

          {/* Badge 3 */}
          <motion.div 
             whileHover={{ z: 20, scale: 1.05, rotateY: -5 }}
             style={{ perspective: 1000 }}
             className="flex flex-col items-center gap-3 w-48 text-center shrink-0 hidden md:flex cursor-default"
          >
             <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 mb-2 shadow-[0_0_30px_rgba(4,159,217,0.2)] border border-white/10">
                <Shield className="w-8 h-8 text-[#049fd9]" />
             </div>
             <div className="font-bold text-sm tracking-wide text-white">Cisco Advanced</div>
             <div className="text-xs text-[#049fd9] font-bold tracking-wider">DATA CENTER</div>
          </motion.div>

          {/* Quote */}
          <div className="flex-1 min-w-[300px] border-l border-[#049fd9]/30 pl-8 ml-4 hidden lg:block bg-white/5 p-6 rounded-2xl backdrop-blur-md">
            <p className="italic text-slate-200 font-medium text-sm leading-relaxed">
              "Celoxus engineered our entire multinational contact center migration with zero downtime. Their CCIE-certified team is unmatched."
            </p>
            <p className="text-xs font-bold text-[#049fd9] mt-3 tracking-widest uppercase">— Director of IT, Fortune 500 Logistics</p>
          </div>
        </div>
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
            Transforming complexity into <span className="text-[#049fd9]">competitive advantage.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            From seamless Webex collaboration to bespoke software integrations, we architect the engines that drive enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-[#049fd9]/20"
          >
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" alt="Tech" className="w-full h-full object-cover opacity-5 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
            </div>
            
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#049fd9]/10 to-transparent rounded-full blur-[80px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-16 h-16 rounded-2xl bg-[#049fd9]/10 border border-[#049fd9]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm">
              <Headphones className="w-8 h-8 text-[#049fd9] flex-shrink-0" />
            </div>
            <h3 className="text-3xl font-extrabold font-display text-slate-900 mb-4 relative z-10">Cisco Contact Center Solution</h3>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed relative z-10">
              Next-generation Cisco contact center solutions integrated with real-time AI agents. We map the customer journey for flawless, zero-friction resolution.
            </p>
            <div className="mt-12 relative z-10">
              <Link to="/products" className="inline-flex items-center gap-2 font-bold text-[#049fd9] hover:text-[#037bb0] transition-colors">
                Explore Solutions <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 shadow-sm hover:-translate-y-2 transition-all duration-500 group border border-[#049fd9]/20"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#049fd9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#049fd9]/5 flex items-center justify-center mb-8 border border-[#049fd9]/20 group-hover:scale-110 transition-transform duration-500">
                <Code className="w-8 h-8 text-[#049fd9] flex-shrink-0" />
              </div>
              <h3 className="text-2xl font-extrabold font-display text-slate-900 mb-4">Custom Integration</h3>
              <p className="text-slate-600 leading-relaxed mb-12">
                Bespoke middleware and software adapters driving interoperability across fragmented legacy systems.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-[#049fd9] hover:text-[#037bb0] transition-colors">
                View Architecture <ChevronRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <Link to="/contact" className="block relative overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-[#049fd9]/20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full h-full"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#049fd9]/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#049fd9]/20">
                  <Activity className="w-8 h-8 text-[#049fd9] flex-shrink-0" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-slate-900 mb-4">Contact Center Monitoring</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Proactive alerts and real-time dashboarding for your Cisco infrastructure. Never fly blind again.
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
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-[#049fd9]/20"
          >
            <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" alt="Cloud Network" className="w-full h-full object-cover mix-blend-luminosity" loading="lazy" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
            </div>
            
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#049fd9]/5 to-[#049fd9]/10 rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-16 h-16 rounded-2xl bg-[#049fd9] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg shadow-[#049fd9]/30">
              <Cloud className="w-8 h-8 text-white flex-shrink-0" />
            </div>
            <h3 className="text-3xl font-extrabold font-display text-slate-900 mb-4 relative z-10">Cisco Cloud Applications</h3>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed relative z-10">
              Transition smoothly to Webex Calling and cloud-native application ecosystems with our certified deployment engineers.
            </p>
            <div className="mt-12">
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-[#049fd9] hover:text-[#037bb0] transition-colors">
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
  const { scrollYProgress } = useScroll();
  const yRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-800 text-sm font-bold mb-8 border border-slate-100">
              <Shield className="w-4 h-4 text-[#049fd9] flex-shrink-0" /> Sovereign Delivery
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Engineering trusted by the <span className="text-[#049fd9]">world's most demanding</span> organizations.
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We don't just supply software. We embed senior architects into your workflow to dissolve technical debt and build resilient, compliance-ready frameworks.
            </p>
            
            <ul className="space-y-8 mb-12">
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[#049fd9]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#049fd9] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Cisco Certification Excellence</h4>
                  <p className="text-slate-600 text-lg">Led by <span className="font-bold text-slate-800">CCIE Collaboration</span> architects and supported by <span className="font-bold text-slate-800">CCNA Enterprise Networks</span> engineers.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[#049fd9]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#049fd9] font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Zero-Downtime Implementations</h4>
                  <p className="text-slate-600 text-lg">Phased rollout methodologies protecting your active revenue streams.</p>
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
            <div className="absolute inset-0 bg-gradient-to-tr from-[#049fd9]/10 to-transparent rounded-[3rem] blur-3xl -z-10"></div>
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
               <ambientLight intensity={1.5} color="#ffffff" />
               <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
               <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#049fd9" />
               <Suspense fallback={
                 <mesh>
                   <boxGeometry args={[2, 2, 2]} />
                   <meshBasicMaterial color="#f8fafc" />
                 </mesh>
               }>
                  <LogisticsContainers3D scrollYProgress={yRotation} />
               </Suspense>
               <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="relative py-40 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2850&q=80" alt="Networking" className="w-full h-full object-cover opacity-20 mix-blend-screen sepia-[.1] hue-rotate-[200deg]" loading="lazy" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-[#0f172a]"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik00MCAwTDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 relative z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#049fd9]/20 blur-[150px] rounded-full pointer-events-none z-10 mix-blend-screen"></div>
      
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
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#049fd9] text-white font-bold hover:bg-[#037bb0] hover:scale-[1.03] shadow-[0_10px_40px_rgba(4,159,217,0.3)] transition-all duration-300 text-lg relative group overflow-hidden border border-[#049fd9]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out opacity-50"></div>
            Schedule a Strategy Session <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
