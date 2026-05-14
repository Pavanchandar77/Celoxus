import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

/**
 * NetworkTopology — Faithful port of celoxus-2's hero topology with
 * a mouse-reactive gravity-well enhancement added on top. Same seeded
 * Poisson-disc layout, same k-nearest edges, same dual stratum, same
 * drift-and-snap-back nodes with accent pulse, same co-prime signal
 * pulses across 3 channels. Recolored for the dark Cisco theme.
 */

const VIEW_W = 800;
const VIEW_H = 720;
const NODE_COUNT = 22;
const NEIGHBORS = 3;
const SEED = 0x9e3779b9;
const DRIFT_NODE_INDEX = 7;
const DRIFT_NODE_INDEX_B = 14;
const ACTIVE_NODE_INDICES = new Set<number>([2, 5, 7, 10, 13, 14, 17, 19]);

const MOUSE_INFLUENCE_RADIUS = 170;
const MOUSE_PULL = 24;

type Vec = { readonly x: number; readonly y: number };

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildLayout(): { nodes: Vec[]; edges: Array<[number, number]> } {
  const rand = mulberry32(SEED);
  const nodes: Vec[] = [];
  const minDist = 90;
  let attempts = 0;
  while (nodes.length < NODE_COUNT && attempts < 4000) {
    attempts++;
    const c: Vec = {
      x: 60 + rand() * (VIEW_W - 120),
      y: 60 + rand() * (VIEW_H - 120),
    };
    let ok = true;
    for (const n of nodes) {
      const dx = n.x - c.x;
      const dy = n.y - c.y;
      if (dx * dx + dy * dy < minDist * minDist) { ok = false; break; }
    }
    if (ok) nodes.push(c);
  }

  const edgeSet = new Set<string>();
  const edges: Array<[number, number]> = [];
  for (let i = 0; i < nodes.length; i++) {
    const here = nodes[i]!;
    const dists: Array<{ idx: number; d: number }> = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const o = nodes[j]!;
      const dx = o.x - here.x;
      const dy = o.y - here.y;
      dists.push({ idx: j, d: dx * dx + dy * dy });
    }
    dists.sort((a, b) => a.d - b.d);
    for (let k = 0; k < NEIGHBORS && k < dists.length; k++) {
      const j = dists[k]!.idx;
      const a = Math.min(i, j);
      const b = Math.max(i, j);
      const key = `${a}-${b}`;
      if (edgeSet.has(key)) continue;
      edgeSet.add(key);
      edges.push([a, b]);
    }
  }
  return { nodes, edges };
}

const { nodes: NODES, edges: EDGES } = buildLayout();

const ACTIVE_EDGES: ReadonlyArray<[number, number]> = EDGES.filter(
  ([a, b]) => ACTIVE_NODE_INDICES.has(a) || ACTIVE_NODE_INDICES.has(b),
);
const GHOST_EDGES: ReadonlyArray<[number, number]> = EDGES.filter(
  ([a, b]) => !ACTIVE_NODE_INDICES.has(a) && !ACTIVE_NODE_INDICES.has(b),
);

const PULSE_EDGES: ReadonlyArray<{ edge: [number, number]; period: number; offset: number }> = [
  { edge: [5, 10], period: 4.7, offset: 0 },
  { edge: [13, 17], period: 6.3, offset: 1.4 },
  { edge: [2, 19], period: 8.1, offset: 3.2 },
];

function nodeRadius(i: number): number {
  if (!ACTIVE_NODE_INDICES.has(i)) return 2.25;
  const h = ((i * 2654435761) >>> 0) / 2 ** 32;
  return 3.0 + h * 1.5;
}

