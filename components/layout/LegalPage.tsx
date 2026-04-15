import Link from 'next/link';
import { Footer } from './Footer';
import { Header } from './Header';

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <article className="mx-auto max-w-[860px] px-6 md:px-10 py-16 md:py-24">
        <Link href="/" className="font-sans text-acid text-sm hover:underline">
          ← Назад на головну
        </Link>
        <h1 className="mt-6 font-display uppercase" style={{ fontSize: 48, lineHeight: '52px' }}>
          {title}
        </h1>
        <p className="mt-3 font-sans text-white/50" style={{ fontSize: 13 }}>
          Редакція від {updated}
        </p>
        <div className="legal-body mt-10 font-sans text-white/80 space-y-5" style={{ fontSize: 15, lineHeight: '24px' }}>
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
}
