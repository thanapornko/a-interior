import type { Metadata } from 'next';
import { PT_Serif, IBM_Plex_Sans_Thai } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});

const ibm = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm-thai',
});

export const metadata: Metadata = {
  title: 'A-Interior | Interior Design Studio',
  description: 'Luxury interior design & turnkey solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-[#FAF8F3]'>
      <body
        className={`${ptSerif.variable} ${ibm.variable} font-sans bg-[#FAF8F3] text-[#1C1C1C]`}
      >
        <Navbar />

        {/* ===== CONTENT ===== */}
        <main className='bg-[#FAF8F3]'>{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className='border-t border-black/10 bg-[#FAF8F3]/90'>
          <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-sm'>
            <div>
              <div className='text-lg font-semibold mb-3 '>A-Interior</div>
              <p className='text-black/60 leading-6'>
                We bring interior concepts to life through expert construction
                and built-in solutions. Focused on quality, function, and
                long-lasting craftsmanship.
              </p>
            </div>

            <div>
              <p className='font-medium mb-3 text-gray-900'>Company</p>
              <ul className='space-y-2 text-black/60'>
                <li>
                  <a href='/#service' className='hover:opacity-60'>
                    Our Service
                  </a>
                </li>
                <li>
                  <a href='/#about' className='hover:opacity-60'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='/#contact' className='hover:opacity-60'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='/portfolio' className='hover:opacity-60'>
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium mb-3 text-gray-900'>Contact</p>
              <ul className='space-y-2 text-black/60'>
                <li>52 Prachaniwet3 soi14/10 Thasai Muaeng Nontaburi 11000</li>
                <li>Tel: 081-633-2711, 081-646-3450</li>
                <li>Line: 0816332711</li>
              </ul>
            </div>
          </div>

          <div className='text-center text-xs text-black/50 py-6 border-t border-black/5'>
            © 2026 A-Interior. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
