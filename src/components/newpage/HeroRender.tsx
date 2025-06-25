'use client'

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import CustomButton from '../CustomComponent/CustomButton'

export const RenderHeroLayout = ({ layout }: { layout: any[] }) => {
  if (!layout || !layout.length) return null

  return (
    <>
      <div className="w-full h-full px-4 md:px-12">
        {layout.map((block, i) => {
          switch (block.blockType) {
            case 'heroLayout1':
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
                    <div className="inline-block border-2 border-blue-900 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full">
                      <span className="text-white text-base sm:text-lg md:text-2xl  font-medium text-blue-900">
                        {block.title}
                      </span>
                    </div>

                    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-serif font-light max-w-4xl">
                      {block.subTitle}
                    </h1>

                    {block.buttonText.length > 0 && (
                      // <Button asChild style={{ backgroundColor: block.buttonColor, color: '#fff' ,fontWeight: 400}}>
                      //   <Link                        
                      //     href={block.buttonLink}
                      //     className="inline-block  px-8 text-md py-4 rounded-full text-base sm:text-lg  transition hover:opacity-95 font-serif"
                      //   >
                      //     {' '}
                      //     {block.buttonText}
                      //   </Link>
                      // </Button>

                      <CustomButton buttonLink={block.buttonLink} buttonText={block.buttonText} backgroundColor={block.buttonColor}/>
                    )}
                  </div>
                </div>
              )

            case 'heroLayout2':
              return (
                <section
                  key={i}
                  className="relative h-[28rem] w-full bg-cover bg-center text-white flex items-center justify-center px-4 lg:px-5"
                  style={{
                    backgroundImage: block.backgroundImage?.url
                      ? `url(${block.backgroundImage.url})`
                      : undefined,
                    backgroundColor: !block.backgroundImage?.url ? '#1f2937' : undefined, // fallback color
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-60" />

                  <div className="relative z-10 text-center max-w-2xl space-y-4">
                    {block.heading && (
                      <h1 className="text-4xl font-bold tracking-tight">{block.heading}</h1>
                    )}

                    {block.subheading && <p className="text-lg opacity-90">{block.subheading}</p>}

                    {block.cta?.label && block.cta?.link && (
                      <a
                        href={block.cta.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-2 bg-white text-black font-medium rounded-full shadow hover:bg-gray-100 transition"
                      >
                        {block.cta.label}
                      </a>
                    )}
                  </div>
                </section>
              )

            case 'heroLayout3':
              return (
                <section
                  key={i}
                  className="w-full px-6 py-12 text-white text-center lg:px-5"
                  style={{ backgroundColor: block.backgroundColor || '#1e293b' }} // fallback to slate-800
                >
                  <div className="max-w-3xl mx-auto space-y-6">
                    {block.headline && (
                      <h1 className="text-4xl font-bold leading-tight">{block.headline}</h1>
                    )}

                    {block.tagline && <p className="text-lg opacity-90">{block.tagline}</p>}

                    {block.richText && (
                      <div
                        className="prose prose-invert mx-auto max-w-none"
                        dangerouslySetInnerHTML={{ __html: block.richText }}
                      />
                    )}

                    {block.image?.url && (
                      <img
                        src={block.image.url}
                        alt="Hero Image"
                        className="mx-auto mt-6 rounded-lg shadow-lg max-w-xs"
                      />
                    )}

                    {block.ctaButton?.text && block.ctaButton?.url && (
                      <a
                        href={block.ctaButton.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-8 px-6 py-3 text-base font-medium bg-white text-black rounded-full shadow hover:bg-gray-100 transition"
                      >
                        {block.ctaButton.text}
                      </a>
                    )}
                  </div>
                </section>
              )

            default:
              return null
          }
        })}
      </div>
    </>
  )
}
