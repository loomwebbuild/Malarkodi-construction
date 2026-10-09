import type { Metadata } from 'next';
import StandardsPageClient from '@/components/StandardsPageClient';

export const metadata: Metadata = {
  title: 'Engineering Standards & Quality | Malarkodi Construction Pvt Ltd',
  description:
    'Our core pillars: Quality Construction, Transparent Dealings, Customer Service, and On-Time Delivery in West Tambaram, Chennai.',
  openGraph: {
    title: 'Standards & Commitments | Malarkodi Construction Pvt Ltd',
    description:
      'Learn about our civil engineering standards, structural testing, and transparent documentation principles.',
  },
};

interface PageProps {
  params?: Promise<Record<string, string | string[] | undefined>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function StandardsPage({ params, searchParams }: PageProps) {
  if (params) await params;
  if (searchParams) await searchParams;

  return <StandardsPageClient />;
}
