'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 px-4 relative bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
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
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Passionate about creating immersive digital experiences that blend cutting-edge technology with beautiful design
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
              <div className="space-y-4">
                {[
                  { name: '3D Web Development', level: 95 },
                  { name: 'React/Next.js', level: 90 },
                  { name: 'UI/UX Design', level: 85 },
                  { name: 'Motion Design', level: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300">
              With over 5 years of experience in web development, I specialize in creating
              immersive 3D experiences that push the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-gray-300">
              My work combines technical expertise with artistic vision to create digital
              experiences that are not only functional but also emotionally engaging.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Three.js', 'React', 'TypeScript', 'WebGL', 'Framer Motion', 'TailwindCSS'].map((tech) => (
                <div
                  key={tech}
                  className="glass-effect rounded-lg px-4 py-2 text-center text-white"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}