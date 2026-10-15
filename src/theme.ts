'use client';
import { Button, createTheme, type CSSVariablesResolver } from '@mantine/core';
import { appearancePalettes } from '@/lib/appearance';

export const theme = createTheme({
  primaryColor: 'gold',
  primaryShade: 4,
  colors: {
    gold: ['#faf4de', '#f3e7b7', '#ead88d', '#e4cc77', '#c5a34d', '#b18d3e', '#97732e', '#7b5c25', '#60471f', '#49371b'],
    dark: ['#f3ede0', '#c7bfae', '#aaa18c', '#8c7954', '#51472e', '#302b1e', '#222119', '#181813', '#10100e', '#0e0e0c'],
    // Retained for consumers of the original light theme.
    navy: ['#eef2f4', '#d7e0e5', '#b0c1cc', '#89a3b4', '#68899e', '#4f748b', '#3e6077', '#2c4b62', '#203e53', '#182f40'],
  },
  fontFamily: 'var(--font-dm-sans), Arial, sans-serif',
  headings: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '400' },
  defaultRadius: 'xs',
  components: {
    Button: Button.extend({
      defaultProps: { size: 'md', radius: 'xl', fw: 600 },
      vars: (_theme, props) => {
        const outlined = props.variant === 'outline' || props.variant === 'subtle';
        return { root: {
          '--button-bg': outlined ? 'transparent' : 'var(--primary)',
          '--button-hover': outlined ? 'var(--hover)' : 'var(--primary-hover)',
          '--button-color': outlined ? 'var(--accent)' : 'var(--on-primary)',
          '--button-hover-color': outlined ? 'var(--accent)' : 'var(--on-primary)',
          '--button-bd': '1px solid var(--primary)',
        } };
      },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = () => {
  const colors = (palette: typeof appearancePalettes.light | typeof appearancePalettes.dark) => ({
    '--mantine-color-body': palette.paper,
    '--mantine-color-text': palette.ink,
    '--mantine-color-bright': palette.ink,
    '--mantine-color-dimmed': palette.muted,
    '--mantine-color-default': palette.surface,
    '--mantine-color-default-color': palette.ink,
    '--mantine-color-default-border': palette.border,
    '--mantine-color-default-hover': palette.hover,
    '--mantine-color-disabled': palette.disabled,
    '--mantine-color-disabled-color': palette['disabled-text'],
    '--mantine-color-disabled-border': palette.border,
    '--mantine-primary-color-filled': palette.primary,
    '--mantine-primary-color-filled-hover': palette['primary-hover'],
    '--mantine-primary-color-contrast': palette['on-primary'],
  });
  return { variables: {}, light: colors(appearancePalettes.light), dark: colors(appearancePalettes.dark) };
};
