import { ClosingInvitation, PageIntro, PhotoPlaceholder, TextLink } from '@/components/ui';
import { bio, practice } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('About Daphne', 'Meet Daphne Mosko, a Boulder-based manual therapist, and explore the background, training, and influences behind her work.', '/about');

export default function About() {
  return <>
    <PageIntro eyebrow="MEET DAPHNE" title={bio.title} />
    <section className="shell grid items-start gap-12 pb-24 md:grid-cols-[0.85fr_1.15fr]">
      <PhotoPlaceholder kind="portrait" className="min-h-[500px]" />
      <div className="article-copy">{bio.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="mt-8"><TextLink href={practice.profileHref} newTab>Read Daphne’s professional bio</TextLink></div><div className="mt-8"><TextLink href="/sessions">Explore my approach</TextLink></div></div>
    </section>
    <ClosingInvitation />
  </>;
}
