import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCta } from '@/components/MobileStickyCta';
import { Reveal } from '@/components/Reveal';
import { Countdown } from '@/components/Countdown';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
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
    date: '28 квітня',
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
    date: '29 квітня',
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

// ─── 1b. HERO MOBILE — absolute layout per Figma 70:694 (375px canvas) ───
function HeroMobile() {
  return (
    <section
      className="lg:hidden relative text-white overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 55% at 50% 55%, #0E3A2C 0%, #071E17 45%, #020806 80%, #000 100%)',
      }}
    >
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          width: '100%',
          aspectRatio: '375 / 677',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 375,
            height: 677,
            transformOrigin: 'top left',
            transform: 'scale(calc(100vw / 375))',
          }}
        >
        {/* lime glow behind portrait */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: -64,
            top: 47,
            width: 450,
            height: 293,
            background:
              'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(235,255,0,0.28) 0%, rgba(235,255,0,0.08) 45%, transparent 75%)',
            filter: 'blur(18px)',
          }}
        />

        {/* Eyebrow — LEFT aligned per Figma */}
        <div
          className="hero-anim hero-anim-d1 absolute font-sans text-acid"
          style={{ left: 24, top: 0, width: 280, fontSize: 15, lineHeight: '15px' }}
        >
          Майстермайнд Андрія Крупкіна
        </div>

        {/* H1 — LEFT aligned, 38/38/30 per Figma */}
        <h1
          className="hero-anim hero-anim-d2 absolute font-display uppercase text-white"
          style={{ left: 21, top: 29, width: 331, letterSpacing: 0 }}
        >
          <span style={{ fontSize: 38, lineHeight: '38px', display: 'block' }}>Як власнику бізнесу</span>
          <span className="text-acid" style={{ fontSize: 38, lineHeight: '38px', display: 'block' }}>
            зробити х2 у 2026 році
          </span>
          <span style={{ fontSize: 30, lineHeight: '30px', display: 'block' }}>
            з сильною командою продажів
          </span>
        </h1>

        {/* Subtitle — LEFT aligned, 16/17 per Figma */}
        <p
          className="hero-anim hero-anim-d3 absolute font-sans"
          style={{ left: 20, top: 146, width: 332, fontSize: 16, lineHeight: '17px', color: 'rgb(217,217,217)' }}
        >
          За 2 вечора розберемо ТОП-5 проблем вашого відділу продажу та систему, яка працює без вашого контролю
        </p>

        {/* Portrait — positioned RIGHT per Figma (x=139, w=272, extending past right edge) */}
        <div
          className="hero-anim hero-anim-d3 absolute"
          style={{
            left: 139,
            top: 195,
            width: 272,
            height: 323,
            zIndex: 0,
            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
          }}
        >
          <Image
            src="/images/andriy-portrait.png"
            alt="Андрій Крупкін"
            fill
            sizes="272px"
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* 3 bullet checks — LEFT side of portrait per Figma */}
        {HERO_CHECKS.map((t, idx) => (
          <div
            key={t}
            className="hero-anim hero-anim-d4 absolute flex items-start gap-2"
            style={{ left: 9, top: 247 + idx * 72, width: 185, zIndex: 1 }}
          >
            <div className="relative shrink-0" style={{ width: 40, height: 33 }}>
              <Image src="/images/check-sparkle-green.png" alt="" fill sizes="40px" className="object-contain" />
            </div>
            <span className="font-sans text-white" style={{ fontSize: 13, lineHeight: '16px' }}>
              {t}
            </span>
          </div>
        ))}

        {/* CTA pill — z-index above portrait for clean edge */}
        <a
          href="#"
          data-register-cta
          className="hero-anim hero-anim-d5 cta-animated absolute flex items-center justify-center cursor-pointer"
          style={{
            left: 20,
            top: 473,
            width: 335,
            height: 62,
            zIndex: 2,
            borderRadius: 100,
            background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
            border: '1px solid #EBFF00',
            boxShadow: '0 0 30px rgba(235,255,0,0.35)',
          }}
        >
          <span
            className="font-display uppercase text-black"
            style={{ fontSize: 22, lineHeight: 1, display: 'inline-block', transform: 'translateY(0.08em)' }}
          >
            зареєструватись
          </span>
        </a>

        {/* Meta */}
        <div
          className="hero-anim hero-anim-d6 absolute font-sans text-center"
          style={{ left: 24, top: 555, width: 326, fontSize: 11, lineHeight: '13px', color: 'rgb(217,217,217)' }}
        >
          Участь безкоштовна · Zoom-формат · Кількість обмежена
        </div>

        {/* Gift + gray pill */}
        <div className="hero-anim hero-anim-d6 absolute" style={{ left: 9, top: 578, width: 343, height: 78 }}>
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
      </div>
    </section>
  );
}

