import HomeClient from '@/components/HomeClient';

interface PageProps {
  params?: Promise<Record<string, string | string[] | undefined>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ params, searchParams }: PageProps) {
  // Next.js 15: unwrap params and searchParams with await
  if (params) {
    await params;
  }
  if (searchParams) {
    await searchParams;
  }

  return <HomeClient />;
}
