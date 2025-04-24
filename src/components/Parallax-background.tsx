'use client'

import type React from 'react'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface ParallaxBackgroundProps {
  children: React.ReactNode
}

export default function ParallaxBackground({ children }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const layersRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      layersRef.current.forEach((layer, index) => {
        if (!layer) return
        const speed = (index + 1) * 20
        const xOffset = x * speed
        const yOffset = y * speed
        layer.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`
      })
    }

    const handleScroll = () => {
      if (!containerRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()
      const scrollPosition = top / height

      layersRef.current.forEach((layer, index) => {
        if (!layer) return
        const speed = (index + 1) * 100
        const yOffset = scrollPosition * speed
        const currentTransform = layer.style.transform
        if (currentTransform.includes('translate3d')) {
          const matches = currentTransform.match(/translate3d$$([^,]+),\s*([^,]+),\s*([^)]+)$$/)
          if (matches && matches.length >= 4) {
            const xOffset = matches[1]
            layer.style.transform = `translate3d(${xOffset}, ${yOffset}px, 0)`
          }
        } else {
          layer.style.transform = `translate3d(0, ${yOffset}px, 0)`
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="parallax-container relative">
      <div
        ref={(el) => {
          layersRef.current[1] = el
        }}
        className="parallax-layer"
        style={{ zIndex: 2 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`pixel-${i}`}
            className="absolute w-2 h-2 bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? '0' : '50%',
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div
        ref={(el) => {
          layersRef.current[2] = el
        }}
        className="parallax-layer"
        style={{ zIndex: 3 }}
      >
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 opacity-10">
          {Array.from({ length: 12 * 12 }).map((_, i) => (
            <div
              key={`grid-${i}`}
              className="border border-primary/20"
              style={{
                boxShadow: Math.random() > 0.95 ? '0 0 10px rgba(var(--primary), 0.5)' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
