import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Політика cookies — Академія продажів Андрія Крупкіна',
  description: 'Які файли cookies і трекери використовує сайт.',
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Політика cookies" updated="15 квітня 2026 р.">
      <p>
        Сайт <strong>{'{{DOMAIN}}'}</strong> використовує файли cookies і подібні технології (pixel tags, localStorage), щоб
        забезпечити роботу сайту, аналізувати трафік і вимірювати ефективність реклами.
      </p>

      <h2>1. Що таке cookies</h2>
      <p>
        Cookies — це невеликі текстові файли, які сайт зберігає у вашому браузері. Вони допомагають розпізнати вас при повторному
        візиті, запам'ятати налаштування і зібрати знеособлену статистику.
      </p>

      <h2>2. Які cookies ми використовуємо</h2>

      <h3>Технічно необхідні</h3>
      <p>Забезпечують базову роботу сайту: завантаження сторінок, відправку форми, захист від спаму. Їх не можна вимкнути.</p>

      <h3>Аналітичні</h3>
      <ul>
        <li><strong>Google Analytics 4</strong> через Google Tag Manager (<code>GTM-W876N9N</code>) — статистика відвідуваності,
          джерел трафіку, конверсій. Дані знеособлені.</li>
      </ul>

      <h3>Маркетингові / рекламні</h3>
      <ul>
        <li><strong>Meta Pixel</strong> (Facebook / Instagram) — ретаргетинг, оптимізація реклами <em>(за наявності)</em>.</li>
        <li><strong>TikTok Pixel</strong> — ретаргетинг <em>(за наявності)</em>.</li>
        <li><strong>Google Ads</strong> — конверсії і ремаркетинг <em>(за наявності)</em>.</li>
      </ul>

      <h2>3. Як керувати cookies</h2>
      <ul>
        <li>Ви можете видалити або заблокувати cookies в налаштуваннях свого браузера (Chrome, Safari, Firefox, Edge тощо).</li>
        <li>Можна відмовитися від персоналізованої реклами Google на <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.</li>
        <li>Відключення cookies може зламати частину функціонала сайту (наприклад, форму реєстрації).</li>
      </ul>

      <h2>4. Як довго зберігаються cookies</h2>
      <p>
        Сесійні cookies видаляються при закритті браузера. Постійні cookies зберігаються від 30 днів до 2 років залежно від
        призначення. Аналітичні cookies Google Analytics — до 14 місяців (типове налаштування).
      </p>

      <h2>5. Зміни політики</h2>
      <p>
        Ми можемо оновлювати цю Політику. Актуальну версію завжди шукай за адресою
        <a href="/cookies"> {'{{DOMAIN}}'}/cookies</a>.
      </p>

      <p>
        Питання — <a href="mailto:{{CONTACT_EMAIL}}">{'{{CONTACT_EMAIL}}'}</a>. Детальніше про обробку персональних даних —
        у <a href="/privacy">Політиці конфіденційності</a>.
      </p>
    </LegalPage>
  );
}
