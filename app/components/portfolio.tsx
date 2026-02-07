import Image from 'next/image';

const images = ['park1.jpg', 'park2.jpg', 'park3.jpg', 'park15.jpg'];

const BASE = 'https://res.cloudinary.com/dhgny94kc/image/upload';

export default function PortfolioGallery() {
  return (
    <section className='px-4 sm:px-6'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {images.map((img, index) => (
          <div
            key={img}
            className='relative overflow-hidden rounded-2xl aspect-[4/3]'
          >
            <Image
              src={`${BASE}/w_1200,q_auto,f_auto/ainterior/park%20heritage/${img}`}
              alt={`Park Heritage ${index + 1}`}
              fill
              sizes='(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw'
              className='object-cover transition-transform duration-500 hover:scale-105'
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
