import type { Metadata } from 'next';
import Script from 'next/script';
import { inter, display } from './fonts';
import './globals.css';
import { RegistrationModalProvider } from '@/components/ui/RegistrationModalProvider';

const GTM_ID = 'GTM-W876N9N';

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
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body style={{ ['--font-numeric' as any]: 'var(--font-display)' }}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <RegistrationModalProvider />
      </body>
    </html>
  );
}
