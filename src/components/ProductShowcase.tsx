import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Activity, Phone, Users, Clock, AlertTriangle, ChevronRight, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionLabel } from './Section';
import { Button } from './Button';
import { type, ease } from '../lib/typography';

/**
 * ProductShowcase — a real-looking Finesse Notifications dashboard mock,
 * wrapped in browser chrome. Replaces the abstract notification illustration
 * with something that looks like an actual SaaS surface — agents, queues,
 * live counters, RONA toast.
 */

const AGENTS = [
  { id: 'AG-0418', name: 'Operator · West', status: 'on-call',  duration: '04:32' },
  { id: 'AG-0419', name: 'Operator · East', status: 'wrap',     duration: '00:18' },
  { id: 'AG-0420', name: 'Operator · APAC', status: 'available',duration: '02:11' },
  { id: 'AG-0421', name: 'Operator · EMEA', status: 'on-call',  duration: '08:55' },
];

const QUEUES = [
  { name: 'Priority · P1', size: 3, sla: 99.7 },
  { name: 'Billing',        size: 12, sla: 98.2 },
  { name: 'Technical',      size: 7, sla: 99.1 },
];

export const ProductShowcase = () => {
  // Animated live counters
  const [active, setActive] = useState(127);
  const [queued, setQueued] = useState(22);
  const [showRona, setShowRona] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => Math.max(120, Math.min(135, a + Math.round((Math.random() - 0.5) * 4))));
      setQueued((q) => Math.max(15, Math.min(28, q + Math.round((Math.random() - 0.5) * 3))));
    }, 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const cycle = () => {
      setShowRona(true);
      setTimeout(() => setShowRona(false), 4000);
    };
    cycle();
    const id = setInterval(cycle, 9000);
    return () => clearInterval(id);
  }, []);

  return (
    <Section theme="dark" size="default" withBorder>
      {/* atmospheric */}
      <div className="absolute top-[-20%] right-[-20%] w-[700px] h-[700px] bg-[#049fd9]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
        <div className="lg:col-span-5">
          <SectionLabel className="mb-5">Product · Finesse Notifications</SectionLabel>
          <h2 className={`${type.displayLG} text-white`}>
            See agents <span className="text-[#049fd9]">before symptoms cascade.</span>
          </h2>
          <p className={`mt-8 ${type.bodyLG} text-slate-400 max-w-xl`}>
            A zero-latency notification layer that lives inside Cisco Finesse. RONA alerts intercept the moment they happen — no dashboard checking required.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              'Sub-second RONA interception with audible + visual alerts',
              'Custom metric overlays per queue, per skill, per shift',
              'Direct desk routing — the right alert reaches the right operator',
              'Drop-in deploy. No agent retraining. No Cisco license changes.',
            ].map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: ease.signal }}
                className="flex items-start gap-4 text-slate-300"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#049fd9] flex-shrink-0" />
                <span className="text-[0.95rem] lg:text-base leading-relaxed">{line}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/products" variant="primary" size="lg" magnetic>
              See the full platform <ChevronRight className="w-4 h-4" />
            </Button>
            <Button to="/case-studies" variant="secondary" size="lg">
              Read deployment briefs
            </Button>
          </div>
        </div>

        {/* Browser frame + dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: ease.signal }}
          className="lg:col-span-7"
        >
          <div className="relative rounded-[1.25rem] border border-white/10 bg-[#0b1120]/60 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            {/* Chrome */}
            <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              <div className="ml-4 flex-1 font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em] text-center">
                celoxus.finesse / live
              </div>
              <div className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                <CircleDot className="w-2.5 h-2.5" /> SYNC
              </div>
            </div>

            {/* Dashboard body */}
            <div className="grid grid-cols-12 gap-3 p-4 lg:p-5 bg-[#020617]/40">
              {/* KPI row */}
              <Kpi label="Active calls" value={active} accent />
              <Kpi label="In queue" value={queued} />
              <Kpi label="SLA" value="99.4%" />
              <Kpi label="Avg wait" value="00:42" />

              {/* Agents list */}
              <div className="col-span-12 lg:col-span-7 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="w-3.5 h-3.5 text-[#049fd9]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Agents</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">{AGENTS.length} active</span>
                </div>
                <ul className="space-y-2">
                  {AGENTS.map((a, i) => (
                    <li key={a.id} className="flex items-center justify-between text-[0.8rem] py-1.5 border-b border-white/[0.04] last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono text-[9px] text-slate-400">
                          {a.id.slice(-2)}
                        </span>
                        <div>
                          <div className="text-slate-200">{a.name}</div>
                          <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">{a.id}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <StatusPill status={a.status as any} />
                        <span className="font-mono text-[10px] text-slate-400 tabular-nums w-12 text-right">{a.duration}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Queues */}
              <div className="col-span-12 lg:col-span-5 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-3.5 h-3.5 text-[#049fd9]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Queues</span>
                </div>
                <ul className="space-y-3">
                  {QUEUES.map((q, i) => (
                    <li key={q.name}>
                      <div className="flex items-center justify-between text-[0.8rem] mb-1.5">
                        <span className="text-slate-200">{q.name}</span>
                        <span className="font-mono text-[10px] text-slate-400 tabular-nums">{q.size} · {q.sla}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${q.sla}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: ease.signal }}
                          className="h-full bg-[#049fd9]"
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Mini call-volume chart */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Call volume · 24h</span>
                  </div>
                  <Sparkline />
                </div>
              </div>
            </div>

            {/* RONA toast */}
            <AnimatePresence>
              {showRona && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, ease: ease.signal }}
                  className="absolute right-4 bottom-4 lg:right-5 lg:bottom-5 bg-[#0b1120] border border-amber-400/40 rounded-xl p-4 shadow-2xl flex items-start gap-3 max-w-[280px]"
                >
                  <span className="w-9 h-9 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-amber-300" />
                  </span>
                  <div>
                    <div className="font-mono text-[9px] text-amber-300 uppercase tracking-[0.2em] mb-1">RONA · P1 INTERCEPT</div>
                    <div className="text-[0.8rem] text-slate-200 leading-snug">
                      AG-0419 redirected — Priority queue routed to AG-0420.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

function Kpi({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div className="col-span-6 lg:col-span-3 rounded-lg border border-white/5 bg-white/[0.02] p-4">
      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-2">{label}</div>
      <div className={`font-display font-bold text-[1.5rem] lg:text-[1.75rem] leading-none tabular-nums tracking-tight ${accent ? 'text-[#049fd9]' : 'text-white'}`}>
        {value}
      </div>
    </div>
  );
}

type StatusKey = 'on-call' | 'wrap' | 'available';
function StatusPill({ status }: { status: StatusKey }) {
  const map: Record<StatusKey, { label: string; cls: string; dot: string }> = {
    'on-call':   { label: 'ON CALL',   cls: 'bg-[#049fd9]/10 text-[#049fd9] border-[#049fd9]/30',     dot: 'bg-[#049fd9]' },
    'wrap':      { label: 'WRAP',      cls: 'bg-amber-400/10 text-amber-300 border-amber-400/30',     dot: 'bg-amber-300' },
    'available': { label: 'AVAILABLE', cls: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',dot: 'bg-emerald-300' },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border font-mono text-[9px] tracking-[0.15em] ${s.cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

function Sparkline() {
  // Stable deterministic sparkline (no random per render)
  const points = [42, 48, 39, 52, 65, 58, 71, 64, 78, 72, 85, 79, 91, 84, 88, 76, 82, 90, 86, 79, 71, 65, 58, 51];
  const max = Math.max(...points);
  const w = 200, h = 36, gap = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * gap).toFixed(2)},${(h - (p / max) * h).toFixed(2)}`)
    .join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h + 4}`} className="w-full h-9">
      <motion.path
        d={path}
        fill="none"
        stroke="#049fd9"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: ease.signal }}
      />
    </svg>
  );
}
