'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'

const Scene = dynamic(() => import('@/components/3d/Scene'), { ssr: false })

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [kssdVisible, setKssdVisible] = useState(false)
  const [navVisible, setNavVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrollY(y)
  
      if (y < 50) {
        if (hasScrolled) {
          setKssdVisible(true)
        }
        setNavVisible(false)
      } else if (y >= 50 && y < 350) {
        setHasScrolled(true)
        setKssdVisible(true)
        setNavVisible(false)
      } else if (y >= 350) {
        setHasScrolled(true)
        setKssdVisible(false)
        setNavVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const scrollProgress = Math.min(scrollY / 600, 1)

  return (
    <>
      <Navbar visible={navVisible} />

      <section className="relative w-full h-screen bg-black overflow-hidden">
        {/* 3D Canvas — always on top */}
        <div className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
          <Scene scrollY={scrollY} />
        </div>

        {/* KSSD Text — behind hoodie, fades in then out */}
        {/* KSSD Text — dramatic slow rise */}
<div
  className="absolute inset-0 z-0 flex flex-col items-center justify-center"
  style={{
    opacity: kssdVisible && scrollProgress < 0.3 ? 1 : 0,
    transform: kssdVisible && scrollProgress < 0.3
      ? 'translateY(0px)'
      : 'translateY(80px)',
    transition: 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1), transform 3s cubic-bezier(0.16, 1, 0.3, 1)',
    filter: kssdVisible && scrollProgress < 0.3 ? 'blur(0px)' : 'blur(8px)',
  }}
>
  <h1
    className="font-black text-white leading-none"
    style={{
      fontSize: 'clamp(80px, 14vw, 200px)',
      letterSpacing: '0.3em',
    }}
  >
    KSSD
  </h1>
  <p
    className="text-gray-400 uppercase mt-3"
    style={{
      fontSize: '11px',
      letterSpacing: '0.9em',
      transition: 'opacity 3s ease 0.8s',
      opacity: kssdVisible ? 1 : 0,
    }}
  >
    Studios
  </p>
</div>

        {/* Corner labels */}
        <div className="absolute top-6 left-6 z-20 pointer-events-none"
          style={{ opacity: 1 - scrollProgress * 3 }}>
          <p className="text-xs tracking-[0.4em] text-gray-600 uppercase">Dublin, Ireland</p>
          <p className="text-xs tracking-[0.4em] text-gray-600 uppercase mt-1">Est. 2026</p>
        </div>

        <div className="absolute top-6 right-6 z-20 pointer-events-none"
          style={{ opacity: 1 - scrollProgress * 3 }}>
          <p className="text-xs tracking-[0.4em] text-gray-600 uppercase">@kssd_studios</p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-0 right-0 text-center z-20 pointer-events-none"
          style={{ opacity: scrollY < 50 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          <p className="text-xs tracking-[0.3em] text-gray-600 uppercase animate-bounce">Scroll</p>
        </div>
      </section>
    </>
  )
}