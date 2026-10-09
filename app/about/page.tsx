import type { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Malarkodi Construction Pvt Ltd - Real Estate Builders',
  description:
    'Learn about Malarkodi Construction Pvt Ltd, premier builders and developers in West Tambaram, Chennai. A foundation to build your dreams upon.',
  openGraph: {
    title: 'About Us | Malarkodi Construction Pvt Ltd',
    description:
      'Discover our architectural philosophy, civil engineering standards, and community dedication in West Tambaram, Chennai.',
  },
};

interface PageProps {
  params?: Promise<Record<string, string | string[] | undefined>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function AboutPage({ params, searchParams }: PageProps) {
  if (params) await params;
  if (searchParams) await searchParams;

  return <AboutPageClient />;
}
