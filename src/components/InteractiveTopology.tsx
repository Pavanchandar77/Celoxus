import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

/**
 * InteractiveTopology
 * --------------------------------------------------------------------------
 * Mouse-reactive SVG network with drift nodes, signal pulses, and a cursor
 * gravity-well that subtly attracts nearby nodes. Borrowed in spirit from
 * celoxus-2's topology but reworked for the dark Cisco-blue aesthetic and
 * with live mouse interactivity.
 */

const VIEW_W = 800;
const VIEW_H = 800;
const NODE_COUNT = 28;
const NEIGHBORS = 3;
const SEED = 0x9e3779b9;
const MOUSE_INFLUENCE_RADIUS = 180;
const MOUSE_PULL = 22;

type Vec = { x: number; y: number };

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildLayout() {
  const rand = mulberry32(SEED);
  const nodes: Vec[] = [];
  const minDist = 80;
  let attempts = 0;
  while (nodes.length < NODE_COUNT && attempts < 5000) {
    attempts++;
    const c = { x: 50 + rand() * (VIEW_W - 100), y: 50 + rand() * (VIEW_H - 100) };
    if (nodes.every(n => (n.x - c.x) ** 2 + (n.y - c.y) ** 2 >= minDist * minDist)) {
      nodes.push(c);
    }
  }
  const edgeSet = new Set<string>();
  const edges: Array<[number, number]> = [];
  for (let i = 0; i < nodes.length; i++) {
    const dists = nodes
      .map((n, j) => ({ j, d: (n.x - nodes[i].x) ** 2 + (n.y - nodes[i].y) ** 2 }))
      .filter(x => x.j !== i)
      .sort((a, b) => a.d - b.d);
    for (let k = 0; k < NEIGHBORS && k < dists.length; k++) {
      const j = dists[k].j;
      const a = Math.min(i, j), b = Math.max(i, j);
      const key = `${a}-${b}`;
      if (!edgeSet.has(key)) { edgeSet.add(key); edges.push([a, b]); }
    }
  }
  return { nodes, edges };
}

const { nodes: NODES, edges: EDGES } = buildLayout();
const ACTIVE_NODES = new Set([2, 5, 7, 10, 13, 14, 17, 19, 22, 25]);
const DRIFT_NODES = [7, 14, 22];
const PULSE_EDGES = [
  { edge: [5, 10] as [number, number], period: 4.7, offset: 0 },
  { edge: [13, 17] as [number, number], period: 6.3, offset: 1.4 },
  { edge: [2, 19] as [number, number], period: 8.1, offset: 3.2 },
  { edge: [22, 25] as [number, number], period: 5.4, offset: 2.1 },
];

function nodeRadius(i: number) {
  if (!ACTIVE_NODES.has(i)) return 2.25;
  const h = ((i * 2654435761) >>> 0) / 2 ** 32;
  return 3.5 + h * 2;
}

