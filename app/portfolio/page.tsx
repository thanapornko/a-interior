import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';

export const metadata = {
  title: 'Portfolio | A-Interior',
};

export default function PortfolioPage() {
  return (
    <section className='max-w-6xl mx-auto px-6 py-20'>
      <h1 className='text-4xl font-serif mb-12 text-center'>Portfolio</h1>

      <div className='grid md:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className='group'
          >
            <div className='relative aspect-[4/3] overflow-hidden'>
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className='object-cover group-hover:scale-105 transition'
              />
            </div>
            <h2 className='mt-4 text-lg font-medium text-center'>
              {project.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
