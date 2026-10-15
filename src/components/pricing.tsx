import { policies, sessionDetails, sessionOptions } from '@/lib/content';
import { BookingButton } from '@/components/ui';

export function Pricing() {
  return (
    <section id="appointments" className="shell section-space" aria-labelledby="appointments-title">
      <div className="section-heading grid gap-6 md:grid-cols-2">
        <div><p className="eyebrow">TIME FOR YOU</p><h2 id="appointments-title">Appointment Options</h2></div>
        <div>
          <p>In addition to the treatment time noted, every appointment adds a {sessionDetails.transitionMinutes}-minute buffer for settling in and transitions. {policies.paymentTiming}</p>
          <p>I recommend an {sessionDetails.recommendedMinutes}-minute appointment for our first session together; otherwise it’s up to you based on your budget and your sense of how long you need.</p>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {sessionOptions.map(option => (
          <article className="price-option" key={option.minutes}>
            <h3>{option.minutes}-minute treatment</h3>
            <p className="price-value">${option.price}<span> / session</span></p>
            {option.label && <p className="price-note">{option.label}</p>}
          </article>
        ))}
      </div>
      <div className="mt-10"><BookingButton /></div>
    </section>
  );
}
