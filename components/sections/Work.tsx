'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Cosmic Explorer",
    description: "Interactive 3D visualization of celestial bodies",
    image: "/api/placeholder/600/400",
    tags: ["Three.js", "React", "WebGL"],
  },
  {
    id: 2,
    title: "Neural Network",
    description: "AI-powered data visualization platform",
    image: "/api/placeholder/600/400",
    tags: ["AI", "Next.js", "D3.js"],
  },
  {
    id: 3,
    title: "Quantum Interface",
    description: "Revolutionary UI for quantum computing",
    image: "/api/placeholder/600/400",
    tags: ["Quantum", "UI/UX", "WebAssembly"],
  },
  {
    id: 4,
    title: "Astral Projection",
    description: "VR experience exploring cosmic phenomena",
    image: "/api/placeholder/600/400",
    tags: ["VR", "WebXR", "3D Animation"],
  },
]

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="work" className="py-20 px-4 relative bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white"
            variants={itemVariants}
          >
            Featured Work
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore my latest projects that push the boundaries of web technology and design
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl glass-effect cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="w-full h-full bg-gray-800 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}