import { notFound } from 'next/navigation';
import { projects } from '@/app/data/projects';
import Gallery from './gallery';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section className='max-w-6xl mx-auto px-6 py-20'>
      <h1 className='text-3xl font-serif mb-12 text-center'>{project.title}</h1>
      <Gallery images={project.images} title={project.title} />
    </section>
  );
}
