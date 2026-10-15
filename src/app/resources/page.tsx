import { pageMetadata } from '@/lib/metadata';
import { PageIntro, ResourceLinks } from '@/components/ui';
export const metadata = pageMetadata('Resources', 'Explore Daphne’s resource collections: Blog, Affiliates, and Video Library.', '/resources');
export default function Resources() { return <><PageIntro eyebrow="STAY CURIOUS" title="A little room to explore."><p>A home for writing, connections, and videos from Daphne. These collections are still taking shape.</p></PageIntro><section aria-label="Resource collections" className="shell pb-28"><ResourceLinks /></section></>; }
