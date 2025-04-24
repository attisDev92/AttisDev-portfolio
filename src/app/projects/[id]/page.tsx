'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Github, ArrowLeftCircle, Figma } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { PixelStar } from '@/components/Pixel-art'
import { projects, Project } from '@/lib/projects-list'
import { useLanguage } from '@/context/language-provider'
import ParallaxBackground from '@/components/Parallax-background'

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    if (params.id) {
      const projectId = Number.parseInt(params.id as string)
      const foundProject = projects.find((p) => p.id === projectId)

      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push('/projects')
      }

      setIsLoading(false)
    }
  }, [params.id, router])

  const handlePrevProject = () => {
    if (!project) return

    const currentIndex = projects.findIndex((p) => p.id === project.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1
    router.push(`/projects/${projects[prevIndex].id}`)
  }

  const handleNextProject = () => {
    if (!project) return

    const currentIndex = projects.findIndex((p) => p.id === project.id)
    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0
    router.push(`/projects/${projects[nextIndex].id}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="pixel-border p-4 flex flex-col items-center">
          <div className="loading-bar w-40 mb-4"></div>
          <p className="text-primary">Loading project data...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="pixel-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6">Sorry, the project you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild className="retro-button">
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  const features = language === 'es' ? project.featuresEs : project.featuresEn

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 scanlines">
      <main className="pt-20 flex flex-col items-center max-w-full">
        <ParallaxBackground>
          {/* Project Navigation */}
          <div className="container py-4 flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => router.push('/#projects')}
              className="retro-button flex items-center gap-2"
            >
              <ArrowLeftCircle className="h-4 w-4" />
              Back to All Projects
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" onClick={handlePrevProject} className="retro-button">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={handleNextProject} className="retro-button">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Project Header */}
          <section className="py-8 bg-muted/30">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex border-3 border-primary items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                    {project.category.map((cat) => (
                      <span key={cat} className="text-sm font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold mb-4 relative">
                    {project.title}
                    <div className="absolute -top-6 -left-6 transform rotate-12">
                      <PixelStar className="animate-pulse" />
                    </div>
                  </h1>

                  <p className="text-lg text-foreground/80 mb-6">
                    {language === 'es' ? project.descriptionEs : project.descriptionEn}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-primary rounded-md text-sm font-medium border-2 border-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="arcade-frame">
                    <Image
                      src={project.images[0] || '/placeholder.svg'}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      {language === 'es' ? 'Características' : 'Features'}
                    </h2>

                    <div className="space-y-4 mb-12">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {features?.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-2 h-2 mt-2 bg-blue-200"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      {language === 'es' ? 'Galería de imágenes' : 'Project Gallery'}
                    </h2>

                    <div className="space-y-4">
                      <div className="arcade-frame">
                        <Image
                          src={project.images[activeImage] || '/placeholder.svg'}
                          alt={`${project.title} screenshot ${activeImage + 1}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-sm"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`border-2 rounded-sm overflow-hidden transition-all ${
                              activeImage === index ? 'border-primary' : 'border-transparent'
                            }`}
                          >
                            <Image
                              src={image || '/placeholder.svg'}
                              alt={`${project.title} thumbnail ${index + 1}`}
                              width={400}
                              height={300}
                              className="w-full h-auto"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="sticky top-24"
                  >
                    <div className="p-6 border-2 border-primary/20 rounded-lg bg-background/50 pixel-border">
                      <h3 className="text-xl font-bold mb-4">
                        {language === 'es' ? 'Información del proyecto' : 'Project Info'}
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-foreground/60 mb-1">Project Type</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.category.map((cat) => (
                              <span
                                key={cat}
                                className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-foreground/60 mb-1">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-muted text-foreground/80 rounded-md text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 5 && (
                              <span className="px-2 py-1 bg-muted text-foreground/80 rounded-md text-xs font-medium">
                                +{project.technologies.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="pt-4 space-y-3">
                          {project.demoUrl && (
                            <Button
                              className="w-full retro-button group relative overflow-hidden rounded-md border-2 border-primary bg-primary px-4 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90"
                              asChild
                            >
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <span className="relative z-10 flex items-center justify-center gap-1">
                                  {language === 'es' ? 'Ver demo' : 'View Demo'}
                                  <ExternalLink className="h-4 w-4" />
                                </span>
                                <span className="absolute inset-0 h-full w-full translate-y-9 bg-primary-foreground/20 transition-transform duration-300 group-hover:translate-y-0"></span>
                              </a>
                            </Button>
                          )}

                          {project.codeUrlBackend && (
                            <Button
                              variant="outline"
                              className="w-full retro-button group relative overflow-hidden rounded-md border-2 border-primary/50 bg-background px-4 py-2 font-medium text-primary transition-all hover:text-primary-foreground"
                              asChild
                            >
                              <a href={project.codeUrlBackend || ''} target="_blank" rel="noopener noreferrer">
                                <span className="relative z-10 flex items-center justify-center gap-1">
                                  {language === 'es' ? 'Ver código backend' : 'View Backend Code'}
                                  <Github className="h-4 w-4" />
                                </span>
                                <span className="absolute inset-0 h-full w-full translate-y-9 bg-primary transition-transform duration-300 group-hover:translate-y-0"></span>
                              </a>
                            </Button>
                          )}

                          {project.codeUrlFrontend && (
                            <Button
                              variant="outline"
                              className="w-full retro-button group relative overflow-hidden rounded-md border-2 border-primary/50 bg-background px-4 py-2 font-medium text-primary transition-all hover:text-primary-foreground"
                              asChild
                            >
                              <a href={project.codeUrlFrontend || ''} target="_blank" rel="noopener noreferrer">
                                <span className="relative z-10 flex items-center justify-center gap-1">
                                  {language === 'es' ? 'Ver código frontend' : 'View Frontend Code'}
                                  <Github className="h-4 w-4" />
                                </span>
                              </a>
                            </Button>
                          )}
                          {project.figmaUrl && (
                            <Button
                              variant="outline"
                              className="w-full retro-button group relative overflow-hidden rounded-md border-2 border-primary/50 bg-background px-4 py-2 font-medium text-primary transition-all hover:text-primary-foreground"
                              asChild
                            >
                              <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                                <span className="relative z-10 flex items-center justify-center gap-1">
                                  {language === 'es' ? 'Ver diseño' : 'View Design'}
                                  <Figma className="h-4 w-4" />
                                </span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 border-2 border-primary/20 rounded-lg bg-background/50">
                      <h3 className="text-xl font-bold mb-4">More Projects</h3>

                      <div className="space-y-4">
                        {projects
                          .filter((p) => p.id !== project.id)
                          .slice(0, 3)
                          .map((relatedProject) => (
                            <Link
                              key={relatedProject.id}
                              href={`/projects/${relatedProject.id}`}
                              className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors"
                            >
                              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                <Image
                                  src={relatedProject.images[0] || '/placeholder.svg'}
                                  alt={relatedProject.title}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-sm">{relatedProject.title}</h4>
                                <p className="text-xs text-foreground/70 line-clamp-2">
                                  {language === 'es' ? relatedProject.descriptionEs : relatedProject.descriptionEn}
                                </p>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxBackground>
      </main>
    </div>
  )
}
