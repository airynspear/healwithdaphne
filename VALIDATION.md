# Validation — October 14, 2026

Automated checks ran with Node 20.19.2:

- `npm run lint`: passed, no warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed; all nine requested pages prerendered successfully. Production build ran outside the filesystem/network sandbox after the sandboxed build stalled.
- Production HTTP check: all nine pages returned 200; each has one main landmark, one H1, no empty anchor hrefs, and preview noindex metadata.
- `/missing-page` and `/resources/missing`: returned 404.
- Three local SVG placeholder assets: returned 200.

Browser visual validation was unavailable: the browser tool reported no available browsers/apps. Desktop/mobile appearance and interactive keyboard/touch behavior have not been visually verified. No messages or bookings were submitted. The temporary production preview was stopped after verification; start it with `npm start` or use `npm run dev` for editing.

Dependency audit: five high-severity development-only findings in the Next.js lint glob chain. No forced downgrade was applied. See README.md.

## Production replacement verification — October 14, 2026

- Workspace source and Git state were archived before integration; the replacement uses a separate clone preserving remote history.
- Backup branch `backup/pre-replacement-2026-10-14-45a5fe7` points to old main `45a5fe7ab56b2542c2e63a20035b3b253564af86` and was pushed before replacement.
- Node 22.23.3: locked dependency install, lint, typecheck, and production build passed.
- Production dependency audit: zero findings; the five documented development-only lint-chain findings remain.
- Local production HTTP checks: all nine requested pages returned 200 with one H1 and one main landmark, no empty links, and no preview noindex restriction. Both missing routes returned 404. Supplied images, optimized hero overlay, and 13 CSS/JS bundles returned 200.
- Booking goes to `/contact`; both Anatomy Trains profile links have `_blank` and `noopener noreferrer`. No messages were submitted.
- Existing Vercel project verified: Next.js, repository root, Node 22.x, main production branch, default build/install/output settings; no environment variables. Only `healwithdaphne.vercel.app` is attached. No DNS/domain changes are part of this release.
- Browser automation is unavailable in this environment; desktop/mobile visual and interactive validation remain unverified. Production deployment and external-domain HTTP results are reported in the delivery message.
