# Dark appearance review

Local visual variant prepared October 15, 2026. No commit, push, deployment, DNS, dependency, or application-content changes are part of this task.

## Theme controls

- `src/lib/appearance.ts` preserves the original light palette alongside the active dark palette. Both use the same semantic roles: page/alternate/surface, primary/secondary text, accent, border, action, and disabled colors.
- `activeAppearance` is currently `light`. The header sun/moon toggle switches palettes and stores the choice locally under `hwd-color-scheme`. Light is the first-visit default; both palettes share the same pages. Navigation uses text with a gold hover/active underline.
- `src/theme.ts` maps Mantine surfaces/text/actions to those roles; `globals.css` and Tailwind semantic aliases use the same variables.
- The server renders light as the default; an early `ColorSchemeScript` reads the same storage key as Mantine and selects the stored palette before hydration. Both scheme-specific token definitions are in the head, so a saved light selection also starts with its matching colors.

## Visual treatment

Near-black page background, warm charcoal section rhythm, warm ivory text, bright gold labels/emphasis, compact gold branding, fine borders, text navigation with gold underlines, gold primary booking buttons, and an outlined secondary text-message action. Sticky header, menus, drawer, accordions, resource previews, pricing, testimonials, contact panel, and footer use the shared theme.

The original supplied SVG is rendered as a CSS mask for gold branding; its shape and proportions are unchanged. No supplied artwork or real photos were replaced, tinted, darkened, or recropped. The abstract placeholders have matching dark SVG variants using warm charcoal tones, the original diagonal light geometry, and a subtle curved detail. Light mode uses the untouched original SVGs; no image filters are applied. The hero overlay retains its existing placement and switches between supplied hwd-logo-img-light.png and hwd-logo-img-dark.png with the selected theme. Current photographic placeholders remain until approved images are supplied.

Existing content, testimonials, prices, phone/email, metadata, destinations, booking fallback, fonts, animations, and reduced-motion support are preserved. The only new interaction is the accessible header theme toggle; no animation library was added.

## Validation

- Node 22: lint, TypeScript, and production build passed.
- Local production HTTP/HTML checks: all nine routes returned 200; metadata, full testimonial content, prices, eight FAQ controls/ARIA associations, contact/review/credit links, booking fallback, internal anchor targets, and resource states passed. Expected missing routes returned 404.
- Verified initial HTML on all routes contains the dark scheme and dark background/text tokens before hydration; image, font, CSS, and JavaScript requests passed.
- Contrast calculations: body text on page 16.33:1; secondary text on page 10.42:1; secondary text on elevated surface 8.84:1; gold button text 7.91:1 (hover 11.98:1). Tested normal text/gold combinations on page, alternate, surface, and hover backgrounds all exceed 4.5:1. Fine decorative separators are deliberately lower contrast; navigation outlines against the page are 3.85:1.
- Browser/computer tools are unavailable. Desktop/mobile composition, actual first-paint behavior, horizontal overflow, expanded menu/accordion rendering, hover/focus interaction, and photographic appearance have not been visually verified; no screenshots are available. Initial-render markup and contrast calculations do not substitute for browser QA.

## Preview

Use Node 22 and run `npm run dev`, then open http://localhost:3000. Use `npm run build` followed by `npm start` for a production preview. Before publication, review Home, Sessions, Contact, FAQ (expanded), and Resources at desktop/mobile sizes, including the drawer and Resources dropdown.
