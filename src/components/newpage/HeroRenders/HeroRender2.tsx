'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { Star } from 'lucide-react'

type InfoCard = {
  icon?: { url: string }
  title: string
  description: string
}

type Props = {
  backgroundImage: Media
  heading: string
  rating: {
    score: string
    reviews: number
  }
  infoCards: InfoCard[]
}

const renderStars = (score: number) => {
  const fullStars = Math.floor(score)
  const hasHalf = score % 1 >= 0.3 && score % 1 < 0.8 // custom threshold for visual half-star
  const totalStars = 5

  return Array.from({ length: totalStars }).map((_, i) => {
    const isFull = i < fullStars
    const isHalf = i === fullStars && hasHalf

    return (
      <div key={i} className="w-6 h-6 rounded-sm bg-green-500 flex items-center justify-center">
        <Star
          className="w-4 h-4"
          color="white"
          fill={isFull || isHalf ? 'white' : 'transparent'}
          style={{
            clipPath: isHalf ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' : 'none',
          }}
        />
      </div>
    )
  })
}

const HeroRender2: React.FC<Props> = ({ backgroundImage, heading, rating, infoCards }) => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-between items-center h-full">
      {backgroundImage?.url && (
        <Image
          src={backgroundImage.url}
          alt="Hero Background"
          fill
          className="object-cover z-0 rounded-xl"
          priority
        />
      )}

      <div className="relative z-20 px-4 md:px-16 py-2  flex flex-col items-center ">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-blue-900 my-6">
          {heading}
        </h1>

        <div className='flex flex-col pt-[30%] sm:pt-[80%] lg:pt-[20%]'>
            <div className="text-center mt-6">
          <p className="font-semibold text-lg text-white drop-shadow-sm">Fremragende</p>

          <div className="flex justify-center items-center gap-1 mt-2">
            {renderStars(parseFloat(rating.score))}
          </div>

          <p className="text-sm text-white/90 mt-2">
            Bedømt til {rating.score} baseret på{' '}
            <span className="underline">{rating.reviews.toLocaleString()} anmeldelser</span>
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards?.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex gap-4 items-start shadow-md border"
            >
              {card.icon?.url && (
                <div className="bg-[#9196f5] p-3 rounded-lg flex-shrink-0">
                  <Image src={card.icon.url} alt="Card Icon" width={32} height={32} />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroRender2
