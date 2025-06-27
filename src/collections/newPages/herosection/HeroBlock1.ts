import { Block } from "payload";

import hero from '@/../public/hero/hero1.png'

export const heroLayout1: Block = {
  slug: 'heroLayout1',
  labels: {
    singular: 'Hero Layout 1',
    plural: 'Hero Layouts 1',
  },
  imageURL: typeof hero === 'string' ? hero : hero.src,
  fields: [
    {
      name:"logoImg",
      type:"upload",
      relationTo:"media",
      required:false
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
      required: false,
    },
    {
      name: 'buttonColor',
      type: 'text',
      required: false,
      defaultValue: '#040f4e',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
  ],
};
