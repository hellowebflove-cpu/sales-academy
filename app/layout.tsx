import type { Metadata } from 'next';
import { inter, display } from './fonts';
import './globals.css';
import { RegistrationModalProvider } from '@/components/ui/RegistrationModalProvider';

export const metadata: Metadata = {
  title: 'Майстермайнд Андрія Крупкіна — х2 у продажах у 2026 році',
  description:
    'Живий 2-денний майстермайнд 21–22 квітня. За 2 вечори розберемо ТОП-5 проблем твого відділу продажів і побудуємо систему, яка працює без твого контролю.',
  openGraph: {
    title: 'Майстермайнд Андрія Крупкіна — х2 у продажах у 2026 році',
    description:
      'Живий 2-денний майстермайнд 21–22 квітня. Система продажів, яка працює без твого контролю.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Майстермайнд Андрія Крупкіна — х2 у продажах у 2026 році',
    description:
      'Живий 2-денний майстермайнд 21–22 квітня. Система продажів, яка працює без твого контролю.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // display exposes both --font-display and we reuse it for --font-numeric via CSS below.
  return (
    <html lang="uk" className={`${inter.variable} ${display.variable}`}>
      <body style={{ ['--font-numeric' as any]: 'var(--font-display)' }}>
        {children}
        <RegistrationModalProvider />
      </body>
    </html>
  );
}
