import { Block } from "payload";

import imgUrl from '@/../public/content/price-options.png'
const MultiplePriceDescriptionBlock :Block = {
    slug:'multiple-price-block',
    labels: {
        singular: 'Multiple Price Block',
        plural: 'Multiple Price Blocks',
    },
    imageURL: typeof imgUrl === 'string' ? imgUrl : imgUrl.src,
    fields: [
        {
            name: 'prices',
            type: 'array',
            label: 'Price Cards',
            minRows: 1,
            maxRows: 6,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'subtitle',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'buttonTitle',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'buttonLink',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'buttonColor',
                    type: 'text',
                    required: false,
                    defaultValue: '#4658C2',
                }
            ],
        },
        {
            name: 'backgroundColor',
            type: 'text',
            required: false,
            defaultValue: '#f0f1f9',
        }
    ],
}

export default MultiplePriceDescriptionBlock