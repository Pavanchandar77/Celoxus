import { motion } from 'framer-motion';
import { Server, Activity, Lock, Banknote, HeartPulse, Truck } from 'lucide-react';
import { InteractiveCard } from '../components/InteractiveCard';
import { NetworkTopology } from '../components/NetworkTopology';
import { Section, SectionLabel } from '../components/Section';
import { Button } from '../components/Button';
import { type, ease } from '../lib/typography';

type CaseBrief = {
  industry: string;
  icon: typeof Server;
  title: string;
  challenge: string;
  solution: string;
  metrics: { v: string; l: string }[];
};

const BRIEFS: CaseBrief[] = [
  {
    industry: 'Logistics',
    icon: Truck,
    title: 'Fortune 500 Global Logistics',
    challenge:
      'Heavily fragmented legacy UCCX on-premise. Escalating call volumes caused queue delays; agents had no real-time visibility into freight priority because CRM data lived in three disconnected systems.',
    solution:
      'Zero-downtime phased migration to Cisco Webex Contact Center. Bespoke middleware bridged proprietary freight-tracking databases into the agent desktop via real-time Finesse pop-overs, mapping caller ID to active shipments.',
    metrics: [
      { v: '2,500+', l: 'Seats migrated' },
      { v: '−40%',   l: 'Avg handle time' },
      { v: '99.999%', l: 'Architecture uptime' },
    ],
  },
  {
    industry: 'Financial Services',
    icon: Banknote,
    title: 'Regional Bank — 4-Region PBX Replacement',
    challenge:
      'Twenty-year-old TDM PBX across four regional headquarters. Each retirement window threatened to drop the bank\'s commercial calling for two business days, and compliance review required call recording be preserved verbatim through the cut.',
    solution:
      'Parallel-running Cisco Webex Calling deployment with SIP-pinned legacy trunks. Sequenced cutover by region during business hours; call recording mirrored to both stacks during the transition window. Audit trail signed at every step.',
    metrics: [
      { v: '4,200', l: 'Seats live on Webex' },
      { v: '0',     l: 'Customer-perceived outages' },
      { v: '11 wk', l: 'End-to-end timeline' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: HeartPulse,
    title: 'National Healthcare Network — HIPAA-safe Contact Center',
    challenge:
      'Provider-to-patient queues handled PHI but ran on legacy gear with no caller-context awareness. Triage took too long; sensitive data risked leaking into transcripts and ticketing systems.',
    solution:
      'Cisco Webex CC deployment with PHI-aware routing rules. AI-assisted triage routes patients to the right clinical specialty by intent. PHI is tokenized before any data hits the agent desktop; encrypted recordings live in a dedicated jurisdiction-resident vault.',
    metrics: [
      { v: '−52%', l: 'Avg handle time' },
      { v: '100%', l: 'PHI tokenization coverage' },
      { v: '24/7', l: 'NOC integration' },
    ],
  },
];

export const CaseStudies = () => {
  return (
    <div className="bg-[#020617] text-white relative overflow-hidden">
      {/* Hero */}
      <Section theme="dark" size="large" className="!pt-40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#049fd9]/8 blur-[110px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute inset-0 hidden lg:block opacity-25 pointer-events-auto">
          <NetworkTopology />
        </div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: ease.signal }}>
            <SectionLabel className="mb-5 inline-flex"><Lock className="w-3 h-3 mr-2" /> Deployment briefs · NDA-safe</SectionLabel>
            <h1 className={`${type.displayXL} text-white mt-4`}>
              Proof of work, <span className="text-[#049fd9]">written under NDA.</span>
            </h1>
            <p className={`mt-8 ${type.bodyLG} text-slate-400 max-w-3xl mx-auto`}>
              Names and organizations are anonymized to honor our agreements. Every challenge, solution, and metric below is real and audited.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Briefs */}
      <Section theme="dark" size="small">
        <div className="space-y-12 max-w-6xl mx-auto">
          {BRIEFS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: ease.signal }}
            >
              <InteractiveCard className="bg-[#0b1120]/60 border border-white/10 rounded-3xl p-8 md:p-14 relative overflow-hidden hover:border-[#049fd9]/40 transition-colors backdrop-blur-md">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-10 relative z-10">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-300 mb-5">
                      <Lock className="w-3 h-3" /> {b.industry}
                    </span>
                    <h2 className={`${type.displayMD} text-white`}>{b.title}</h2>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="w-12 h-12 bg-[#049fd9]/10 border border-[#049fd9]/20 rounded-xl flex items-center justify-center">
                      <b.icon className="w-5 h-5 text-[#049fd9]" strokeWidth={1.5} />
                    </div>
                    <div className="w-12 h-12 bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-center">
                      <Activity className="w-5 h-5 text-emerald-300" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 relative z-10 mb-12">
                  <div>
                    <h3 className={`${type.headingMD} text-white mb-4`}>The challenge</h3>
                    <p className="text-[1rem] lg:text-[1.0625rem] text-slate-400 leading-relaxed">{b.challenge}</p>
                  </div>
                  <div>
                    <h3 className={`${type.headingMD} text-white mb-4`}>Our solution</h3>
                    <p className="text-[1rem] lg:text-[1.0625rem] text-slate-400 leading-relaxed">{b.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden relative z-10">
                  {b.metrics.map((m, j) => (
                    <div key={j} className="bg-[#020617] p-8 text-center">
                      <div className="font-display font-bold text-[2.25rem] lg:text-[2.75rem] text-[#049fd9] leading-none tabular-nums tracking-tight">{m.v}</div>
                      <div className="mt-3 font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em]">{m.l}</div>
                    </div>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: ease.signal }}
          className="mt-24 text-center max-w-2xl mx-auto"
        >
          <h3 className={`${type.headingLG} text-white mb-3`}>Need the full technical spec?</h3>
          <p className="text-slate-400 mb-8">A senior architect will walk you through a sanitized reference architecture under mutual NDA.</p>
          <Button to="/contact" variant="primary" size="lg" magnetic>
            Request a capabilities brief →
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};
