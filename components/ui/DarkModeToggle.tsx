'use client'

import { motion } from 'framer-motion'
import { useDarkMode } from '@/hooks/useDarkMode'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="glass-effect rounded-full p-3"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  )
}