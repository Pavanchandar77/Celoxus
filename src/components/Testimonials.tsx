import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, SectionLabel } from './Section';
import { type, ease } from '../lib/typography';

/**
 * Testimonials — 3-up grid of NDA-safe enterprise quotes. Author names
 * are anonymized but their role + industry + region carry the credibility.
 */

const QUOTES = [
  {
    quote:
      'Celoxus orchestrated our entire multinational call-center migration with zero downtime. Their CCIE team is the difference between a working number and a working business.',
    role: 'Director of IT',
    org: 'Fortune 500 Logistics',
    region: 'North America',
    initials: 'DL',
  },
  {
    quote:
      'We replaced a legacy PBX across four regions during business hours and customers never noticed. The cutover plan they wrote is now our internal template.',
    role: 'VP, Operations',
    org: 'Regional Bank',
    region: 'EMEA',
    initials: 'RB',
  },
  {
    quote:
      'When our queue stack flatlined at midnight, Celoxus had it diagnosed before our on-call paged us. That is the difference between a vendor and an architect.',
    role: 'Head of Customer Experience',
    org: 'Healthcare Network',
    region: 'APAC',
    initials: 'HC',
  },
];

export const Testimonials = () => {
  return (
    <Section theme="dark" withBorder>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-7">
          <SectionLabel className="mb-5">In their words</SectionLabel>
          <h2 className={`${type.displayLG} text-white`}>
            What customers say <span className="text-[#049fd9]">after the cutover.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <p className={`${type.body} text-slate-400 max-w-md`}>
            Names and organizations are anonymized under NDA. Roles, regions, and metrics are real.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {QUOTES.map((q, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: ease.signal }}
            className="rounded-2xl bg-[#0b1120]/60 border border-white/10 hover:border-[#049fd9]/30 backdrop-blur-md p-8 lg:p-10 flex flex-col group transition-colors duration-500"
          >
            <Quote className="w-6 h-6 text-[#049fd9] mb-6 opacity-60" strokeWidth={1.25} />
            <blockquote className="flex-1 text-[1.0625rem] leading-relaxed text-slate-200 font-normal">
              &ldquo;{q.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#049fd9]/15 border border-[#049fd9]/30 flex items-center justify-center font-display font-bold text-[#049fd9] text-[0.85rem]">
                {q.initials}
              </div>
              <div>
                <div className="text-white font-display font-semibold text-[0.95rem] tracking-tight">{q.role}</div>
                <div className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.18em] mt-0.5">
                  {q.org} · {q.region}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
};
