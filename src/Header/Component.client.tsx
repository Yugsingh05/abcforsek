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
        <div className="md:hidden">
          <button
            className="text-[#040f4e] bg-white border rounded-md p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav + Buttons */}
        <div className="hidden md:flex">
          <HeaderNav data={data} />
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/search"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#040f4e] hover:bg-[#030c3c] transition"
          >
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 h-5 text-white" />
          </Link>
          <CustomButton
            buttonText="Anmeld Scalde"
            buttonLink="/search"
            backgroundColor="#040f4e"
            className="mt-0"
          />
          <CustomButton
            buttonText="Min Side"
            buttonLink="/search"
            backgroundColor="#7f86e5"
            className="mt-0"
          />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 pb-4 px-2 animate-slide-down mx-auto">
          <HeaderNav data={data} />
         <div className='flex items-center gap-6'>
           <Link
            href="/search"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#040f4e] hover:bg-[#030c3c] transition"
          >
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 h-5 text-white" />
          </Link>
          <CustomButton
            buttonText="Anmeld Scalde"
            buttonLink="/search"
            backgroundColor="#040f4e"
            className="mt-0"
          />
          <CustomButton
            buttonText="Min Side"
            buttonLink="/search"
            backgroundColor="#7f86e5"
            className="mt-0"
          />
         </div>
        </div>
      )}
    </header>
  )
}
