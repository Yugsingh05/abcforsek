import CustomButton from '@/components/CustomComponent/CustomButton'
import clsx from 'clsx';
import Image from 'next/image'
import React from 'react'

const HeroRender1 = ({ block, i }: { block: any; i: any }) => {
  return (
    <div
      className="relative w-full h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] overflow-hidden rounded-2xl lg:px-5"
      key={i}
    >
      <Image
        src={block.heroImage.url || '/placeholder.svg'}
        alt={block.heroImage.url || 'Hero Image'}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-20" />

      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        <Image
          alt="Payload Logo"
          width={300}
          height={60}
          className={clsx('max-w-1/2')}
          src={
            block?.logoImg?.url ||
            'https://abcforsikring.dk/wp-content/uploads/2021/10/Logo_blaa.png'
          }
        />

        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-serif font-light max-w-4xl">
          {block.subTitle}
        </h1>

        {block?.buttonText?.length > 0 && (
          <CustomButton
            buttonLink={block.buttonLink}
            buttonText={block.buttonText}
            backgroundColor={block.buttonColor}
          />
        )}
      </div>
    </div>
  )
}

export default HeroRender1
