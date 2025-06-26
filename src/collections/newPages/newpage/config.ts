import { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { revalidateDelete, revalidatePage } from '@/collections/Pages/hooks/revalidatePage'
import { heroLayout1 } from '../herosection/HeroLayout1'
import { heroLayout2 } from '../herosection/HeroLayout2'
import { heroLayout3 } from '../herosection/HeroLayout3'
import { Content } from '@/blocks/Content/config'
import { FormBlock } from '@/blocks/Form/config'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { generatePreviewNewpagePath } from '@/utilities/generatePrevieeNewPage'
import { ImageWithContent } from '@/blocks/Image_with_content'
import AdvantagesBlock from '@/blocks/AdvantagesBlock/config'
import MultiplePriceDescriptionBlock from '@/blocks/MultiplePriceDescriptionBlock/config'
import { carouselBlock } from '@/blocks/CaraousalBlock/CaraousalBlock'
import { InsuranceTypeBlock } from '@/blocks/insurance-grid-block/insuranceGridBlock'

export const NewPage: CollectionConfig = {
  slug: 'newpage',
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'newpage',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewNewpagePath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'newpage',
        req,
      }),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero Section',
          fields: [
            {
              name: 'selectedHeroLayout',
              type: 'blocks',
              label: 'Choose Hero Layout',
              blocks: [heroLayout1, heroLayout2, heroLayout3],
              required: true,
              admin: {
                initCollapsed: false,
              },
            },
          ],
        },
        {
          name: 'pageContent',
          label: 'Page Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              label: 'Content Blocks',
              blocks: [
                Content,
                FormBlock,
                ImageWithContent,
                AdvantagesBlock,
                MultiplePriceDescriptionBlock,
                carouselBlock,
                InsuranceTypeBlock
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
        },
        {
          name: 'seo',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
