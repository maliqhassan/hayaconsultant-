'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GsapFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animated number counters
    const counters = gsap.utils.toArray('[data-count]');
    counters.forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
        },
      });
    });

    // Parallax backgrounds
    gsap.utils.toArray('[data-parallax]').forEach((el) => {
      gsap.fromTo(
        el,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return null;
}
