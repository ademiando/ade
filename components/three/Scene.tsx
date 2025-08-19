'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'
import Particles from './Particles'
import Nebula from './Nebula'
import Aurora from './Aurora'
import CameraRig from './CameraRig'
import Effects from './Effects'

export default function Scene() {
  return (
    <Canvas
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      dpr={Math.min(2, typeof window !== 'undefined' ? window.devicePixelRatio : 1)}
      className="absolute inset-0"
    >
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 10, 25]} />
      
      <Suspense fallback={null}>
        <CameraRig />
        <Particles count={15000} />
        <Nebula />
        <Aurora />
        <Effects />
      </Suspense>
    </Canvas>
  )
}