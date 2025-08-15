'use client'

import React, { createContext, use, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: 'light' as Theme,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useState<Theme>('light')

  useEffect(() => {
    // Always set theme to light mode
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  return <ThemeContext value={{ setTheme: () => null, theme }}>{children}</ThemeContext>
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
