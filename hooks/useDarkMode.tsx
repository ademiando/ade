'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type DarkModeContextType = {
  isDark: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is preferred or saved in localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(saved ? JSON.parse(saved) : prefersDark)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(isDark))
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(prev => !prev)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
