'use client';
import Link from 'next/link';
import { Button } from '@mantine/core';
export function ButtonLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return <Button component={Link} href={href} className={className}>{children}</Button>;
}
