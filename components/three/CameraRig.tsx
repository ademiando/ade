'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useParallax } from '@/hooks/useParallax'

export default function CameraRig() {
  const { camera } = useThree()
  const groupRef = useRef<THREE.Group>(null)
  const { mousePosition } = useParallax()

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth camera movement with parallax
      const targetX = mousePosition.x * 0.5
      const targetY = mousePosition.y * 0.5
      const targetZ = 5 + Math.sin(state.clock.elapsedTime * 0.2) * 0.5

      camera.position.x += (targetX - camera.position.x) * delta * 2
      camera.position.y += (targetY - camera.position.y) * delta * 2
      camera.position.z += (targetZ - camera.position.z) * delta * 2

      // Subtle rotation based on mouse position
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition.y * 0.1,
        delta * 2
      )
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.1,
        delta * 2
      )
    }
  })

  return <group ref={groupRef} />
}