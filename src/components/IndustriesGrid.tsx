import { motion } from 'framer-motion';
import { Plane, Banknote, Truck, HeartPulse, Phone, Headphones } from 'lucide-react';
import { Section, SectionLabel } from './Section';
import { type, ease } from '../lib/typography';

/**
 * IndustriesGrid — verticals served, each with a one-line pain point so the
 * reader self-identifies. Light-themed band to break dark monotony.
 */

const INDUSTRIES = [
  {
    icon: Plane,
    name: 'Aviation',
    pain: 'Ramp-side comms that hold under weather, surge, and shift handover.',
  },
  {
    icon: Banknote,
    name: 'Financial Services',
    pain: 'PBX retirement with audit-proof call recording and compliance reporting.',
  },
  {
    icon: Truck,
    name: 'Global Logistics',
    pain: 'Multilingual contact centers across time zones with single-pane visibility.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    pain: 'HIPAA-safe routing, PHI-aware queues, and provider-to-patient continuity.',
  },
  {
    icon: Phone,
    name: 'Telecom',
    pain: 'Operator-grade scale: tens of thousands of concurrent seats, sub-minute failover.',
  },
  {
    icon: Headphones,
    name: 'BPO & CX',
    pain: 'Multi-tenant Webex CC with isolated brand identity per client engagement.',
  },
];

export const IndustriesGrid = () => {
  return (
    <Section theme="light" withBorder>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-7">
          <SectionLabel theme="light" className="mb-5">Industries served</SectionLabel>
          <h2 className={`${type.displayLG} text-slate-900`}>
            We deploy where downtime is <span className="text-[#049fd9]">not negotiable.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <p className={`${type.body} text-slate-500 max-w-md`}>
            If the call has to connect, the queue has to hold, and the audit has to clear — we have done this in your industry.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: ease.signal }}
            className="bg-[#f6f6f8] p-8 lg:p-10 group hover:bg-white transition-colors duration-500"
            data-cursor="hover"
          >
            <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-7 group-hover:border-[#049fd9]/40 transition-colors duration-500">
              <ind.icon className="w-5 h-5 text-slate-500 group-hover:text-[#049fd9] transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h3 className={`${type.headingMD} text-slate-900 mb-3`}>{ind.name}</h3>
            <p className="text-[0.95rem] leading-relaxed text-slate-600">{ind.pain}</p>
            <div className="mt-7 h-px w-8 bg-slate-300 group-hover:w-16 group-hover:bg-[#049fd9] transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
