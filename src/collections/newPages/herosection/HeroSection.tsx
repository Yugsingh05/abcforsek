'use client'

import type React from 'react'
import Image from 'next/image'

type HeroSectionProps = {
  heading: string
  subheading: string
  buttonText?: string
  buttonLink?: string
  buttonColor?: string
  heroImage: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  buttonText,
  buttonLink = '#',
  buttonColor = '#040f4e',
  heroImage,
}) => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] overflow-hidden rounded-2xl shadow-xl shadow-black/40">
      <Image
        src={heroImage.url || '/placeholder.svg'}
        alt={heroImage.alt || 'Hero Image'}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />

      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        <div className="inline-block border-2 border-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full">
          <span className="text-white text-base sm:text-lg md:text-xl font-medium">{heading}</span>
        </div>

        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl  font-light max-w-4xl">
          {subheading}
        </h1>

        {buttonText && (
          <a
            href={buttonLink}
            className="px-6 py-2 sm:px-8 sm:py-2.5 rounded-full text-base sm:text-lg md:text-xl font-medium transition-colors duration-200 shadow-lg "
            style={{ backgroundColor: buttonColor, color: '#fff' }}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

export default HeroSection
