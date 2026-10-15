import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageIntro, TextLink } from '@/components/ui';
import { resources } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';
export function generateStaticParams() { return resources.map(r=>({section:r.href.split('/').pop()!})); }
export const dynamicParams = false;
export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata> { const {section}=await params; const resource=resources.find(r=>r.href===`/resources/${section}`); return resource ? pageMetadata(resource.label, resource.description, resource.href) : {title: 'Resource not found'}; }
export default async function ResourceSection({params}:{params:Promise<{section:string}>}) { const {section}=await params; const resource=resources.find(r=>r.href===`/resources/${section}`); if(!resource) notFound(); return <><PageIntro eyebrow="RESOURCES" title={resource.label}><p>{resource.description}</p></PageIntro><section className="shell pb-24"><div className="empty-state"><span className="empty-symbol" aria-hidden="true">{resource.number}</span><h2>{resource.empty}</h2><p>{resource.message}</p><div className="mt-8"><TextLink href="/resources">Back to all resources</TextLink></div></div></section></>; }
