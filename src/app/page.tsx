import { BookingButton, ClosingInvitation, PhotoPlaceholder, ResourceLinks, TextLink } from '@/components/ui';
import { Testimonials } from '@/components/testimonials';
import { approach, bio, homepageCopy, journey, practice } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = { ...pageMetadata(practice.seoTitle, practice.description, '/'), title: { absolute: practice.seoTitle } };

export default function Home() {
  return <>
    <section className="shell hero grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="hero-copy">
        <p className="eyebrow">BODYWORK WITH DAPHNE MOSKO</p>
        <h1 className="copy-hero-title">{homepageCopy.headline} <em>{homepageCopy.headlineEmphasis}</em></h1>
        <p className="hero-description">{homepageCopy.description}</p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5"><BookingButton /><TextLink href="/sessions">Explore the approach</TextLink></div>
        <ul className="hero-benefits">{homepageCopy.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
      </div>
      <div className="hero-image-wrap"><PhotoPlaceholder className="hero-photo" overlaySrc="/images/hwd-logo-img-light.png" priority /><div className="image-note"><span aria-hidden="true">—</span> Room to pause. Space to listen.</div></div>
    </section>

    <section className="expect-section">
      <div className="shell grid gap-10 lg:grid-cols-2">
        <div><p className="eyebrow">DOES THIS SOUND FAMILIAR?</p><h2>{homepageCopy.concernsTitle}</h2><p>{homepageCopy.concernsIntro}</p></div>
        <div className="lg:self-center"><p className="eyebrow">MANY OF MY CLIENTS REPORT</p><ul className="concerns-list">{homepageCopy.concerns.map(concern => <li key={concern}>{concern}</li>)}</ul><div className="mt-8"><BookingButton /></div></div>
      </div>
    </section>

    <section className="shell section-space">
      <div className="section-heading grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">THE APPROACH</p><h2>{homepageCopy.approachTitle}</h2></div><p className="lg:self-end">{homepageCopy.approachIntro}</p></div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{approach.map((item, i) => <div className="approach-item" key={item.title}><span className="item-number">0{i + 1}</span><h3>{item.title}</h3></div>)}</div>
      <div className="mt-10"><TextLink href="/sessions">Explore the full approach</TextLink></div>
    </section>

    <section className="intro-section"><div className="shell grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]"><PhotoPlaceholder kind="portrait" className="portrait-photo" /><div className="max-w-xl"><p className="eyebrow">MEET DAPHNE</p><h2>{bio.title}</h2><p>{bio.paragraphs[0]}</p><TextLink href="/about">Get The Full Scoop</TextLink></div></div></section>

    <section id="first-visit" className="shell section-space"><div className="grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">YOUR FIRST VISIT</p><h2>{homepageCopy.journeyTitle}</h2><p className="max-w-md">{homepageCopy.journeyIntro}</p><div className="mt-8"><BookingButton /></div></div><ol className="expect-list">{journey.map((step, i) => <li key={step.title}><span>0{i + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>

    <Testimonials />

    <section className="shell section-space"><div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">STAY CURIOUS</p><h2>A space for resources.</h2></div><TextLink href="/resources">Explore resources</TextLink></div><ResourceLinks /></section>
    <ClosingInvitation />
  </>;
}
