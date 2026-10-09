import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Malarkodi Construction Pvt Ltd - West Tambaram Office',
  description:
    'Contact Malarkodi Construction Pvt Ltd at Doctors Plaza, 20 VOC St, West Tambaram, Chennai. Call 098419 21582 or chat via WhatsApp.',
  openGraph: {
    title: 'Contact Malarkodi Construction Pvt Ltd',
    description:
      'Visit our office at Doctors Plaza, West Tambaram, Chennai. Call 098419 21582 for project inquiries.',
  },
};

interface PageProps {
  params?: Promise<Record<string, string | string[] | undefined>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ContactPage({ params, searchParams }: PageProps) {
  if (params) await params;
  if (searchParams) await searchParams;

  return <ContactPageClient />;
}
