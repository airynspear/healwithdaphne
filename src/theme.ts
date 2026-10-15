'use client';
import { Button, createTheme } from '@mantine/core';
export const theme = createTheme({
  primaryColor: 'navy',
  colors: { navy: ['#eef2f4','#d7e0e5','#b0c1cc','#89a3b4','#68899e','#4f748b','#3e6077','#2c4b62','#203e53','#182f40'] },
  fontFamily: 'var(--font-dm-sans), Arial, sans-serif',
  headings: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '400' },
  defaultRadius: 'xs',
  components: { Button: Button.extend({ defaultProps: { size: 'md', radius: 2, color: 'navy.9', fw: 500 } }) },
});
