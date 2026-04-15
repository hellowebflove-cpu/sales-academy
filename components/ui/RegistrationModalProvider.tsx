'use client';

import { useCallback, useEffect, useState } from 'react';
import { RegistrationModal } from './RegistrationModal';

export function RegistrationModalProvider() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const cta = target.closest<HTMLElement>('[data-register-cta]');
      if (!cta) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return <RegistrationModal open={open} onClose={close} />;
}
