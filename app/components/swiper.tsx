'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  'https://res.cloudinary.com/dhgny94kc/image/upload/v1770450082/ainterior/inner%20peace%20town%20home/inner13.jpg',
  'https://res.cloudinary.com/dhgny94kc/image/upload/v1770451143/ainterior/park%20heritage/park1.jpg',
  'https://res.cloudinary.com/dhgny94kc/image/upload/v1770450451/ainterior/mitti%20sammakorn/mitti17.jpg',
  'https://res.cloudinary.com/dhgny94kc/image/upload/v1770450903/ainterior/park%20heritage/park14.jpg',
  'https://res.cloudinary.com/dhgny94kc/image/upload/v1770450895/ainterior/park%20heritage/park15.jpg',
];

export default function ImageSlider() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className='w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden'
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className='relative'>
            <Image
              src={src}
              alt={`Interior ${index + 1}`}
              fill
              sizes='(max-width: 640px) 100vw,
                     (max-width: 1024px) 90vw,
                     800px'
              className='object-cover'
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
