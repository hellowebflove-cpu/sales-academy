'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'regCountdownEnd';
const DURATION_MS = 15 * 60 * 1000;

function format(ms: number) {
  if (ms < 0) ms = 0;
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function Countdown({ className = '' }: { className?: string }) {
  const [remaining, setRemaining] = useState(DURATION_MS);

  useEffect(() => {
    let endTs: number;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? parseInt(stored, 10) : NaN;
      if (Number.isFinite(parsed) && parsed > Date.now()) {
        endTs = parsed;
      } else {
        endTs = Date.now() + DURATION_MS;
        localStorage.setItem(STORAGE_KEY, String(endTs));
      }
    } catch {
      endTs = Date.now() + DURATION_MS;
    }

    const tick = () => setRemaining(endTs - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span className={className}>{format(remaining)}</span>;
}
