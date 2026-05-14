import { motion, MotionValue, useTransform } from 'framer-motion';

/**
 * CoreTopology — Faithful port of celoxus-2's scroll-driven cluster-combine.
 * Four scattered clusters of nodes lerp from their hand-authored "from"
 * positions to their unified "to" positions as scroll progress runs.
 * Inter-cluster edges draw via stroke-dashoffset 100→0 during 0.33–0.66.
 * Past 0.66, the hub recolors to accent and emits a pulse halo.
 *
 * Recolored for the dark Cisco theme (slate strokes, accent on hub).
 */

const VIEW_W = 600;
const VIEW_H = 600;

type ClusterNode = {
  isHub?: boolean;
  from: { x: number; y: number };
  to: { x: number; y: number };
};

const NODES: ReadonlyArray<ClusterNode> = [
  // Cluster 0 — top-left, contains hub
  { isHub: true, from: { x: 110, y: 130 }, to: { x: 300, y: 300 } },
  { from: { x: 60, y: 80 },   to: { x: 235, y: 235 } },
  { from: { x: 165, y: 75 },  to: { x: 365, y: 235 } },
  { from: { x: 70, y: 185 },  to: { x: 235, y: 365 } },

  // Cluster 1 — top-right
  { from: { x: 470, y: 90 },  to: { x: 365, y: 365 } },
  { from: { x: 540, y: 130 }, to: { x: 470, y: 180 } },
  { from: { x: 480, y: 175 }, to: { x: 460, y: 110 } },

  // Cluster 2 — bottom-left
  { from: { x: 80, y: 480 },  to: { x: 130, y: 460 } },
  { from: { x: 145, y: 510 }, to: { x: 200, y: 470 } },
  { from: { x: 90, y: 555 },  to: { x: 130, y: 520 } },
  { from: { x: 175, y: 555 }, to: { x: 195, y: 525 } },

  // Cluster 3 — bottom-right
  { from: { x: 480, y: 470 }, to: { x: 470, y: 460 } },
  { from: { x: 540, y: 510 }, to: { x: 530, y: 510 } },
  { from: { x: 470, y: 545 }, to: { x: 460, y: 530 } },
];

const INTRA_EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1], [0, 2], [0, 3],
  [4, 5], [5, 6], [4, 6],
  [7, 8], [8, 9], [9, 10], [7, 10],
  [11, 12], [12, 13], [11, 13],
];

const INTER_EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 4], [0, 7], [0, 11],
  [4, 11], [7, 11], [4, 7],
];

function lerpMV(mix: MotionValue<number>, from: number, to: number) {
  return useTransform(mix, [0, 1], [from, to]);
}

export function CoreTopology({ progress }: { progress: MotionValue<number> }) {
  const mix = useTransform(progress, [0.15, 0.66], [0, 1], { clamp: true });
  const dashoffset = useTransform(progress, [0.33, 0.66], [100, 0], { clamp: true });
  const hubFillProgress = useTransform(progress, [0.62, 0.78], [0, 1], { clamp: true });
  const hubFill = useTransform(hubFillProgress, [0, 1], ['rgba(226,232,240,0.85)', '#049fd9']);
  const pulseOpacity = useTransform(progress, [0.66, 1], [0, 1], { clamp: true });

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      role="img"
      aria-label="System unification visualization"
    >
      <g stroke="rgba(148,163,184,0.35)" strokeWidth="1" fill="none">
        {INTER_EDGES.map(([a, b]) => (
          <InterEdge key={`inter-${a}-${b}`} aIdx={a} bIdx={b} mix={mix} dashoffset={dashoffset} />
        ))}
      </g>
      <g stroke="rgba(148,163,184,0.45)" strokeWidth="1" fill="none">
        {INTRA_EDGES.map(([a, b]) => (
          <IntraEdge key={`intra-${a}-${b}`} aIdx={a} bIdx={b} mix={mix} />
        ))}
      </g>
      <g>
        {NODES.map((n, i) => (
          <NodeCircle
            key={`n-${i}`}
            idx={i}
            mix={mix}
            hubFill={n.isHub ? hubFill : undefined}
            pulseOpacity={n.isHub ? pulseOpacity : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

function NodeCircle({
  idx, mix, hubFill, pulseOpacity,
}: {
  idx: number;
  mix: MotionValue<number>;
  hubFill?: MotionValue<string>;
  pulseOpacity?: MotionValue<number>;
}) {
  const n = NODES[idx]!;
  const cx = lerpMV(mix, n.from.x, n.to.x);
  const cy = lerpMV(mix, n.from.y, n.to.y);
  return (
    <>
      {pulseOpacity && (
        <motion.circle
          cx={cx} cy={cy} r={14}
          fill="#049fd9"
          style={{ opacity: pulseOpacity, filter: 'drop-shadow(0 0 8px #049fd9)' }}
          animate={{ r: [14, 24, 14], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
      <motion.circle cx={cx} cy={cy} r={6} style={{ fill: hubFill ?? 'rgba(226,232,240,0.85)' }} />
    </>
  );
}

function IntraEdge({ aIdx, bIdx, mix }: { aIdx: number; bIdx: number; mix: MotionValue<number> }) {
  const a = NODES[aIdx]!, b = NODES[bIdx]!;
  const x1 = lerpMV(mix, a.from.x, a.to.x);
  const y1 = lerpMV(mix, a.from.y, a.to.y);
  const x2 = lerpMV(mix, b.from.x, b.to.x);
  const y2 = lerpMV(mix, b.from.y, b.to.y);
  return <motion.line x1={x1} y1={y1} x2={x2} y2={y2} />;
}

function InterEdge({ aIdx, bIdx, mix, dashoffset }: {
  aIdx: number; bIdx: number; mix: MotionValue<number>; dashoffset: MotionValue<number>;
}) {
  const a = NODES[aIdx]!, b = NODES[bIdx]!;
  const x1 = lerpMV(mix, a.from.x, a.to.x);
  const y1 = lerpMV(mix, a.from.y, a.to.y);
  const x2 = lerpMV(mix, b.from.x, b.to.x);
  const y2 = lerpMV(mix, b.from.y, b.to.y);
  const offset = useTransform(dashoffset, (v) => v / 100);
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      pathLength={1}
      strokeDasharray="1"
      style={{ strokeDashoffset: offset }}
    />
  );
}
