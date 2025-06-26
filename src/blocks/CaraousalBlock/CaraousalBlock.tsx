import { Block } from 'payload'
import imgUrl from '@/../public/content/carousal.png'

export const carouselBlock: Block = {
  slug: 'insurance-carousel',
  labels: {
    singular: 'Insurance Carousel',
    plural: 'Insurance Carousels',
  },
  imageURL: typeof imgUrl === 'string' ? imgUrl : imgUrl.src,
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Subheading',
    },
    {
      name: 'caraousalColor',
      type: 'text',
      defaultValue: '#ffffff',
      required: false,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: '#eff0f7',
      required: false,
    },

    {
      name: 'slides',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Carousel Slides',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Slide Image',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Top Title',
        },

        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
      ],
    },
  ],
}
