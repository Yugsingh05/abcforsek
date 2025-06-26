// src/blocks/AdvantagesBlock.ts
import type { Block } from 'payload';

import imgUrl from '@/../public/content/advantages.png'

 const AdvantagesBlock: Block = {
  slug: 'advantages-block',
  labels: {
    singular: 'Advantages Block',
    plural: 'Advantages Blocks',
  },
  imageURL: typeof imgUrl === 'string' ? imgUrl : imgUrl.src,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Advantages of ABC',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
      defaultValue: 'There are many, including:',
    },
    {
      name: 'advantages',
      type: 'array',
      label: 'Advantage Cards',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'media', 
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
        name:"backgroundColor",
        type:'text',
        defaultValue: '#ffffff',
        required:false
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Calculate price',
    },
    {
      name: 'buttonLink',
      type: 'text',
      admin: {
        placeholder: '/pricing',
      },
    },
    {
      name : 'buttonColor',
      type: 'text',
      defaultValue: '#040f4e',
      required: false
    }
  ],
};

export default AdvantagesBlock;