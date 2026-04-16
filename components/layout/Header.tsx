export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
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
            <span>21–22 квітня</span>
            <span className="w-[5px] h-[5px] rounded-full bg-acid inline-block" />
            <span>о 19:00</span>
          </div>
        </div>
      </div>

      {/* Desktop (≥lg) */}
      <div className="hidden lg:block relative mx-auto max-w-[1920px] h-[105px]">
        {/* Logo */}
        <a href="/" className="absolute flex items-center" style={{ left: 303, top: 37, height: 31 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="Академія продажів Андрія Крупкіна" style={{ height: 31, width: 'auto' }} />
        </a>

        {/* Center date — white text with lime bullets */}
        <div
          className="absolute flex items-center justify-center gap-3 text-white font-sans"
          style={{ left: 594, top: 41, width: 557, height: 24, fontSize: 24, lineHeight: '24px' }}
        >
          <span>2 дні</span>
          <span className="w-[9px] h-[9px] rounded-full bg-acid inline-block" />
          <span>21–22 квітня</span>
          <span className="w-[9px] h-[9px] rounded-full bg-acid inline-block" />
          <span>о 19:00</span>
        </div>

        {/* Right CTA pill — lime border, transparent bg, white text */}
        <a
          href="#"
          data-register-cta
          className="absolute flex items-center justify-center rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
          style={{ left: 1287, top: 28, width: 313, height: 49 }}
        >
          <span
            className="font-display uppercase whitespace-nowrap"
            style={{ fontSize: 26, lineHeight: 1, display: 'inline-block', transform: 'translateY(0.08em)' }}
          >
            прийняти участь безкоштовно
          </span>
        </a>
      </div>
    </header>
  );
}
