import Image from 'next/image';

const images = ['park1.jpg', 'park2.jpg', 'park3.jpg', 'park15.jpg'];

const BASE = 'https://res.cloudinary.com/dhgny94kc/image/upload';

export default function PortfolioGallery() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {images.map((img) => (
        <div key={img} className='overflow-hidden rounded-2xl'>
          <Image
            src={`${BASE}/w_1200,q_auto,f_auto/ainterior/park%20heritage/${img}`}
            width={1200}
            height={800}
            alt='Park Heritage Project'
            className='object-cover w-full h-[320px]'
          />
        </div>
      ))}
    </div>
  );
}
