import { Test } from '@repo/shared/ui/test';
import groq from 'groq';

import { sanityFetch } from '@/sanity/lib/live';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data } = await sanityFetch({
    query: groq`*[_type=="home"][0]{ hero{ ... } }`,
    tags: ['sanity'],
  });

  console.log('data', data?.hero);

  return (
    <>
      <div className="flex gap-1.5">
        <h1>Headline: </h1>
        <span className="font-bold">{data?.hero?.headline}</span>
      </div>
      <Test />
    </>
  );
}
