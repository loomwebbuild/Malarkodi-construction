import type { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'What We Build | Malarkodi Construction Pvt Ltd - Tambaram, Chennai',
  description:
    'Explore residential homes, apartments, commercial offices, and turnkey civil construction services in West Tambaram by Malarkodi Construction Pvt Ltd.',
  openGraph: {
    title: 'What We Build | Malarkodi Construction Pvt Ltd',
    description:
      'Premier residential and commercial builders in West Tambaram, Chennai. Grade-A materials, structural precision, and community-centered design.',
  },
};

interface PageProps {
  params?: Promise<Record<string, string | string[] | undefined>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ServicesPage({ params, searchParams }: PageProps) {
  if (params) await params;
  if (searchParams) await searchParams;

  return <ServicesPageClient />;
}
