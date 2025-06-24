import { RichText } from "@payloadcms/richtext-lexical/react";

const ContentRender = ({ rows, i }: { rows: any; i: any }) => {
  return (
    <div key={i} className=" w-full mt-4">
      {rows.map((row: any, rowIndex: number) => (
        <div key={`${i}-${rowIndex}`} className="flex flex-col md:flex-row justify-between  w-full">
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
                key={`${i}-${rowIndex}-${colIndex}`}
                className={`${widthClass} rounded pros px-5`}
                style={{
                  backgroundColor: column.backgroundColor,
                }}
              >
                {column.richText && (
                  <RichText
                    data={column.richText}
                    className={`prose mx-auto ${column.alignment === 'right' && 'lg:mr-44'} ${column.alignment === 'left' && 'lg:ml-32 '} mt-5 `}
                  />
                )}
                {column.link && (
                  <a
                    href={column.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    {column.title}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default ContentRender

