import type { Metadata } from 'next';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: 'Heal with Daphne', type: 'website', locale: 'en_US' },
    twitter: { card: 'summary', title, description },
  };
}
