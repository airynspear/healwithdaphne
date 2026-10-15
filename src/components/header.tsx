'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Burger, Button, Drawer, Menu } from '@mantine/core';
import { useState } from 'react';
import { Brand } from '@/components/brand';
import { navigation, practice, resources } from '@/lib/content';
export function Header() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();
  const navLink = (item: {label: string; href: string}, mobile = false) => <Link key={item.href} className={mobile ? 'mobile-link' : 'nav-link'} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={() => setOpened(false)}>{item.label}</Link>;
  return <header className="site-header">
    <div className="shell flex min-h-24 items-center justify-between gap-6">
      <Brand />
      <nav aria-label="Main navigation" className="desktop-nav items-center gap-7">
        {navigation.slice(0,3).map(item => navLink(item))}
        <Menu trigger="click" position="bottom-start" offset={14} withinPortal>
          <Menu.Target><button className={`nav-link resource-trigger ${pathname.startsWith('/resources') ? 'active' : ''}`}>Resources <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></button></Menu.Target>
          <Menu.Dropdown><Menu.Item component={Link} href="/resources">All resources</Menu.Item>{resources.map(item => <Menu.Item component={Link} href={item.href} key={item.href}>{item.label}</Menu.Item>)}</Menu.Dropdown>
        </Menu>
        {navLink(navigation[3])}
        <Button component={Link} href={practice.bookingHref}>Book a Session <span className="ml-3" aria-hidden="true">↗</span></Button>
      </nav>
      <div className="mobile-toggle"><Burger opened={opened} onClick={() => setOpened(!opened)} aria-label={opened ? 'Close navigation' : 'Open navigation'} aria-controls="mobile-navigation" aria-expanded={opened} color="#182f40" /></div>
    </div>
    <Drawer opened={opened} onClose={() => setOpened(false)} title="Explore" position="right" size="sm" id="mobile-navigation" overlayProps={{ backgroundOpacity: 0.35 }}>
      <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
        {navigation.slice(0,3).map(item => navLink(item,true))}
        <div className="mobile-resource"><Link href="/resources" className="mobile-link" onClick={() => setOpened(false)}>Resources</Link><div className="flex flex-col border-l border-[#c9bc9e] pl-5">{resources.map(item => navLink(item,true))}</div></div>
        {navLink(navigation[3],true)}
        <Button component={Link} href={practice.bookingHref} mt="lg" onClick={() => setOpened(false)}>Book a Session ↗</Button>
      </nav>
    </Drawer>
  </header>;
}
