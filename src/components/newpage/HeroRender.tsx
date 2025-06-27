'use client'

import HeroRender1 from './HeroRenders/HeroRender1'
import HeroRender2 from './HeroRenders/HeroRender2'
import HeroRender3 from './HeroRenders/HeroRender3'

export const RenderHeroLayout = ({ layout }: { layout: any[] }) => {
  if (!layout || !layout.length) return null

  return (
    <>
      <div className="w-full h-full px-4 md:px-12">
        {layout.map((block) => {
          if (block.blockType === 'heroLayout1') {
            return <HeroRender1 block={block}  key={block.id} />
          } else if (block.blockType === 'heroLayout2') {
            return (
              <HeroRender2
                key={block.id}
                backgroundImage={block.backgroundImage}
                heading={block.heading}
                rating={block.rating}
                infoCards={block.infoCards}
              />
            )
          } else if (block.blockType === 'heroLayout3') {
            return <HeroRender3 block={block} key={block.id} />
          } else {
            return null
          }
        })}
      </div>
    </>
  )
}
