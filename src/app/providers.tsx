'use client';
import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import { cssVariablesResolver, theme } from '@/theme';
import { activeAppearance, appearanceStorageKey } from '@/lib/appearance';
const colorSchemeManager = localStorageColorSchemeManager({ key: appearanceStorageKey });
export function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} defaultColorScheme={activeAppearance} colorSchemeManager={colorSchemeManager}>{children}</MantineProvider>;
}
