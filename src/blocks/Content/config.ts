import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

import imgurl from '@/../public/content/content.png'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        label: 'One Third',
        value: 'oneThird',
      },
      {
        label: 'Half',
        value: 'half',
      },
      {
        label: 'Two Thirds',
        value: 'twoThirds',
      },
      {
        label: 'Full',
        value: 'full',
      },
    ],
  },
 {
  name: 'richText',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ rootFeatures }) => {
      return [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
        OrderedListFeature(),
        UnorderedListFeature()
      ]
    },
  }),
  label: false,
},

  {
    name: 'alignment',
    type: 'select',
    defaultValue: 'left',
    options: [
      {
        label: 'Left',
        value: 'left',
      },
      {
        label: 'Center',
        value: 'center',
      },
      {
        label: 'Right',
        value: 'right',
      },
    ],
    required: false,
  },
  {
    name: 'backgroundColor',
    type: 'text',
    defaultValue: '#ffffff',
    required: false,
  },
  {
    name: 'buttonText',
    type: 'text',
    required: false,
  },
  {
    name: 'buttonLink',
    type: 'text',
    required: false,
  },
  {
    name: 'buttonColor',
    type: 'text',
    required: false,
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