// ─── 1. HERO — pixel-perfect absolute layout on 1440 canvas ───
function Hero() {
  return (
    <section className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div
        className="relative mx-auto"
        style={{ width: 1440, height: 667, maxWidth: '100%' }}
      >
        {/* Background pattern */}
        <div
          className="absolute pointer-events-none"
          style={{ left: 479, top: -13, width: 978, height: 652, zIndex: 0 }}
        >
          <Image
            src="/images/hero-bg-pattern.png"
            alt=""
            fill
            sizes="978px"
            priority
            className="object-cover"
          />
        </div>

        {/* Portrait */}
        <ParallaxImage
          className="absolute"
          style={{ left: 842, top: 29, width: 405, height: 481 }}
          scaleTo={1.08}
        >
          <Image
            src="/images/andriy-portrait.png"
            alt="Андрій Крупкін"
            fill
            sizes="405px"
            priority
            className="object-cover"
          />
        </ParallaxImage>

        {/* Eyebrow */}
        <div
          className="hero-anim hero-anim-d1 absolute font-sans text-acid"
          style={{ left: 230, top: 29, fontSize: 18, lineHeight: '18px' }}
        >
          Майстермайнд Андрія Крупкіна
        </div>

        {/* H1 */}
        <h1
          className="hero-anim hero-anim-d2 absolute font-display uppercase text-white"
          style={{
            left: 227,
            top: 64,
            width: 675,
            fontSize: 62,
            lineHeight: '62px',
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
            left: 229,
            top: 249,
            width: 459,
            fontSize: 18,
            lineHeight: '23px',
            color: 'rgba(217,217,217,0.6)',
            fontWeight: 500,
          }}
        >
          За 2 вечора розберемо ТОП-5 проблем вашого відділу продажу та систему, яка працює без
          вашого контролю
        </p>

        {/* 3 sparkle checks */}
        {[332, 362, 392].map((y) => (
          <div key={y} className="absolute" style={{ left: 221, top: y, width: 45, height: 30 }}>
            <Image
              src="/images/check-sparkle-green.png"
              alt=""
              fill
              sizes="45px"
              className="object-contain"
            />
          </div>
        ))}

        {/* 3-line bullet text */}
        <div
          className="hero-anim hero-anim-d4 absolute font-sans text-white whitespace-pre-line"
          style={{ left: 279, top: 338, width: 615, fontSize: 18, lineHeight: '31px' }}
        >
          {'Зрозумієш де саме твоя команда зливає угоди\nБез найму нових людей і нових витрат на рекламу\nПерші зміни вже за 2 тижні'}
        </div>

        {/* Left pill (gray semi-transparent) */}
        <div
          className="hero-anim hero-anim-d5 absolute"
          style={{
            left: 230,
            top: 467,
            width: 532,
            height: 95,
            borderRadius: 75,
            background: 'rgba(107,107,107,0.35)',
            backdropFilter: 'blur(8px)',
          }}
        />

        {/* Gift badge — overlaps left edge of gray pill */}
        <div
          className="hero-anim hero-anim-d5 absolute"
          style={{ left: 218, top: 458, width: 113, height: 113 }}
        >
          <Image src="/images/gift-badge.png" alt="" fill sizes="113px" className="object-contain" />
        </div>

        {/* Gray pill text */}
        <div
          className="hero-anim hero-anim-d5 absolute font-sans text-white whitespace-pre-line"
          style={{ left: 341, top: 483, width: 413, fontSize: 15, lineHeight: '21px' }}
        >
          Реєструйся протягом <Countdown className="font-semibold" />{'\n'}подарунок гайд «5 типів менеджерів, які вбивають продажі компанії»
        </div>

        {/* Right pill (lime gradient) */}
        <a
          href="#"
          data-register-cta
          className="hero-anim hero-anim-d6 cta-animated absolute flex items-center justify-center cursor-pointer"
          style={{
            left: 792,
            top: 467,
            width: 416,
            height: 95,
            borderRadius: 75,
            background:
              'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
            boxShadow: '0 4px 50px #EBFF00, inset 0 0 0 1px #EBFF00',
          }}
        >
          <span
            className="font-display uppercase text-black"
            style={{ fontSize: 45, lineHeight: 1, display: 'inline-block', transform: 'translateY(0.08em)' }}
          >
            зареєструватись
          </span>
        </a>

        {/* Footer meta */}
        <div
          className="hero-anim hero-anim-d6 absolute font-sans text-center"
          style={{
            left: 420,
            top: 581,
            width: 600,
            fontSize: 18,
            lineHeight: '18px',
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
        width: 428,
        height,
        borderRadius: 19,
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="absolute" style={{ left: 13, top: 14, width: 15, height: 15 }}>
        <Image src="/icons/icon-check.svg" alt="" width={15} height={15} />
      </div>
      <div
        className="absolute font-sans"
        style={{ left: 37, top: 13, right: 13, fontSize: 15, lineHeight: '18px', color: '#FAF8F5' }}
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
  const leftYs = [35, 106, 176, 247];
  const leftHeights = [62, 62, 62, 62];
  const rightYs = [35, 106, 175, 263];
  const rightHeights = [62, 60, 79, 62];

  return (
    <section className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1440, height: 555, maxWidth: '100%' }}>
        {/* Heading */}
        <h2
          className="absolute font-display uppercase text-white"
          style={{
            left: 225,
            top: 60,
            width: 990,
            textAlign: 'center',
            fontSize: 75,
            lineHeight: '75px',
            letterSpacing: 0,
          }}
        >
          цей МАСТЕРМАЙНД ДЛЯ ТЕБЕ ЯКЩО:
        </h2>

        {/* Gradient panel */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 225, top: 171, width: 990, height: 356, borderRadius: 30, background: '#000' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              left: -291,
              top: -88,
              width: 1067,
              height: 389,
              borderRadius: '50%',
              background: '#EBFF00',
              filter: 'blur(90px)',
              opacity: 0.22,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: 45,
              top: 184,
              width: 1068,
              height: 528,
              borderRadius: '50%',
              background: '#EBFF00',
              filter: 'blur(90px)',
              opacity: 0.18,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: -242,
              top: 136,
              width: 736,
              height: 533,
              borderRadius: '50%',
              background: '#ffffff',
              filter: 'blur(105px)',
              opacity: 0.12,
            }}
          />

          {FOR_WHOM_LEFT.map((t, i) => (
            <ForWhomPill key={t} left={29} top={leftYs[i]} height={leftHeights[i]} text={t} />
          ))}

          {FOR_WHOM_RIGHT.map((t, i) => (
            <ForWhomPill key={t} left={466} top={rightYs[i]} height={rightHeights[i]} text={t} />
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
      <div className="relative mx-auto" style={{ width: 1440, height: 144, maxWidth: '100%' }}>
        <p
          className="absolute font-sans text-center"
          style={{
            left: 419,
            top: 54,
            width: 602,
            fontSize: 18,
            lineHeight: '23px',
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
            <div className="flex flex-wrap items-center gap-2" style={{ marginLeft: -12 }}>
              <span
                className="font-sans bg-white text-black rounded-full inline-flex items-center"
                style={{ height: 22, padding: '0 12px', fontSize: 11, lineHeight: 1 }}
              >
                {card.day}
              </span>
              {card.date && (
                <span
                  className="font-sans bg-black text-white rounded-full inline-flex items-center"
                  style={{ height: 22, padding: '0 12px', fontSize: 11, lineHeight: 1 }}
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
                <li
                  key={j}
                  className="font-sans"
                  style={{ fontSize: 14, lineHeight: '18px' }}
                >
                  {b}
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
  const cardHeights = [465, 285, 255];
  let currentTop = 113;
  const cardTops = cardHeights.map((h) => {
    const t = currentTop;
    currentTop += h + 12;
    return t;
  });
  const totalHeight = currentTop + 60;

  return (
    <section id="program" className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1440, height: totalHeight, maxWidth: '100%' }}>
        {/* Heading */}
        <h2
          className="absolute font-display uppercase text-white text-center"
          style={{
            left: 225,
            top: 0,
            width: 990,
            fontSize: 75,
            lineHeight: '75px',
          }}
        >
          програма мастермайнду
        </h2>

        {PROGRAM.map((p, i) => (
          <article
            key={p.title}
            className="absolute overflow-hidden"
            style={{
              left: 225,
              top: cardTops[i],
              width: 990,
              height: cardHeights[i],
              borderRadius: 30,
              background:
                'linear-gradient(135deg, #EBFF00 0%, #D9F200 45%, #A8C200 100%)',
            }}
          >
            <div className="absolute flex items-center gap-1" style={{ left: 44, top: 46 }}>
              <span
                className="inline-flex items-center justify-center bg-white text-black rounded-full font-sans font-medium"
                style={{
                  height: 29,
                  paddingLeft: 12,
                  paddingRight: 12,
                  fontSize: 17,
                  lineHeight: 1,
                }}
              >
                {p.day}
              </span>
              {p.date && (
                <span
                  className="inline-flex items-center justify-center bg-black text-white rounded-full font-sans font-medium"
                  style={{
                    height: 29,
                    paddingLeft: 12,
                    paddingRight: 12,
                    fontSize: 17,
                    lineHeight: 1,
                  }}
                >
                  {p.date}
                </span>
              )}
            </div>

            <h3
              className="absolute font-display uppercase"
              style={{
                left: 74,
                top: 113,
                right: 60,
                fontSize: 48,
                lineHeight: '44px',
                color: '#000',
                letterSpacing: 0,
              }}
            >
              {p.title}
            </h3>

            <ul className="absolute" style={{ left: 74, top: 173, right: 45 }}>
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 mb-2">
                  <span
                    aria-hidden
                    className="inline-block shrink-0"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#000',
                      marginTop: 8,
                    }}
                  />
                  <span
                    className="font-sans"
                    style={{ fontSize: 18, lineHeight: '24px', color: '#1E1E1E' }}
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
  const leftYs = [35, 106, 176];
  const rightYs = [35, 106, 176];
  return (
    <section id="results" className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1440, height: 473, maxWidth: '100%' }}>
        <h2
          className="absolute font-display uppercase text-white text-center"
          style={{ left: 225, top: 60, width: 990, fontSize: 75, lineHeight: '75px' }}
        >
          результати після мастермайнду
        </h2>

        <div
          className="absolute overflow-hidden"
          style={{ left: 225, top: 171, width: 990, height: 273, borderRadius: 30, background: '#000' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              left: -291, top: -67, width: 1067, height: 298,
              borderRadius: '50%', background: '#EBFF00', filter: 'blur(90px)', opacity: 0.22,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: 45, top: 140, width: 1068, height: 404,
              borderRadius: '50%', background: '#EBFF00', filter: 'blur(90px)', opacity: 0.18,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: -242, top: 104, width: 736, height: 408,
              borderRadius: '50%', background: '#ffffff', filter: 'blur(105px)', opacity: 0.12,
            }}
          />

          {RESULTS_LEFT.map((t, i) => (
            <ForWhomPill key={t} left={29} top={leftYs[i]} height={62} text={t} />
          ))}
          {RESULTS_RIGHT.map((t, i) => (
            <ForWhomPill key={t} left={466} top={rightYs[i]} height={62} text={t} />
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
  const SECTION_LEFT = 225;
  const founderBullets = [
    {
      left: 50,
      width: 317,
      text: 'Бюро Продажів - міжнародна консалтингова компанія. Побудувано 185+ відділів продажів, більш ніж у 10-ти країнах світу.',
    },
    {
      left: 401,
      width: 329,
      text: 'Академія продажів - рекрутинговий та освітній проєкт, який спеціалізується на наймі комерсантів. За 7 років нанято більше 1500 людей та 5000+ людей навчено продажам',
    },
    {
      left: 776,
      width: 181,
      text: 'Ukrainian Sales Club - закрита спільнота комерсантів',
    },
  ];

  return (
    <section className="hidden lg:block relative bg-black text-white overflow-hidden">
      <div className="relative mx-auto" style={{ width: 1440, height: 815, maxWidth: '100%' }}>
        <div className="absolute" style={{ left: SECTION_LEFT, top: 0, width: 990, height: 815 }}>
          <div
            className="absolute pointer-events-none"
            style={{ left: -413, top: 0, width: 982, height: 652, zIndex: 0 }}
          >
            <Image
              src="/images/hero-bg-pattern.png"
              alt=""
              fill
              sizes="982px"
              className="object-cover"
            />
          </div>

          <div className="absolute" style={{ left: -26, top: 56, width: 468, height: 555 }}>
            <Image
              src="/images/andriy-portrait.png"
              alt="Андрій Крупкін"
              fill
              sizes="468px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="absolute" style={{ left: 442, top: 0, width: 209, height: 53 }}>
            <Image src="/images/Group 1966047708.png" alt="Автор майстер-класу" fill sizes="209px" className="object-contain" />
          </div>

          <div
            className="absolute font-display uppercase text-acid"
            style={{ left: 442, top: 135, fontSize: 103, lineHeight: '0.9' }}
          >
            Андрій
          </div>
          <div
            className="absolute font-display uppercase text-acid"
            style={{ left: 506, top: 248, fontSize: 103, lineHeight: '0.9' }}
          >
            Крупкін
          </div>

          <a
            href="https://www.instagram.com/krupkin.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex items-center justify-center"
            style={{ left: 826, top: 279, width: 54, height: 54, background: 'rgba(255,255,255,0.08)' }}
          >
            <Image src="/icons/icon-instagram.svg" alt="Instagram" width={27} height={27} />
          </a>
          <a
            href="https://youtube.com/@andriykrupkin"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex items-center justify-center"
            style={{ left: 890, top: 279, width: 51, height: 51, background: 'rgba(255,255,255,0.08)' }}
          >
            <Image src="/icons/icon-youtube.svg" alt="YouTube" width={30} height={21} />
          </a>

          <div className="absolute" style={{ left: 50, top: 533, width: 332 }}>
            <span
              className="inline-block rounded-full bg-acid absolute"
              style={{ width: 7, height: 7, left: -15, top: 9 }}
            />
            <div className="font-sans" style={{ fontSize: 15, lineHeight: '20px', color: '#FAF8F5' }}>
              Пройшов шлях від менеджера з продажів<br />до серійного підприємця
            </div>
          </div>

          <div
            className="absolute bg-acid text-black z-10"
            style={{ left: 377, top: 444, width: 281, height: 125, borderRadius: 12, padding: '18px 21px' }}
          >
            <div className="font-display" style={{ fontSize: 60, lineHeight: '0.95', fontWeight: 700, whiteSpace: 'nowrap' }}>
              18<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span> років
            </div>
            <div className="font-sans" style={{ fontSize: 18, lineHeight: '21px', marginTop: 6 }}>
              років у сфері продажів
            </div>
          </div>

          <div
            className="absolute bg-acid text-black z-10"
            style={{ left: 674, top: 444, width: 308, height: 125, borderRadius: 12, padding: '18px 21px' }}
          >
            <div className="font-display" style={{ fontSize: 60, lineHeight: '0.95', fontWeight: 700 }}>
              184<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span>
            </div>
            <div className="font-sans" style={{ fontSize: 18, lineHeight: '21px', marginTop: 6 }}>
              побудованих відділів продажів
            </div>
          </div>

          <div
            className="absolute"
            style={{ left: 0, top: 501, width: 990, height: 314, borderRadius: 30, background: 'rgba(107,107,107,0.35)' }}
          />

          <div
            className="absolute font-display uppercase text-white"
            style={{ left: 35, top: 630, fontSize: 38, lineHeight: '1' }}
          >
            Засновник компаній:
          </div>

          {founderBullets.map((b, i) => (
            <div key={i} className="absolute" style={{ left: b.left, top: 691, width: b.width }}>
              <span
                className="inline-block rounded-full bg-acid absolute"
                style={{ width: 7, height: 7, left: -15, top: 9 }}
              />
              <div className="font-sans text-white" style={{ fontSize: 15, lineHeight: '20px' }}>
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
  return (
    <section className="hidden lg:block bg-black text-white">
      <div className="mx-auto max-w-[990px] px-5 py-[72px]">
        <h2
          className="font-display uppercase text-white text-center mx-auto"
          style={{ fontSize: 75, lineHeight: '75px', maxWidth: 825 }}
        >
          Я витратив на ці знання{' '}
          <span className="text-acid">18 років та 100<span className="font-sans" style={{ fontSize: '0.7em', fontWeight: 500, verticalAlign: '0.12em' }}>+</span> тисяч доларів</span>
        </h2>

        <div className="relative mt-12 w-full" style={{ aspectRatio: '1304 / 660' }}>
          <Image src="/images/31.png" alt="" fill sizes="978px" className="object-contain" />
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
      <div className="mx-auto max-w-[990px] px-5 py-[72px]">
        <h2 className="font-display text-[36px] md:text-h2 uppercase text-center leading-none tracking-[-0.022em] mb-10">
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
        data-bottom-cta
        className="cta-animated mt-6 flex items-center justify-center cursor-pointer"
        style={{
          height: 62,
          borderRadius: 100,
          background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
          border: '1px solid #EBFF00',
          boxShadow: '0 0 30px rgba(235,255,0,0.35)',
        }}
      >
        <span
          className="font-display uppercase text-black"
          style={{ fontSize: 22, lineHeight: 1, display: 'inline-block', transform: 'translateY(0.08em)' }}
        >
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
      <div className="relative mx-auto" style={{ width: 1440, height: 690, maxWidth: '100%' }}>
        <h2
          className="absolute font-display uppercase text-white text-center"
          style={{ left: 225, top: 45, width: 990, fontSize: 75, lineHeight: '75px' }}
        >
          Такий живий формат проводимо раз на кілька місяців
        </h2>

        <p
          className="absolute font-sans text-center"
          style={{ left: 345, top: 195, width: 750, fontSize: 18, lineHeight: '23px', color: 'rgba(217,217,217,0.75)' }}
        >
          Цієї весни підприємці оновлюють свої відділи продажів. Приєднуйся.
        </p>

        <div
          className="absolute overflow-hidden"
          style={{ left: 225, top: 248, width: 990, height: 273, borderRadius: 30, background: '#000' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{ left: -291, top: -67, width: 1067, height: 298, borderRadius: '50%', background: '#EBFF00', filter: 'blur(90px)', opacity: 0.22 }}
          />
          <div
            className="absolute pointer-events-none"
            style={{ left: 45, top: 140, width: 1068, height: 404, borderRadius: '50%', background: '#EBFF00', filter: 'blur(90px)', opacity: 0.18 }}
          />
          <div
            className="absolute pointer-events-none"
            style={{ left: -242, top: 104, width: 736, height: 408, borderRadius: '50%', background: '#ffffff', filter: 'blur(105px)', opacity: 0.12 }}
          />
          {pills.slice(0, 3).map((t, i) => (
            <ForWhomPill key={`l-${i}`} left={29} top={35 + i * 71} height={62} text={t} />
          ))}
          {pills.slice(3).map((t, i) => (
            <ForWhomPill key={`r-${i}`} left={466} top={35 + i * 71} height={62} text={t} />
          ))}
        </div>

        <div
          className="absolute"
          style={{ left: 230, top: 555, width: 532, height: 95, borderRadius: 75, background: 'rgba(107,107,107,0.35)', backdropFilter: 'blur(8px)' }}
        />
        <div className="absolute" style={{ left: 218, top: 546, width: 113, height: 113 }}>
          <Image src="/images/gift-badge.png" alt="" fill sizes="113px" className="object-contain" />
        </div>
        <div
          className="absolute font-sans text-white whitespace-pre-line"
          style={{ left: 341, top: 571, width: 413, fontSize: 15, lineHeight: '21px' }}
        >
          Реєструйся протягом <Countdown className="font-semibold" />{'\n'}подарунок гайд «5 типів менеджерів, які вбивають продажі компанії»
        </div>

        <a
          href="#"
          data-register-cta
          className="cta-animated absolute flex items-center justify-center cursor-pointer"
          style={{
            left: 792,
            top: 555,
            width: 416,
            height: 95,
            borderRadius: 75,
            background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
            boxShadow: '0 4px 50px #EBFF00, inset 0 0 0 1px #EBFF00',
          }}
        >
          <span
            className="font-display uppercase text-black"
            style={{ fontSize: 45, lineHeight: 1, display: 'inline-block', transform: 'translateY(0.08em)' }}
          >
            зареєструватись
          </span>
        </a>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-black text-white min-h-screen pb-[94px] md:pb-0">
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
