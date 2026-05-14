import { motion } from 'framer-motion';
import { Shield, Lock, Globe, Clock, Fingerprint, FileCheck } from 'lucide-react';
import { Section, SectionLabel } from './Section';
import { type, ease } from '../lib/typography';

/**
 * SecuritySection — compliance badges + a 3-column trust panel.
 * Customer-facing security posture done in plain English.
 */

const BADGES = [
  { label: 'SOC 2 Type II', sub: 'In audit · 2026' },
  { label: 'ISO 27001',     sub: 'Aligned' },
  { label: 'GDPR',          sub: 'EU-resident option' },
  { label: 'HIPAA-ready',   sub: 'PHI-safe routing' },
];

const PANELS = [
  {
    icon: Globe,
    title: 'Data residency',
    body: 'Deployments anchored to your sovereign region. Telemetry never leaves the jurisdiction you specify. Hybrid and air-gapped variants supported.',
  },
  {
    icon: Lock,
    title: 'Encryption everywhere',
    body: 'AES-256 at rest, TLS 1.3 in transit, customer-managed keys for the most sensitive workloads. No exceptions.',
  },
  {
    icon: Clock,
    title: 'Four-hour incident SLA',
    body: 'Severity-1 incidents acknowledged within fifteen minutes. Architect engaged within four hours. Postmortem within five business days.',
  },
];

export const SecuritySection = () => {
  return (
    <Section theme="dark" withBorder>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-7">
          <SectionLabel className="mb-5 flex items-center gap-2">
            <Shield className="w-3 h-3" /> Trust &amp; security
          </SectionLabel>
          <h2 className={`${type.displayLG} text-white`}>
            Regulated by default. <span className="text-[#049fd9]">Auditable by design.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <p className={`${type.body} text-slate-400 max-w-md`}>
            Every engagement is built to clear an enterprise security review on the first pass — not the third.
          </p>
        </div>
      </div>

      {/* Compliance badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden mb-16">
        {BADGES.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: ease.signal }}
            className="bg-[#020617] py-8 px-6 flex flex-col items-center text-center gap-2 group hover:bg-white/[0.02] transition-colors duration-500"
          >
            <FileCheck className="w-5 h-5 text-[#049fd9] mb-1" strokeWidth={1.5} />
            <div className="font-display font-bold text-white text-[1rem] tracking-tight">{b.label}</div>
            <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">{b.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* 3-col panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PANELS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: ease.signal }}
            className="rounded-2xl border border-white/10 bg-[#0b1120]/60 backdrop-blur-md p-8 lg:p-10 group hover:border-[#049fd9]/30 transition-colors duration-500"
          >
            <div className="w-11 h-11 rounded-xl bg-[#049fd9]/10 border border-[#049fd9]/20 flex items-center justify-center mb-7 group-hover:bg-[#049fd9]/15 transition-colors duration-500">
              <p.icon className="w-5 h-5 text-[#049fd9]" strokeWidth={1.5} />
            </div>
            <h3 className={`${type.headingMD} text-white mb-3`}>{p.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-slate-400">{p.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Footnote */}
      <p className="mt-12 font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em] flex items-center gap-2">
        <Fingerprint className="w-3 h-3" /> Every Celoxus engineer is background-checked and NDA-bound before access.
      </p>
    </Section>
  );
};
