import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCta } from '@/components/MobileStickyCta';
import { Reveal } from '@/components/Reveal';
import { Countdown } from '@/components/Countdown';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { MagneticCTA } from '@/components/ui/MagneticCTA';
import { TestimonialsSlider } from '@/components/sections/TestimonialsSlider';

// ─── Real copy extracted from Figma node 1:1723 ───
const FOR_WHOM_LEFT = [
  'У тебе є відділ продажів, але менеджери закривають слабше, ніж могли б.',
  'Частина заявок зливається ще до оплати - і ти не розумієш де саме.',
  'Хочеш витиснути більше з поточного потоку лідів, а не вкладати більше в рекламу.',
  'Сам закриваєш найважливіші угоди, бо більше нікому довірити.',
];
const FOR_WHOM_RIGHT = [
  'В кінці тижня відкриваєш CRM і бачиш 60% від плану, і так щомісяця.',
  'Хочеш нарешті зрозуміти чому команда не росте - і що з цим робити.',
  'Хочеш автоматизувати контроль менеджерів і перестати вручну слухати дзвінки, щоб ШІ робив це за тебе.',
  'Думаєш про масштабування, але спочатку треба «розібратися з командою» - і так уже рік.',
];

const PROGRAM = [
  {
    day: 'день 1',
    date: '21 квітня',
    title: 'Як збільшити продажі вдвічі у 2026',
    bullets: [
      'Як порахувати в цифрах скільки грошей твій відділ зливає щотижня.',
      'В чому головна задача відділу продажів і чому більшість власників це розуміють неправильно',
      'ТОП-5 найчастіших проблем команди і як їх виправити',
      'Як автоматизувати контроль дзвінків, аналіз менеджерів і супровід клієнтів з впровадженням ШІ',
      'Як впровадити зміни так, щоб команда прийняла, а не саботувала',
      'Відповіді на питання + бонуси для всіх учасників',
    ],
  },
  {
    day: 'день 2',
    date: '22 квітня',
    title: 'Живі розбори дзвінків і кейсів',
    bullets: [
      'Розбори реальних дзвінків - де саме менеджери зливають угоди і як це виправити. Можна буде надіслати свій кейс заздалегідь.',
    ],
  },
  {
    day: 'Бонус для учасників 2-х днів',
    date: '',
    title: 'Тест «Аудит відділу продажів»',
    bullets: [
      'Побачиш де саме твій відділ зараз втрачає гроші та індивідуальні рекомендації.',
    ],
  },
];

const HERO_CHECKS = [
  'Зрозумієш де саме твоя команда зливає угоди',
  'Без найму нових людей і нових витрат на рекламу',
  'Перші зміни вже за 2 тижні',
];

// ─── Reusable bits ───
function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start">
      <Image src="/icons/icon-check.svg" alt="" width={20} height={20} className="mt-1.5 shrink-0" />
      <span className="font-sans text-body-list text-white/85">{text}</span>
    </li>
  );
}

