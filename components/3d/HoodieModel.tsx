'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function HoodieModel({ scrollY = 0 }: { scrollY?: number }) {
  const { scene } = useGLTF('/models/hoodie.glb')
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const isMobile = window.innerWidth < 768
    const scale = (isMobile ? 1.2 : 2) / maxDim
    scene.scale.setScalar(scale)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center.multiplyScalar(scale))
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#2a2a2a'),
          roughness: 0.4,
          metalness: 0.3,
        })
        child.castShadow = true
      }
    })
  }, [scene])
  
  useFrame(() => {
    if (!groupRef.current) return
    const isMobile = window.innerWidth < 768
    groupRef.current.rotation.y += 0.008
    const scrollProgress = Math.min(scrollY / 600, 1)
    groupRef.current.position.x = 0
    groupRef.current.position.y = (isMobile ? 0.5 : 2.5) - scrollProgress * 6
    const scale = Math.max(0, 1 - scrollProgress * 1.5)
    groupRef.current.scale.setScalar(scale)
    groupRef.current.visible = scale > 0.05
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}