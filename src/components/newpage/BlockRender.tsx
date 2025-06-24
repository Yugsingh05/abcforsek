'use client';

import { RichText } from '@payloadcms/richtext-lexical/react';
import React from 'react';

type Block = {
  blockType: string;
  blockName?: string;
  [key: string]: any;
};

type BlockRenderProps = {
  layout: Block[];
};

export const RenderBlocks: React.FC<BlockRenderProps> = ({ layout }) => {
  if (!layout || !Array.isArray(layout)) return null;

  return (
    <section className="w-full space-y-10 flex flex-col  h-full ">
      {layout.map((block, i) => {
        switch (block.blockType) {
          case 'callToAction':
            return (
              <div
                key={i}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 p-10 rounded-xl text-white text-center shadow-lg"
              >
                <h2 className="text-3xl font-bold">{block.title}</h2>
                {block.content && <p className="mt-4 text-lg">{block.content}</p>}
                {block.button?.label && block.button?.link && (
                  <a
                    href={block.button.link}
                    className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-200 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {block.button.label}
                  </a>
                )}
              </div>
            );

          case 'content':
            return (
              <div
                key={i}
                className="flex flex-col gap-6"
              >
                {block.columns?.map((column: any, idx: number) => {
                  let widthClass = 'w-full';
                  switch (column.size) {
                    case 'half':
                      widthClass = 'md:w-1/2';
                      break;
                    case 'twoThirds':
                      widthClass = 'md:w-2/3';
                      break;
                    case 'oneThird':
                      widthClass = 'md:w-1/3';
                      break;
                   
                    default:
                      widthClass = 'min-w-full';
                      break;
                  }

                  return (
                    <div
                      key={idx}
                      className={`${widthClass} bg-gray-50 p-6 rounded shadow prose mx-auto` }
                    >
                      {column.richText ? (
                        <RichText
                          data={column.richText}
                          className="prose  w-full mx-auto"
                        />
                      ) : (
                        <p className="text-gray-500 italic">No rich content provided.</p>
                      )}
                    </div>
                  );
                })}
              </div>
            );

          case 'mediaBlock':
            return (
              <div key={i} className="text-center">
                {block.media?.url && (
                  <img
                    src={block.media.url}
                    alt={block.media.alt || 'Media Block'}
                    className="mx-auto rounded-lg shadow-md max-w-3xl"
                  />
                )}
              </div>
            );

          case 'archive':
            return (
              <div key={i} className="bg-gray-100 p-6 rounded-md text-center">
                <h3 className="text-xl font-semibold mb-2">Archive Block</h3>
                <p className="text-gray-600">Archive content goes here.</p>
              </div>
            );

          case 'form':
            return (
              <div key={i} className="bg-white p-6 border rounded-md shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Form Block</h3>
                <p className="text-gray-600">Your form will be rendered here.</p>
              </div>
            );

          default:
            return (
              <div
                key={i}
                className="p-4 border-2 border-dashed border-red-400 rounded bg-red-50 text-center"
              >
                Unknown block type: <strong>{block.blockType}</strong>
              </div>
            );
        }
      })}
    </section>
  );
};
