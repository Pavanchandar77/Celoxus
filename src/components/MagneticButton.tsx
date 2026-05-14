import { ReactNode, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
};

export const MagneticButton = ({ children, to, href, className = '', strength = 0.35, onClick }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18 });
  const sy = useSpring(y, { stiffness: 240, damping: 18 });

  const handleMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      <motion.div style={{ x: useSpring(x, { stiffness: 320, damping: 22 }), y: useSpring(y, { stiffness: 320, damping: 22 }) }}>
        {children}
      </motion.div>
    </motion.div>
  );

  if (to) return <Link to={to} onClick={onClick}>{inner}</Link>;
  if (href) return <a href={href} onClick={onClick}>{inner}</a>;
  return <button onClick={onClick}>{inner}</button>;
};
