import CustomButton from '@/components/CustomComponent/CustomButton'
import { Button } from '@/components/ui/button'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  block: any
  i: any
}

const ImageWithContent = ({ block, i }: Props) => {
  return (
    <div
      key={i}
      className={`flex flex-col lg:flex-row ${block.layout === 'right' ? 'lg:flex-row-reverse' : ''} gap-4 lg:gap-20 items-center py-10 lg:py-16 px-5 md:px-28 justify-center`}
      style={{
        backgroundColor: block.backgroundColor,
      }}
    >
      <div className="w-full lg:w-1/2">
        <Image
          src={block.image.url}
          alt={block.imageAlt || 'Image'}
          width={800}
          height={800}
          className="object-cover rounded-2xl w-full h-auto"
        />
      </div>
      <div className={`w-full lg:w-1/2 ${block.contentAlignmentClass}`}>
        <div className="prose mx-auto -mt-5">
          <RichText data={block.content} />
        </div>
        {block.enableButton && block.link?.url && (
         
          <CustomButton buttonLink={block.link.url} buttonText={block.link.label || 'Read more'} backgroundColor={'#040f4e'}/>
        )}
      </div>
    </div>
  )
}

export default ImageWithContent
