'use client'
import React from 'react'
import ImageWithContent from './ContentRenders/ImageWithContent'
import ContentRender from './ContentRenders/ContentRender'
import FormBlockRender from './ContentRenders/formBlockRender'
import AdvantagesBlockRender from './ContentRenders/AdvantagesBlockRender'
import MultiplePriceDescription from './ContentRenders/MultiplePriceDescription'
import InsuranceCarouselBlock from './ContentRenders/CaraousalComponent'
import InsuranceTypeGridRender from './ContentRenders/InsuranceGridRender'
import ContactOptionsBlock from './ContentRenders/ContactRenderBlock'
import Image from 'next/image'

type BlockType = {
  blockType: string
  blockName?: string | null
  [key: string]: any
}

type BlockRenderProps = {
  layout: BlockType[]
}

export const RenderBlocks: React.FC<BlockRenderProps> = ({ layout }) => {
  if (!layout || !Array.isArray(layout)) return null
  return (
    <section className="w-full  h-full">
      {layout.map((block, i) => {
        switch (block.blockType) {
          case 'content': {
            const rows: any[][] = []
            let currentRow: any[] = []

            block.columns?.forEach((col: any) => {
              if (col.size === 'full') {
                if (currentRow.length) {
                  rows.push(currentRow)
                  currentRow = []
                }
                rows.push([col])
              } else {
                currentRow.push(col)
              }
            })

            if (currentRow.length) {
              rows.push(currentRow)
            }

            return <ContentRender i={i} rows={rows} key={i} />
          }

          case 'mediaBlock':
            return (
              <div key={i} className="text-center my-8">
                {block.media?.url && (
                  <Image
                    fill
                    priority
                    src={block.media.url}
                    alt={block.media.alt || 'Media'}
                    className="mx-auto max-w-full rounded-lg shadow-md"
                  />
                )}
              </div>
            )

          case 'formBlock':
            return <FormBlockRender i={i} block={block} key={i} />

          case 'image-with-content':
            return <ImageWithContent block={block} i={i} key={i} />

          case 'advantages-block':
            return (
              <AdvantagesBlockRender
                title={block.title}
                subtitle={block.subtitle}
                advantages={block.advantages}
                buttonText={block.buttonText}
                buttonLink={block.buttonLink}
                backgroundColor={block.backgroundColor}
                buttonColor={block.buttonColor}
                key={i}
                textColor={block.textColor}
                buttonTextColor={block.buttonTextColor}
              />
            )

          case 'multiple-price-block':
            return (
              <MultiplePriceDescription
                prices={block.prices}
                backgroundColor={block.backgroundColor}
                key={i}
              />
            )

          case 'insurance-carousel':
            return (
              <InsuranceCarouselBlock
                heading={block.heading}
                slides={block.slides}
                key={i}
                backgroundColor={block.backgroundColor}
                caraousalColor={block.caraousalColor}
              
              />
            )

          case 'insurance-type-block':
            return (
              <InsuranceTypeGridRender
                heading={block.heading}
                subheading={block.subheading}
                items={block.items}
                buttonText={block.buttonText}
                buttonLink={block.buttonLink}
                key={i}
              />
            )

          case 'contact-options-block':
            return (
              <ContactOptionsBlock
                heading={block.heading}
                subheading={block.subheading}
                description={block.description}
                contactOptions={block.contactOptions}
                key={i}
              />
            )

          default:
            return (
              <div
                key={i}
                className="p-4 border-2 border-dashed border-red-400 rounded bg-red-50 text-center"
              >
                Unknown block type: <strong>{block.blockType}</strong>
              </div>
            )
        }
      })}
    </section>
  )
}
