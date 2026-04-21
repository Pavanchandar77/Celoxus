import React from 'react';
import { motion } from 'motion/react';
import { Shield, Server, Activity, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudies = () => {
  return (
    <div className="bg-[#020617] text-white min-h-[90vh] relative overflow-hidden pt-40 pb-32 flex flex-col justify-center">
       {/* Background effects */}
       <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
       <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

       <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-indigo-500/30 text-indigo-300 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
             <Lock className="w-4 h-4" /> Strictly Confidential
           </div>
           <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8">
             Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-[#8fa1d5]">Implementations.</span>
           </h1>
           <p className="text-xl text-slate-300 font-medium leading-relaxed mb-12">
             Due to strict Non-Disclosure Agreements (NDAs) and the sensitive nature of sovereign network infrastructure, we do not publish identifiable client metadata, scale metrics, or architectural topologies on the public web.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
               <h3 className="text-2xl font-bold text-white mb-4">Core Deployment Domains</h3>
               <ul className="space-y-3 text-slate-400 font-medium">
                 <li className="flex items-center gap-3"><Activity className="w-5 h-5 text-indigo-400" /> Cisco Contact Center Migrations</li>
                 <li className="flex items-center gap-3"><Activity className="w-5 h-5 text-indigo-400" /> Finesse Notification Scaling</li>
                 <li className="flex items-center gap-3"><Activity className="w-5 h-5 text-indigo-400" /> Enterprise Cisco Calling Integrations</li>
                 <li className="flex items-center gap-3"><Activity className="w-5 h-5 text-indigo-400" /> Custom API Middleware Development</li>
               </ul>
             </div>
             
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-white mb-4">Request Capabilities Brief</h3>
               <p className="text-slate-400 font-medium mb-6">
                 For verified enterprise procurement teams, sanitized architectural briefs and implementation capability documents can be provided upon request.
               </p>
               <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all w-full group">
                 Contact Engineering <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
           </div>
         </motion.div>
       </div>
    </div>
  );
};
