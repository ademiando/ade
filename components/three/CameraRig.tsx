'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function CameraRig() {
  const { camera } = useThree()
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth camera movement
      const targetX = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
      const targetY = Math.cos(state.clock.elapsedTime * 0.3) * 0.5
      const targetZ = 5 + Math.sin(state.clock.elapsedTime * 0.2) * 0.5

      camera.position.x += (targetX - camera.position.x) * delta * 2
      camera.position.y += (targetY - camera.position.y) * delta * 2
      camera.position.z += (targetZ - camera.position.z) * delta * 2

      // Subtle rotation
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1,
        delta * 2
      )
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        Math.cos(state.clock.elapsedTime * 0.15) * 0.1,
        delta * 2
      )
    }
  })

  return <group ref={groupRef} />
}