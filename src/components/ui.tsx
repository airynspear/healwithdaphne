import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { ButtonLink } from '@/components/button-link';
import { homepageCopy, practice, resources } from '@/lib/content';
export function BookingButton({ light = false }: { light?: boolean }) { return <ButtonLink href={practice.bookingHref} className={light ? 'button-light' : ''}>Book a Session <span aria-hidden="true" className="ml-5">↗</span></ButtonLink>; }
export function TextLink({ href, children, newTab = false }: { href: string; children: React.ReactNode; newTab?: boolean }) { return <Link href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} className="text-link">{children}<span aria-hidden="true">↗</span></Link>; }
export function PhotoPlaceholder({ kind = 'space', className = '', priority = false, overlaySrc, darkOverlaySrc }: { kind?: 'space' | 'portrait' | 'work'; className?: string; priority?: boolean; overlaySrc?: string; darkOverlaySrc?: string | StaticImageData }) {
  return <figure className={`photo-placeholder ${kind} ${className}`}>
    <Image src={`/images/${kind}-placeholder.svg`} className="placeholder-base theme-image-light" alt="" fill sizes="(max-width: 767px) 100vw, 55vw" priority={priority} />
    <Image src={`/images/${kind}-placeholder-dark.svg`} className="placeholder-base theme-image-dark" alt="" fill sizes="(max-width: 767px) 100vw, 55vw" priority={priority} />
    {overlaySrc && <Image src={overlaySrc} alt="" fill sizes="(max-width: 767px) 100vw, 55vw" className={`placeholder-overlay ${darkOverlaySrc ? 'theme-image-light' : ''}`} priority={priority} />}
    {darkOverlaySrc && <Image src={darkOverlaySrc} alt="" fill sizes="(max-width: 767px) 100vw, 55vw" className="placeholder-overlay theme-image-dark" priority={priority} />}
  </figure>;
}
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <section className="shell page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <div className="intro-copy">{children}</div>}</section>; }
export function ResourceLinks() { return <div className="grid gap-8 md:grid-cols-3">{resources.map(resource => <Link href={resource.href} key={resource.href} className="resource-card"><span className="eyebrow">{resource.number} / RESOURCES</span><div className="flex items-center justify-between gap-3"><h3>{resource.label}</h3><span aria-hidden="true" className="resource-arrow">↗</span></div><p>{resource.description}</p><span className="availability">Coming soon</span></Link>)}</div>; }
export function ClosingInvitation() { return <section className="closing"><div className="shell grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="eyebrow">A PLACE TO BEGIN</p><h2>{homepageCopy.approachTitle}</h2><p>Life is full of mysteries; your pain shouldn’t be one of them.</p></div><BookingButton light /></div></section>; }
