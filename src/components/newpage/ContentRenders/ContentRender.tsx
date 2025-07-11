import { Button } from '@/components/ui/button'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

const ContentRender = ({ rows, i }: { rows: any; i: any }) => {
  return (
    <div key={`content-block-${i}`} className="w-full ">
      {rows.map((row: any, rowIndex: number) => (
        <div key={`row-${rowIndex}`} className="flex flex-col md:flex-row justify-between w-full">
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

            const alignmentWrapper =
              column.alignment === 'right'
                ? 'items-end text-left'
                : column.alignment === 'left'
                  ? 'items-start text-left'
                  : 'items-center text-center'

            return (
              <div
                key={`col-${rowIndex}-${colIndex}`}
                className={`${widthClass} px-5 md:px-36 w-full lg:py-8`}
                style={{ backgroundColor: column.backgroundColor }}
              >
                <div className={`flex flex-col ${alignmentWrapper} max-w-full px-2`}>
                  {column.richText && (
                    <RichText data={column.richText} className="prose mt-5 md:text-xl text-[#040f4e] " />
                  )}

                  {column?.buttonText?.length > 0 && (
                    <div className="my-5">
                      <Button
                        asChild
                        style={{
                          backgroundColor: column.buttonColor || '#000',
                        }}
                        className={`text-white font-semibold transition hover:opacity-95  px-6 text-md py-2 rounded-full`}
                      >
                        <Link
                          href={column.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {column.buttonText}
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default ContentRender
