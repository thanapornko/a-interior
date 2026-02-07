import Image from 'next/image';
import ImageSlider from './components/swiper';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className='max-w-6xl mx-auto px-6 pt-18 pb-18 text-center'>
        <h1 className='text-4xl md:text-6xl font-serif mb-14 text-gray-900'>
          We Build What You Imagine.
        </h1>
        <div className='mx-auto rounded-3xl'>
          <Image
            src='/hero.png'
            alt='Luxury interior design'
            width={1600}
            height={1000}
            priority
            className='w-full h-[380px] md:h-[700px]'
          />
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id='about' className='py-20 bg-[#F5F1E8]'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-serif mb-8 text-gray-900'>About Us</h2>
          <p className='text-md leading-8 text-[#444] mb-12 font-sans'>
            เราเป็นบริษัทรับเหมาตกแต่งภายในและงานบิวท์อินครบวงจร
            เชี่ยวชาญงานก่อสร้างตามแบบที่ลูกค้ากำหนด
            พร้อมทีมงานมากประสบการณ์กว่า 30 ปี เราใส่ใจในทุกขั้นตอนของงาน
            เพื่อส่งมอบงานที่มีคุณภาพให้ลูกค้า
          </p>
          <a
            href='/portfolio'
            className='inline-flex items-center gap-2 rounded-full bg-[#4F5D2F] text-white px-6 py-3 text-sm hover:opacity-90'
          >
            Portfolio
          </a>
        </div>
      </section>

      {/* ===== SERVICE ===== */}
      <section id='service' className='py-20'>
        <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center'>
          <div className='max-w-md'>
            <h2 className='text-3xl font-serif mb-8 text-gray-900'>
              Our Services
            </h2>
            <ul className='space-y-3 text-md  text-[#444] font-sans'>
              <li>• รับเหมาตกแต่งภายในตามแบบที่ลูกค้าหรือผู้ออกแบบกำหนด</li>
              <li>• งานบิวท์อิน (Built-in Furniture)</li>
              <li>• งานโครงสร้างภายใน / ฝ้า / ผนัง / ระบบไฟ</li>
              <li>• งานรีโนเวท บ้าน คอนโด ออฟฟิศ ร้านค้า</li>
            </ul>
          </div>
          <div className='overflow-hidden'>
            <Image
              src='/service.png'
              alt='Interior living room'
              width={1200}
              height={900}
              className='w-full h-[4000px] md:h-[500px] object-cover'
            />
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id='contact' className='bg-[#F5F1E8] py-20 text-gray-900'>
        <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start'>
          {/* MAP */}
          <div className='flex-end'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.55636037963376!2d100.52915099052883!3d13.868604766962967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e284c95a063d07%3A0x39a3da569e1023cc!2z4Lia4LiI4LiBLiDguYDguK0g4LiU4Li14LmE4LiL4LiZ4LmM!5e0!3m2!1sen!2sth!4v1769705728872!5m2!1sen!2sth'
              width='500'
              height='300'
              loading='lazy'
            />
          </div>

          {/* INFO */}
          <div>
            <h2 className='text-3xl font-serif mb-8'>Contact</h2>
            <ul className='space-y-5 text-sm text-[#444] font-sans'>
              <li>
                52 ซอยประชานิเวศน์ 3 ซอย 14/10 ตำบลท่าทราย อำเภอเมืองนนทบุรี
                จ.นนทบุรี 11000
              </li>
              <li>โทร: 081-633-2711, 081-646-3450</li>
              <li>Line: 0816332711</li>
              <li>เวลาทำการ: จันทร์ - ศุกร์ เวลา 8.30น. - 17.00น.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== IMAGE SLIDER ===== */}
      <section className='py-20 bg-[#FAF8F3]'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-3xl font-serif text-center mb-8'>Our Works</h2>
          <ImageSlider />
        </div>
      </section>
    </>
  );
}
