# Daphne website content review

Local draft prepared October 15, 2026. Primary source: **Daphne Mosko Webpage Wireframe**, June 2024; copy by Rachel Zurer / Magic Words Marketing.

Source: https://docs.google.com/presentation/d/1TKDagjGgTvrmFck9EtLCJR7ovAaiZh91Rq9E5A0lpAI/edit

All **15 slides** were read in the HTML presentation view. The presentation was not modified. Its copy, rather than the slide layouts, informs this draft. The repository was clean before editing. Changes remain local; no commit, push, deployment, DNS, or Vercel changes are authorized for this task.

## Slide mapping

| Slide | Destination | Treatment |
| --- | --- | --- |
| 1 | This document only | Internal audience, page goal, date, and authorship; no wireframe/project labels appear on the site. |
| 2 | Home hero | Exact two-part headline, supporting description, all three benefit statements, and existing Book a Session action. Existing hero art/image layout retained with a smaller heading size for the longer text. |
| 3 | Home, concerns section | Full introductory passage and all four client concerns. Broad criticism of conventional medicine retained for editorial review below. |
| 4 | Home introduction; Sessions / Approach detail | Full introductory passage on Home, all four named approaches as a compact preview; full descriptions on Sessions. No long description duplicated across those pages. |
| 5 | Home → Testimonials → Craig W | Exact headline excerpt; full body accessible under “Read full testimonial from Craig W.” |
| 6 | Sessions → Relief is possible | Full introductory statement and all 26 supplied conditions/topics. No added treatment outcomes. |
| 7 | Home → Testimonials → Inessa R | Exact headline excerpt and expandable full body. |
| 8 | About Daphne; short introduction on Home | All three paragraphs on About. Home reuses only the short first paragraph and “Get The Full Scoop” links to `/about`. Teacher-name spelling corrected with source verification below. |
| 9 | Home → Testimonials → Liz W | Exact headline excerpt and expandable full body. |
| 10 | Home → first-visit section (`/#first-visit`) | Supplied introduction and three steps. Step 1 adapted to existing contact-based booking; see exact change below. |
| 11 | Home → Testimonials → Jessica C | Exact headline excerpt and expandable full body. |
| 12 | Sessions → Appointment Options (`/sessions#appointments`) | All four treatment times/prices, returning-client restriction, first-visit recommendation, separate 10-minute buffer, payment timing, and selection guidance. |
| 13 | FAQ; shared policies on Sessions and locations on Contact | All eight questions and substantive answers. Weekly schedule frequencies withheld pending confirmation, as instructed. |
| 14 | Footer, Contact, and shared closing invitation | Full practice description, name/logo, supplied phone/email, navigation, credit, and closing slogans. Testimonials link resolves to `/#testimonials`; wireframe placeholders omitted. |
| 15 | Home metadata; Contact/footer review action | Supplied SEO title and description applied to Home; distinct metadata for other pages, canonical/social URLs use the existing metadata base. Google link labeled “Leave a Google review”; no rating claims or review schema. |

## Editorial changes and intentional omissions

