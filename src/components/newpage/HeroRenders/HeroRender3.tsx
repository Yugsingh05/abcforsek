import Image from 'next/image'
import React from 'react'

const HeroRender3 = ({ block, i }: { block: any; i: number }) => {
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
                      <Image
                        src={block.image.url}
                        alt="Hero Image"
                        width={800}
                        height={800}
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
}

export default HeroRender3
