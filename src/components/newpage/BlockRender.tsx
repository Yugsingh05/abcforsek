'use client'
import React from 'react'
import ImageWithContent from './ContentRenders/ImageWithContent'
import ContentRender from './ContentRenders/ContentRender'
import FormBlockRender from './ContentRenders/formBlockRender'
import AdvantagesBlockRender from './ContentRenders/AdvantagesBlockRender'
import MultiplePriceDescription from './ContentRenders/MultiplePriceDescription'

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

            return <ContentRender i={i} rows={rows} />
          }

          case 'mediaBlock':
            return (
              <div key={i} className="text-center my-8">
                {block.media?.url && (
                  <img
                    src={block.media.url}
                    alt={block.media.alt || 'Media'}
                    className="mx-auto max-w-full rounded-lg shadow-md"
                  />
                )}
              </div>
            )

          case 'formBlock':
            return <FormBlockRender i={i} block={block} />

          case 'image-with-content':
            return <ImageWithContent block={block} i={i} />

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
              />
            )

            case 'multiple-price-block':
              return (<MultiplePriceDescription prices={block.prices} backgroundColor={block.backgroundColor}/>)
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
