import Link from 'next/link'
import React from 'react'

const HeroRender2 = ({ block, i }: { block: any; i: number }) => {
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
        {block.heading && <h1 className="text-4xl font-bold tracking-tight">{block.heading}</h1>}

        {block.subheading && <p className="text-lg opacity-90">{block.subheading}</p>}

        {block.cta?.label && block.cta?.link && (
          <Link
            href={block.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-white text-black font-medium rounded-full shadow hover:bg-gray-100 transition"
          >
            {block.cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}

export default HeroRender2
