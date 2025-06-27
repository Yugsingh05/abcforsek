import { getPayload } from 'payload'
import React from 'react'
import configPromise from '@payload-config'
import NotFound from './not-found'
import { RenderHeroLayout } from '@/components/newpage/HeroRender'
import { RenderBlocks } from '@/components/newpage/BlockRender'

const page = async() => {

   const payload = await getPayload({ config: configPromise })
     const page = await payload.find({
       collection: 'newpage',
       
       limit: 1,
       sort: 'createdAt',
       where:{
        slug: {
          equals: 'home',
        },
       }
     })
   
 const data = page.docs?.[0];

//  console.log(data);

//  const res = await fetch('https://localhost:3000/api/newpage').then((res) => res.json());

//  console.log("res",res);

  if (!data) return NotFound();

  return (
    <main className="flex flex-col items-center justify-start">
      <RenderHeroLayout layout={data.hero.selectedHeroLayout} />
     <RenderBlocks layout={data.pageContent.layout} />

    </main>
  );
}

export default page