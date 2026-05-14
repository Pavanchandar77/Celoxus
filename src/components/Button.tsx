import { ReactNode, forwardRef, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

type Variant = 'primary' | 'secondary' | 'ghost' | 'link';
type Size = 'md' | 'lg';

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  magnetic?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const base =
  'inline-flex items-center justify-center gap-2.5 font-display tracking-tight transition-colors duration-300 relative overflow-hidden whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#049fd9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-[#049fd9] hover:bg-[#0ab2f1] text-white font-semibold shadow-[0_8px_24px_-8px_rgba(4,159,217,0.45)]',
  secondary:
    'bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 hover:border-white/25 text-white font-semibold backdrop-blur-md',
  ghost:
    'bg-transparent hover:bg-white/[0.06] border border-white/10 hover:border-white/20 text-white font-medium',
  link:
    'bg-transparent text-[#049fd9] hover:text-[#0ab2f1] font-medium px-0 !shadow-none',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[0.875rem] rounded-full',
  lg: 'h-14 px-7 text-[0.95rem] rounded-full',
};

export const Button = forwardRef<HTMLElement, Props>(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    onClick,
    magnetic = false,
    className = '',
    type = 'button',
    disabled,
  },
  _ref,
) {
  const cls = `${base} ${variants[variant]} ${variant === 'link' ? '' : sizes[size]} ${className}`;

  const sheen =
    variant === 'primary' ? (
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"
      />
    ) : null;

  const inner = (
    <span className="group inline-flex items-center gap-2.5 relative">
      {sheen}
      <span className="relative inline-flex items-center gap-2.5">{children}</span>
    </span>
  );

  if (to) {
    const linkEl = (
      <Link to={to} className={cls} onClick={onClick as any}>
        {inner}
      </Link>
    );
    return magnetic ? <MagneticButton to={to}>{linkEl}</MagneticButton> : linkEl;
  }

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick as any}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
});
