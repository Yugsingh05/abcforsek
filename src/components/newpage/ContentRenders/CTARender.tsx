import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'

const CTARender = ({i, block}:{i:any, block:any}) => {
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
}

export default CTARender