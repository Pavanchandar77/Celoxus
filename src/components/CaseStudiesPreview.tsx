import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionLabel } from './Section';
import { Button } from './Button';
import { type, ease } from '../lib/typography';

/**
 * CaseStudiesPreview — three NDA-safe case study cards that link through
 * to /case-studies for the full briefs.
 */

const CASES = [
  {
    industry: 'Logistics',
    title: 'Fortune 500 freight network — zero-downtime UCCX → Webex CC migration',
    metric: '−40%',
    metricLabel: 'Average Handle Time',
    sub: '2,500 seats migrated · 99.999% uptime',
  },
  {
    industry: 'Financial Services',
    title: 'Regional bank — legacy PBX replacement across four regions during business hours',
    metric: '4,200',
    metricLabel: 'Seats live on Webex',
    sub: 'Zero customer-perceptible outages · 11 weeks',
  },
  {
    industry: 'Healthcare',
    title: 'National healthcare network — contact center modernization with HIPAA-safe routing',
    metric: '−52%',
    metricLabel: 'Average Handle Time',
    sub: 'AI-assisted triage · 24/7 NOC integration',
  },
];

export const CaseStudiesPreview = () => {
  return (
    <Section theme="dark" withBorder>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-7">
          <SectionLabel className="mb-5">Deployment briefs</SectionLabel>
          <h2 className={`${type.displayLG} text-white`}>
            Three engagements, <span className="text-[#049fd9]">three regulated industries.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <p className={`${type.body} text-slate-400 max-w-md`}>
            Every case below was delivered under NDA. Identifiable client details are withheld; metrics are real and audited.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {CASES.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: ease.signal }}
          >
            <Link
              to="/case-studies"
              className="block rounded-2xl bg-[#0b1120]/60 border border-white/10 hover:border-[#049fd9]/40 backdrop-blur-md p-8 lg:p-10 h-full group transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  <Lock className="w-3 h-3" /> {c.industry}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#049fd9] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>

              <h3 className={`${type.headingMD} text-white mb-8 leading-snug`}>
                {c.title}
              </h3>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="font-display font-bold text-[2.5rem] lg:text-[3rem] text-[#049fd9] leading-none tabular-nums tracking-tight">
                  {c.metric}
                </div>
                <div className="mt-2 font-mono text-[10px] text-slate-400 uppercase tracking-[0.18em]">
                  {c.metricLabel}
                </div>
                <p className="mt-4 text-[0.85rem] text-slate-500 leading-relaxed">{c.sub}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button to="/case-studies" variant="secondary" size="lg">
          Read all deployment briefs <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
};
