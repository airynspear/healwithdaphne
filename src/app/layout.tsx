import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { practice } from '@/lib/content';
import { activeAppearance, appearanceCss, appearanceStorageKey } from '@/lib/appearance';
import './globals.css';
const serif = localFont({ src: [{ path: '../../node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-normal.woff2', weight: '300 700', style: 'normal' }, { path: '../../node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-italic.woff2', weight: '300 700', style: 'italic' }], variable: '--font-cormorant', display: 'swap' });
const sans = localFont({ src: '../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2', weight: '100 1000', variable: '--font-dm-sans', display: 'swap' });
export const metadata: Metadata = { title: { default: 'Heal with Daphne | Bodywork with Daphne Mosko', template: '%s | Heal with Daphne' }, description: practice.description, metadataBase: new URL('https://healwithdaphne.vercel.app') };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" {...mantineHtmlProps} data-mantine-color-scheme={activeAppearance}><head><ColorSchemeScript defaultColorScheme={activeAppearance} localStorageKey={appearanceStorageKey} /><style dangerouslySetInnerHTML={{ __html: appearanceCss }} /></head><body className={`${serif.variable} ${sans.variable}`}><Providers><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></Providers></body></html>; }
