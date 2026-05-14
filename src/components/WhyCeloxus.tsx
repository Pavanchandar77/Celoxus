import { motion } from 'framer-motion';
import { Award, Layers, Shield, Compass } from 'lucide-react';
import { Section, SectionLabel } from './Section';
import { type, ease } from '../lib/typography';

/**
 * WhyCeloxus — four-pillar differentiator strip. Customer-grounded, not
 * abstract. Each pillar answers "why us vs the next SI on the list."
 */

const PILLARS = [
  {
    icon: Award,
    title: 'CCIE-led, not CCIE-adjacent',
    body: 'Every engagement is owned end-to-end by a CCIE-certified architect. No bait-and-switch from senior pitch to junior delivery.',
  },
  {
    icon: Compass,
    title: 'Vendor-honest',
    body: 'We are not a reseller with a quota. We recommend the architecture you need — even when that means reusing what you already own.',
  },
  {
    icon: Shield,
    title: 'Regulated-industry fluent',
    body: 'Deployments in aviation, finance, healthcare, and logistics. Background-checked engineers. NDA-first engagements.',
  },
  {
    icon: Layers,
    title: 'Architecture warranty',
    body: 'Every system we ship is documented, reversible, and supported. Quarterly architecture reviews are included for the first year.',
  },
];

export const WhyCeloxus = () => {
  return (
    <Section theme="dark" withBorder>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#049fd9]/[0.04] blur-[110px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-7">
          <SectionLabel className="mb-5">Why Celoxus</SectionLabel>
          <h2 className={`${type.displayLG} text-white`}>
            Four things you'll only hear from the room <span className="text-[#049fd9]">that actually ships.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <p className={`${type.body} text-slate-400 max-w-md`}>
            Most enterprise SIs treat you like a quarterly forecast. We treat your network like the operational asset it is.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: ease.signal }}
            className="bg-[#020617] p-8 lg:p-10 group hover:bg-white/[0.015] transition-colors duration-500"
          >
            <div className="w-11 h-11 rounded-xl bg-[#049fd9]/10 border border-[#049fd9]/20 flex items-center justify-center mb-7 group-hover:bg-[#049fd9]/15 transition-colors duration-500">
              <p.icon className="w-5 h-5 text-[#049fd9]" strokeWidth={1.5} />
            </div>
            <h3 className={`${type.headingMD} text-white mb-3`}>{p.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-slate-400 font-normal">
              {p.body}
            </p>
            <div className="mt-7 h-px w-8 bg-white/10 group-hover:w-16 group-hover:bg-[#049fd9] transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