// ─── 1b. HERO MOBILE ───
function HeroMobile() {
  return (
    <section
      className="lg:hidden relative text-white overflow-hidden px-5 pt-8 pb-6"
      style={{
        background:
          'radial-gradient(ellipse 80% 55% at 50% 55%, #0E3A2C 0%, #071E17 45%, #020806 80%, #000 100%)',
      }}
    >
      {/* lime glow behind portrait area */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: 180,
          width: 420,
          height: 380,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(235,255,0,0.35) 0%, rgba(235,255,0,0.1) 40%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="relative">
        {/* Eyebrow */}
        <div className="hero-anim hero-anim-d1 font-sans text-acid text-center" style={{ fontSize: 13, lineHeight: '15px' }}>
          Майстермайнд Андрія Крупкіна
        </div>

        {/* H1 */}
        <h1
          className="hero-anim hero-anim-d2 mt-4 font-display uppercase text-white text-center"
          style={{ fontSize: 26, lineHeight: '26px', letterSpacing: 0 }}
        >
          Як зробити <span className="text-acid">х2 у продажах у 2026 році</span> з сильною командою продажів
        </h1>

        {/* Subtitle */}
        <p
          className="hero-anim hero-anim-d3 mt-4 font-sans text-center mx-auto"
          style={{ maxWidth: 335, fontSize: 13, lineHeight: '17px', color: 'rgba(217,217,217,0.7)' }}
        >
          За 2 вечора розберемо ТОП-5 проблем вашого відділу продажу та систему, яка працює без вашого контролю
        </p>

        {/* Portrait */}
        <div className="hero-anim hero-anim-d3 relative mx-auto mt-4" style={{ width: 272, height: 300 }}>
          <Image
            src="/images/andriy-portrait.png"
            alt="Андрій Крупкін"
            fill
            sizes="272px"
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* 3 bullet checks */}
        <ul className="hero-anim hero-anim-d4 mt-6 space-y-3">
          {HERO_CHECKS.map((t) => (
            <li key={t} className="flex items-start gap-3">
              <div className="relative shrink-0" style={{ width: 28, height: 28 }}>
                <Image src="/images/check-sparkle-green.png" alt="" fill sizes="28px" className="object-contain" />
              </div>
              <span className="font-sans text-white" style={{ fontSize: 14, lineHeight: '18px' }}>{t}</span>
            </li>
          ))}
        </ul>

        {/* CTA pill */}
        <a
          href="#"
          data-register-cta
          className="hero-anim hero-anim-d5 cta-animated mt-6 flex items-center justify-center cursor-pointer"
          style={{
            height: 62,
            borderRadius: 100,
            background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
            border: '1px solid #EBFF00',
            boxShadow: '0 0 30px rgba(235,255,0,0.35)',
          }}
        >
          <span className="font-display uppercase text-black" style={{ fontSize: 22, lineHeight: 1 }}>
            зареєструватись
          </span>
        </a>

        {/* Meta */}
        <div
          className="hero-anim hero-anim-d6 mt-4 font-sans text-center"
          style={{ fontSize: 11, lineHeight: '13px', color: 'rgba(217,217,217,1)' }}
        >
          Участь безкоштовна · Zoom-формат · Кількість обмежена
        </div>

        {/* Gift + gray pill */}
        <div className="hero-anim hero-anim-d6 mt-5 relative" style={{ height: 78 }}>
          <div
            className="absolute inset-0"
            style={{
              borderRadius: 100,
              background: 'rgba(107,107,107,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          />
          <div className="absolute" style={{ left: -4, top: -8, width: 86, height: 86 }}>
            <Image src="/images/gift-badge.png" alt="" fill sizes="86px" className="object-contain" />
          </div>
          <div
            className="absolute font-sans text-white"
            style={{ left: 86, right: 14, top: 12, fontSize: 12, lineHeight: '16px' }}
          >
            Реєструйся протягом <Countdown className="font-semibold" /> подарунок гайд «5 типів менеджерів, які вбивають продажі компанії»
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 1. HERO — pixel-perfect absolute layout on 1920 canvas ───
function Hero() {
  return (
    <section className="hidden lg:block relative bg-black text-white overflow-hidden">
      {/* Lime radial glow that spans y=593..889 in Figma */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: 488,
          height: 296,
          background:
            'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(235,255,0,0.25) 0%, rgba(235,255,0,0.08) 40%, transparent 75%)',
        }}
      />

      <div
        className="relative mx-auto"
        style={{ width: 1920, height: 889, maxWidth: '100%' }}
      >
        {/* Background pattern — Figma node 1:1724, x=639 y=88 1304x869 */}
        <div
          className="absolute pointer-events-none"
          style={{ left: 639, top: -17, width: 1304, height: 869, zIndex: 0 }}
        >
          <Image
            src="/images/hero-bg-pattern.png"
            alt=""
            fill
            sizes="1304px"
            priority
            className="object-cover"
          />
        </div>

        {/* Portrait */}
        <ParallaxImage
          className="absolute"
          style={{ left: 1123, top: 38, width: 540, height: 641 }}
          scaleTo={1.08}
        >
          <Image
            src="/images/andriy-portrait.png"
            alt="Андрій Крупкін"
            fill
            sizes="540px"
            priority
            className="object-cover"
          />
        </ParallaxImage>

        {/* Eyebrow */}
        <div
          className="hero-anim hero-anim-d1 absolute font-sans text-acid"
          style={{ left: 306, top: 38, fontSize: 24, lineHeight: '24px' }}
        >
          Майстермайнд Андрія Крупкіна
        </div>

        {/* H1 */}
        <h1
          className="hero-anim hero-anim-d2 absolute font-display uppercase text-white"
          style={{
            left: 303,
            top: 85,
            width: 900,
            fontSize: 83,
            lineHeight: '83px',
            letterSpacing: 0,
            whiteSpace: 'pre-line',
          }}
        >
          Як зробити <span className="text-acid">х2 у продажах{'\n'}у 2026 році</span> з сильною{'\n'}командою продажів
        </h1>

        {/* Subtitle */}
        <p
          className="hero-anim hero-anim-d3 absolute font-sans"
          style={{
            left: 305,
            top: 332,
            width: 612,
            fontSize: 24,
            lineHeight: '30px',
            color: 'rgba(217,217,217,0.6)',
            fontWeight: 500,
          }}
        >
          За 2 вечора розберемо ТОП-5 проблем вашого відділу продажу та систему, яка працює без
          вашого контролю
        </p>

        {/* 3 sparkle checks */}
        {[442, 483, 522].map((y) => (
          <div key={y} className="absolute" style={{ left: 295, top: y, width: 60, height: 40 }}>
            <Image
              src="/images/check-sparkle-green.png"
              alt=""
              fill
              sizes="60px"
              className="object-contain"
            />
          </div>
        ))}

        {/* 3-line bullet text */}
        <div
          className="hero-anim hero-anim-d4 absolute font-sans text-white whitespace-pre-line"
          style={{ left: 372, top: 450, width: 820, fontSize: 24, lineHeight: '41px' }}
        >
          {'Зрозумієш де саме твоя команда зливає угоди\nБез найму нових людей і нових витрат на рекламу\nПерші зміни вже за 2 тижні'}
        </div>

        {/* Left pill (gray semi-transparent) — 709×126 at x=306 y=728 */}
        <div
          className="hero-anim hero-anim-d5 absolute"
          style={{
            left: 306,
            top: 623,
            width: 709,
            height: 126,
            borderRadius: 100,
            background: 'rgba(107,107,107,0.35)',
            backdropFilter: 'blur(8px)',
          }}
        />

        {/* Gift badge — overlaps left edge of gray pill */}
        <div
          className="hero-anim hero-anim-d5 absolute"
          style={{ left: 290, top: 611, width: 151, height: 151 }}
        >
          <Image src="/images/gift-badge.png" alt="" fill sizes="151px" className="object-contain" />
        </div>

        {/* Gray pill text */}
        <div
          className="hero-anim hero-anim-d5 absolute font-sans text-white whitespace-pre-line"
          style={{ left: 455, top: 644, width: 550, fontSize: 20, lineHeight: '28px' }}
        >
          Реєструйся протягом <Countdown className="font-semibold" />{'\n'}подарунок гайд «5 типів менеджерів, які вбивають продажі компанії»
        </div>

        {/* Right pill (lime gradient) — 554×126 at x=1056 y=728 */}
        <MagneticCTA
          className="hero-anim hero-anim-d6 cta-animated absolute flex items-center justify-center cursor-pointer"
          style={{
            left: 1056,
            top: 623,
            width: 554,
            height: 126,
            borderRadius: 100,
            background:
              'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
            boxShadow: '0 4px 50px #EBFF00, inset 0 0 0 1px #EBFF00',
          }}
        >
          <span
            className="font-display uppercase text-black"
            style={{ fontSize: 60, lineHeight: 1 }}
          >
            зареєструватись
          </span>
        </MagneticCTA>

        {/* Footer meta */}
        <div
          className="hero-anim hero-anim-d6 absolute font-sans text-center"
          style={{
            left: 560,
            top: 774,
            width: 800,
            fontSize: 24,
            lineHeight: '24px',
            color: 'rgba(217,217,217,1)',
          }}
        >
          Участь безкоштовна · Zoom-формат · Кількість обмежена
        </div>
      </div>
    </section>
  );
}

// ─── 2. FOR WHOM ───
function ForWhomPill({ left, top, height, text }: { left: number; top: number; height: number; text: string }) {
  return (
    <div
      className="absolute"
      style={{
        left,
        top,
        width: 570,
        height,
        borderRadius: 25.6,
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="absolute" style={{ left: 17, top: 19, width: 20, height: 20 }}>
        <Image src="/icons/icon-check.svg" alt="" width={20} height={20} />
      </div>
      <div
        className="absolute font-sans"
        style={{ left: 49, top: 17, right: 17, fontSize: 20, lineHeight: '24px', color: '#FAF8F5' }}
      >
        {text}
      </div>
    </div>
  );
}

function ForWhomMobile() {
  const all = [...FOR_WHOM_LEFT, ...FOR_WHOM_RIGHT];
  return (
    <section className="lg:hidden relative bg-black text-white overflow-hidden px-5 py-14">
      <h2
        className="font-display uppercase text-white text-center mx-auto"
        style={{ fontSize: 28, lineHeight: '30px', maxWidth: 335 }}
      >
        цей мастермайнд для тебе якщо:
      </h2>

      <div className="relative mt-8 overflow-hidden" style={{ borderRadius: 28, background: '#000' }}>
        {/* Lime glow */}
        <div
          className="absolute pointer-events-none"
          style={{ left: -80, top: -80, width: 520, height: 520, borderRadius: '50%', background: '#EBFF00', filter: 'blur(80px)', opacity: 0.18 }}
        />
        <div
          className="absolute pointer-events-none"
          style={{ left: -40, top: 400, width: 520, height: 520, borderRadius: '50%', background: '#EBFF00', filter: 'blur(80px)', opacity: 0.14 }}
        />

        <div className="relative flex flex-col gap-3 p-4">
          {all.map((t) => (
            <div
              key={t}
              className="relative"
              style={{ borderRadius: 20, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', padding: '14px 14px 14px 42px', minHeight: 64 }}
            >
              <div className="absolute" style={{ left: 14, top: 16, width: 18, height: 18 }}>
                <Image src="/icons/icon-check.svg" alt="" width={18} height={18} />
              </div>
              <span className="font-sans" style={{ fontSize: 14, lineHeight: '18px', color: '#FAF8F5' }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhomSection() {
  // Pill y-offsets (inside 475px panel, панель top=148 у секції)
  const leftYs = [47, 141, 235, 329]; // 4 pills, ~94px step, panel-relative
  const leftHeights = [82, 82, 82, 82];
  const rightYs = [47, 141, 233, 350];
  const rightHeights = [82, 80, 105, 82];

  return (
    <section className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1920, height: 740, maxWidth: '100%' }}>
        {/* Heading */}
        <h2
          className="absolute font-display uppercase text-white"
          style={{
            left: 300,
            top: 80,
            width: 1320,
            textAlign: 'center',
            fontSize: 100,
            lineHeight: '100px',
            letterSpacing: 0,
          }}
        >
          цей МАСТЕРМАЙНД ДЛЯ ТЕБЕ ЯКЩО:
        </h2>

        {/* Gradient panel */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 300, top: 228, width: 1311, height: 475, borderRadius: 40, background: '#000' }}
        >
          {/* Lime glow top-left */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: -388,
              top: -117,
              width: 1422,
              height: 519,
              borderRadius: '50%',
              background: '#EBFF00',
              filter: 'blur(120px)',
              opacity: 0.22,
            }}
          />
          {/* Lime glow bottom-right */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: 60,
              top: 245,
              width: 1424,
              height: 704,
              borderRadius: '50%',
              background: '#EBFF00',
              filter: 'blur(120px)',
              opacity: 0.18,
            }}
          />
          {/* White glow middle */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: -323,
              top: 181,
              width: 981,
              height: 710,
              borderRadius: '50%',
              background: '#ffffff',
              filter: 'blur(140px)',
              opacity: 0.12,
            }}
          />

          {/* Left column pills (panel-relative: x=38) */}
          {FOR_WHOM_LEFT.map((t, i) => (
            <ForWhomPill key={t} left={38} top={leftYs[i]} height={leftHeights[i]} text={t} />
          ))}

          {/* Right column pills (panel-relative: x=621) */}
          {FOR_WHOM_RIGHT.map((t, i) => (
            <ForWhomPill key={t} left={621} top={rightYs[i]} height={rightHeights[i]} text={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. METHODOLOGY TEASER ───
function MethodologyMobile() {
  return (
    <section className="lg:hidden relative bg-black text-white px-5 py-10">
      <p
        className="font-sans text-center mx-auto"
        style={{ maxWidth: 341, fontSize: 14, lineHeight: '18px', color: '#EBFF00' }}
      >
        Я покажу тобі протестовану методологію, яка допомагає будувати ефективні відділи з продажів та команди, яка драйвить продажі
      </p>
    </section>
  );
}

function Methodology() {
  return (
    <section className="hidden lg:block relative bg-black text-white">
      <div className="relative mx-auto" style={{ width: 1920, height: 192, maxWidth: '100%' }}>
        <p
          className="absolute font-sans text-center"
          style={{
            left: 558,
            top: 72,
            width: 803,
            fontSize: 24,
            lineHeight: '30px',
            color: '#EBFF00',
          }}
        >
          Я покажу тобі протестовану методологію, яка допомагає будувати ефективні відділи з продажів та команди, яка драйвить продажі
        </p>
      </div>
    </section>
  );
}

// ─── 4b. PROGRAM MOBILE ───
function ProgramMobileSection() {
  return (
    <section id="program-mobile" className="lg:hidden relative bg-black text-white px-5 py-10">
      <h2
        className="font-display uppercase text-white text-center mx-auto"
        style={{ fontSize: 28, lineHeight: '30px', maxWidth: 335 }}
      >
        програма мастермайнду
      </h2>

      <div className="mt-8 space-y-4">
        {PROGRAM.map((card, i) => (
          <article
            key={i}
            className="bg-acid text-black"
            style={{ borderRadius: 20, padding: '20px' }}
          >
            <div className="flex flex-wrap gap-2">
              <span
                className="font-sans bg-white text-black rounded-full"
                style={{ padding: '4px 12px', fontSize: 11, lineHeight: '14px' }}
              >
                {card.day}
              </span>
              {card.date && (
                <span
                  className="font-sans bg-black text-white rounded-full"
                  style={{ padding: '4px 12px', fontSize: 11, lineHeight: '14px' }}
                >
                  {card.date}
                </span>
              )}
            </div>

            <h3
              className="font-display uppercase mt-4 text-left"
              style={{ fontSize: 26, lineHeight: '28px' }}
            >
              {card.title}
            </h3>

            <div className="mt-4 border-t border-black/25" />

            <ul className="mt-4 space-y-3">
              {card.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 items-start">
                  <span
                    className="inline-block rounded-full bg-black shrink-0"
                    style={{ width: 6, height: 6, marginTop: 7 }}
                  />
                  <span className="font-sans" style={{ fontSize: 14, lineHeight: '18px' }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── 4. PROGRAM ───
function ProgramSection() {
  const cardHeights = [620, 380, 340];
  let currentTop = 150; // start after heading (heading top=0, h=100, +50 gap)
  const cardTops = cardHeights.map((h, i) => {
    const t = currentTop;
    currentTop += h + 16; // 16px gap between cards
    return t;
  });
  const totalHeight = currentTop + 80;

  return (
    <section id="program" className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1920, height: totalHeight, maxWidth: '100%' }}>
        {/* Heading */}
        <h2
          className="absolute font-display uppercase text-white text-center"
          style={{
            left: 300,
            top: 0,
            width: 1320,
            fontSize: 100,
            lineHeight: '100px',
          }}
        >
          програма мастермайнду
        </h2>

        {/* 3 program cards */}
        {PROGRAM.map((p, i) => (
          <article
            key={p.title}
            className="absolute overflow-hidden"
            style={{
              left: 309,
              top: cardTops[i],
              width: 1302,
              height: cardHeights[i],
              borderRadius: 40,
              background:
                'linear-gradient(135deg, #EBFF00 0%, #D9F200 45%, #A8C200 100%)',
            }}
          >
            {/* Day chips */}
            <div className="absolute flex items-center gap-1" style={{ left: 59, top: 61 }}>
              <span
                className="inline-flex items-center justify-center bg-white text-black rounded-full font-sans font-medium"
                style={{
                  height: 39,
                  paddingLeft: 16,
                  paddingRight: 16,
                  fontSize: 22,
                  lineHeight: 1,
                }}
              >
                {p.day}
              </span>
              {p.date && (
                <span
                  className="inline-flex items-center justify-center bg-black text-white rounded-full font-sans font-medium"
                  style={{
                    height: 39,
                    paddingLeft: 16,
                    paddingRight: 16,
                    fontSize: 22,
                    lineHeight: 1,
                  }}
                >
                  {p.date}
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              className="absolute font-display uppercase"
              style={{
                left: 98,
                top: 150,
                right: 80,
                fontSize: 64,
                lineHeight: '58px',
                color: '#000',
                letterSpacing: 0,
              }}
            >
              {p.title}
            </h3>

            {/* Bullets */}
            <ul className="absolute" style={{ left: 98, top: 230, right: 60 }}>
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 mb-3">
                  <span
                    aria-hidden
                    className="inline-block shrink-0"
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: '#000',
                      marginTop: 10,
                    }}
                  />
                  <span
                    className="font-sans"
                    style={{ fontSize: 24, lineHeight: '32px', color: '#1E1E1E' }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── 5. RESULTS (6 cards on gradient panel) ───
const RESULTS_LEFT = [
  'Зрозумієш чому менеджери не продають і де саме зараз іде злив угод.',
  'Побачиш різницю між сильним і слабким менеджером по дзвінках, а не по відчуттях.',
  'Отримаєш покрокову систему навчання команди - можна запустити вже наступного тижня.',
];
const RESULTS_RIGHT = [
  'Дізнаєшся як контролювати дзвінки автоматично - без ручного прослуховування.',
  'Зрозумієш як побудувати відділ, який продає без тебе.',
  'На 2-й день побачиш реальні дзвінки і порівняєш з тим, що відбувається у тебе зараз.',
];

function ResultsMobile() {
  const all = [...RESULTS_LEFT, ...RESULTS_RIGHT];
  return (
    <section className="lg:hidden relative bg-black text-white overflow-hidden px-5 py-10">
      <h2
        className="font-display uppercase text-white text-center mx-auto"
        style={{ fontSize: 28, lineHeight: '30px', maxWidth: 335 }}
      >
        результати після мастермайнду
      </h2>

      <div className="relative mt-8 overflow-hidden" style={{ borderRadius: 28, background: '#000' }}>
        <div
          className="absolute pointer-events-none"
          style={{ left: -80, top: -80, width: 520, height: 400, borderRadius: '50%', background: '#EBFF00', filter: 'blur(80px)', opacity: 0.18 }}
        />
        <div
          className="absolute pointer-events-none"
          style={{ left: -40, top: 300, width: 520, height: 400, borderRadius: '50%', background: '#EBFF00', filter: 'blur(80px)', opacity: 0.14 }}
        />

        <div className="relative flex flex-col gap-3 p-4">
          {all.map((t) => (
            <div
              key={t}
              className="relative"
              style={{ borderRadius: 20, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', padding: '14px 14px 14px 42px', minHeight: 64 }}
            >
              <div className="absolute" style={{ left: 14, top: 16, width: 18, height: 18 }}>
                <Image src="/icons/icon-check.svg" alt="" width={18} height={18} />
              </div>
              <span className="font-sans" style={{ fontSize: 14, lineHeight: '18px', color: '#FAF8F5' }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const leftYs = [47, 141, 235];
  const rightYs = [47, 141, 235];
  return (
    <section id="results" className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1920, height: 630, maxWidth: '100%' }}>
        <h2
          className="absolute font-display uppercase text-white text-center"
          style={{ left: 300, top: 80, width: 1320, fontSize: 100, lineHeight: '100px' }}
        >
          результати після мастермайнду
        </h2>

        <div
          className="absolute overflow-hidden"
          style={{ left: 300, top: 228, width: 1311, height: 364, borderRadius: 40, background: '#000' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              left: -388, top: -89, width: 1422, height: 397,
              borderRadius: '50%', background: '#EBFF00', filter: 'blur(120px)', opacity: 0.22,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: 60, top: 187, width: 1424, height: 539,
              borderRadius: '50%', background: '#EBFF00', filter: 'blur(120px)', opacity: 0.18,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: -323, top: 138, width: 981, height: 544,
              borderRadius: '50%', background: '#ffffff', filter: 'blur(140px)', opacity: 0.12,
            }}
          />

          {RESULTS_LEFT.map((t, i) => (
            <ForWhomPill key={t} left={38} top={leftYs[i]} height={82} text={t} />
          ))}
          {RESULTS_RIGHT.map((t, i) => (
            <ForWhomPill key={t} left={621} top={rightYs[i]} height={82} text={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5b. ANDRIY STATS ───
function AndriyStatsMobile() {
  const founders = [
    'Бюро Продажів - міжнародна консалтингова компанія. Побудувано 185+ відділів продажів, більш ніж у 10-ти країнах світу.',
    'Академія продажів - рекрутинговий та освітній проєкт, який спеціалізується на наймі комерсантів. За 7 років нанято більше 1500 людей та 5000+ людей навчено продажам',
    'Ukrainian Sales Club - закрита спільнота комерсантів',
  ];
  return (
    <section className="lg:hidden relative bg-black text-white overflow-hidden px-5 py-10">
      {/* "Автор курсу" badge — image */}
      <div className="relative mx-auto" style={{ width: 200, height: 40 }}>
        <Image src="/images/Group 1966047708.png" alt="Автор майстер-класу" fill sizes="200px" className="object-contain" />
      </div>

      {/* Portrait + glow */}
      <div className="relative mx-auto mt-5" style={{ width: 280, height: 340 }}>
        <div
          className="absolute pointer-events-none"
          style={{
            inset: -20,
            background: 'radial-gradient(circle, rgba(235,255,0,0.25) 0%, rgba(235,255,0,0.08) 50%, transparent 80%)',
            filter: 'blur(30px)',
          }}
        />
        <Image src="/images/andriy-portrait.png" alt="Андрій Крупкін" fill sizes="280px" className="object-contain object-bottom relative" />
      </div>

      {/* АНДРІЙ / КРУПКІН */}
      <div className="mt-6 font-display uppercase text-acid" style={{ fontSize: 72, lineHeight: '66px' }}>
        Андрій
      </div>
      <div className="font-display uppercase text-acid" style={{ fontSize: 72, lineHeight: '66px', paddingLeft: 104 }}>
        Крупкін
      </div>

      {/* Social icons */}
      <div className="mt-6 flex gap-3">
        <a href="https://youtube.com/@andriykrupkin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-[4px]" style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.08)' }}>
          <Image src="/icons/icon-youtube.svg" alt="YouTube" width={28} height={28} />
        </a>
        <a href="https://www.instagram.com/krupkin.pro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-[4px]" style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.08)' }}>
          <Image src="/icons/icon-instagram.svg" alt="Instagram" width={26} height={26} />
        </a>
      </div>

      {/* 2 stat cards */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="bg-acid text-black" style={{ borderRadius: 16, padding: '14px 14px' }}>
          <div className="font-display" style={{ fontSize: 36, lineHeight: '36px', fontWeight: 700 }}>18<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span></div>
          <div className="font-sans mt-1" style={{ fontSize: 12, lineHeight: '14px' }}>років у сфері продажів</div>
        </div>
        <div className="bg-acid text-black" style={{ borderRadius: 16, padding: '14px 14px' }}>
          <div className="font-display" style={{ fontSize: 36, lineHeight: '36px', fontWeight: 700 }}>184<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span></div>
          <div className="font-sans mt-1" style={{ fontSize: 12, lineHeight: '14px' }}>побудованих відділів продажів</div>
        </div>
      </div>

      {/* Bio paragraph */}
      <div className="mt-5 flex gap-2 items-start text-left">
        <span className="inline-block rounded-full bg-acid shrink-0" style={{ width: 7, height: 7, marginTop: 7 }} />
        <span className="font-sans text-left" style={{ fontSize: 14, lineHeight: '18px', color: '#FAF8F5' }}>
          Пройшов шлях від менеджера з продажів до серійного підприємця
        </span>
      </div>

      {/* Gray panel with founders */}
      <div className="mt-6 p-5" style={{ borderRadius: 24, background: 'rgba(107,107,107,0.35)' }}>
        <h3 className="font-display uppercase text-white" style={{ fontSize: 24, lineHeight: '28px' }}>
          Засновник компаній:
        </h3>
        <ul className="mt-4 space-y-3">
          {founders.map((t) => (
            <li key={t} className="flex gap-2 items-start">
              <span className="inline-block rounded-full bg-acid shrink-0" style={{ width: 7, height: 7, marginTop: 7 }} />
              <span className="font-sans text-white" style={{ fontSize: 14, lineHeight: '18px' }}>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AndriyStats() {
  const SECTION_LEFT = 303;
  const founderBullets = [
    {
      left: 369 - SECTION_LEFT,
      width: 422,
      text: 'Бюро Продажів - міжнародна консалтингова компанія. Побудувано 185+ відділів продажів, більш ніж у 10-ти країнах світу.',
    },
    {
      left: 838 - SECTION_LEFT,
      width: 438,
      text: 'Академія продажів - рекрутинговий та освітній проєкт, який спеціалізується на наймі комерсантів. За 7 років нанято більше 1500 людей та 5000+ людей навчено продажам',
    },
    {
      left: 1338 - SECTION_LEFT,
      width: 241,
      text: 'Ukrainian Sales Club - закрита спільнота комерсантів',
    },
  ];

  return (
    <section className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1920, height: 1087, maxWidth: '100%' }}>
        {/* Inner absolute layer aligned to Figma x=303 */}
        <div className="absolute" style={{ left: SECTION_LEFT, top: 0, width: 1309, height: 1087 }}>
          {/* Background pattern (same as hero) — shifted left so bright area sits behind portrait, not text */}
          <div
            className="absolute pointer-events-none"
            style={{ left: -550, top: 0, width: 1309, height: 869, zIndex: 0 }}
          >
            <Image
              src="/images/hero-bg-pattern.png"
              alt=""
              fill
              sizes="1309px"
              className="object-cover"
            />
          </div>

          {/* Portrait */}
          <div className="absolute" style={{ left: -35, top: 75, width: 624, height: 740 }}>
            <Image
              src="/images/andriy-portrait.png"
              alt="Андрій Крупкін"
              fill
              sizes="624px"
              className="object-contain object-bottom"
            />
          </div>

          {/* "Автор курсу" badge — image */}
          <div className="absolute" style={{ left: 589, top: 0, width: 279, height: 70 }}>
            <Image src="/images/Group 1966047708.png" alt="Автор майстер-класу" fill sizes="279px" className="object-contain" />
          </div>

          {/* АНДРІЙ */}
          <div
            className="absolute font-display uppercase text-acid"
            style={{ left: 892 - SECTION_LEFT, top: 180, fontSize: 137, lineHeight: '0.9' }}
          >
            Андрій
          </div>
          {/* КРУПКІН */}
          <div
            className="absolute font-display uppercase text-acid"
            style={{ left: 978 - SECTION_LEFT, top: 330, fontSize: 137, lineHeight: '0.9' }}
          >
            Крупкін
          </div>

          {/* Social icons — yellow glyph on translucent-white tile */}
          <a
            href="https://www.instagram.com/krupkin.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex items-center justify-center"
            style={{ left: 1404 - SECTION_LEFT, top: 372, width: 72, height: 72, background: 'rgba(255,255,255,0.08)' }}
          >
            <Image src="/icons/icon-instagram.svg" alt="Instagram" width={36} height={36} />
          </a>
          <a
            href="https://youtube.com/@andriykrupkin"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex items-center justify-center"
            style={{ left: 1489 - SECTION_LEFT, top: 372, width: 68, height: 68, background: 'rgba(255,255,255,0.08)' }}
          >
            <Image src="/icons/icon-youtube.svg" alt="YouTube" width={40} height={28} />
          </a>

          {/* Bio pill — aligned with founder bullets column */}
          <div className="absolute" style={{ left: 369 - SECTION_LEFT, top: 711, width: 442 }}>
            <span
              className="inline-block rounded-full bg-acid absolute"
              style={{ width: 9, height: 9, left: -20, top: 12 }}
            />
            <div className="font-sans" style={{ fontSize: 20, lineHeight: '26px', color: '#FAF8F5' }}>
              Пройшов шлях від менеджера з продажів<br />до серійного підприємця
            </div>
          </div>

          {/* Stat card 1 */}
          <div
            className="absolute bg-acid text-black z-10"
            style={{ left: 805 - SECTION_LEFT, top: 592, width: 374, height: 167, borderRadius: 16, padding: '24px 28px' }}
          >
            <div className="font-display" style={{ fontSize: 80, lineHeight: '0.95', fontWeight: 700, whiteSpace: 'nowrap' }}>
              18<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span> років
            </div>
            <div className="font-sans" style={{ fontSize: 24, lineHeight: '28px', marginTop: 8 }}>
              років у сфері продажів
            </div>
          </div>

          {/* Stat card 2 */}
          <div
            className="absolute bg-acid text-black z-10"
            style={{ left: 1202 - SECTION_LEFT, top: 592, width: 410, height: 167, borderRadius: 16, padding: '24px 28px' }}
          >
            <div className="font-display" style={{ fontSize: 80, lineHeight: '0.95', fontWeight: 700 }}>
              184<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span>
            </div>
            <div className="font-sans" style={{ fontSize: 24, lineHeight: '28px', marginTop: 8 }}>
              побудованих відділів продажів
            </div>
          </div>

          {/* Gray panel */}
          <div
            className="absolute"
            style={{ left: 0, top: 668, width: 1308, height: 419, borderRadius: 40, background: 'rgba(107,107,107,0.35)' }}
          />

          {/* "Засновник компаній:" heading */}
          <div
            className="absolute font-display uppercase text-white"
            style={{ left: 349 - SECTION_LEFT, top: 840, fontSize: 50, lineHeight: '1' }}
          >
            Засновник компаній:
          </div>

          {/* 3 founder bullets */}
          {founderBullets.map((b, i) => (
            <div key={i} className="absolute" style={{ left: b.left, top: 921, width: b.width }}>
              <span
                className="inline-block rounded-full bg-acid absolute"
                style={{ width: 9, height: 9, left: -20, top: 12 }}
              />
              <div className="font-sans text-white" style={{ fontSize: 20, lineHeight: '26px' }}>
                {b.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. LOGOS CLOUD ───
function LogosMobile() {
  const logos = [
    'logo-company-1.png',
    'logo-company-2.png',
    'logo-company-3.png',
    'logo-company-4.png',
    'logo-company-5.png',
    'logo-company-6.png',
  ];
  return (
    <section className="lg:hidden bg-black text-white px-5 py-10">
      <h2
        className="font-display uppercase text-white text-center mx-auto"
        style={{ fontSize: 40, lineHeight: '42px', maxWidth: 335 }}
      >
        Я витратив на ці знання <span className="text-acid">18 років та 100<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span> тисяч доларів</span>
      </h2>

      <div className="relative mt-8 w-full" style={{ aspectRatio: '1304 / 660' }}>
        <Image src="/images/31.png" alt="" fill sizes="100vw" className="object-contain" />
      </div>
    </section>
  );
}

function LogosSection() {
  const logos = [
    { src: 'logo-hero-large.png',  size: 200, x: '50%', y: '50%' },
    { src: 'logo-company-1.png',   size: 140, x: '10%', y: '20%' },
    { src: 'logo-company-2.png',   size: 160, x: '85%', y: '25%' },
    { src: 'logo-company-3.png',   size: 100, x: '22%', y: '75%' },
    { src: 'logo-company-4.png',   size: 120, x: '75%', y: '80%' },
    { src: 'logo-company-5.png',   size: 130, x: '48%', y: '12%' },
    { src: 'logo-company-6.png',   size: 150, x: '90%', y: '60%' },
  ];
  return (
    <section className="hidden lg:block bg-black text-white">
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <h2
          className="font-display uppercase text-white text-center mx-auto"
          style={{ fontSize: 100, lineHeight: '100px', maxWidth: 1100 }}
        >
          Я витратив на ці знання{' '}
          <span className="text-acid">18 років та 100<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span> тисяч доларів</span>
        </h2>

        <div className="relative mt-16 w-full" style={{ aspectRatio: '1304 / 660' }}>
          <Image src="/images/31.png" alt="" fill sizes="1304px" className="object-contain" />
        </div>
      </div>
    </section>
  );
}

// ─── 7. TESTIMONIAL ───
const TESTIMONIALS = [
  {
    name: 'Альона',
    text: 'Привіт всім! Безмежне і величезне дякую Крупкіну і Ко. Андрій, у вас потужна команда 👍🔥 Це неймовірний досвід, шикарна подача матеріалу, задоволення від виконання завдань, знайомство з новими неймовірними людьми-однодумцями, розширення кругозору!!!\n\nДорогі однокурсники, бажаю всім вам втілити свої ідеї та цілі! Андрій, дякую :)',
  },
  {
    name: 'Dasha Kydina',
    text: 'В нашій компанії план продажів складає керівник відділу HoReCa, і сьогодні я вперше почула, що це робота маркетолога, РОПа, фінансиста… Одним словом — КОМАНДИ.\n\nДля виконання плану продажів керівники мають надати менеджерам усі інструменти. І тут є проблема. Завтра на зборах ТОПів знаю, яку тему буду піднімати. Андрій, дякую за урок 🔥',
  },
  {
    name: 'Надія Щербина',
    text: 'Діалось продаж — паралельно купа інсайтів по власному контенту. Ну що сказати: я зробила це. Андрій був правий на мільйон відсотків стосовно того, що мені потрібен саме цей майстер.\n\nКлючове — я бачу, як саме потрібно і під яким соусом. Дуже вдячна, що прийшла на цю програму. Контент просто 👌',
  },
  {
    name: 'Володимир Семанюк',
    text: 'Всім привіт! Завершив перший модуль і ділюся своїми інсайтами:\n\n— хочеш заробляти — продавай, а не консультуй\n— вір у те, що продаєш\n— знай досконало свій продукт\n— чим більша ціна клієнта, тим довший цикл продажу\n— використовуй скрипт і відпрацюй його до автоматизму\n— при проблемі залишайся з клієнтом, а не тікай',
  },
];

function TestimonialMobile() {
  return (
    <section className="lg:hidden bg-black text-white px-5 py-10">
      <h2
        className="font-display uppercase text-white text-center mx-auto"
        style={{ fontSize: 28, lineHeight: '30px', maxWidth: 335 }}
      >
        Відгуки з навчань
      </h2>

      <TestimonialsSlider items={TESTIMONIALS} variant="mobile" />
    </section>
  );
}

function TestimonialSection() {
  return (
    <section id="testimonials" className="hidden lg:block bg-black text-white">
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <h2 className="font-display text-[48px] md:text-h2 uppercase text-center leading-none tracking-[-0.022em] mb-14">
          Відгуки з навчань
        </h2>

        <TestimonialsSlider items={TESTIMONIALS} variant="desktop" />
      </div>
    </section>
  );
}

// ─── 8. SECOND CTA ───
function SecondCtaMobile() {
  const pills = [
    'Система діагностики відділу продажів',
    'ТОП-5 проблем і як їх виправити',
    'Живі розбори реальних дзвінків',
    'Інструменти контролю без ручного прослуховування',
    'Зрозумієш як побудувати відділ, який продає без тебе.',
    'Готова система навчання команди',
  ];
  return (
    <section className="lg:hidden relative bg-black text-white overflow-hidden px-5 py-10">
      <h2
        className="font-display uppercase text-white text-center mx-auto"
        style={{ fontSize: 30, lineHeight: '32px', maxWidth: 335 }}
      >
        Такий живий формат проводимо раз на кілька місяців
      </h2>

      <p
        className="mt-5 font-sans text-center text-white/75 mx-auto"
        style={{ maxWidth: 300, fontSize: 13, lineHeight: '17px' }}
      >
        Цієї весни підприємці оновлюють свої відділи продажів. Приєднуйся.
      </p>

      {/* Pills panel */}
      <div className="relative mt-6 overflow-hidden" style={{ borderRadius: 28, background: '#000' }}>
        <div
          className="absolute pointer-events-none"
          style={{ left: -80, top: -80, width: 520, height: 400, borderRadius: '50%', background: '#EBFF00', filter: 'blur(80px)', opacity: 0.22 }}
        />
        <div
          className="absolute pointer-events-none"
          style={{ left: -40, top: 300, width: 520, height: 400, borderRadius: '50%', background: '#EBFF00', filter: 'blur(80px)', opacity: 0.18 }}
        />

        <div className="relative flex flex-col gap-3 p-4">
          {pills.map((t) => (
            <div
              key={t}
              className="relative"
              style={{ borderRadius: 20, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', padding: '14px 14px 14px 42px', minHeight: 56 }}
            >
              <div className="absolute" style={{ left: 14, top: 14, width: 20, height: 20 }}>
                <Image src="/icons/icon-check.svg" alt="" width={20} height={20} />
              </div>
              <span className="font-sans" style={{ fontSize: 14, lineHeight: '18px', color: '#FAF8F5' }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href="#"
        data-register-cta
        className="cta-animated mt-6 flex items-center justify-center cursor-pointer"
        style={{
          height: 62,
          borderRadius: 100,
          background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
          border: '1px solid #EBFF00',
          boxShadow: '0 0 30px rgba(235,255,0,0.35)',
        }}
      >
        <span className="font-display uppercase text-black" style={{ fontSize: 22, lineHeight: 1 }}>
          зареєструватись
        </span>
      </a>

      {/* Meta */}
      <div
        className="mt-4 font-sans text-center"
        style={{ fontSize: 11, lineHeight: '13px', color: 'rgba(217,217,217,1)' }}
      >
        Участь безкоштовна · Zoom-формат · Кількість обмежена
      </div>

      {/* Gift + gray pill */}
      <div className="mt-5 relative" style={{ height: 78 }}>
        <div
          className="absolute inset-0"
          style={{ borderRadius: 100, background: 'rgba(107,107,107,0.35)', backdropFilter: 'blur(8px)' }}
        />
        <div className="absolute" style={{ left: -4, top: -8, width: 86, height: 86 }}>
          <Image src="/images/gift-badge.png" alt="" fill sizes="86px" className="object-contain" />
        </div>
        <div
          className="absolute font-sans text-white"
          style={{ left: 86, right: 14, top: 12, fontSize: 12, lineHeight: '16px' }}
        >
          Реєструйся протягом <Countdown className="font-semibold" /> подарунок гайд «5 типів менеджерів, які вбивають продажі компанії»
        </div>
      </div>
    </section>
  );
}

function SecondCtaSection() {
  const pills = [
    'Система діагностики відділу продажів',
    'Інструменти контролю без ручного прослуховування',
    'ТОП-5 проблем і як їх виправити',
    'Зрозумієш як побудувати відділ, який продає без тебе.',
    'Живі розбори реальних дзвінків',
    'Готова система навчання команди',
  ];
  return (
    <section id="registration" className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1920, height: 920, maxWidth: '100%' }}>
        {/* Heading */}
        <h2
          className="absolute font-display uppercase text-white text-center"
          style={{ left: 300, top: 60, width: 1320, fontSize: 100, lineHeight: '100px' }}
        >
          Такий живий формат проводимо раз на кілька місяців
        </h2>

        {/* Subtitle */}
        <p
          className="absolute font-sans text-center"
          style={{ left: 460, top: 260, width: 1000, fontSize: 24, lineHeight: '30px', color: 'rgba(217,217,217,0.75)' }}
        >
          Цієї весни підприємці оновлюють свої відділи продажів. Приєднуйся.
        </p>

        {/* Pills inside gradient container — same as ResultsSection */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 300, top: 330, width: 1311, height: 364, borderRadius: 40, background: '#000' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{ left: -388, top: -89, width: 1422, height: 397, borderRadius: '50%', background: '#EBFF00', filter: 'blur(120px)', opacity: 0.22 }}
          />
          <div
            className="absolute pointer-events-none"
            style={{ left: 60, top: 187, width: 1424, height: 539, borderRadius: '50%', background: '#EBFF00', filter: 'blur(120px)', opacity: 0.18 }}
          />
          <div
            className="absolute pointer-events-none"
            style={{ left: -323, top: 138, width: 981, height: 544, borderRadius: '50%', background: '#ffffff', filter: 'blur(140px)', opacity: 0.12 }}
          />
          {pills.slice(0, 3).map((t, i) => (
            <ForWhomPill key={`l-${i}`} left={38} top={47 + i * 94} height={82} text={t} />
          ))}
          {pills.slice(3).map((t, i) => (
            <ForWhomPill key={`r-${i}`} left={621} top={47 + i * 94} height={82} text={t} />
          ))}
        </div>

        {/* Left gray pill */}
        <div
          className="absolute"
          style={{ left: 306, top: 740, width: 709, height: 126, borderRadius: 100, background: 'rgba(107,107,107,0.35)', backdropFilter: 'blur(8px)' }}
        />
        <div className="absolute" style={{ left: 290, top: 728, width: 151, height: 151 }}>
          <Image src="/images/gift-badge.png" alt="" fill sizes="151px" className="object-contain" />
        </div>
        <div
          className="absolute font-sans text-white whitespace-pre-line"
          style={{ left: 455, top: 761, width: 550, fontSize: 20, lineHeight: '28px' }}
        >
          Реєструйся протягом <Countdown className="font-semibold" />{'\n'}подарунок гайд «5 типів менеджерів, які вбивають продажі компанії»
        </div>

        {/* Right lime CTA */}
        <a
          href="#"
          data-register-cta
          className="cta-animated absolute flex items-center justify-center cursor-pointer"
          style={{
            left: 1056,
            top: 740,
            width: 554,
            height: 126,
            borderRadius: 100,
            background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
            boxShadow: '0 4px 50px #EBFF00, inset 0 0 0 1px #EBFF00',
          }}
        >
          <span className="font-display uppercase text-black" style={{ fontSize: 60, lineHeight: 1 }}>
            зареєструватись
          </span>
        </a>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-black text-white min-h-screen pb-[94px] lg:pb-0">
      <Header />
      <HeroMobile />
      <Hero />
      <Reveal><ForWhomMobile /></Reveal>
      <Reveal><ForWhomSection /></Reveal>
      <Reveal><MethodologyMobile /></Reveal>
      <Reveal><Methodology /></Reveal>
      <Reveal><ProgramMobileSection /></Reveal>
      <Reveal><ProgramSection /></Reveal>
      <Reveal><ResultsMobile /></Reveal>
      <Reveal><ResultsSection /></Reveal>
      <Reveal><AndriyStatsMobile /></Reveal>
      <Reveal><AndriyStats /></Reveal>
      <Reveal><LogosMobile /></Reveal>
      <Reveal><LogosSection /></Reveal>
      <Reveal><TestimonialMobile /></Reveal>
      <Reveal><TestimonialSection /></Reveal>
      <Reveal><SecondCtaMobile /></Reveal>
      <Reveal><SecondCtaSection /></Reveal>
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
