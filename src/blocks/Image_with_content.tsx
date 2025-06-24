import type { Block } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  InlineToolbarFeature,
  FixedToolbarFeature
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const ImageWithContent: Block = {
  slug: 'image-with-content',
  interfaceName: 'ImageWithContentBlock',
  imageURL: 'https://icon-url-preview-for-admin.com/image-icon.svg', // Optional: admin preview icon
  fields: [
    {
      name: 'layout',
      type: 'select',
      label: 'Image Position',
      defaultValue: 'left',
      options: [
        { label: 'Image Left / Text Right', value: 'left' },
        { label: 'Image Right / Text Left', value: 'right' },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Replace 'media' with your collection slug for media
      required: true,
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image Alt Text',
      admin: {
        description: 'Important for accessibility and SEO.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4' , 'h1', 'h5', 'h6'],
            
          }),
          InlineToolbarFeature(),
          FixedToolbarFeature(),
        ],
      }),
    },
    {
      name: 'enableButton',
      type: 'checkbox',
      label: 'Enable Button',
    },
     {
    name:"backgroundColor",
    type:'text',
    defaultValue: '#ffffff',
    required:false
  },
    link({
      overrides: {
        admin: {
          condition: (_, siblingData) => siblingData?.enableButton,
        },
      },
    }),
    {
      name: 'contentAlignment',
      type: 'select',
      label: 'Content Text Alignment',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
  ],
}
