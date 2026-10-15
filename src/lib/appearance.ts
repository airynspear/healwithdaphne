// Default for first-time visitors; the header toggle persists their selection.
export const activeAppearance: 'light' | 'dark' = 'light';
export const appearanceStorageKey = 'hwd-color-scheme';

export const appearancePalettes = {
  light: {
    paper: '#f7f5ef', alternate: '#eeeae1', surface: '#ffffff',
    ink: '#182f40', muted: '#52616a', gold: '#a88a50', accent: '#766039',
    emphasis: '#8a7045', 'deep-gold': '#8c6b28', border: '#c9c8bb',
    'border-strong': '#8a7045', hover: '#e8ece9', primary: '#182f40',
    'primary-hover': '#2c4b62', 'on-primary': '#f7f5ef', 'brand-emblem': '#203f50',
    'brand-name': '#182f40', 'brand-tagline': '#52616a', disabled: '#e3dfd3',
    'disabled-text': '#666357', 'photo-backdrop': '#e5ddce',
    selection: '#dfd2b7', 'selection-text': '#182f40',
    'header-shadow': '0 4px 18px rgb(24 47 64 / 9%)',
  },
  dark: {
    paper: '#10100e', alternate: '#181813', surface: '#222119',
    ink: '#f3ede0', muted: '#c7bfae', gold: '#c5a34d', accent: '#e4cc77',
    emphasis: '#e4cc77', 'deep-gold': '#8c6b28', border: '#51472e',
    'border-strong': '#8c6b28', hover: '#302b1e', primary: '#c5a34d',
    'primary-hover': '#e4cc77', 'on-primary': '#10100e', 'brand-emblem': '#c5a34d',
    'brand-name': '#e4cc77', 'brand-tagline': '#c7bfae', disabled: '#343127',
    'disabled-text': '#b5ac97', 'photo-backdrop': '#222119',
    selection: '#c5a34d', 'selection-text': '#10100e',
    'header-shadow': '0 5px 18px rgb(0 0 0 / 22%)',
  },
} as const;

// Scheme selectors let the pre-hydration script and toggle update every semantic token.
export const appearanceCss = Object.entries(appearancePalettes).map(([scheme, palette]) =>
  `:root[data-mantine-color-scheme="${scheme}"]{color-scheme:${scheme};${Object.entries(palette).map(([key, value]) => `--${key}:${value}`).join(';')}}`
).join('');
