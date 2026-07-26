'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import HoodieModel from './HoodieModel'

export default function Scene({ scrollY = 0 }: { scrollY?: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, 3, 2]} intensity={1} color="#ffffff" />
      <pointLight position={[0, -5, 3]} intensity={0.5} color="#aaaaaa" />
      <Suspense fallback={null}>
        <HoodieModel scrollY={scrollY} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}