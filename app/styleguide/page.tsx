import type { ReactNode } from 'react';

type TokenRow = {
  token: string;
  className: string;
  family: string;
  size: string;
  lh: string;
  ls: string;
  weight: string;
  usage: string;
  sample: ReactNode;
};

function Row({ token, className, family, size, lh, ls, weight, usage, sample }: TokenRow) {
  return (
    <div className="grid grid-cols-12 gap-6 border-t border-white/10 py-8">
      <div className="col-span-12 md:col-span-3 space-y-2">
        <p className="text-tag uppercase text-lime-400">{token}</p>
        <p className="text-[13px] text-white/60 font-mono leading-5">.{className}</p>
        <p className="text-[13px] text-white/50 leading-5">{usage}</p>
      </div>
      <div className="col-span-12 md:col-span-6 flex items-center">{sample}</div>
      <div className="col-span-12 md:col-span-3 text-[12px] text-white/50 font-mono leading-6 space-y-0.5">
        <div><span className="text-white/30">family</span> {family}</div>
        <div><span className="text-white/30">size</span> {size}</div>
        <div><span className="text-white/30">line</span> {lh}</div>
        <div><span className="text-white/30">track</span> {ls}</div>
        <div><span className="text-white/30">weight</span> {weight}</div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-20">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-[60px] leading-none uppercase tracking-[-0.022em]">{title}</h2>
        <span className="text-tag uppercase text-white/40">typography tokens</span>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <header className="px-12 pt-10 pb-20 border-b border-white/10">
        <div className="flex items-center justify-between mb-16">
          <div className="font-sans text-logo uppercase leading-[1.28] font-bold">
            Академія продажів<br />Андрія Крупкіна
          </div>
          <div className="text-tag uppercase text-white/60">typography styleguide v1</div>
        </div>

        <p className="text-tag uppercase text-lime-400 mb-6">Академія воронка · 2026</p>
        <h1 className="font-display text-h1 uppercase max-w-4xl leading-[0.95]">
          Як зробити х2 у продажах у 2026 році з сильною командою продажів
        </h1>
        <p className="mt-8 max-w-2xl font-sans text-body-lead text-white/70">
          Стайлгайд типографіки побудований з 90 текстових нод макета. 8 Figma-шрифтів згорнуто до 2:
          Bebas Neue для заголовків і Inter для всього решта.
        </p>

        <div className="mt-10 flex items-center gap-6">
          <button className="font-display text-cta-pill uppercase bg-lime-400 text-black px-6 py-3 leading-none">
            прийняти участь безкоштовно
          </button>
          <span className="font-sans text-body-lead text-white/60">
            2 дні · 21–22 квітня · о 19:00
          </span>
        </div>
      </header>

      <div className="px-12">
        {/* DISPLAY */}
        <Section title="Display">
          <Row
            token="display.hero"
            className="font-display text-hero uppercase"
            family="Bebas Neue Cyrillic"
            size="137px"
            lh="48px"
            ls="-1.88px"
            weight="400"
            usage="Ім'я героя в блоці 'Андрій Крупкін'"
            sample={
              <div className="font-display uppercase leading-none tracking-[-1.88px] space-y-2">
                <div className="text-[137px] leading-none">Андрій</div>
                <div className="text-[137px] leading-none">Крупкін</div>
              </div>
            }
          />
          <Row
            token="display.h1"
            className="font-display text-h1 uppercase"
            family="Bebas Neue Cyrillic"
            size="83px"
            lh="1.0"
            ls="0"
            weight="400"
            usage="Головний заголовок лендінгу"
            sample={<h1 className="font-display text-h1 uppercase">Як зробити х2 у продажах</h1>}
          />
          <Row
            token="heading.h2"
            className="font-display text-h2 uppercase"
            family="Bebas Neue Cyrillic"
            size="100px"
            lh="100%"
            ls="-0.022em"
            weight="400"
            usage="Заголовки секцій: 'Програма майстер-класу'"
            sample={<h2 className="font-display text-h2 uppercase">Програма майстер-класу</h2>}
          />
          <Row
            token="heading.h3"
            className="font-display text-h3"
            family="Bebas Neue Cyrillic"
            size="80px"
            lh="63.3px"
            ls="0"
            weight="400"
            usage="Підзаголовки карток-результатів"
            sample={<h3 className="font-display text-h3">Як збільшити продажі вдвічі у 2026</h3>}
          />
          <Row
            token="heading.h4-testimonial"
            className="font-display text-h4-testimonial"
            family="Bebas Neue Cyrillic"
            size="46px"
            lh="41px"
            ls="-1.2px"
            weight="400"
            usage="Імена авторів відгуків"
            sample={<div className="font-display text-h4-testimonial">Володимир Семанюк</div>}
          />
          <Row
            token="heading.h5-block"
            className="font-display text-h5-block uppercase"
            family="Bebas Neue Cyrillic"
            size="50px"
            lh="18px"
            ls="0"
            weight="400"
            usage="Декоративні лейбли блоків"
            sample={<div className="font-display text-h5-block uppercase">Засновник компаній:</div>}
          />
        </Section>

        {/* NUMERIC & CTA */}
        <Section title="Numeric & CTA">
          <Row
            token="numeric.accent"
            className="font-numeric text-numeric"
            family="Bebas Neue Bold"
            size="80px"
            lh="18px"
            ls="0"
            weight="700"
            usage="Числові акценти в блоці досягнень"
            sample={
              <div className="flex items-baseline gap-6">
                <span className="font-numeric text-numeric">18+</span>
                <span className="font-sans text-body-subline text-white/60">років у сфері</span>
                <span className="font-numeric text-numeric">184+</span>
                <span className="font-sans text-body-subline text-white/60">відділів</span>
              </div>
            }
          />
          <Row
            token="cta.primary"
            className="font-display text-cta uppercase"
            family="Bebas Neue Cyrillic"
            size="60px"
            lh="1.0"
            ls="0"
            weight="400"
            usage="Primary CTA кнопка"
            sample={
              <button className="font-display text-cta uppercase bg-lime-400 text-black px-10 py-3 leading-none">
                Зареєструватись
              </button>
            }
          />
          <Row
            token="cta.pill"
            className="font-display text-cta-pill"
            family="Bebas Neue Cyrillic"
            size="26px"
            lh="1.0"
            ls="0"
            weight="400"
            usage="Вторинна кнопка в шапці"
            sample={
              <button className="font-display text-cta-pill bg-white/10 text-white px-6 py-3 rounded-full leading-none">
                прийняти участь безкоштовно
              </button>
            }
          />
        </Section>

        {/* CARDS */}
        <Section title="Results cards">
          <Row
            token="card.eyebrow-italic"
            className="font-sans text-card-eyebrow italic"
            family="Inter Italic"
            size="30px"
            lh="31.2px"
            ls="-1.2px"
            weight="400"
            usage="Eyebrow над заголовком картки"
            sample={<p className="font-sans text-card-eyebrow italic text-lime-400">+21% до конверсії в оплату</p>}
          />
          <Row
            token="card.heading"
            className="font-sans text-card-heading uppercase"
            family="Inter Black"
            size="30px"
            lh="36px"
            ls="-1.8px"
            weight="900"
            usage="Заголовок картки-результату"
            sample={
              <p className="font-sans text-card-heading uppercase max-w-md">
                З поточного трафіку команда почала забирати більше грошей
              </p>
            }
          />
          <Row
            token="card.body"
            className="font-sans text-card-body"
            family="Inter Regular"
            size="18px"
            lh="32px"
            ls="0"
            weight="400"
            usage="Текст відгуку/опис кейсу"
            sample={
              <p className="font-sans text-card-body text-white/80 max-w-lg">
                Ми не докуповували ліди. Ми перестали їх втрачати. Після програми менеджери стали інакше виявляти потребу.
              </p>
            }
          />
          <Row
            token="testimonial-italic"
            className="font-sans text-testimonial-italic italic"
            family="Inter Italic"
            size="18px"
            lh="24px"
            ls="0"
            weight="400"
            usage="Цитата відгуку"
            sample={
              <p className="font-sans text-testimonial-italic italic text-white/80 max-w-lg">
                «Завдяки матеріалам уроків зрозумів, як влаштовані продажі, як правильно спілкуватися з людьми.»
              </p>
            }
          />
        </Section>

        {/* BODY */}
        <Section title="Body">
          <Row
            token="body"
            className="font-sans text-body"
            family="Inter Medium"
            size="24px"
            lh="150%"
            ls="-0.011em"
            weight="500"
            usage="Пункти програми майстер-класу"
            sample={
              <p className="font-sans text-body max-w-xl">
                Як порахувати в цифрах скільки грошей твій відділ зливає щотижня.
              </p>
            }
          />
          <Row
            token="body-lead"
            className="font-sans text-body-lead"
            family="Inter Regular"
            size="24px"
            lh="1.2"
            ls="0"
            weight="400"
            usage="Підзаголовок hero, метадані"
            sample={<p className="font-sans text-body-lead">Майстер-клас Андрія Крупкіна</p>}
          />
          <Row
            token="body-list"
            className="font-sans text-body-list"
            family="Inter Regular"
            size="20px"
            lh="24px"
            ls="0"
            weight="400"
            usage="Пункти чеклистів ('цей майстер-клас для тебе якщо')"
            sample={
              <ul className="space-y-3 max-w-xl">
                <li className="font-sans text-body-list flex gap-3"><span className="text-lime-400">●</span>У тебе є відділ продажів, але менеджери закривають слабше, ніж могли б.</li>
                <li className="font-sans text-body-list flex gap-3"><span className="text-lime-400">●</span>Частина заявок зливається ще до оплати — і ти не розумієш де саме.</li>
              </ul>
            }
          />
          <Row
            token="body-bio"
            className="font-sans text-body-bio"
            family="Inter Regular"
            size="24px"
            lh="22px"
            ls="0"
            weight="400"
            usage="Біо Андрія, опис компаній"
            sample={
              <p className="font-sans text-body-bio max-w-lg">
                Пройшов шлях від менеджера з продажів до серійного підприємця
              </p>
            }
          />
          <Row
            token="body-subline"
            className="font-sans text-body-subline"
            family="Inter Light"
            size="24px"
            lh="18px"
            ls="0"
            weight="300"
            usage="Підпис під числовим акцентом"
            sample={<p className="font-sans text-body-subline text-white/60">побудованих відділів продажів</p>}
          />
        </Section>

        {/* UI MICRO */}
        <Section title="UI & micro">
          <Row
            token="ui.tag"
            className="font-sans text-tag uppercase"
            family="Inter Medium"
            size="11px"
            lh="16.5px"
            ls="0.28em"
            weight="500"
            usage="Теги-лейбли: 'Власник бізнесу', 'Живі сесії'"
            sample={
              <div className="flex gap-3 flex-wrap">
                <span className="text-tag uppercase border border-white/20 px-3 py-1.5">Власник бізнесу</span>
                <span className="text-tag uppercase border border-white/20 px-3 py-1.5">Живі сесії</span>
                <span className="text-tag uppercase border border-white/20 px-3 py-1.5">Ріст результату</span>
              </div>
            }
          />
          <Row
            token="ui.day-chip"
            className="font-sans text-day"
            family="Inter Medium"
            size="22px"
            lh="39.4px"
            ls="-0.06em"
            weight="500"
            usage="Чіпи днів у програмі: 'день 1', '21 квітня'"
            sample={
              <div className="flex gap-3">
                <span className="text-day bg-white/10 px-4 py-1 rounded">день 1</span>
                <span className="text-day bg-lime-400 text-black px-4 py-1 rounded">21 квітня</span>
                <span className="text-day bg-white/10 px-4 py-1 rounded">день 2</span>
                <span className="text-day bg-lime-400 text-black px-4 py-1 rounded">22 квітня</span>
              </div>
            }
          />
          <Row
            token="ui.caption"
            className="font-sans text-caption"
            family="Inter Regular"
            size="18px"
            lh="17.3px"
            ls="0"
            weight="400"
            usage="Підпис: 'Автор курсу'"
            sample={<span className="font-sans text-caption text-white/60">Автор курсу</span>}
          />
          <Row
            token="ui.eyebrow-date"
            className="font-sans text-eyebrow-date"
            family="Inter Medium"
            size="24px"
            lh="30px"
            ls="0"
            weight="500"
            usage="Subline під hero-CTA"
            sample={
              <p className="font-sans text-eyebrow-date max-w-xl">
                За 2 вечора розберемо ТОП-5 проблем вашого відділу продажу.
              </p>
            }
          />
          <Row
            token="ui.meta"
            className="font-sans text-meta"
            family="Inter Regular"
            size="24px"
            lh="1.0"
            ls="0"
            weight="400"
            usage="Метадані під кнопкою"
            sample={<p className="font-sans text-meta text-white/60">Участь безкоштовна · Zoom-формат · Кількість обмежена</p>}
          />
          <Row
            token="logo.masthead"
            className="font-sans text-logo uppercase font-bold"
            family="Inter Bold"
            size="12px"
            lh="1.28"
            ls="0"
            weight="700"
            usage="Логотип в шапці та футері"
            sample={<div className="font-sans text-logo uppercase font-bold leading-[1.28]">Академія продажів<br />Андрія Крупкіна</div>}
          />
          <Row
            token="footer"
            className="font-sans text-footer"
            family="Inter Regular"
            size="15px"
            lh="1.2"
            ls="0"
            weight="400"
            usage="Лінки та текст футера"
            sample={
              <div className="flex gap-6 text-white/60">
                <span className="font-sans text-footer">0 800 209 871</span>
                <span className="font-sans text-footer">Безкоштовно по Україні</span>
                <span className="font-sans text-footer underline">Політика конфіденційності</span>
              </div>
            }
          />
        </Section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-12 py-10 flex items-center justify-between">
        <div className="font-sans text-logo uppercase font-bold leading-[1.28]">
          Академія продажів<br />Андрія Крупкіна
        </div>
        <div className="flex gap-6 text-white/60">
          <span className="font-sans text-footer">0 800 209 871</span>
          <span className="font-sans text-footer">Безкоштовно по Україні</span>
          <span className="font-sans text-footer underline">Політика конфіденційності</span>
        </div>
      </footer>
    </main>
  );
}
