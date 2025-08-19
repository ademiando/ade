'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Scene from '@/components/three/Scene'
import Button from '@/components/ui/Button'
import DarkModeToggle from '@/components/ui/DarkModeToggle'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Create The
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium 3D portfolio with cinematic effects, built with Next.js 14 and React Three Fiber
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg">
            View Work
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <DarkModeToggle />
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-8 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center space-x-2 text-gray-300">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
          <span>Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  )
}