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
}

const AdvantagesBlockRender: React.FC<AdvantagesBlockProps> = ({
  title,
  subtitle,
  advantages,
  buttonText = 'Calculate price',
  buttonLink = '#',
}) => {
  return (
    <section className="bg-[#eff0f8] py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a3c]">{title}</h2>
        <p className="text-lg text-[#3e3e5f] mt-2">{subtitle}</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {advantages.map((item, i) => (
            <div key={i} className="flex flex-col items-center px-4">
              <div className="mb-4 h-12 w-12">
                <Image
                  src={item.icon.url}
                  alt={item.icon.alt || 'Icon'}
                  width={48}
                  height={48}
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-[#1a1a3c] text-lg">{item.title}</h3>
              <p className="text-sm text-[#3e3e5f] mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {buttonText && (
        <CustomButton buttonText={buttonText} buttonLink={buttonLink} />
        )}
      </div>
    </section>
  )
}

export default AdvantagesBlockRender
