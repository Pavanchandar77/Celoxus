import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, PlayCircle, Shield, Globe, Cloud, Headphones, Server, ChevronRight, Activity, Code, Database, Phone, Mail } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export const CeloxusLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Inner Mesh */}
    <g stroke="currentColor" strokeWidth="1.5" className="opacity-40">
      <line x1="25" y1="10" x2="75" y2="90" />
      <line x1="75" y1="10" x2="25" y2="90" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <line x1="25" y1="10" x2="75" y2="10" />
      <line x1="25" y1="90" x2="75" y2="90" />
      <line x1="25" y1="10" x2="5" y2="50" />
      <line x1="5" y1="50" x2="25" y2="90" />
      <line x1="75" y1="10" x2="95" y2="50" />
      <line x1="95" y1="50" x2="75" y2="90" />
    </g>
    
    {/* Outer Hexagon */}
    <path d="M 25 10 L 75 10 L 95 50 L 75 90 L 25 90 L 5 50 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* The bold C */}
    <path d="M 82 25 A 35 35 0 1 0 82 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />

    {/* Nodes (Circles) */}
    <g fill="currentColor">
      <circle cx="25" cy="10" r="4" />
      <circle cx="50" cy="10" r="4" />
      <circle cx="75" cy="10" r="4" />
      
      <circle cx="5" cy="50" r="4" />
      <circle cx="47" cy="50" r="4" />
      <circle cx="70" cy="50" r="4" />
      <circle cx="95" cy="50" r="4" />
      
      <circle cx="25" cy="90" r="4" />
      <circle cx="50" cy="90" r="4" />
      <circle cx="75" cy="90" r="4" />
      
      {/* Node where C interacts */}
      <circle cx="82" cy="75" r="4" />
      <circle cx="82" cy="25" r="4" />
    </g>
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = scrolled 
    ? 'bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl py-4' 
    : 'bg-transparent py-6';

  const textColorClass = 'text-white/90 hover:text-white';
  const logoTextClass = 'text-white';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <CeloxusLogo className={`w-9 h-9 text-indigo-400 group-hover:scale-110 transition-transform duration-500`} />
          <span className={`text-2xl font-extrabold tracking-tight ${logoTextClass} transition-colors`}>Celoxus</span>
        </Link>

        <nav className={`hidden md:flex gap-10 text-sm font-semibold tracking-wide ${textColorClass} transition-colors`}>
          <Link to="/products" className="hover:text-indigo-400 hover:scale-105 transition-all">Products</Link>
          <Link to="/services" className="hover:text-indigo-400 hover:scale-105 transition-all">Professional Services</Link>
          <Link to="/about" className="hover:text-indigo-400 hover:scale-105 transition-all">About</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="hidden md:flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-white/10 border border-white/20 text-white hover:bg-white hover:text-slate-900 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md"
          >
            Contact Us
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={`w-6 h-6 flex-shrink-0 ${textColorClass}`} /> : <Menu className={`w-6 h-6 flex-shrink-0 ${textColorClass}`} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-3xl text-white border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl"
          >
            <Link to="/products" onClick={() => setIsOpen(false)} className="font-bold text-lg hover:text-indigo-400 transition-colors">Products</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="font-bold text-lg hover:text-indigo-400 transition-colors">Professional Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="font-bold text-lg hover:text-indigo-400 transition-colors">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-white text-slate-900 w-full rounded-full px-6 py-4 text-center text-sm font-bold mt-4 shadow-xl shadow-white/10 block hover:bg-indigo-50 transition-colors">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 relative pr-8">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
               <CeloxusLogo className="w-8 h-8 text-indigo-500 group-hover:scale-110 group-hover:text-indigo-400 transition-all duration-500" />
               <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-indigo-50 transition-colors">Celoxus</span>
            </Link>
            <p className="text-base leading-relaxed mb-8 max-w-sm font-medium text-slate-400">
              A pioneer in building customized software and collaboration solutions. Delivering next-generation enterprise capabilities powered by AI.
            </p>
            <div className="flex flex-col gap-4 font-medium">
              <a href="tel:+14699944602" className="hover:text-white transition-colors flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" />
                </div>
                +1 469 994 4602
              </a>
              <a href="mailto:info@celoxus.com" className="hover:text-white transition-colors flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" />
                </div>
                info@celoxus.com
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
               <Database className="w-4 h-4 text-indigo-500" /> Products
            </h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Finesse Notifications</Link></li>
              <li><Link to="/products" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Contact Center Monitoring</Link></li>
              <li><Link to="/products" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Custom Integration</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
               <Server className="w-4 h-4 text-blue-500" /> Professional Services
            </h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Cisco Calling Solution</Link></li>
              <li><Link to="/services" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Cisco Contact Center Solution</Link></li>
              <li><Link to="/services" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Cisco Cloud Applications</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" /> Quick Links
            </h4>
            <ul className="space-y-4">
              <li><Link to="/" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">About Firm</Link></li>
              <li><Link to="/contact" className="font-medium text-slate-400 hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Celoxus Systems Inc. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
            <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
