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
  buttonTextColor?: string
  textColor?: string
  text?: string
}

const AdvantagesBlockRender: React.FC<AdvantagesBlockProps> = ({
  title,
  subtitle,
  advantages,
  buttonText = 'Calculate price',
  buttonLink = '#',
  backgroundColor,
  buttonColor,
  textColor,
  buttonTextColor,
  text

}) => {
  return (
    <section
      className="py-12 sm:py-32 px-6 text-center "
      style={{
        backgroundColor: backgroundColor || '#fff',
      }}
    >
      <div className="max-w-5xl mx-auto">

       {text && (
          <p
            className="text-[15px] -mt-5  mb-5"
            style={{
              color: '#4658D2',
            
            }}
          >
            {text}
          </p>
        )}
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{
            color: textColor || '#040f4e',
          }}
        >
          {title}
        </h2>
        <p
          className="text-lg  mt-2"
          style={{
            color: textColor || '#040f4e',
          }}
        >
          {subtitle}
        </p>

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
              <h3
                className="font-semibold  text-xl"
                style={{
                  color: textColor || '#040f4e',
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm  mt-2 sm:text-lg"
                style={{
                  color: textColor || '#040f4e',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {buttonText && (
          <CustomButton
            buttonText={buttonText}
            buttonLink={buttonLink}
            backgroundColor={buttonColor}
            buttonTextColor={buttonTextColor}
          />
        )}
      </div>
    </section>
  )
}

export default AdvantagesBlockRender
