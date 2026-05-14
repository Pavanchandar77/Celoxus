import { motion } from 'framer-motion';
import { ease } from '../lib/typography';

/**
 * LogoBar — partner + customer trust row. Customer logos are NDA-anonymized
 * grayscale wordmarks with industry tags. The Cisco partner mark is the only
 * named logo (and is legitimate to display as a Cisco Premier Partner).
 */

type WordmarkProps = { tag: string; mark: string };

const PARTNERS = [
  { tag: 'CISCO', mark: 'PREMIER PARTNER' },
  { tag: 'CCIE', mark: 'CERTIFIED' },
];

const CUSTOMERS: WordmarkProps[] = [
  { tag: 'AVIATION', mark: 'Group A' },
  { tag: 'FIN. SERVICES', mark: 'Group B' },
  { tag: 'LOGISTICS', mark: 'Group C' },
  { tag: 'HEALTHCARE', mark: 'Group D' },
  { tag: 'TELECOM', mark: 'Group E' },
  { tag: 'BPO', mark: 'Group F' },
];

const ItemAnim = {
  hidden: { opacity: 0, y: 8 },
  shown: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: ease.signal },
  }),
};

export const LogoBar = () => {
  return (
    <section className="relative bg-[#020617] py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-[10px] lg:text-[11px] text-slate-500 uppercase tracking-[0.28em] mb-10"
        >
          Trusted across regulated enterprise — names withheld under NDA
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-white/[0.04] border border-white/[0.05] rounded-2xl overflow-hidden">
          {PARTNERS.map((p, i) => (
            <Wordmark key={`p-${i}`} {...p} accent index={i} />
          ))}
          {CUSTOMERS.map((c, i) => (
            <Wordmark key={`c-${i}`} {...c} index={PARTNERS.length + i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Wordmark({
  tag,
  mark,
  accent,
  index,
}: WordmarkProps & { accent?: boolean; index: number }) {
  return (
    <motion.div
      variants={ItemAnim}
      custom={index}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-50px' }}
      className="bg-[#020617] py-7 px-4 flex flex-col items-center justify-center gap-1.5 group hover:bg-white/[0.02] transition-colors duration-500"
      aria-label={`${tag} ${mark}`}
    >
      <span
        className={`font-display font-semibold text-[0.95rem] tracking-tight transition-colors duration-300 ${accent ? 'text-[#049fd9] group-hover:text-[#0ab2f1]' : 'text-slate-400 group-hover:text-slate-200'}`}
      >
        {mark}
      </span>
      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-[0.22em]">
        {tag}
      </span>
    </motion.div>
  );
}
