import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Cloud, Activity, Globe, Headphones, ChevronRight, Code, Shield, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveTopology } from '../components/InteractiveTopology';
import { MagneticButton } from '../components/MagneticButton';
import { CoreTopology } from '../components/CoreTopology';

const SIGNAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headlineVariant: Variants = {
  hidden: { opacity: 0, y: 48, clipPath: 'inset(0 0 100% 0)' },
  shown: {
    opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.4, ease: SIGNAL_EASE, delay: 0.35 },
  },
};
const subcopyVariant: Variants = {
  hidden: { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
  shown: {
    opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.1, ease: SIGNAL_EASE, delay: 0.7 },
  },
};
const ctaVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: SIGNAL_EASE, delay: 1.05 } },
};
const labelVariant: Variants = {
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { duration: 0.6, delay: 0.25 } },
};

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const topologyY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const hazeY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const bgImageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-screen bg-[#020617] overflow-hidden"
    >
      {/* ----- Layer 1: image background with hue shift ----- */}
      <motion.div
        style={{ y: bgImageY }}
        className="absolute inset-0 -top-[10%] h-[120%] z-0 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=80"
          alt=""
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.18] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/70 to-[#020617]"></div>
      </motion.div>

      {/* ----- Layer 2: architectural grid ----- */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-30"
      />

      {/* ----- Layer 3: animated glow orbs ----- */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08], x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[10%] left-[10%] w-[700px] h-[700px] rounded-full bg-[#049fd9] blur-[160px] mix-blend-screen pointer-events-none z-[1]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05], x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-700 blur-[160px] mix-blend-screen pointer-events-none z-[1]"
      />

      {/* ----- Layer 4: chapter cipher 01 ----- */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[55%] w-auto overflow-hidden leading-none">
        <span className="block font-display font-black leading-none text-[20vw] text-white/[0.025]" style={{ lineHeight: 1 }}>
          01
        </span>
      </div>

      {/* ----- Layer 5: mouse-reactive topology (right half) ----- */}
      <motion.div
        style={{ y: topologyY }}
        className="pointer-events-auto absolute top-0 right-0 hidden lg:block h-full w-[55%] z-[3]"
      >
        <div
          className="absolute inset-0 -right-[6%]"
          style={{ transform: 'perspective(1200px) rotateX(8deg) rotateY(-6deg)', transformOrigin: '60% 50%' }}
        >
          <InteractiveTopology />
        </div>
      </motion.div>

      {/* ----- Layer 6: haze separator ----- */}
      <motion.div
        style={{ y: hazeY }}
        className="pointer-events-none absolute inset-x-0 top-[55%] hidden lg:block h-[40vh] z-[4]"
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(80% 100% at 70% 50%, rgba(2,6,23,0.65) 0%, rgba(2,6,23,0.0) 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* ----- Layer 7: typography (left col) ----- */}
      <motion.div style={{ y: headlineY }} className="absolute inset-0 z-[10]">
        <div className="mx-auto h-full w-full max-w-7xl px-6 lg:px-8 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7 self-end pb-[18vh] lg:pb-0 lg:self-center lg:pt-12">
            {/* Status pill */}
            <motion.div
              variants={labelVariant}
              initial="hidden"
              animate="shown"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#049fd9]/10 border border-[#049fd9]/30 text-[#049fd9] mb-10 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.18em]">
                Cisco Premier Partner <span className="text-emerald-400/80 ml-2 hidden sm:inline">SYS · NOMINAL</span>
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-black tracking-tighter text-white text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] leading-[0.92] mb-10">
              <motion.span variants={headlineVariant} initial="hidden" animate="shown" className="block">
                Infrastructure
              </motion.span>
              <motion.span variants={headlineVariant} initial="hidden" animate="shown" className="block">
                <span className="relative inline-block">
                  <span className="absolute -inset-6 bg-[#049fd9]/20 blur-3xl rounded-full"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-[#049fd9] to-blue-300">
                    without friction.
                  </span>
                </span>
              </motion.span>
            </h1>

            {/* Subcopy */}
            <motion.p
              variants={subcopyVariant}
              initial="hidden"
              animate="shown"
              className="max-w-xl text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-12"
            >
              Celoxus architectures power the world's most critical logistics, finance, and enterprise networks with{' '}
              <span className="text-white font-normal">CCIE-certified precision.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={ctaVariant}
              initial="hidden"
              animate="shown"
              className="flex flex-col sm:flex-row gap-5"
            >
              <MagneticButton to="/products" className="cursor-pointer">
                <div className="h-16 px-10 rounded-full bg-[#049fd9] text-white font-bold flex items-center gap-3 text-lg shadow-[0_15px_40px_rgba(4,159,217,0.45)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                  <span className="relative">Initialize Architecture</span>
                  <ArrowRight className="relative w-5 h-5" />
                </div>
              </MagneticButton>
              <MagneticButton to="/contact" className="cursor-pointer" strength={0.2}>
                <div className="h-16 px-10 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 text-white font-bold flex items-center gap-3 text-lg hover:bg-white/[0.10] transition-colors">
                  <Activity className="w-5 h-5 text-[#049fd9]" /> Book an Engineer
                </div>
              </MagneticButton>
            </motion.div>

            {/* spec label */}
            <motion.p
              variants={labelVariant}
              initial="hidden"
              animate="shown"
              className="mt-16 font-mono text-[10px] text-slate-500 uppercase tracking-[0.25em]"
            >
              CELOXUS · v25 · SYSTEMS INTEGRATION · CCIE · DALLAS · BANGALORE
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ----- Persistent signal line ----- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px z-[11]" style={{ backgroundColor: 'rgba(4, 159, 217, 0.4)' }}>
        <motion.span
          className="absolute top-1/2 block h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-[#049fd9]"
          style={{ filter: 'drop-shadow(0 0 6px #049fd9)' }}
          initial={{ left: '0%' }}
          animate={{ left: '100%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
};

/* ========================================================================== */

export const TrustBanner = () => {
  return (
    <div className="bg-[#020617] py-32 relative z-20 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04] pointer-events-none">
        <Globe className="w-full h-full text-[#049fd9]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.32em] mb-5 flex justify-center items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Industry Leaders
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SIGNAL_EASE }}
          className="text-3xl md:text-5xl font-light text-white tracking-tight font-display"
        >
          Enterprise solutions powered by <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049fd9] to-blue-300">CCIE-certified architects.</span>
        </motion.h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Cisco Premier', sub: 'Certified Partner', icon: Shield },
            { label: 'CCIE Collaboration', sub: 'Certified Architects', icon: Layers },
            { label: 'Advanced Data Center', sub: 'Specialized', icon: Database },
            { label: 'Zero-Downtime SLA', sub: '24/7 Operations', icon: Activity },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: SIGNAL_EASE }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 text-center p-7 bg-white/[0.02] backdrop-blur-3xl rounded-3xl border border-white/[0.06] hover:border-[#049fd9]/30 transition-colors duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#049fd9]/0 to-[#049fd9]/0 group-hover:from-[#049fd9]/10 group-hover:to-transparent transition-all duration-700"></div>
              <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500">
                <b.icon className="w-7 h-7 text-[#049fd9]" />
              </div>
              <div className="relative font-bold text-sm tracking-tight text-white">{b.label}</div>
              <div className="relative font-mono text-[10px] text-slate-400 uppercase tracking-[0.18em]">{b.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ========================================================================== */

const CORE_LABELS = [
  { i: '0.01', t: 'Fragmented systems create operational friction.' },
  { i: '0.02', t: 'Cisco calling and contact center, unified.' },
  { i: '0.03', t: 'One system. Uninterrupted continuity.' },
] as const;

export const CoreSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const op1 = useTransform(scrollYProgress, [0, 0.06, 0.28, 0.36], [1, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.28, 0.36, 0.62, 0.7], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0.62, 0.7, 1.0], [0, 1, 1]);

  return (
    <section ref={containerRef} className="relative w-full md:h-[300vh] bg-[#020617]">
      <div className="hidden md:block h-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* bg accents */}
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#049fd9]/[0.04] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[140px] rounded-full"></div>

          {/* chapter cipher */}
          <span aria-hidden className="pointer-events-none absolute -left-[2vw] -top-[6vw] block font-display font-black leading-none text-[20vw] text-white/[0.025]">
            02
          </span>

          <div className="mx-auto h-full max-w-7xl px-6 lg:px-8 grid grid-cols-12 gap-4">
            {/* Left text */}
            <div className="col-span-5 flex flex-col justify-center relative z-10">
              <p className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.28em] mb-6">
                Chapter / 02 · The Core
              </p>
              <h2 className="font-display font-light text-white text-[3rem] lg:text-[5rem] leading-[0.95] mb-10">
                Convergence is the architecture.
              </h2>
              <p className="max-w-md text-lg text-slate-400 leading-relaxed font-light mb-12">
                Cisco calling, contact center, and observability stacks unified into one always-on operational fabric.
              </p>
              <div className="font-mono text-[10px] text-slate-500 uppercase leading-[1.9] tracking-[0.18em] max-w-md">
                Calling <span className="text-slate-700 px-2">/</span>
                Contact Center <span className="text-slate-700 px-2">/</span>
                Cloud <span className="text-slate-700 px-2">/</span>
                Monitoring <span className="text-slate-700 px-2">/</span>
                Notifications <span className="text-slate-700 px-2">/</span>
                Integration
              </div>
            </div>

            {/* Right topology */}
            <div className="col-span-7 flex flex-col items-center justify-center relative z-10">
              <div className="relative aspect-square w-full max-w-[640px]">
                <CoreTopology progress={scrollYProgress} />
              </div>
              <div className="relative mt-6 h-12 w-full max-w-[480px] text-center">
                {CORE_LABELS.map((label, i) => (
                  <motion.div
                    key={i}
                    style={{ opacity: i === 0 ? op1 : i === 1 ? op2 : op3 }}
                    className="absolute inset-x-0 top-0"
                  >
                    <span className="font-mono text-[10px] text-[#049fd9] tracking-[0.3em] mr-3">[{label.i}]</span>
                    <span className="font-body text-slate-400 text-[0.95rem]">{label.t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden px-6 py-24">
        <p className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.28em] mb-4">Chapter / 02</p>
        <h2 className="font-display font-light text-white text-[2.5rem] leading-[0.95] mb-6">The Core</h2>
        <p className="text-base text-slate-400 leading-relaxed font-light mb-12">
          Cisco calling, contact center, and observability unified into one always-on fabric.
        </p>
        {CORE_LABELS.map((label, i) => (
          <div key={i} className="border-t border-white/10 py-10">
            <span className="font-mono text-[10px] text-[#049fd9] tracking-[0.3em] block mb-2">[{label.i}]</span>
            <span className="text-slate-300 text-lg">{label.t}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ========================================================================== */

export const BentoGrid = () => {
  return (
    <section className="py-32 bg-[#020617] relative z-10 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#049fd9]/[0.06] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/[0.05] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: SIGNAL_EASE }}
          className="mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.28em] mb-5">Chapter / 03 · Capability</p>
          <h2 className="text-4xl md:text-6xl font-display font-light text-white tracking-tight mb-6 leading-[1.0]">
            Transforming complexity into <span className="text-[#049fd9]">modern advantage.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light">
            From seamless Webex collaboration to bespoke software integrations, we architect the systems that drive enterprise efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BentoCard
            span={2}
            delay={0.1}
            icon={Headphones}
            title="Webex Contact Center"
            body="Deliver exceptional customer experiences with unified communications and AI-powered journey mapping."
            cta="Explore Platform"
            to="/products"
            image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80"
          />
          <BentoCard
            delay={0.2}
            icon={Code}
            title="Enterprise APIs"
            body="Custom middleware driving interoperability across fragmented legacy architectures."
            cta="View Architecture"
            to="/services"
          />
          <BentoCard
            delay={0.3}
            icon={Activity}
            title="Network Ops"
            body="Proactive monitoring and real-time observability for your Cisco infrastructure."
            cta="See Tooling"
            to="/contact"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
          />
          <BentoCard
            span={2}
            delay={0.4}
            icon={Cloud}
            title="Cisco Cloud Migration"
            body="Accelerate your transition to Cisco cloud-native application ecosystems with certified engineering precision."
            cta="Discover Services"
            to="/services"
            image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80"
            featured
          />
        </div>
      </div>
    </section>
  );
};

type BentoCardProps = {
  span?: number;
  delay: number;
  icon: any;
  title: string;
  body: string;
  cta: string;
  to: string;
  image?: string;
  featured?: boolean;
};
const BentoCard = ({ span, delay, icon: Icon, title, body, cta, to, image, featured }: BentoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // tilt
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
    el.style.transform = `perspective(1200px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: SIGNAL_EASE }}
      className={span === 2 ? 'md:col-span-2' : ''}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}
        className="relative overflow-hidden rounded-[2rem] bg-[#0b1120]/60 backdrop-blur-xl p-10 md:p-12 border border-white/10 group h-full hover:border-[#049fd9]/40 transition-colors duration-500"
      >
        {/* cursor radial spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(4,159,217,0.18), transparent 60%)',
          }}
        />

        {image && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={image}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-[0.10] mix-blend-screen group-hover:scale-[1.04] group-hover:opacity-[0.15] transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#020617]/85 to-[#020617]/40"></div>
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full min-h-[260px]">
          <div className={`w-14 h-14 rounded-2xl ${featured ? 'bg-[#049fd9] shadow-lg shadow-[#049fd9]/30' : 'bg-white/5 border border-white/10 backdrop-blur-md'} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
            <Icon className={`w-7 h-7 ${featured ? 'text-white' : 'text-[#049fd9]'}`} />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-4 tracking-tight">{title}</h3>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed flex-1 font-light max-w-xl">{body}</p>
          <Link
            to={to}
            className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#049fd9] hover:gap-3 transition-all"
          >
            {cta} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

/* ========================================================================== */

export const SplitMission = () => {
  return (
    <section className="py-32 bg-[#020617] overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#049fd9]/[0.08] blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: SIGNAL_EASE }}
            className="lg:w-1/2"
          >
            <p className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.28em] mb-6 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" /> Chapter / 04 · Trust
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight text-white mb-8 leading-[1.0]">
              Architecture trusted by the <span className="text-[#049fd9]">world's leading</span> organizations.
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
              We specialize in complex technology swaps and greenfield builds, ensuring your infrastructure is ready for the next decade of enterprise scale.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                { h: 'Cisco Systems Specialists', b: 'Deployment and optimization of Collaboration and Enterprise Networking.' },
                { h: 'High Availability Protocols', b: 'Resilient architectures designed for 24/7 mission-critical operations.' },
                { h: 'NDA-First Engagements', b: 'Discreet engineering relationships for regulated enterprise verticals.' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-[#049fd9]/10 flex items-center justify-center flex-shrink-0 mt-1 border border-[#049fd9]/30">
                    <span className="text-[#049fd9] font-mono text-xs">0{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-light text-white mb-1.5 tracking-tight">{item.h}</h4>
                    <p className="text-slate-400 font-light">{item.b}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <MagneticButton to="/about" strength={0.2}>
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-[#049fd9]/30 transition-all duration-500 backdrop-blur-md">
                Meet our architects <ArrowRight className="inline w-4 h-4 ml-2" />
              </button>
            </MagneticButton>
          </motion.div>

          {/* Animated rack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: SIGNAL_EASE }}
            className="lg:w-1/2 relative w-full h-[640px] flex items-center justify-center"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#0b1120] to-[#020617] rounded-[3rem] flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden">
              {/* image bg */}
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
                alt=""
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-screen"
              />
              <div className="absolute inset-0 bg-[radial-gradient(#049fd9_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>

              {/* Rack stack */}
              <div className="relative z-10 flex flex-col items-center gap-5 w-full px-12">
                {[
                  { label: 'CALL ROUTING', stat: '99.997%' },
                  { label: 'CONTACT CENTER', stat: 'ACTIVE' },
                  { label: 'WEBEX CLOUD', stat: 'SYNC' },
                  { label: 'OBSERVABILITY', stat: 'NOMINAL' },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: SIGNAL_EASE }}
                    className="w-full max-w-md h-16 bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 flex items-center px-6 gap-4 shadow-lg group hover:border-[#049fd9]/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#049fd9]/15 border border-[#049fd9]/20 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-[#049fd9]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1">{row.label}</div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ x: '-100%' }}
                          animate={{ x: '120%' }}
                          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
                          className="h-full w-2/3 bg-gradient-to-r from-transparent via-[#049fd9] to-transparent"
                        />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#049fd9] tracking-[0.15em]">{row.stat}</span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#049fd9]/15 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ========================================================================== */

export const CTASection = () => {
  return (
    <section className="relative py-40 bg-[#020617] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_50%,transparent_100%)]"></div>
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#049fd933_0%,transparent_60%)]"
      />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-[#049fd9] uppercase tracking-[0.32em] mb-6"
        >
          Chapter / 05 · Initiate
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: SIGNAL_EASE }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white tracking-tight mb-10 leading-[0.95]"
        >
          Evolve your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#049fd9] to-blue-300">enterprise network.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-400 font-light mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Partner with CCIE-certified architects to modernize your Webex infrastructure and contact center performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 180 }}
          className="inline-block"
        >
          <MagneticButton to="/contact" strength={0.35}>
            <div className="inline-flex items-center gap-3 px-14 py-6 rounded-full bg-[#049fd9] text-white font-bold shadow-[0_20px_50px_rgba(4,159,217,0.5)] text-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
              <span className="relative">Book a Strategic Assessment</span>
              <ArrowRight className="relative w-5 h-5" />
            </div>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
