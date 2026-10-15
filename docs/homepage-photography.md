# Homepage photographic windows

Local correction prepared October 15, 2026. No commit, push, or deployment.

## Restored and preserved

Removed only the superseded overlapping hero collage, its client component, entrance animation, and `.parallax-photography`/layer/frame CSS. Restored the original hero placeholder with its existing light artwork and statically imported dark artwork. Kept the three supplied stock assets, existing uncommitted introduction/copy/style edits, all section ordering and text, theme selection, navigation, and booking behavior.

## Divider locations

1. After the introductory concerns section, before The Approach: `rocks.jpg` (stones, candle, linen, window light).
2. After Meet Daphne, before Your First Visit: `flower-hands.jpg` (hands holding a flower).
3. After In Their Words / Testimonials, before Stay Curious / Resources: `golden-hands.jpg` (open hands in sunlight).

All are under `public/images/stock-images/home`. These are decorative stock scenes, not Daphne, her clients, or her office, and have empty alt text. Each divider contains exactly one photo and no captions, cards, borders, rounded edges, text, or controls.

## Controls and behavior

- `src/lib/home-photography.ts`: individual sources, desktop/mobile focal positions, heights, and strength. Defaults are 45vh desktop, 28.5–30svh mobile (25% shorter than the previous 60vh / 38–40svh windows), and 0.8 desktop strength. Strength 0 is static; 1 cancels all apparent vertical image movement; 0.8 counteracts 80px for each 100px of page movement.
- `src/components/parallax-divider.tsx`: reusable normal-flow clipped window. An absolute image layer translates against scrolling. Each wrapper independently clips its image; images cannot extend behind other sections. No opacity reveal, pinned sequence, scroll replacement, or animation library.
- Overscan is derived from the actual viewport/window height difference and strength, plus 2px rounding tolerance. It covers the **visible intersection** of viewport and window throughout entry/exit; invisible areas outside the viewport do not require photographic coverage. This avoids excessive enlargement while keeping visible edges covered. ResizeObserver and resize events recalculate geometry.
- Where supported, native CSS view timelines drive transforms directly, with no JavaScript scroll listener. The fallback uses passive scroll events and requestAnimationFrame for transform-only updates. Geometry/overscan are cached and rewritten only on initialization or resize, avoiding per-scroll sizing work. No React state updates or artificial scroll delays are used. Cleanup removes listeners/observers and cancels pending frames.
- CSS in `globals.css` (`.parallax-divider*`) reserves height and sets full-width clipping and cover crops. The dividers sit outside constrained `.shell` sections. Body/section backgrounds remain opaque and image layers are local rather than global backgrounds.
- Mobile is intentionally static, uses stable small viewport heights, and has separate focal positions. Reduced-motion also resets to a static full-cover layer. Without JavaScript or if initialization fails, the baseline is a visible static image.
- All three below-the-fold photos are lazy-loaded through Next Image with responsive `100vw` sizing. No filters, overlays, image stretching, or source-file modifications were added.

## Validation

- Lint, TypeScript, and production build passed under Node 22; all nine existing routes prerendered.
- Built-HTML checks confirm hero artwork is restored, three independently clipped dividers sit outside constrained containers, each has one lazy image, and the old collage selectors/component are gone.
- Mathematical coverage checks passed for 40,080 sample positions across several viewport/window sizes (including windows taller than the viewport) and strengths 0–1. Coverage is symmetric for forward/reverse scrolling.
- A temporary mocked-DOM test exercised the actual effect: 80px compensation per 100px scroll, resize recalculation, static mobile/reduced-motion behavior, preference-change reset, and cleanup passed.
- **No browser/computer tools are available. Actual scrolling in either direction, perceptual background anchoring, desktop/mobile crops, performance, and rendered overflow/bleed have not been visually verified. Static HTML, screenshots, and mocked tests do not verify the parallax experience.**

Preview: `npm run dev`, then http://localhost:3000. Scroll through the full homepage in both directions, resize, and test reduced motion before publishing. Keep the current theme preference; no theme-default change is part of this task.

## Jitter adjustment checks

Lint, TypeScript, and production build passed after reducing heights and repositioning windows. Mocked execution confirms the native path adds no JS scroll listener, fallback scrolling never rewrites top/height, geometry is refreshed on resize, reduced-motion resets, and cleanup removes listeners/frames. Actual browser scroll smoothness remains unverified because no browser tool is available.
