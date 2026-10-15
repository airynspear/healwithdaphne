import { Button } from '@mantine/core';
import { PageIntro, TextLink } from '@/components/ui';
import { office, practice } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Contact & Booking', 'Contact Daphne Mosko by phone or email to arrange bodywork in East Boulder, or ask about appointments in Denver and Lone Tree.', '/contact');

export default function Contact() {
  return <>
    <PageIntro eyebrow="CONTACT & BOOKING" title="Let’s begin with a conversation." />
    <section className="shell grid items-start gap-12 pb-24 md:grid-cols-[1.1fr_0.9fr]">
      <div className="contact-panel"><p className="eyebrow">REACH DAPHNE</p><h2>Book a Session</h2><p>Get in touch to arrange a session or ask a question.</p><dl className="contact-details"><div><dt>Phone</dt><dd><a href={practice.phoneHref}>{practice.phone}</a></dd></div><div><dt>Email</dt><dd><a href={practice.emailHref}>{practice.email}</a></dd></div></dl><Button component="a" href={practice.smsHref} variant="outline">Text Daphne <span className="ml-3" aria-hidden="true">↗</span></Button><div className="mt-8"><TextLink href={practice.profileHref} newTab>Visit Daphne’s contact profile</TextLink></div></div>
      <div><h2 className="contact-office-title">Office locations</h2><p>{office.home}</p><p>{office.additional}</p><div className="mt-8"><TextLink href="/sessions#appointments">Appointment options &amp; pricing</TextLink></div><div className="mt-6"><TextLink href="/faq">Questions before your visit</TextLink></div><div className="mt-10"><TextLink href={practice.reviewHref} newTab>Leave a Google review</TextLink></div></div>
    </section>
  </>;
}
