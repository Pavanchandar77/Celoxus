import { ReactNode, useRef, MouseEvent } from 'react';

/**
 * InteractiveCard — drop-in wrapper that adds a cursor-spotlight + soft 3D
 * tilt to any surface. Use as <InteractiveCard className="..."> ... </InteractiveCard>.
 * Sets CSS vars --mx/--my on the element so the spotlight can be styled
 * via tailwind backgrounds, no extra DOM.
 */

type Props = {
  children: ReactNode;
  className?: string;
  tilt?: number;
  spotlight?: boolean;
};

export const InteractiveCard = ({ children, className = '', tilt = 4, spotlight = true }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
    el.style.transform = `perspective(1200px) rotateX(${-y * tilt}deg) rotateY(${x * tilt}deg)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}
      className={`relative group ${className}`}
    >
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
          style={{
            background: 'radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(4,159,217,0.16), transparent 60%)',
          }}
        />
      )}
      {children}
    </div>
  );
};
