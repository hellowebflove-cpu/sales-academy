'use client';

import { useEffect, useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

const WEBHOOK = 'https://hook.eu2.make.com/ejb2t76hc4guxhyj1kxr21bgwf9nwrvh';
const TELEGRAM_REDIRECT = 'https://t.me/krupkinacademybot?start=69dcdbab1a2cd0da1b02608d';

type Status = 'idle' | 'submitting' | 'error';

export function RegistrationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; form?: string }>({});

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const validate = () => {
    const e: typeof errors = {};
    if (name.trim().length < 2) e.name = 'Введіть ім’я';
    if (!phone || !isValidPhoneNumber(phone)) e.phone = 'Введіть коректний номер';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Введіть коректний email';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const params = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
        const v = params.get(key);
        if (v) utm[key] = v;
      }
      await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone,
          email: email.trim(),
          source: 'sales-academy-landing',
          ts: new Date().toISOString(),
          ...utm,
        }),
      });
      // GTM dataLayer event
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'academy_lead' });
      window.location.href = TELEGRAM_REDIRECT;
    } catch {
      setStatus('error');
      setErrors({ form: 'Не вдалось відправити. Спробуй ще раз.' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative w-full max-w-[520px] rounded-[24px] p-6 sm:p-10"
        style={{
          background: '#0A0A0A',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 30px 120px rgba(235,255,0,0.08)',
        }}
      >
        <button
          type="button"
          aria-label="Закрити"
          onClick={onClose}
          className="absolute right-4 top-4 flex items-center justify-center w-9 h-9 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <h2
          id="registration-modal-title"
          className="font-display uppercase text-white"
          style={{ fontSize: 32, lineHeight: '34px' }}
        >
          Реєстрація на <span className="text-acid">майстер-клас</span>
        </h2>
        <p className="mt-3 font-sans text-white/70" style={{ fontSize: 14, lineHeight: '20px' }}>
          Залиш контакти — надішлемо деталі у Telegram.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" noValidate>
          <Field label="Ім’я" error={errors.name}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Андрій"
              autoComplete="given-name"
              className="reg-input"
              autoFocus
            />
          </Field>

          <Field label="Телефон" error={errors.phone}>
            <PhoneInput
              international
              defaultCountry="UA"
              value={phone}
              onChange={setPhone}
              placeholder="+380 67 123 45 67"
              className="reg-phone"
            />
          </Field>

          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@mail.com"
              autoComplete="email"
              className="reg-input"
            />
          </Field>

          {errors.form && (
            <div className="font-sans text-red-400" style={{ fontSize: 13 }}>
              {errors.form}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 flex items-center justify-center font-display uppercase text-black disabled:opacity-70 hover:brightness-95 transition"
            style={{
              height: 56,
              borderRadius: 100,
              background: 'linear-gradient(180deg, #F4FF4A 0%, #EBFF00 50%, #C9DB00 100%)',
              boxShadow: '0 4px 30px rgba(235,255,0,0.45)',
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            {status === 'submitting' ? 'Відправляємо…' : 'Зареєструватись'}
          </button>

          <p className="font-sans text-white/50 text-center" style={{ fontSize: 11, lineHeight: '14px' }}>
            Натискаючи кнопку, ти погоджуєшся з обробкою персональних даних.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans uppercase text-white/60" style={{ fontSize: 11, letterSpacing: '0.08em' }}>
        {label}
      </span>
      {children}
      {error && (
        <span className="font-sans text-red-400" style={{ fontSize: 12 }}>
          {error}
        </span>
      )}
    </label>
  );
}
