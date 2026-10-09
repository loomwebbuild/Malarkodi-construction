import type { Metadata } from 'next';
import ReviewsPageClient from '@/components/ReviewsPageClient';

export const metadata: Metadata = {
  title: 'Google Reviews & Rating (4.9★) | Malarkodi Construction Pvt Ltd',
  description:
    'Rated 4.9 from 37 Google reviews. Read authentic client reviews for Malarkodi Construction Pvt Ltd in West Tambaram, Chennai.',
  openGraph: {
    title: 'Client Reviews & Google Rating | Malarkodi Construction Pvt Ltd',
    description:
      '4.9★ verified Google rating from 37 customer reviews. Builders and real estate developers in West Tambaram, Chennai.',
  },
};

interface PageProps {
  params?: Promise<Record<string, string | string[] | undefined>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ReviewsPage({ params, searchParams }: PageProps) {
  if (params) await params;
  if (searchParams) await searchParams;

  return <ReviewsPageClient />;
}
