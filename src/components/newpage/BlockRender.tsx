'use client'

import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'

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
    <section className="w-full space-y-10 h-full px-5">
      {layout.map((block, i) => {
        switch (block.blockType) {
          case 'heroLayout1': {
            const hero = block.selectedHeroLayout?.[0] || {}
            return (
              <div
                key={i}
                className="relative bg-gray-900 text-white py-20 px-6 rounded-lg overflow-hidden"
              >
                {hero.heroImage?.url && (
                  <img
                    src={hero.heroImage.url}
                    alt={hero.heroImage.alt || ''}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                )}
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl font-bold">{hero.title}</h1>
                  <p className="mt-4 text-lg">{hero.subTitle}</p>
                  {hero.richText && (
                    <div className="mt-6">
                      <RichText data={hero.richText} />
                    </div>
                  )}
                  {hero.buttonText && hero.buttonLink && (
                    <a
                      href={hero.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 inline-block px-6 py-3 rounded-full font-semibold ${
                        hero.buttonColor === 'green'
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {hero.buttonText}
                    </a>
                  )}
                </div>
              </div>
            )
          }

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
              <div key={i} className="space-y-6 w-full">
                {rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-col bg-gray-50 md:flex-row gap-6 justify-between  w-full"
                  >
                    {row.map((column: any, colIndex: number) => {
                      let widthClass = 'w-full'
                      switch (column.size) {
                        case 'half':
                          widthClass = 'md:w-1/2'
                          break
                        case 'twoThirds':
                          widthClass = 'md:w-2/3'
                          break
                        case 'oneThird':
                          widthClass = 'md:w-1/3'
                          break
                        default:
                          widthClass = 'min-w-full'
                      }

                      return (
                        <div
                          key={colIndex}
                          className={`${widthClass} p-2 md:p-6 rounded shadow-sm bg-white prose`}
                        >
                          {column.richText && <RichText data={column.richText} className='prose mx-auto md:ml-44  ' />}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
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
              <div
                key={i}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center p-10 rounded-xl shadow-lg"
              >
                {block.richText && <RichText data={block.richText} />}
                {block.links?.map((link: any, idx: number) => (
                  <a
                    key={idx}
                    href={link.link.url || '#'}
                    target={link.link.newTab ? '_blank' : '_self'}
                    rel={link.link.newTab ? 'noopener noreferrer' : ''}
                    className="inline-block mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition"
                  >
                    {link.link.label}
                  </a>
                ))}
              </div>
            )

          case 'archive':
            return (
              <div key={i} className="bg-gray-100 p-6 rounded-md text-center">
                <h3 className="text-xl font-semibold mb-2">Archive Block</h3>
                {block.introContent && <RichText data={block.introContent} />}
                {block.selectedDocs?.map((doc: any, idx: number) => (
                  <div key={idx}>
                    <h4 className="font-medium">{doc.value.title}</h4>
                    <a
                      href={`/posts/${doc.value.slug}`}
                      className="text-blue-500 underline"
                    >
                      Read more
                    </a>
                  </div>
                ))}
              </div>
            )

          case 'formBlock':
            return (
              <div
                key={i}
                className="max-w-2xl mx-auto bg-white border border-gray-200 p-6 rounded shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{block.form.title}</h3>
                {block.enableIntro && block.introContent && (
                  <RichText data={block.introContent} />
                )}
                <form action="#" method="POST" className="space-y-4">
                  {block.form.fields.map((field: any, idx: number) => {
                    if (field.blockType === 'email')
                      return (
                        <div key={idx}>
                          <label htmlFor={field.name} className="block font-medium">
                            {field.label}
                          </label>
                          <input
                            type="email"
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            className="w-full border border-gray-300 p-2 rounded"
                          />
                        </div>
                      )
                    if (field.blockType === 'number')
                      return (
                        <div key={idx}>
                          <label htmlFor={field.name} className="block font-medium">
                            {field.label}
                          </label>
                          <input
                            type="number"
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            className="w-full border border-gray-300 p-2 rounded"
                          />
                        </div>
                      )
                    if (field.blockType === 'checkbox')
                      return (
                        <div key={idx} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={field.name}
                            name={field.name}
                            defaultChecked={field.defaultValue}
                            className="h-5 w-5"
                          />
                          <label htmlFor={field.name}>{field.label}</label>
                        </div>
                      )
                    return null
                  })}
                  <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    {block.form.submitButtonLabel}
                  </button>
                </form>
              </div>
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