'use client'

import { useState, useEffect } from 'react'

export function useParallax() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const x = (clientX / window.innerWidth) * 2 - 1
      const y = -(clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { mousePosition }
}