'use client'

import { EffectComposer, Bloom, ChromaticAberration, DepthOfField, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function Effects() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        height={300}
      />
      <ChromaticAberration
        offset={[0.002, 0.002]}
        radialModulation={false}
        modulationOffset={0}
      />
      <Noise
        opacity={0.02}
        blendFunction={BlendFunction.SOFT_LIGHT}
      />
      <Vignette
        offset={0.5}
        darkness={0.5}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}