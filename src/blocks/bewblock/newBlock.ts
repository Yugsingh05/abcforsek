import { Block } from 'payload'

import imgUrl from '@/../public/content/advantages.png'

export const NewTestBlock: Block = {
  slug: 'test-block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'defaultText',
      type: 'text',
      required: false,
      label: 'Default Text',
      defaultValue: 'This is a default text field',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Icon Image',
    },
  ],
}
