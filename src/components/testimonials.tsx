import { testimonials } from '@/lib/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="intro-section" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="mb-12"><p className="eyebrow">IN THEIR WORDS</p><h2 id="testimonials-title">Testimonials</h2></div>
        <div className="grid items-start gap-x-12 gap-y-12 md:grid-cols-2">
          {testimonials.map(quote => (
            <article className="testimonial" id={quote.id} key={quote.id} aria-label={`Testimonial from ${quote.name}`}>
              <figure>
                <blockquote className="testimonial-headline">“{quote.headline}”</blockquote>
                <figcaption>— {quote.name}</figcaption>
              </figure>
              <details className="testimonial-details">
                <summary>Read full testimonial<span className="sr-only"> from {quote.name}</span></summary>
                <blockquote className="testimonial-body">{quote.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</blockquote>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
