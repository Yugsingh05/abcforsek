import { Block } from "payload";
import imgUrl from '@/../public/content/contact-options.png'

export const contactBlock: Block = {
  slug: "contact-options-block",
  labels: {
    "singular": "Contact Options Block",
    "plural": "Contact Options Blocks"
  },

  imageURL: typeof imgUrl === 'string' ? imgUrl : imgUrl.src,
 
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      required: true
    },
    {
      name: "subheading",
      type: "richText",
      label: "Subheading",
      required: true
    },
    {
      name: "description",
      type: "richText",
      label: "Description",
      required: true
    },
    {
      name: "contactOptions",
      type: "array",
      label: "Contact Options",
      minRows: 1,
      maxRows: 6,
      defaultValue: [],
      fields: [
        {
          name: "icon",
          type: "upload",
          label: "Icon",
          required: true,
          "relationTo": "media"
        },
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true
        },
        {
          name: "description",
          type: "richText",
          label: "Description",
          required: true
        }
      ]
    }
  ]
}