import Link from 'next/link';
import { Brand } from '@/components/brand';
import { homepageCopy, practice, resources } from '@/lib/content';

export function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="grid gap-10 py-14 lg:grid-cols-[2fr_1fr_1fr]">
      <div><Brand /><p className="mt-6 max-w-lg">{homepageCopy.footerDescription}</p><address className="footer-contact"><a href={practice.phoneHref}>{practice.phone}</a><a href={practice.emailHref}>{practice.email}</a></address></div>
      <nav aria-label="Explore footer links" className="flex flex-col gap-3"><span className="eyebrow mb-2">EXPLORE</span><Link href="/about">About Daphne</Link><Link href="/sessions">Sessions / Approach</Link><Link href="/#testimonials">Testimonials</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link><Link href={practice.bookingHref}>Book a Session</Link></nav>
      <nav aria-label="Resource footer links" className="flex flex-col gap-3"><Link href="/resources" className="eyebrow mb-2">RESOURCES</Link>{resources.map(resource => <Link href={resource.href} key={resource.href}>{resource.label}</Link>)}<a href={practice.reviewHref} target="_blank" rel="noopener noreferrer" className="mt-3">Leave a Google review ↗</a></nav>
    </div>
    <div className="footer-bottom flex flex-wrap justify-between gap-3 py-6 text-sm"><span>© {new Date().getFullYear()} Daphne Mosko</span><a href={practice.creditHref} target="_blank" rel="noopener noreferrer">Words by Magic Words Marketing</a></div>
  </div></footer>;
}
