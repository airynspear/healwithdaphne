'use client';
import { Accordion } from '@mantine/core';
import { faqs } from '@/lib/content';
export function FaqAccordion() { return <Accordion chevronPosition="right" classNames={{ control: 'faq-control', panel: 'faq-panel', item: 'faq-item' }}>{faqs.map((faq,i)=><Accordion.Item value={`question-${i}`} key={faq.question}><Accordion.Control>{faq.question}</Accordion.Control><Accordion.Panel>{faq.answer}</Accordion.Panel></Accordion.Item>)}</Accordion>; }