export function NetworkTopology({ interactive = true }: { interactive?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mouse, setMouse] = useState<Vec | null>(null);

  useEffect(() => {
    if (!interactive) return;
    const el = svgRef.current?.parentElement;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = svgRef.current!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * VIEW_W;
      const y = ((e.clientY - rect.top) / rect.height) * VIEW_H;
      setMouse({ x, y });
    };
    const handleLeave = () => setMouse(null);
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [interactive]);

  const displaced = useMemo(() => {
    if (!mouse) return NODES;
    return NODES.map((n) => {
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > MOUSE_INFLUENCE_RADIUS || dist === 0) return n;
      const force = (1 - dist / MOUSE_INFLUENCE_RADIUS) * MOUSE_PULL;
      return { x: n.x + (dx / dist) * force, y: n.y + (dy / dist) * force };
    });
  }, [mouse]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Abstract network topology"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="ntCursorGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#049fd9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#049fd9" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ghost stratum */}
      <g strokeWidth="0.75">
        {GHOST_EDGES.map(([a, b]) => {
          const na = displaced[a]!, nb = displaced[b]!;
          return (
            <motion.line
              key={`ge-${a}-${b}`}
              animate={{ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y }}
              transition={{ type: 'spring', stiffness: 90, damping: 20 }}
              stroke="rgba(226,232,240,0.07)"
            />
          );
        })}
      </g>

      {/* Active stratum */}
      <g strokeWidth="1">
        {ACTIVE_EDGES.map(([a, b]) => {
          const na = displaced[a]!, nb = displaced[b]!;
          return (
            <motion.line
              key={`ae-${a}-${b}`}
              animate={{ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y }}
              transition={{ type: 'spring', stiffness: 90, damping: 20 }}
              stroke="rgba(4,159,217,0.42)"
            />
          );
        })}
      </g>

      {/* Signal pulses — co-prime periods */}
      {PULSE_EDGES.map(({ edge: [a, b], period, offset }, i) => (
        <SignalPulse
          key={`p-${i}`}
          ax={NODES[a]!.x} ay={NODES[a]!.y}
          bx={NODES[b]!.x} by={NODES[b]!.y}
          period={period} offset={offset}
        />
      ))}

      {/* Nodes */}
      {NODES.map((_n, i) => {
        const n = displaced[i]!;
        if (i === DRIFT_NODE_INDEX || i === DRIFT_NODE_INDEX_B) {
          return (
            <DriftNode
              key={`n-${i}`}
              cx={n.x} cy={n.y}
              r={nodeRadius(i)}
              periodScale={i === DRIFT_NODE_INDEX ? 1 : 1.45}
            />
          );
        }
        const isActive = ACTIVE_NODE_INDICES.has(i);
        return (
          <motion.circle
            key={`n-${i}`}
            animate={{ cx: n.x, cy: n.y }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            r={nodeRadius(i)}
            fill={isActive ? '#e2e8f0' : 'rgba(226,232,240,0.35)'}
          />
        );
      })}

      {/* Cursor glow (only when interactive + hovering) */}
      {interactive && mouse && (
        <motion.circle
          cx={mouse.x}
          cy={mouse.y}
          r={MOUSE_INFLUENCE_RADIUS}
          fill="url(#ntCursorGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{ pointerEvents: 'none' }}
        />
      )}
    </svg>
  );
}

function SignalPulse({ ax, ay, bx, by, period, offset }: {
  ax: number; ay: number; bx: number; by: number; period: number; offset: number;
}) {
  const transit = period * 0.32;
  return (
    <motion.circle
      r={2}
      fill="#049fd9"
      initial={{ cx: ax, cy: ay, opacity: 0 }}
      animate={{
        cx: [ax, bx, bx],
        cy: [ay, by, by],
        opacity: [0, 0.95, 0],
      }}
      transition={{
        duration: period,
        times: [0, transit / period, 1],
        repeat: Infinity,
        delay: offset,
        ease: [0.4, 0, 0.6, 1],
      }}
      style={{ filter: 'drop-shadow(0 0 4px #049fd9)' }}
    />
  );
}

function DriftNode({ cx, cy, r, periodScale }: { cx: number; cy: number; r: number; periodScale: number }) {
  const driftCtl = useAnimationControls();
  const pulseCtl = useAnimationControls();
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    const wait = (ms: number) => new Promise<void>(res => setTimeout(res, ms));
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const loop = async () => {
      await wait(rand(2000, 5000) * periodScale);
      while (alive.current) {
        const angle = Math.random() * Math.PI * 2;
        const mag = rand(2, 3.4);
        const dx = Math.cos(angle) * mag;
        const dy = Math.sin(angle) * mag;
        const dur = rand(15, 25) * periodScale;
        try {
          await driftCtl.start({ x: dx, y: dy, transition: { duration: dur, ease: [0.45, 0, 0.55, 1] } });
        } catch { return; }
        if (!alive.current) return;
        try {
          await driftCtl.start({ x: 0, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } });
        } catch { return; }
        if (!alive.current) return;
        pulseCtl.start({ r: [r, r * 4.5], opacity: [0.6, 0], transition: { duration: 1.2, ease: 'easeOut' } });
        await wait(rand(400, 1400) * periodScale);
      }
    };
    loop();
    return () => { alive.current = false; driftCtl.stop(); pulseCtl.stop(); };
  }, [driftCtl, pulseCtl, periodScale, r]);

  return (
    <>
      <motion.circle cx={cx} cy={cy} r={r} fill="#049fd9" initial={{ opacity: 0, r }} animate={pulseCtl} style={{ pointerEvents: 'none' }} />
      <motion.g initial={{ x: 0, y: 0 }} animate={driftCtl} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <motion.circle
          animate={{ cx, cy }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          r={r}
          fill="#049fd9"
          style={{ filter: 'drop-shadow(0 0 5px #049fd9)' }}
        />
      </motion.g>
    </>
  );
}
