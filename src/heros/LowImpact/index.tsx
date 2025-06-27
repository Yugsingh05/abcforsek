import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

// Extend the Page['hero'] type to include children
type LowImpactProps = Page['hero'] & { 
  children?: React.ReactNode 
}

export const LowImpactHero: React.FC<LowImpactProps> = (props) => {
  const { richText, children } = props || {}
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]">
        {children || (richText && <RichText data={richText} enableGutter={false} />)}
      </div>
    </div>
  )
}
