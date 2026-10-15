import Image from 'next/image';
import resourcesImage from '../../../public/images/stock-images/meditate.jpg';
import { pageMetadata } from '@/lib/metadata';
import { ResourceLinks } from '@/components/ui';

export const metadata = pageMetadata('Resources', 'Explore Daphne’s resource collections: Blog, Affiliates, and Video Library.', '/resources');

export default function Resources() {
  return <>
    <section aria-labelledby="resources-title" className="relative isolate flex min-h-[480px] items-center overflow-hidden py-20 md:min-h-[620px]">
      <Image src={resourcesImage} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[45%_50%] md:object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#10100e]/50" />
      <div className="shell text-center">
        <p className="eyebrow text-[#e4cc77]">STAY CURIOUS</p>
        <h1 id="resources-title" className="mx-auto max-w-4xl text-[#f3ede0]">A little room to explore.</h1>
      </div>
    </section>
    <div className="shell py-12 md:py-16"><p className="mb-0 max-w-2xl">A home for writing, connections, and videos from Daphne. These collections are still taking shape.</p></div>
    <section aria-label="Resource collections" className="shell pb-28"><ResourceLinks /></section>
  </>;
}
