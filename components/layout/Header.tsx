'use client';

import { useRef, useEffect, useState } from 'react';

export function Header() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      if (!ref.current) return;
      const vw = window.innerWidth;
      setScale(Math.min(1, vw / 1440));
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
      {/* Mobile (<lg) */}
      <div className="lg:hidden relative mx-auto h-[68px] px-5 flex items-center">
        <a href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="Академія продажів Андрія Крупкіна" style={{ height: 21, width: 'auto' }} />
        </a>
        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-white font-sans" style={{ fontSize: 11, lineHeight: '12px' }}>
            <span>2 дні</span>
            <span className="w-[5px] h-[5px] rounded-full bg-acid inline-block" />
            <span>28–29 квітня</span>
            <span className="w-[5px] h-[5px] rounded-full bg-acid inline-block" />
            <span>о 19:00 за Києвом</span>
          </div>
        </div>
      </div>

      {/* Desktop (≥lg) */}
      <div ref={ref} className="hidden lg:block overflow-hidden mx-auto" style={{ height: 79 * scale, maxWidth: 1440, width: '100%' }}>
        <div
          className="relative"
          style={{
            width: 1440,
            height: 79,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
            paddingRight: 8,
          }}
        >
          {/* Logo */}
          <a href="/" className="absolute flex items-center" style={{ left: 225, top: 28, height: 23 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Академія продажів Андрія Крупкіна" style={{ height: 23, width: 'auto' }} />
          </a>

          {/* Center date — white text with lime bullets */}
          <div
            className="absolute flex items-center justify-center gap-2 text-white font-sans"
            style={{ left: 395, top: 31, width: 520, height: 18, fontSize: 18, lineHeight: '18px' }}
          >
            <span>2 дні</span>
            <span className="w-[7px] h-[7px] rounded-full bg-acid inline-block" />
            <span>28–29 квітня</span>
            <span className="w-[7px] h-[7px] rounded-full bg-acid inline-block" />
            <span>о 19:00 за Києвом</span>
          </div>

          {/* Right CTA pill — lime border, transparent bg, white text */}
          <a
            href="#"
            data-register-cta
            className="absolute flex items-center justify-center rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
            style={{ left: 965, top: 21, width: 235, height: 37 }}
          >
            <span
              className="font-display uppercase whitespace-nowrap"
              style={{ fontSize: 20, lineHeight: 1, display: 'inline-block', transform: 'translateY(0.08em)' }}
            >
              прийняти участь безкоштовно
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
