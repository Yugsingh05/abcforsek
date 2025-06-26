import { Block } from 'payload';

export const InsuranceTypeBlock: Block = {
  slug: 'insurance-type-block',
  labels: {
    singular: 'Insurance Grid',
    plural: 'Insurance Grids',
  },
  fields: [
    {
        name: 'heading',
        type: 'text',
        required: true,
        label: 'Heading',
    },
    {

        name: 'subheading',
        type: 'text',
        required: false,
        label: 'Subheading',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 12,
      label: 'Insurance Types',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Icon Image',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Title',
        },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'Beregn pris',
      label: 'Button Text',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link (URL)',
    },
  ],
};
