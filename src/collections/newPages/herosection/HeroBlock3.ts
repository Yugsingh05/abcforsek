import { Block } from 'payload'

export const heroLayout3: Block = {
  slug: 'heroLayout3',
  labels: {
    singular: 'Hero Layout 3',
    plural: 'Hero Layouts 3',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Ulykke – bliv bedre stillet',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'En ulykke kan vende op og ned på dit liv – og du ved aldrig hvad hverdagen kan bringe.\n\nMed ABCforsikring er du økonomisk bedre stillet, hvis du skulle komme til skade.\n\nVi kan dog ikke fjerne risikoen for at det sker, så pas godt på dig selv.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Make sure 'media' is your Upload collection
      required: true,
    },
    {
      name: 'textColor',
      type: 'text',
      required: false,
      defaultValue: '#ffffff',
    },
  ],
}
