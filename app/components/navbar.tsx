'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const showNav = pathname === '/';

  return (
    <header className='sticky top-0 z-50 bg-[#FAF8F3]/90 backdrop-blur border-b border-black/5'>
      <div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' aria-label='Go to homepage'>
          <Image
            src='/logoTransparent.png'
            alt='Luxury interior design'
            width={120}
            height={75}
            priority
          />
        </Link>

        {showNav && (
          <nav className='hidden md:flex gap-10 text-sm text-gray-900'>
            <a href='#service' className='hover:opacity-60'>
              Our Service
            </a>
            <a href='#about' className='hover:opacity-60'>
              About Us
            </a>
            <a href='#contact' className='hover:opacity-60'>
              Contact
            </a>
          </nav>
        )}

        {/* CTA */}
        <Link
          href='/portfolio'
          className='rounded-full bg-[#4F5D2F] text-white px-5 py-2 text-sm hover:opacity-90'
        >
          Portfolio
        </Link>
      </div>
    </header>
  );
}
