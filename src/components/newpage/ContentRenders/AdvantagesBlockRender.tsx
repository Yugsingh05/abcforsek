import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CustomButton from '@/components/CustomComponent/CustomButton'

type AdvantageCard = {
  icon: {
    url: string
    alt?: string
  }
  title: string
  description: string
}

type AdvantagesBlockProps = {
  title: string
  subtitle: string
  advantages: AdvantageCard[]
  buttonText?: string
  buttonLink?: string
  backgroundColor?: string
  buttonColor?: string

}

const AdvantagesBlockRender: React.FC<AdvantagesBlockProps> = ({
  title,
  subtitle,
  advantages,
  buttonText = 'Calculate price',
  buttonLink = '#',
  backgroundColor,
  buttonColor
}) => {
  return (
    <section className="py-12 sm:py-32 px-6 text-center " style={{
      backgroundColor:backgroundColor || '#fff'
    }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#040f4e]">{title}</h2>
        <p className="text-lg text-[#040f4e] mt-2">{subtitle}</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {advantages.map((item, i) => (
            <div key={i} className="flex flex-col items-center px-4">
              <div className="mb-4 h-12 w-12 ">
                <Image
                  src={item.icon.url}
                  alt={item.icon.alt || 'Icon'}
                  width={48}
                  height={48}
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-[#040f4e] text-xl">{item.title}</h3>
              <p className="text-sm text-[#040f4e] mt-2 sm:text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        {buttonText && (
        <CustomButton buttonText={buttonText} buttonLink={buttonLink} backgroundColor={buttonColor}  />
        )}
      </div>
    </section>
  )
}

export default AdvantagesBlockRender
