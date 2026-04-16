'use client';

import { useEffect, useState } from 'react';

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let scrolled = false;
    let bottomCtaInView = false;

    const update = () => setVisible(scrolled && !bottomCtaInView);

    const onScroll = () => {
      scrolled = window.scrollY > window.innerHeight * 0.9;
      update();
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const bottomCta = document.querySelector<HTMLElement>('[data-bottom-cta]');
    let io: IntersectionObserver | undefined;
    if (bottomCta) {
      io = new IntersectionObserver(
        (entries) => {
          bottomCtaInView = entries[0]?.isIntersecting ?? false;
          update();
        },
        { threshold: 0.1 },
      );
      io.observe(bottomCta);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <a
      href="#"
      data-register-cta
      aria-hidden={!visible}
      className="cta-animated md:hidden !fixed left-4 right-4 z-40 flex items-center justify-center transition-opacity duration-200"
      style={{
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)',
        height: 62,
        borderRadius: 100,
        background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
        boxShadow: '0 4px 40px rgba(235,255,0,0.55), inset 0 0 0 1px #EBFF00',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <span
        className="font-display uppercase text-black"
        style={{ fontSize: 22, lineHeight: 1, display: 'inline-block', transform: 'translateY(0.08em)' }}
      >
        зареєструватись
      </span>
    </a>
  );
}
