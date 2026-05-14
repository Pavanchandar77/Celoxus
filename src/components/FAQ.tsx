import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section, SectionLabel } from './Section';
import { Button } from './Button';
import { type, ease } from '../lib/typography';

/**
 * FAQ — eight common pre-sales questions. Single-open accordion with
 * keyboard support (Enter / Space toggle).
 */

const FAQS = [
  {
    q: 'How quickly can you start a new engagement?',
    a: 'Discovery typically begins within two weeks of NDA execution. We hold a small bench of CCIE-led architects specifically so we can move quickly on critical engagements.',
  },
  {
    q: 'What is your deployment philosophy?',
    a: 'Reversible by default. Every cutover has a documented rollback that takes minutes, not hours. We pilot, parallel-run, and only cut DNS / SIP records once telemetry agrees.',
  },
  {
    q: 'Do you migrate during business hours?',
    a: 'Yes, frequently. Our model is sequenced cutover with parallel-running infrastructure so traffic moves between systems without an outage window. Most customers do not announce a maintenance window at all.',
  },
  {
    q: 'What Cisco certifications does your team carry?',
    a: 'CCIE Collaboration, CCIE Enterprise, Cisco Advanced Data Center, and Cisco Webex specialization. Every project is led by a CCIE; we do not staff junior on solo delivery.',
  },
  {
    q: 'Which regulated industries have you deployed in?',
    a: 'Aviation, financial services (retail and commercial banking), healthcare (HIPAA-covered entities), logistics, and federal-adjacent telecom. We can supply sanitized reference architectures on request.',
  },
  {
    q: 'What are your SLA terms?',
    a: 'Severity-1: 15-minute acknowledgement, 4-hour architect engagement, 24/7. Severity-2: 1 business hour. Postmortems are written within five business days and shared.',
  },
  {
    q: 'Can you maintain existing Cisco hardware?',
    a: 'Yes. We support on-premise UCM, UCCX, UCCE, and CUBE alongside cloud Webex deployments. Many engagements start as hybrid maintenance and graduate to a phased cloud migration.',
  },
  {
    q: 'What is your engagement model?',
    a: 'Three shapes: fixed-scope architecture audit (discovery), milestone-priced implementation, and monthly retainer for managed operations. We do not bill hourly for senior engineering time.',
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section theme="dark" withBorder>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 lg:mb-16">
        <div className="lg:col-span-7">
          <SectionLabel className="mb-5">Frequently asked</SectionLabel>
          <h2 className={`${type.displayLG} text-white`}>
            Answers your security review <span className="text-[#049fd9]">will ask for anyway.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <p className={`${type.body} text-slate-400 max-w-md`}>
            Still uncovered? Email <a href="mailto:info@celoxus.com" className="text-[#049fd9] hover:text-[#0ab2f1] underline-offset-4 hover:underline">info@celoxus.com</a> — a senior architect will respond, not a sales rep.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <ul className="lg:col-span-10 lg:col-start-2 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full text-left flex items-center justify-between gap-8 py-7 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#049fd9] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617]"
                >
                  <span className="flex items-center gap-6 flex-1 min-w-0">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.22em] flex-shrink-0 hidden md:inline">
                      0{i + 1}
                    </span>
                    <span className={`font-display font-semibold text-[1.05rem] lg:text-[1.25rem] tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isOpen ? 'bg-[#049fd9] border-[#049fd9] text-white rotate-45' : 'bg-white/[0.03] border-white/15 text-slate-300 group-hover:border-white/30'}`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: ease.signal }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-16 md:pl-[5.5rem] text-slate-400 text-[1rem] leading-relaxed font-normal max-w-3xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-14 flex justify-center">
        <Button to="/contact" variant="primary" size="lg" magnetic>
          Talk to an architect →
        </Button>
      </div>
    </Section>
  );
};
