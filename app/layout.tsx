import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Malarkodi Construction Pvt Ltd | Builders in Tambaram, Chennai',
  description:
    'Malarkodi Construction Pvt Ltd — Premier real estate developers & builders in West Tambaram, Chennai. A foundation to build your dreams upon. 4.9★ rated developer.',
  keywords: [
    'builders in Tambaram Chennai',
    'real estate developer Tambaram',
    'Malarkodi Construction Pvt Ltd',
    'builders in West Tambaram',
    'construction company Chennai',
    'apartments Tambaram',
    'luxury homes Chennai',
  ],
  authors: [{ name: 'Malarkodi Construction Pvt Ltd' }],
  openGraph: {
    title: 'Malarkodi Construction Pvt Ltd | Builders in Tambaram, Chennai',
    description:
      'A foundation to build your dreams upon! Premier real estate developers and builders in West Tambaram, Chennai. We don\'t just build homes and offices, we build communities!',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Malarkodi Construction Pvt Ltd',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malarkodi Construction Pvt Ltd | Builders in Tambaram, Chennai',
    description:
      'Premier real estate developers and builders in West Tambaram, Chennai. A foundation to build your dreams upon!',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'GeneralContractor', 'LocalBusiness'],
  name: 'Malarkodi Construction Pvt Ltd',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  description:
    'Premier real estate developer, builders and construction company in West Tambaram, Chennai. A foundation to build your dreams upon! We build homes, offices, and communities.',
  telephone: '+919841921582',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '20, VOC St, West Tambaram (Doctors Plaza)',
    addressLocality: 'Tambaram, Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600045',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9249,
    longitude: 80.1172,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '37',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.instagram.com/malarkodiconstructions_pvt_ltd',
  ],
  priceRange: '₹₹₹₹',
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params?: Promise<Record<string, string | string[] | undefined>>;
}) {
  if (props.params) {
    await props.params;
  }
  const { children } = props;

  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0d0e11] text-[#e8e6e1] antialiased selection:bg-[#c5a880] selection:text-[#0d0e11]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

