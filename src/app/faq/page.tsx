import type { Metadata } from 'next';
import { FaqAccordion } from '@/components/faq';
import { ClosingInvitation, PageIntro } from '@/components/ui';
export const metadata: Metadata = { title: 'Frequently Asked Questions' };
export default function Faq() { return <><PageIntro eyebrow="A FEW COMMON QUESTIONS" title="A little clarity before you begin."><p>Practical answers and a starting point for your conversation with Daphne.</p></PageIntro><section aria-label="Frequently asked questions" className="shell faq-wrap"><FaqAccordion /></section><ClosingInvitation /></>; }
