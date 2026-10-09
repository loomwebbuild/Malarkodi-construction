import { BuildService } from '@/components/types';

export const BUSINESS_INFO = {
  name: 'Malarkodi Construction Pvt Ltd',
  shortName: 'Malarkodi Construction',
  type: 'Real Estate Developer, Builders and Construction Company',
  tagline1: 'A foundation to build your dreams upon!',
  tagline2: "We don't just build homes and offices, we build communities!",
  address: '20, VOC St, West Tambaram, Tambaram, Tamil Nadu 600045 (Doctors Plaza)',
  addressShort: '20, VOC St, West Tambaram (Doctors Plaza)',
  phone: '098419 21582',
  phoneTel: 'tel:09841921582',
  whatsappUrl: 'https://wa.me/919841921582?text=Hello%20Malarkodi%20Construction,%20I%20would%20like%20to%20discuss%20a%20construction%20or%20property%20requirement.',
  hours: 'Opens 9:00 AM',
  googleRating: 4.9,
  googleReviewCount: 37,
  googleReviewsUrl: 'https://maps.google.com/?q=Doctors+Plaza+20+VOC+St+West+Tambaram+Chennai+Tamil+Nadu+600045',
  instagramHandle: '@malarkodiconstructions_pvt_ltd',
  instagramUrl: 'https://www.instagram.com/malarkodiconstructions_pvt_ltd',
};

export const WHAT_WE_BUILD: BuildService[] = [
  {
    id: 'build-residential',
    number: '01',
    title: 'Residential Homes & Apartments',
    subtitle: 'Custom villas, modern multi-family residences & boutique apartments',
    benefit:
      'Meticulously engineered living spaces crafted for natural ventilation, optimal spatial orientation, and lasting generational strength.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    details: [
      'Seismic-Resistant RCC Frameworks',
      'Optimal Cross-Ventilation & Vastu Alignment',
      'Premium Flooring, Joinery & Finishes',
    ],
  },
  {
    id: 'build-commercial',
    number: '02',
    title: 'Commercial Complexes & Offices',
    subtitle: 'Prime business centers, executive medical clinics & retail spaces',
    benefit:
      'Functional, high-efficiency business destinations built with structural longevity, heavy-duty electrical conduits, and durable architectural facades.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
    details: [
      'High-Capacity Load Distribution',
      'Municipal Clearance & Safety Compliance',
      'Granite & Architectural Glass Elevations',
    ],
  },
  {
    id: 'build-turnkey',
    number: '03',
    title: 'Turnkey Construction & Civil Works',
    subtitle: 'End-to-end building execution from foundation excavation to handover',
    benefit:
      'Rigorous civil oversight, high-grade OPC/PPC cement, tested steel reinforcement, and transparent stage-by-stage milestone management.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    details: [
      'Standard Penetration Soil Strata Testing',
      'Certified Laboratory Concrete Cube Tests',
      'Scheduled Milestones & Direct Site Supervision',
    ],
  },
  {
    id: 'build-communities',
    number: '04',
    title: 'Community Living & Developments',
    subtitle: 'Integrated developments designed for harmonious living and connection',
    benefit:
      'Thoughtful neighborhood planning that balances private residential tranquility with shared connectivity, landscaped perimeters, and sustainable resources.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    details: [
      'Rainwater Harvesting & Ground Recharge',
      'Dedicated Basements & Parking Planning',
      'Long-Term Capital Appreciation Focus',
    ],
  },
];

export const EXCELLENCE_COLUMNS = [
  {
    id: 'quality',
    title: 'Quality Construction',
    iconName: 'Building2',
    bullets: ['Grade-A Materials', 'Precision Engineering', 'Earthquake Resistant'],
    description:
      'Strict adherence to Indian Standard civil specifications, high-strength certified cement grades, corrosion-resistant steel, and uncompromising foundation depth.',
  },
  {
    id: 'transparency',
    title: 'Transparent Dealings',
    iconName: 'ShieldCheck',
    bullets: ['Zero Hidden Costs', 'Clear Clearances', 'Documented Approvals'],
    description:
      'Unhindered legal paperwork, bank-approved titles, explicit milestone invoicing, and total clarity from booking agreement to formal registration.',
  },
  {
    id: 'customer',
    title: 'Customer Service',
    iconName: 'HeartHandshake',
    bullets: ['Dedicated Support', 'Direct Access', 'Regular Site Updates'],
    description:
      'Direct contact with project supervisors, transparent stage-by-stage photographic progress reports, and courteous post-possession assistance.',
  },
  {
    id: 'delivery',
    title: 'On-Time Delivery',
    iconName: 'Clock',
    bullets: ['Milestone Tracking', 'Scheduled Handover', 'Disciplined Planning'],
    description:
      'Disciplined project scheduling, seasoned civil teams, and a proven track record of meeting handover timelines without compromising workmanship.',
  },
];
