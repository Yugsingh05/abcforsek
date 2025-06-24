'use client'

import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import ImageWithContent from './ContentRenders/ImageWithContent'
import ContentRender from './ContentRenders/ContentRender'
import FormBlockRender from './ContentRenders/formBlockRender'
import CTARender from './ContentRenders/CTARender'

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
  console.log(layout)

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

            return (
              <ContentRender i={i} rows={rows}/>
            )
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

          case 'cta':
            return (
            <CTARender i={i} block={block}/>
            )

          case 'archive':
            return (
              <div key={i} className="bg-gray-100 p-6 rounded-md text-center">
                <h3 className="text-xl font-semibold mb-2">Archive Block</h3>
                {block.introContent && <RichText data={block.introContent} />}
                {block.selectedDocs?.map((doc: any, idx: number) => (
                  <div key={idx}>
                    <h4 className="font-medium">{doc.value.title}</h4>
                    <a href={`/posts/${doc.value.slug}`} className="text-blue-500 underline">
                      Read more
                    </a>
                  </div>
                ))}
              </div>
            )

          case 'formBlock':
            return (
             <FormBlockRender i={i} block={block} />
            )

          case 'image-with-content':
            return <ImageWithContent block={block} i={i} />

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
