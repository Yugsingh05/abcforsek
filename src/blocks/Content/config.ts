import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  UnorderedListFeature,
  // TextColorFeature,
  // FontSizeFeature,
} from '@payloadcms/richtext-lexical'

import { slateEditor } from '@payloadcms/richtext-slate' 
import imgurl from '@/../public/content/content.png'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      { label: 'One Third', value: 'oneThird' },
      { label: 'Half', value: 'half' },
      { label: 'Two Thirds', value: 'twoThirds' },
      { label: 'Full', value: 'full' },
    ],
  },
 {
  name: 'richText',
  type: 'richText',
  editor: slateEditor({
    admin: {
      elements: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'ul',
        'ol',
        'li',
        'blockquote',
        'link',
        'relationship',
        'upload',
        'textAlign', // Only works with elements that support alignment
      ],
      leaves: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'code',
      ],
    },
  }),
}
,
  {
    name: 'alignment',
    type: 'select',
    defaultValue: 'left',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  {
    name: 'backgroundColor',
    type: 'text',
    defaultValue: '#ffffff',
  },
  {
    name: 'buttonText',
    type: 'text',
  },
  {
    name: 'buttonLink',
    type: 'text',
  },
  {
    name: 'buttonColor',
    type: 'text',
  },
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  imageURL: typeof imgurl === 'string' ? imgurl : imgurl.src,
  fields: [
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
}
