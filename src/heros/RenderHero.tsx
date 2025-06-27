import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

// Add the missing 'type' property to the Page['hero'] type
type HeroProps = Page['hero'] & {
  type?: 'highImpact' | 'lowImpact' | 'mediumImpact' | 'none' | string
}

export const RenderHero: React.FC<HeroProps> = (props) => {
  const { type, ...restProps } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type as keyof typeof heroes]

  if (!HeroToRender) return null

  return <HeroToRender {...restProps} />
}
