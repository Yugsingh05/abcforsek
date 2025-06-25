import {  Field } from 'payload';
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const HeroSection1: Field = {
  name: 'HeroSection1',
  type: 'group',
  fields: [
    {
      name: 'HeroSection1',
      type: 'group',
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
          required: true,
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
          label: false,
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
    },
  ],
};
