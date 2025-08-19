'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Aurora() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uIntensity: { value: 0.3 },
  }), [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform float uIntensity;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    // Based on https://www.shadertoy.com/view/MslGR8
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453;
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i + vec2(0.0,0.0)), 
                 hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), 
                   hash(i + vec2(1.0,1.0)), u.x), u.y);
    }
    
    void main() {
      vec2 uv = vUv * 2.0 - 1.0;
      float time = uTime * 0.1;
      
      // Create aurora effect
      float n = noise(uv * 2.0 + time);
      n = smoothstep(0.3, 0.7, n);
      
      vec3 color = mix(
        vec3(0.1, 0.8, 0.5),
        vec3(0.3, 0.2, 0.8),
        length(uv)
      );
      
      float alpha = n * (1.0 - length(uv)) * uIntensity;
      gl_FragColor = vec4(color, alpha);
    }
  `

  return (
    <mesh ref={meshRef} scale={12} rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[8, 0.5, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}