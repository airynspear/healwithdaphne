import Image from 'next/image';
import sessionBodywork from '../../../public/images/stock-images/hands.jpg';
import healingPath from '../../../public/images/stock-images/path.jpg';
import { ParallaxDivider } from '@/components/parallax-divider';
import { ClosingInvitation, PageIntro, TextLink } from '@/components/ui';
import { Pricing } from '@/components/pricing';
import { approach, cancellationPolicy, conditions, conditionsCopy, homepageCopy, policies } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Sessions / Approach', 'Explore Daphne’s approach to manual therapy, appointment durations and pricing, and practical information for your first visit.', '/sessions');

export default function Sessions() {
  return <>
    <PageIntro eyebrow="SESSIONS / APPROACH" title={homepageCopy.approachTitle} />
    <section className="shell grid items-start gap-12 pb-24 md:grid-cols-2"><div className="relative min-h-[520px] overflow-hidden rounded-bl-[25%]"><Image src={sessionBodywork} alt="Hands applying pressure to a person’s back during bodywork." fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover object-center" /></div><div>{approach.map(item => <article className="detail-line" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}<TextLink href="/#first-visit">Get support in 3 easy steps</TextLink></div></section>
    <section className="expect-section" aria-labelledby="conditions-title"><div className="shell"><div className="section-heading grid gap-6 md:grid-cols-2"><div><p className="eyebrow">A PATH TO HEALING</p><h2 id="conditions-title">{conditionsCopy.title}</h2></div><p className="max-w-lg md:self-end">{conditionsCopy.intro}</p></div><ul className="conditions-list grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">{conditions.map(condition => <li key={condition}>{condition}</li>)}</ul></div></section>
    <ParallaxDivider image={healingPath} position="62% 58%" mobilePosition="68% 60%" />
    <Pricing />
    <section className="intro-section"><div className="shell grid gap-10 md:grid-cols-2"><div><p className="eyebrow">PLANNING YOUR VISIT</p><h2>Payment &amp; cancellation</h2></div><div><p>{policies.paymentTiming} I accept {policies.paymentMethods.slice(0, -1).join(', ')}, or {policies.paymentMethods.at(-1)}.</p><p>{policies.insuranceAnswer}</p><p>{cancellationPolicy}</p><TextLink href="/faq">Read all eight FAQs</TextLink></div></div></section>
    <ClosingInvitation />
  </>;
}
