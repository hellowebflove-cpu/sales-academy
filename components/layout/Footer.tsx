import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="font-sans text-logo uppercase font-bold leading-[1.28] text-white">
          Академія продажів
          <br />
          Андрія Крупкіна
        </div>

        <div className="flex items-center gap-3 text-white/70">
          <Image src="/icons/icon-phone.svg" alt="" width={20} height={20} className="text-acid" />
          <a href="tel:+380800209871" className="font-sans text-footer hover:text-white">
            0 800 209 871
          </a>
          <span className="font-sans text-footer text-white/40">·</span>
          <span className="font-sans text-footer">Безкоштовно по Україні</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://youtube.com/@andriykrupkin" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80">
            <Image src="/icons/icon-youtube.svg" alt="" width={32} height={22} />
          </a>
          <a href="https://www.instagram.com/krupkin.pro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
            <Image src="/icons/icon-instagram.svg" alt="" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-sans text-footer text-white/40">
        <span>© 2026 Академія продажів Андрія Крупкіна</span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <Link href="/privacy" className="hover:text-white">Політика конфіденційності</Link>
          <Link href="/terms" className="hover:text-white">Публічна оферта</Link>
          <Link href="/cookies" className="hover:text-white">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
