import { Block } from 'payload';

export const heroLayout3: Block = {
  slug: 'heroLayout3',
  labels: {
    singular: 'Hero Layout 3',
    plural: 'Hero Layouts 3',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: '#ffffff',
    },
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
};
