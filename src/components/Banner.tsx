'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/context/language-provider'
import { Button } from '@/components/ui/Button'
import { ArrowDown, Code, Download, ChevronRight, ChevronLeft } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Banner() {
  const { t, language } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const topImageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      },
    })
  }, [controls])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
      ctx.lineWidth = 1

      const horizonY = canvas.height / 2
      ctx.beginPath()
      ctx.moveTo(0, horizonY)
      ctx.lineTo(canvas.width, horizonY)
      ctx.stroke()

      const gridSize = 50
      const gridDepth = 20

      for (let i = 0; i <= gridDepth; i++) {
        const perspective = i / gridDepth
        const y = horizonY + (canvas.height / 2) * perspective

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()

        const spacing = gridSize / (perspective + 0.1)
        const centerX = canvas.width / 2
        const offset = (mousePosition.x - centerX) * 0.3 * perspective

        for (let x = centerX; x < canvas.width; x += spacing) {
          ctx.beginPath()
          ctx.moveTo(centerX + (x - centerX) + offset, horizonY)
          ctx.lineTo(x + offset, y)
          ctx.stroke()
        }

        for (let x = centerX; x > 0; x -= spacing) {
          ctx.beginPath()
          ctx.moveTo(centerX - (centerX - x) + offset, horizonY)
          ctx.lineTo(x + offset, y)
          ctx.stroke()
        }
      }

      const sunRadius = 0
      const sunX = canvas.width / 2
      const sunY = horizonY - 20
      const gradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius)
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)')
      gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.3)')
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2)
      ctx.fill()

      const mountainCount = 5
      const mountainHeight = 100

      for (let i = 0; i < mountainCount; i++) {
        const y = horizonY - (i * mountainHeight) / mountainCount
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 - i * 0.01})`

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    animate()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mousePosition])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden retro-wave">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background"></div>

      <div className="container relative z-10">
        <div className="flex flex-col  items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 neon-box">
              <span className="font-medium">Christian Burnham Masabanda</span>
              <Code className="h-5 w-5" />
            </div>

            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 leading-tight neon-glow">
              {t('banner.title')}
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-lg">{t('banner.subtitle')}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="retro-button group relative overflow-hidden rounded-md px-6 py-3 font-bold text-primary-foreground transition-all bg-primary border-primary"
                asChild
              >
                <Link href="/#projects">
                  <span className="relative z-10 flex items-center gap-2">
                    {t('banner.cta')}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 h-full w-full translate-y-9 bg-primary-foreground/20 transition-transform duration-300 group-hover:translate-y-0"></span>
                </Link>
              </Button>

              <Button
                onClick={() => {
                  if (language === 'en') {
                    window.open('/CV-Christian Burnham Masabanda - ENG.pdf', '_blank')
                  } else {
                    window.open('/CV-Christian Burnham Masabanda.pdf', '_blank')
                  }
                }}
                variant="outline"
                size="lg"
                className="retro-button group relative overflow-hidden rounded-md bg-background px-6 py-3 font-bold text-primary transition-all hover:text-primary-foreground"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('banner.downloadCV')}
                  <Download className="h-4 w-4" />
                </span>
                <span className="absolute inset-0 h-full w-full translate-y-9 bg-primary transition-transform duration-300 group-hover:translate-y-0"></span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[400px] mx-auto"
          >
            <div className="arcade-screen p-1 bg-black/80 aspect-square w-full">
              <div ref={containerRef} className="relative w-full h-full overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/attis_img.jpg"
                      alt="Bottom Image"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  <div
                    ref={topImageRef}
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{
                      clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                      transition: 'clip-path 0.2s ease-out',
                    }}
                  >
                    <Image
                      src="/attis-2.jpg"
                      alt="Top Image"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  <motion.div
                    ref={sliderRef}
                    className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize neon-box z-10"
                    initial={{ left: '50%' }}
                    style={{
                      left: `${sliderPosition}%`,
                      transition: 'left 0.2s ease-out',
                    }}
                    drag="x"
                    dragConstraints={containerRef}
                    dragElastic={0}
                    dragMomentum={false}
                    onDragStart={() => {
                      if (sliderRef.current) {
                        sliderRef.current.style.transition = 'none'
                      }
                      if (topImageRef.current) {
                        topImageRef.current.style.transition = 'none'
                      }
                    }}
                    onDrag={(_, info) => {
                      if (!containerRef.current || !sliderRef.current || !topImageRef.current) return

                      const rect = containerRef.current.getBoundingClientRect()
                      const x = Math.max(0, Math.min(info.point.x - rect.left, rect.width))
                      const percentage = (x / rect.width) * 100

                      setSliderPosition(percentage)

                      sliderRef.current.style.left = `${percentage}%`

                      topImageRef.current.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`
                    }}
                    onDragEnd={() => {
                      if (sliderRef.current) {
                        sliderRef.current.style.transition = 'left 0.2s ease-out'
                      }
                      if (topImageRef.current) {
                        topImageRef.current.style.transition = 'clip-path 0.2s ease-out'
                      }
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-12 bg-primary/80 rounded-full flex items-center justify-center">
                      <div className="flex flex-col gap-1">
                        <ChevronRight className="h-3 w-3 text-primary-foreground" />
                        <ChevronLeft className="h-3 w-3 text-primary-foreground" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute inset-0 scanlines pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/#about">
          <ArrowDown className="h-8 w-8 text-primary" />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20"></div>
    </section>
  )
}
