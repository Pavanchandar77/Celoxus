import { ReactNode } from 'react';
import { section as sectionTokens } from '../lib/typography';

type Theme = 'dark' | 'light' | 'elevated';
type Size = 'default' | 'large' | 'small';

type Props = {
  children: ReactNode;
  theme?: Theme;
  size?: Size;
  id?: string;
  className?: string;
  containerClassName?: string;
  withBorder?: boolean;
};

const themeBg: Record<Theme, string> = {
  dark: 'bg-[#020617] text-slate-200',
  elevated: 'bg-[#0b1120] text-slate-200',
  light: 'bg-[#f6f6f8] text-slate-900',
};

const themeBorder: Record<Theme, string> = {
  dark: 'border-white/10',
  elevated: 'border-white/10',
  light: 'border-slate-200',
};

export const Section = ({
  children,
  theme = 'dark',
  size = 'default',
  id,
  className = '',
  containerClassName = '',
  withBorder = false,
}: Props) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${themeBg[theme]} ${sectionTokens[size]} ${withBorder ? `border-t ${themeBorder[theme]}` : ''} ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 relative ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

/** Small mono caption used as a chapter / section label */
export const SectionLabel = ({
  children,
  theme = 'dark',
  className = '',
}: {
  children: ReactNode;
  theme?: Theme;
  className?: string;
}) => {
  const color = theme === 'light' ? 'text-[#049fd9]' : 'text-[#049fd9]';
  return (
    <p
      className={`font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.28em] font-medium ${color} ${className}`}
    >
      {children}
    </p>
  );
};
