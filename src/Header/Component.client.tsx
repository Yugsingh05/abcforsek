'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Menu, X, SearchIcon } from 'lucide-react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import CustomButton from '@/components/CustomComponent/CustomButton'
import { NavButtonsAndSearchComponent } from './Nav/NavButtonAndSearchComponent'

interface HeaderClientProps {
  data: Header
}



export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])

  return (
    <header className="container relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-4 flex justify-between items-center">
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>

        {/* Hamburger Menu (mobile only) */}
        <div className="lg:hidden">
          <button
            className="text-[#040f4e] bg-white border rounded-md p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav + Buttons */}
        <div className="hidden lg:flex">
          <HeaderNav data={data} />
        </div>

        <div className="hidden lg:flex items-center gap-6">
        <NavButtonsAndSearchComponent/>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-start gap-4 pb-4 px-2 animate-slide-down mx-auto">
          <HeaderNav data={data} />
          <div className="flex items-center gap-6">
          <NavButtonsAndSearchComponent/>
          </div>
        </div>
      )}
    </header>
  )
}

