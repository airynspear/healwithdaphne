# Heal with Daphne

Local website for Daphne Mosko’s bodywork practice. Next.js App Router, React, TypeScript, Mantine, Tailwind CSS, ESLint, and npm. No CMS, messaging backend, or affiliate tracking.

## Run locally

Use Node 22 (`nvm use`), matching the existing Vercel project, then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production preview: `npm run build` then `npm start`.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

Cormorant Garamond and DM Sans are bundled from Fontsource packages and served locally through `next/font/local`; builds do not contact Google Fonts. Font licenses are included with their npm packages.

## Edit

- `src/lib/content.ts`: navigation, resource collections, FAQ, booking target, public profile URL, practice summary.
- `src/theme.ts`: Mantine defaults and navy scale.
- `src/app/globals.css`: shared palette, typography, layout styles; explicit layer order keeps Mantine and Tailwind predictable.
- `src/app/**/page.tsx`: page-specific copy and server-rendered layouts.
- `src/components/ui.tsx`: shared image placeholders, calls to action, page headings, resource previews.
- `public/images/`: original abstract SVG image placeholders, not photographs or existing brand artwork. Replace through `PhotoPlaceholder` with approved local images and descriptive alt text. Use `next/image`, dimensions/sizes, and intentional crops.

## Before launch

See [CONTENT.md](./CONTENT.md) for factual sources, verification boundaries, and the approval checklist. Replace the three image placeholders with approved photographs (space, Daphne portrait, hands-on work). Approve all editorial copy and proposed session guidance. Confirm current practice details and services. Booking currently routes to `/contact`, which honestly links to the public Anatomy Trains contact form. Confirm a working scheduling URL before changing `practice.bookingHref`. No mail address or telephone number has been invented.

Resource collections are intentionally empty. Add only approved original posts, disclosed relationships, and approved videos. No social links or unavailable artwork have been fabricated. The shared header/footer brand uses the supplied `hwd-logo.svg` beside the name and tagline. The hero uses the supplied `hwd-logo-img-light.png` over the temporary image background.

Production uses the existing `airyns-projects/healwithdaphne` Vercel project, connected to `airynspear/healwithdaphne` on `main`. The confirmed production origin is `https://healwithdaphne.vercel.app`; indexing is enabled. No custom domain is currently attached. Confirm any future domain change separately, then update `metadataBase`. No application environment variables are required.

## Dependency notes

ESLint 9 is retained because the current Next.js React and accessibility plugins do not support ESLint 10. The install-time audit reported five high-severity findings in the development-only `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces` chain. npm’s proposed fix downgrades the Next lint config to 14.x, so it was not applied. Recheck upstream advisories during maintenance.
