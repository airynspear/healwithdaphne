'use client';
import Image, { type StaticImageData } from 'next/image';
import { useEffect, useRef, type CSSProperties } from 'react';

type ParallaxDividerProps = {
  image: StaticImageData | string;
  position?: string;
  mobilePosition?: string;
  height?: string;
  mobileHeight?: string;
  strength?: number;
  alt?: string;
};

export function ParallaxDivider({ image, position = '50% 50%', mobilePosition = position, height = '100vh', mobileHeight = '100svh', strength = 0.8, alt = '' }: ParallaxDividerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const layer = imageRef.current;
    if (!root || !layer) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 767px)');
    const compensation = Math.max(0, Math.min(1, strength));
    const nativeScroll = typeof CSS !== 'undefined' && CSS.supports('animation-timeline', 'view()') && CSS.supports('animation-range', 'cover 0% cover 100%');
    let visible = true;
    let frame = 0;
    let geometryDirty = true;
    let viewport = 0;
    let height = 0;

    const reset = () => {
      layer.style.removeProperty('top');
      layer.style.removeProperty('height');
      layer.style.removeProperty('transform');
      root.style.removeProperty('--divider-travel');
      delete root.dataset.moving;
      delete root.dataset.nativeMotion;
    };
    const update = () => {
      frame = 0;
      if (reduced.matches || mobile.matches || compensation === 0) {
        reset();
        return;
      }
      if (geometryDirty) {
        // Size only on initialization/resize, never on each scroll frame.
        viewport = window.innerHeight;
        height = root.getBoundingClientRect().height;
        const overscan = Math.abs(viewport - height) * compensation / 2 + 2;
        layer.style.top = `${-overscan}px`;
        layer.style.height = `${height + overscan * 2}px`;
        root.style.setProperty('--divider-travel', `${(viewport + height) * compensation / 2}px`);
        root.dataset.moving = 'true';
        if (nativeScroll) root.dataset.nativeMotion = 'true';
        geometryDirty = false;
      }
      if (nativeScroll || !visible) return;
      const top = root.getBoundingClientRect().top;
      const limit = (viewport + height) / 2;
      const distance = Math.max(-limit, Math.min(limit, viewport / 2 - top - height / 2));
      layer.style.transform = `translate3d(0, ${distance * compensation}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onScroll = () => {
      if (!nativeScroll && visible && !reduced.matches && !mobile.matches) schedule();
    };
    const onResize = () => {
      geometryDirty = true;
      schedule();
    };
    const onPreferenceChange = () => {
      if (reduced.matches || mobile.matches) reset();
      onResize();
    };
    const observer = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !nativeScroll) schedule();
    }, { rootMargin: '100px 0px' }) : null;
    observer?.observe(root);
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
    resizeObserver?.observe(root);
    if (!nativeScroll) window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    reduced.addEventListener('change', onPreferenceChange);
    mobile.addEventListener('change', onPreferenceChange);
    schedule();
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      resizeObserver?.disconnect();
      if (!nativeScroll) window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      reduced.removeEventListener('change', onPreferenceChange);
      mobile.removeEventListener('change', onPreferenceChange);
      reset();
    };
  }, [strength]);

  const style = { '--divider-height': height, '--divider-mobile-height': mobileHeight, '--divider-position': position, '--divider-mobile-position': mobilePosition } as CSSProperties;
  return <div ref={rootRef} className="parallax-divider" style={style}>
    <div ref={imageRef} className="parallax-divider-image">
      <Image src={image} alt={alt} fill sizes="100vw" loading="lazy" />
    </div>
  </div>;
}
