'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Gallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* GRID */}
      <div className='grid md:grid-cols-3 gap-6'>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className='relative aspect-[4/3] overflow-hidden cursor-zoom-in'
          >
            <Image
              src={img}
              alt={`${title} ${index + 1}`}
              fill
              className='object-cover hover:scale-105 transition'
            />
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6'
          onClick={() => setActiveIndex(null)}
        >
          <div className='relative w-full max-w-6xl aspect-[4/3]'>
            <Image
              src={images[activeIndex]}
              alt={`${title} full`}
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
