import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, PlayCircle, Shield, Globe, Cloud, Headphones, Server, ChevronRight, Activity, Code, Database, Phone, Mail } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export const CeloxusLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Inner Mesh */}
    <g stroke="currentColor" strokeWidth="1.5" className="opacity-30 text-slate-400">
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
    <path d="M 82 25 A 35 35 0 1 0 82 75" stroke="#049fd9" strokeWidth="8" strokeLinecap="round" fill="none" />

    {/* Nodes (Circles) */}
    <g fill="currentColor" className="text-slate-400">
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
      <circle cx="82" cy="75" r="4" fill="#049fd9" />
      <circle cx="82" cy="25" r="4" fill="#049fd9" />
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
    ? 'bg-[#020617]/70 backdrop-blur-3xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-4'
    : 'bg-transparent py-6';

  const textColorClass = 'text-white';
  const logoTextClass = 'text-white';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <CeloxusLogo className={`w-9 h-9 group-hover:scale-110 transition-transform duration-500`} />
          <span className={`text-2xl font-light tracking-tight ${logoTextClass} transition-colors uppercase`}>Celoxus</span>
        </Link>

        <nav className={`hidden md:flex gap-10 text-sm font-normal tracking-widest uppercase ${textColorClass} transition-colors`}>
          <Link to="/products" className="hover:text-[#049fd9] transition-all">Products</Link>
          <Link to="/services" className="hover:text-[#049fd9] transition-all">Services</Link>
          <Link to="/case-studies" className="hover:text-[#049fd9] transition-all">Case Studies</Link>
          <Link to="/about" className="hover:text-[#049fd9] transition-all">About</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="hidden md:flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-light tracking-widest uppercase transition-all duration-300 bg-[#049fd9] text-white hover:bg-[#037bb0] hover:scale-105 shadow-lg shadow-[#049fd9]/20"
          >
            Get Started
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
            className={`md:hidden absolute top-full left-0 w-full p-6 flex flex-col gap-6 shadow-2xl border-b transition-colors duration-500 ${scrolled ? 'bg-white text-slate-900 border-slate-200' : 'bg-[#0b1120] text-white border-white/10'}`}
          >
            <Link to="/products" onClick={() => setIsOpen(false)} className="font-normal text-lg hover:text-[#049fd9] transition-colors">Products</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="font-normal text-lg hover:text-[#049fd9] transition-colors">Professional Services</Link>
            <Link to="/case-studies" onClick={() => setIsOpen(false)} className="font-normal text-lg hover:text-[#049fd9] transition-colors">Case Studies</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="font-normal text-lg hover:text-[#049fd9] transition-colors">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-[#049fd9] text-white w-full rounded-full px-6 py-4 text-center text-sm font-normal mt-4 shadow-xl shadow-[#049fd9]/20 block hover:bg-[#037bb0] transition-colors">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-slate-400 hover:text-white text-[0.875rem] transition-colors inline-block">
      {children}
    </Link>
  </li>
);

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-white font-display font-semibold mb-6 text-[0.7rem] uppercase tracking-[0.22em]">
    {children}
  </h4>
);

export const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-slate-400 pt-24 lg:pt-32 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Single quiet accent rule at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#049fd9]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top: brand + 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 lg:pr-12">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <CeloxusLogo className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-[#049fd9] transition-colors">Celoxus</span>
            </Link>
            <p className="text-[0.95rem] leading-relaxed mb-8 max-w-xs text-slate-400">
              CCIE-led engineering for the cloud calling, contact center, and observability stacks behind the world's most demanding enterprises.
            </p>
            {/* Cisco partner badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-[#049fd9]/30 bg-[#049fd9]/[0.05]">
              <div className="w-7 h-7 rounded-md bg-[#049fd9]/15 border border-[#049fd9]/30 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-4 h-4 text-[#049fd9]" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 20 50 L 20 80 M 35 30 L 35 80 M 50 10 L 50 80 M 65 30 L 65 80 M 80 50 L 80 80" />
                </svg>
              </div>
              <div>
                <div className="text-[0.7rem] font-mono text-[#049fd9] uppercase tracking-[0.2em] leading-tight">Cisco Premier</div>
                <div className="text-[0.65rem] font-mono text-slate-500 uppercase tracking-[0.18em] mt-0.5">Certified Partner</div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/case-studies">Case studies</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <FooterHeading>Solutions</FooterHeading>
            <ul className="space-y-3">
              <FooterLink to="/services">Cisco Calling</FooterLink>
              <FooterLink to="/services">Contact Center</FooterLink>
              <FooterLink to="/services">Cloud Applications</FooterLink>
              <FooterLink to="/services">Custom Integration</FooterLink>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <FooterHeading>Products</FooterHeading>
            <ul className="space-y-3">
              <FooterLink to="/products">Finesse Notifications</FooterLink>
              <FooterLink to="/products">CC Monitoring</FooterLink>
              <FooterLink to="/products">Custom Middleware</FooterLink>
            </ul>
          </div>

          {/* Resources / Trust */}
          <div className="lg:col-span-2">
            <FooterHeading>Resources</FooterHeading>
            <ul className="space-y-3">
              <FooterLink to="/case-studies">Deployment briefs</FooterLink>
              <FooterLink to="/#faq">FAQ</FooterLink>
              <FooterLink to="/#security">Security &amp; trust</FooterLink>
              <FooterLink to="/legal/privacy">Privacy</FooterLink>
              <FooterLink to="/legal/terms">Terms</FooterLink>
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-b border-white/10">
          <a href="tel:+14699944602" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-lg bg-[#049fd9]/10 border border-[#049fd9]/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-[#049fd9]" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.22em] mb-0.5">Direct line</div>
              <div className="text-white font-display font-semibold text-[0.95rem] tracking-tight group-hover:text-[#049fd9] transition-colors">+1 469 994 4602</div>
            </div>
          </a>
          <a href="mailto:info@celoxus.com" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-lg bg-[#049fd9]/10 border border-[#049fd9]/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-[#049fd9]" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.22em] mb-0.5">Senior architect</div>
              <div className="text-white font-display font-semibold text-[0.95rem] tracking-tight group-hover:text-[#049fd9] transition-colors">info@celoxus.com</div>
            </div>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em] text-center md:text-left">
            &copy; {new Date().getFullYear()} Celoxus Systems Inc. · Bangalore · Dallas
          </div>
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Status · Nominal
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#049fd9] selection:text-white">
      <Navbar />
      <main className="flex-1 bg-[#020617]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
