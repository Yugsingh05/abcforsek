import { notFound } from 'next/navigation';
import React from 'react';
import { RenderHeroLayout } from '@/components/newpage/HeroRender';
import { getPayload } from 'payload';
import configPromise from '@payload-config'
import { RenderBlocks } from '@/components/newpage/BlockRender';

export default async function NewPageSlug({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config: configPromise })

  const page = await payload.find({
    collection: 'newpage',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const data = page.docs?.[0];

  if (!data) return notFound();

  return (
    <main className="flex flex-col items-center justify-start p-6 gap-10">
      <RenderHeroLayout layout={data.hero.selectedHeroLayout} />
     <RenderBlocks layout={data.pageContent.layout} />

    </main>
  );
}
