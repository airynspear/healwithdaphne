'use client';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export function ThemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();
  const label = 'Toggle light and dark theme';
  return (
    <ActionIcon className="theme-toggle" variant="outline" radius="xl" size="lg" aria-label={label} title={label} onClick={() => toggleColorScheme()}>
      <svg className="theme-icon-sun" aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
      <svg className="theme-icon-moon" aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 14.1A9 9 0 0 1 9.9 3.4a9 9 0 1 0 10.7 10.7Z" /></svg>
    </ActionIcon>
  );
}
