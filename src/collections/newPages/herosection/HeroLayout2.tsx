import { Block } from 'payload';

export const heroLayout2: Block = {
  slug: 'heroLayout2',
  labels: {
    singular: 'Insurance Hero',
    plural: 'Insurance Heroes',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Background Image',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Main Heading',
      defaultValue: 'Forsikring gjort simpelt',
    },
    {
      name: 'rating',
      type: 'group',
      label: 'Trust Rating',
      fields: [
        {
          name: 'score',
          type: 'text',
          required: true,
          defaultValue: '4.4 / 5',
        },
        {
          name: 'reviews',
          type: 'number',
          required: true,
          defaultValue: 1649,
        },
        
      ],
    },
    {
      name: 'infoCards',
      type: 'array',
      label: 'Info Cards',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Card Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Card Description',
        },
      ],
    },
  ],
};
