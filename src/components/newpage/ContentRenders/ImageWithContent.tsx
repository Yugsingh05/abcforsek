import { Button } from '@/components/ui/button'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    block: any
    i : any
}

const ImageWithContent = ({block , i}:Props) => {
  return (
   <div
                   key={i}
                   className={`flex flex-col lg:flex-row ${block.layout === 'right' ? 'lg:flex-row-reverse' : ''} gap-4 lg:gap-12 items-center py-5 px-5 md:px-28 justify-center`}
                   style={{
                       backgroundColor: block.backgroundColor
                   }}
                 >
                   <div className="w-full lg:w-1/2">
                     <Image
                       src={block.image.url}
                       alt={block.imageAlt || 'Image'}
                       width={700}
                       height={700}
                       className="object-cover rounded-2xl w-full h-auto"
                     />
                   </div>
                   <div className={`w-full lg:w-1/2 ${block.contentAlignmentClass}`}>
                     <div className="prose mx-auto -mt-5">
                       <RichText data={block.content} />
                     </div>
                     {block.enableButton && block.link?.url && (
                       <Link href={block.link.url} passHref legacyBehavior>
                         <Button className="inline-block  px-6 text-md py-2 rounded-full bg-[#040f4e] text-white font-semibold transition hover:opacity-95 font-serif">
                           {block.link.label || 'Read more'}
                         </Button>
                       </Link>
                     )}
                   </div>
                 </div>
  )
}

export default ImageWithContent