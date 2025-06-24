'use client';

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
    <section className="w-full space-y-10">
      {layout.map((block, i) => {
        switch (block.blockType) {
          case 'callToAction':
            return (
              <div key={i} className="bg-blue-100 p-6 rounded text-center">
                <h2 className="text-2xl font-bold">{block.title}</h2>
                <p className="mt-2">{block.content}</p>
                {block.button && (
                  <a
                    href={block.button.link}
                    className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded"
                  >
                    {block.button.label}
                  </a>
                )}
              </div>
            );

          case 'content':
            return (
              <div key={i} className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: block.content }} />
              </div>
            );

          case 'mediaBlock':
            return (
              <div key={i} className="text-center">
                {block.media?.url && (
                  <img src={block.media.url} alt="Media Block" className="mx-auto max-w-full" />
                )}
              </div>
            );

          case 'archive':
            return (
              <div key={i} className="bg-gray-100 p-4">
                <h3 className="font-bold mb-2">Archive Block</h3>
                <p>Placeholder for archive content.</p>
              </div>
            );

          case 'form':
            return (
              <div key={i}>
                <h3 className="font-bold mb-2">Form Block</h3>
                <p>Embed your form logic here.</p>
              </div>
            );

          default:
            return (
              <div key={i} className="p-4 border border-red-400">
                Unknown block: <strong>{block.blockType}</strong>
              </div>
            );
        }
      })}
    </section>
  );
};
