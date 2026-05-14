import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-[#020617] text-white min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 blur-[110px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-8xl md:text-9xl font-light font-display tracking-tighter inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-6 border-b border-indigo-500/20">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-normal mb-6 font-display">System Node Not Found</h2>
          <p className="text-lg text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
            The endpoint you are attempting to access does not exist in our current architecture topology.
          </p>
          <div className="inline-block relative group">
            <div className="absolute inset-x-0 -bottom-1 h-3 bg-indigo-500/30 group-hover:bg-indigo-500/50 transition-colors blur-sm"></div>
            <Link to="/" className="relative flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-normal shadow-xl hover:bg-slate-100 transition-colors">
              <ArrowLeft className="w-5 h-5" /> Return to Core Infrastructure
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
