/**
 * Centralized typographic + spacing scale for Celoxus.
 * Every section / heading / button across the app pulls from here so
 * the visual rhythm stays consistent.
 */

export const type = {
  displayXL:
    'text-[3.25rem] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-display font-bold tracking-[-0.035em] leading-[0.95]',
  displayLG:
    'text-[2.25rem] sm:text-[3rem] lg:text-[4.25rem] font-display font-bold tracking-[-0.03em] leading-[1.0]',
  displayMD:
    'text-[1.875rem] sm:text-[2.25rem] lg:text-[3rem] font-display font-bold tracking-[-0.02em] leading-[1.05]',
  headingLG:
    'text-[1.5rem] lg:text-[1.75rem] font-display font-bold tracking-tight leading-tight',
  headingMD:
    'text-[1.125rem] lg:text-[1.25rem] font-display font-semibold tracking-tight',
  bodyLG: 'text-[1.0625rem] lg:text-[1.25rem] leading-relaxed font-normal',
  body: 'text-[1rem] lg:text-[1.0625rem] leading-relaxed font-normal',
  caption: 'text-[0.9rem] leading-relaxed font-normal',
  monoLabel:
    'font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.22em] font-medium',
  monoCaption:
    'font-mono text-[10px] uppercase tracking-[0.18em] font-medium',
} as const;

export const section = {
  default: 'py-24 lg:py-32',
  large: 'py-32 lg:py-40',
  small: 'py-16 lg:py-24',
} as const;

export const ease = {
  signal: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

/** Single unified Unsplash filter recipe — every hero image uses this. */
export const heroImageClass =
  'w-full h-full object-cover opacity-[0.14] mix-blend-screen brightness-110 contrast-110 saturate-[0.85]';
