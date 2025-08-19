'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Nebula() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uIntensity: { value: 0.5 },
  }), [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.1
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
    
    // Noise functions by Inigo Quilez
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
      float time = uTime * 0.2;
      
      // Create nebula effect
      float n = noise(uv * 3.0 + time);
      n += 0.5 * noise(uv * 6.0 + time * 1.5);
      n += 0.25 * noise(uv * 12.0 + time * 2.0);
      
      vec3 color = mix(
        vec3(0.1, 0.2, 0.8),
        vec3(0.8, 0.2, 0.4),
        n
      );
      
      color = mix(
        color,
        vec3(0.9, 0.9, 1.0),
        noise(uv * 2.0 + time * 0.5) * 0.3
      );
      
      float alpha = n * 0.3;
      gl_FragColor = vec4(color * uIntensity, alpha);
    }
  `

  return (
    <mesh ref={meshRef} scale={15}>
      <sphereGeometry args={[1, 64, 64]} />
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