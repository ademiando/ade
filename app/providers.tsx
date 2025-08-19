'use client'

import { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { DarkModeProvider } from '@/hooks/useDarkMode'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </DarkModeProvider>
  )
}