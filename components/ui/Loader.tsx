'use client'

import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg"
        >
          Loading cinematic experience...
        </motion.p>
      </div>
    </div>
  )
}