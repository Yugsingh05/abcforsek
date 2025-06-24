import { Block } from "payload";
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const heroLayout1: Block = {
  slug: 'heroLayout1',
  labels: {
    singular: 'Hero Layout 1',
    plural: 'Hero Layouts 1',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        { label: 'None', value: 'none' },
        { label: 'High Impact', value: 'highImpact' },
        { label: 'Medium Impact', value: 'mediumImpact' },
        { label: 'Low Impact', value: 'lowImpact' },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: false,
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonColor',
      type: 'text',
      required: false,
      defaultValue: '#040f4e',
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
};