export const InteractiveTopology = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mouse, setMouse] = useState<Vec | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * VIEW_W;
      const y = ((e.clientY - rect.top) / rect.height) * VIEW_H;
      setMouse({ x, y });
    };
    const handleLeave = () => setMouse(null);
    const el = svgRef.current?.parentElement;
    el?.addEventListener('mousemove', handleMove);
    el?.addEventListener('mouseleave', handleLeave);
    return () => {
      el?.removeEventListener('mousemove', handleMove);
      el?.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  // Compute mouse-displaced positions
  const displaced = useMemo(() => {
    return NODES.map((n) => {
      if (!mouse) return n;
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
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Edges */}
      <g stroke="rgba(4, 159, 217, 0.18)" strokeWidth="0.75">
        {EDGES.map(([a, b]) => {
          const na = displaced[a], nb = displaced[b];
          const isActive = ACTIVE_NODES.has(a) || ACTIVE_NODES.has(b);
          return (
            <motion.line
              key={`e-${a}-${b}`}
              animate={{ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y }}
              transition={{ type: 'spring', stiffness: 80, damping: 18 }}
              stroke={isActive ? 'rgba(4,159,217,0.45)' : 'rgba(255,255,255,0.06)'}
              strokeWidth={isActive ? 1 : 0.5}
            />
          );
        })}
      </g>

      {/* Signal pulses */}
      {PULSE_EDGES.map(({ edge: [a, b], period, offset }, i) => (
        <SignalPulse
          key={`p-${i}`}
          ax={NODES[a].x} ay={NODES[a].y}
          bx={NODES[b].x} by={NODES[b].y}
          period={period} offset={offset}
        />
      ))}

      {/* Nodes */}
      {NODES.map((_, i) => {
        const n = displaced[i];
        if (DRIFT_NODES.includes(i)) {
          return <DriftNode key={`n-${i}`} cx={n.x} cy={n.y} r={nodeRadius(i)} scale={1 + (DRIFT_NODES.indexOf(i) * 0.45)} />;
        }
        const isActive = ACTIVE_NODES.has(i);
        return (
          <motion.circle
            key={`n-${i}`}
            animate={{ cx: n.x, cy: n.y }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            r={nodeRadius(i)}
            fill={isActive ? '#049fd9' : 'rgba(255,255,255,0.25)'}
          />
        );
      })}

      {/* Mouse-follower halo */}
      {mouse && (
        <motion.circle
          cx={mouse.x} cy={mouse.y}
          r={MOUSE_INFLUENCE_RADIUS}
          fill="url(#cursorGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: 'none' }}
        />
      )}

      <defs>
        <radialGradient id="cursorGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#049fd9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#049fd9" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

function SignalPulse({ ax, ay, bx, by, period, offset }: {
  ax: number; ay: number; bx: number; by: number; period: number; offset: number;
}) {
  const transit = period * 0.32;
  return (
    <motion.circle
      r={2.5}
      fill="#049fd9"
      initial={{ cx: ax, cy: ay, opacity: 0 }}
      animate={{
        cx: [ax, bx, bx],
        cy: [ay, by, by],
        opacity: [0, 1, 0],
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

function DriftNode({ cx, cy, r, scale }: { cx: number; cy: number; r: number; scale: number }) {
  const driftCtl = useAnimationControls();
  const pulseCtl = useAnimationControls();
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    const wait = (ms: number) => new Promise<void>(res => setTimeout(res, ms));
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const loop = async () => {
      await wait(rand(2000, 5000) * scale);
      while (alive.current) {
        const angle = Math.random() * Math.PI * 2;
        const mag = rand(3, 6);
        const dx = Math.cos(angle) * mag;
        const dy = Math.sin(angle) * mag;
        try {
          await driftCtl.start({ x: dx, y: dy, transition: { duration: rand(12, 20) * scale, ease: [0.45, 0, 0.55, 1] } });
          if (!alive.current) return;
          await driftCtl.start({ x: 0, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } });
          if (!alive.current) return;
          pulseCtl.start({ r: [r, r * 6], opacity: [0.8, 0], transition: { duration: 1.4, ease: 'easeOut' } });
        } catch { return; }
        await wait(rand(400, 1400) * scale);
      }
    };
    loop();
    return () => { alive.current = false; driftCtl.stop(); pulseCtl.stop(); };
  }, [driftCtl, pulseCtl, r, scale]);

  return (
    <>
      <motion.circle cx={cx} cy={cy} r={r} fill="#049fd9" initial={{ opacity: 0, r }} animate={pulseCtl} style={{ pointerEvents: 'none' }} />
      <motion.g initial={{ x: 0, y: 0 }} animate={driftCtl} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <motion.circle
          animate={{ cx, cy }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          r={r}
          fill="#049fd9"
          style={{ filter: 'drop-shadow(0 0 6px #049fd9)' }}
        />
      </motion.g>
    </>
  );
}
