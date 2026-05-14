import { motion, MotionValue, useTransform } from 'framer-motion';

/**
 * CoreTopology — scroll-progress driven topology that morphs through three
 * states: Fragmented → Converging → Unified. Adapted from celoxus-2 for
 * the dark theme.
 */

const VIEW = 600;

type Props = { progress: MotionValue<number> };

export const CoreTopology = ({ progress }: Props) => {
  // 3 fragmented islands at start, converging to a center hub
  const islands = [
    { cx: 150, cy: 150, nodes: [[0, 0], [60, -20], [40, 50], [-20, 30]] },
    { cx: 450, cy: 200, nodes: [[0, 0], [-50, 40], [40, 60], [60, -30]] },
    { cx: 300, cy: 450, nodes: [[0, 0], [70, 20], [-40, 50], [30, -50]] },
  ];

  const hubX = 300, hubY = 300;

  // Use a single transform per island to drive position interpolation
  const i0X = useTransform(progress, [0, 0.5, 1], [islands[0].cx, (islands[0].cx + hubX) / 2, hubX]);
  const i0Y = useTransform(progress, [0, 0.5, 1], [islands[0].cy, (islands[0].cy + hubY) / 2, hubY]);
  const i1X = useTransform(progress, [0, 0.5, 1], [islands[1].cx, (islands[1].cx + hubX) / 2, hubX]);
  const i1Y = useTransform(progress, [0, 0.5, 1], [islands[1].cy, (islands[1].cy + hubY) / 2, hubY]);
  const i2X = useTransform(progress, [0, 0.5, 1], [islands[2].cx, (islands[2].cx + hubX) / 2, hubX]);
  const i2Y = useTransform(progress, [0, 0.5, 1], [islands[2].cy, (islands[2].cy + hubY) / 2, hubY]);

  const islandPos = [{ x: i0X, y: i0Y }, { x: i1X, y: i1Y }, { x: i2X, y: i2Y }];

  // Connection opacity blossoms at end
  const linkOpacity = useTransform(progress, [0.3, 0.7, 1], [0, 0.3, 0.8]);
  const hubOpacity = useTransform(progress, [0.4, 1], [0, 1]);
  const hubScale = useTransform(progress, [0.4, 1], [0.3, 1]);

  return (
    <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="h-full w-full">
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#049fd9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#049fd9" stopOpacity="0" />
        </radialGradient>
        <filter id="ng" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Connections from islands to hub */}
      {islandPos.map((p, i) => (
        <motion.line
          key={`l-${i}`}
          x1={p.x} y1={p.y}
          x2={hubX} y2={hubY}
          stroke="#049fd9"
          strokeWidth="1"
          style={{ opacity: linkOpacity }}
          strokeDasharray="4 4"
        />
      ))}

      {/* Hub glow */}
      <motion.circle cx={hubX} cy={hubY} r="120" fill="url(#hubGlow)" style={{ opacity: hubOpacity, scale: hubScale, transformOrigin: `${hubX}px ${hubY}px` }} />

      {/* Islands */}
      {islands.map((island, i) => (
        <motion.g key={`is-${i}`} style={{ x: islandPos[i].x, y: islandPos[i].y }}>
          {/* satellite nodes */}
          {island.nodes.map(([dx, dy], j) => (
            <g key={`s-${j}`}>
              <line x1={0} y1={0} x2={dx} y2={dy} stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />
              <circle cx={dx} cy={dy} r={j === 0 ? 0 : 3} fill="rgba(255,255,255,0.6)" />
            </g>
          ))}
          {/* island core */}
          <circle r="6" fill="#049fd9" style={{ filter: 'drop-shadow(0 0 8px #049fd9)' }} />
        </motion.g>
      ))}

      {/* Central hub */}
      <motion.circle
        cx={hubX} cy={hubY} r="10"
        fill="#049fd9"
        style={{ opacity: hubOpacity, filter: 'drop-shadow(0 0 12px #049fd9)' }}
      />
      <motion.circle
        cx={hubX} cy={hubY} r="22"
        fill="none"
        stroke="#049fd9"
        strokeWidth="1"
        strokeDasharray="3 3"
        style={{ opacity: hubOpacity }}
      />
    </svg>
  );
};
