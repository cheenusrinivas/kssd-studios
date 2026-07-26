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
        if (hasScrolled) setKssdVisible(true)
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
        {/* 3D Canvas */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Scene scrollY={scrollY} />
        </div>

        {/* KSSD Text */}
        <div
          className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none"
          style={{
            opacity: kssdVisible ? 1 : 0,
            transform: kssdVisible ? 'translateY(0px)' : 'translateY(80px)',
            transition: 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1), transform 3s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: kssdVisible ? 'blur(0px)' : 'blur(8px)',
          }}
        >
          <h1 className="font-black text-white leading-none text-[18vw] md:text-[14vw] tracking-[0.2em] md:tracking-[0.3em]">
            KSSD
          </h1>
          <p
            className="text-gray-400 uppercase mt-2 text-[10px] md:text-[11px] tracking-[0.6em] md:tracking-[0.9em]"
            style={{
              opacity: kssdVisible ? 1 : 0,
              transition: 'opacity 2s ease 0.5s',
            }}
          >
            Studios
          </p>
        </div>

        {/* Corner labels */}
        <div
          className="absolute top-6 left-4 md:left-6 z-20 pointer-events-none transition-opacity duration-500"
          style={{ opacity: hasScrolled ? 0 : 1 }}
        >
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gray-600 uppercase">Dublin, Ireland</p>
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gray-600 uppercase mt-1">Est. 2026</p>
        </div>

        <div
          className="absolute top-6 right-4 md:right-6 z-20 pointer-events-none transition-opacity duration-500"
          style={{ opacity: hasScrolled ? 0 : 1 }}
        >
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gray-600 uppercase">@kssd_studios</p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-0 right-0 text-center z-20 pointer-events-none transition-opacity duration-500"
          style={{ opacity: hasScrolled ? 0 : 1 }}
        >
          <p className="text-[10px] tracking-[0.3em] text-gray-600 uppercase animate-bounce">Scroll</p>
        </div>
      </section>
    </>
  )
}