- Ordinary body copy: trimmed repeated spaces/zero-width layout artifacts; normalized apostrophes, punctuation, and hyphenation; changed “blood vessel” to “blood vessels,” “body work” to “bodywork,” and “Stress & tension related problems” to “Stress & tension-related problems.” “Digestive disorders - IBS, Crohn's” uses an em dash and typographic apostrophe. No new diagnoses, credentials, guarantees, or outcome claims were added.
- Teacher name: changed **John Pierre Barral** to **Jean-Pierre Barral**, verified against the Barral Institute’s own [About page](https://www.barralinstitute.com/about). This verifies the spelling of the intended teacher’s name, not Daphne’s course attendance or qualifications; confirm the intended person with Daphne.
- Step 1 originally: “Click ‘Book a Session’ to find a convenient time to meet. I recommend 80 minutes for an initial consultation.” Draft: “Click ‘Book a Session’ to get in touch and arrange a time to meet. I recommend 80 minutes for an initial consultation.” There is no confirmed scheduling integration in this checkout; all existing booking CTAs still go to `/contact`.
- Office answer: corrected the duplicated “in in” and omitted “one day a week” for both Denver and Lone Tree. Retained East Boulder, the supplied intersection, intake-before-address instructions, both additional locations, Gail Wetzler’s office, and the request to text for booking information. No current schedule or exact address has been inferred. The original frequency statements remain recorded here for Daphne’s confirmation.
- Testimonials: no words, spelling, punctuation inside the quotes, names, or outcome descriptions were silently corrected. Outer quote delimiters and blank-line spacing are presentation, not additional wording. Deliberately retained “We begin,” “After having it removed it,” and “done with .” Full body text is accessible in native keyboard-operable disclosures. No portraits, surnames, dates, ratings, or claims of representative results were added.
- Repeated slide booking buttons are consolidated into useful sections; every substantive section remains reachable. Slide labels (“Logo,” “Image goes here,” “Some Line Here”), “(see a preview),” internal page-goal text, and Rachel’s private author-contact line are not visitor copy. The requested public Magic Words Marketing credit is included.
- Prior third-person generic practice summaries and six placeholder FAQs are replaced by the supplied first-person source and all eight real FAQs. Resources content/empty states and all navigation destinations are preserved. The Anatomy Trains profile links remain external/new-tab links; phone/email provide direct contact without pretending a local form sends messages. The existing “Practice space photograph / Awaiting approved photography” placeholder captions were removed; missing-image requirements now live here only. Abstract placeholder artwork remains decorative with empty alt text.
- Prices, contact details, recommendation, payment methods, cancellation terms, and office copy are shared in `src/lib/content.ts`. No CMS, affiliate tracking, messaging backend, or extra booking URL was introduced.

## Source conflicts and potentially outdated facts

The June 2024 deck is the editorial source for this **local draft**. Repository inspection found no newer explicitly confirmed operational source, connected scheduler, phone, email, prices, or current address that supersedes it. The previous production metadata/domain remains unchanged. The older Anatomy Trains listing is supplementary, not a newer confirmation.

| Detail | Local draft | Confirmation needed |
| --- | --- | --- |
| Training start | Age **8**, as supplied | Older Anatomy Trains bio says **7**. Ask Daphne which she wants to publish. |
| Primary practice | **Boulder, CO / East Boulder** | Older listing says Denver. Confirm current primary location and additional offices. |
| Teacher | **Jean-Pierre Barral** (official spelling) | Confirm intended person and training description; deck says “John Pierre Barral.” |
| Treatment times and prices | **40 min $110** (returning only), **60 min $165**, **80 min $220** (first-visit recommendation), **120 min $330** | Confirm all current prices, availability, restrictions, and recommendation. No newer prices were verified. |
| Transition time | **10 additional minutes**, separate from treatment | Confirm all appointment lengths include this additional buffer. |
| Payment | At/before service; **Venmo, PayPal, Cash App, crypto, cash, credit card** | Confirm current methods and whether any practical limitations need explaining. No payment accounts/links invented. |
| Insurance | Not accepted | Confirm still current. No reimbursement/superbill claims added. |
| Cancellation | **24 hours**; full session charge for late cancellations/no-shows | Confirm current policy wording and applicability before publishing. |
| Home office | East Boulder near **Cherryvale Road and Arapahoe Avenue**; exact address after intake | Confirm location, privacy wording, how intake is delivered, and accessibility details. No exact home address or intake URL invented. |
| Other offices | Denver’s **Capitol Hill** and **Gail Wetzler’s office in Lone Tree** | Confirm current availability, office relationship, and schedule. Weekly frequencies not presented as current. |
| Phone/email | **720.933.3083 / ms.daphne@yahoo.com** | Confirm contact details and consent to publish. All links use shared `tel:`, `sms:`, and `mailto:` data. |
| Booking | Existing `/contact` fallback | No actual calendar was connected. Supply a verified scheduler only if desired; no new URL inferred from slide CTA labels. |
| Experience/training | Practicing since **2003**, thousands of training hours, named teachers/modalities/influences | Source statements are retained; confirm all remain accurate and preferred. No protected professional title or additional certification inferred. |

## Passages for Daphne’s editorial review

These passages are retained in the local draft as requested; the following are suggestions, not silent rewrites or fact verification:

1. **Slide 2:** “Expert,” “help heal every layer,” “Address root causes,” and “Find lasting relief” may read as broad efficacy claims. Confirm appropriate scope and desired wording.
2. **Slide 3:** “misunderstood, overlooked, and even harmed,” “Surgeries that made it worse,” “arrogant tactics,” and “increasingly toxic world” broadly criticize conventional medicine. Consider more specific first-person observations if Daphne prefers; no alternate copy has been substituted.
3. **Slide 4:** claims about information in tissues, addressing underlying causes, the full range of anatomical systems, and transforming deeper patterns/beliefs merit scope/accuracy review.
4. **Slide 6:** the conditions list includes concussions, Crohn’s/IBS, neurovascular disorders, birth trauma, pediatric concerns, sexual/prostate/testicular issues, and pregnancy/postpartum care. Confirm intended scope, appropriate referrals, and that this is the list Daphne wants to publish; it has not been independently validated as efficacy evidence.
5. **Slide 8:** “world-class,” “gift,” “transformative healing,” and significant physical/mental/emotional improvements are supplied claims; confirm both wording and relevant training. Confirm “somatic experience” is the intended terminology; no branded training or certification was inferred.
6. **Slides 10/13:** “all better in just one session,” “profound effects,” “root causes,” and the 3–12 week pattern may create expectations. Confirm intent and applicability. They were not strengthened or converted to guarantees.
7. **Testimonials:** reconfirm publication permission, exact wording, and whether to approve corrections to the obvious typos. Claims of pain relief, surgical findings, limb/shoulder preservation, miracle/magic, and improved illness frequency remain attributed to the speakers, not stated as general promises. Liz’s “Today, 5 years…” is undated historical testimony; confirm it should remain unchanged.
8. **Slide 14/footer:** treating complex physical/emotional trauma and promoting mind/body/spirit health should receive the same scope/accuracy review as the main copy.

## Remaining assets and content

- Approved portrait, practice-space, and hands-on photography are still needed. Existing SVG placeholders, supplied header/footer emblem, and supplied hero overlay are preserved. No stock/generated person is presented as Daphne, and no slide image notes were copied into visitor text.
- Blog, Affiliates, and Video Library have no supplied entries and remain honest empty collections.
- No review ratings, Google review contents, testimonial photos, booking URLs, office hours, street address, extra qualifications, or treatment outcomes were invented.
- Review and credit URLs use only the supplied destinations, labeled by purpose. These actions were not submitted; no email/text was sent.

## Verification

- `npm run lint`, `npm run typecheck`, and `npm run build` passed under Node 22; all nine routes prerendered.
- Local production HTTP/HTML checks passed for all nine routes: one H1/main landmark each, distinct descriptions, canonical/social URLs on the preserved origin, and the exact supplied homepage SEO title/description.
- Checked all four full testimonial bodies and headlines against the complete deck: exact wording preserved. Confirmed Resources data, header/navigation, shared brand, theme, image assets, and root metadata configuration remain unchanged.
- Verified all four prices, treatment labels, returning-client restriction, first-visit recommendation, separate 10-minute buffer, cancellation text, eight FAQ controls/ARIA associations, testimonial disclosures, internal routes/anchor targets, phone/email/SMS destinations, existing booking fallback, external new-tab attributes, and empty resource states in rendered HTML.
- Expected missing routes returned 404. All five used image assets and 13 CSS/JavaScript bundles returned 200.
- No browser/computer tools are available in this session. Desktop/mobile rendering, long-copy wrapping, focus behavior, expanded FAQ/testimonial interaction, and touch navigation have **not** been visually verified. The existing Mantine FAQ/menu/drawer behavior is preserved; static attributes do not prove interaction behavior.
- No live forms, phone/email/SMS actions, review actions, or bookings were submitted. External contact delivery and scheduler availability were not tested. No commit, push, or deploy was performed.
