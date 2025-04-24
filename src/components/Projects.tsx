'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/language-provider'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Github, Code, Server, Palette, ArrowRight, Figma } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { projects } from '@/lib/projects-list'

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'uiux'

export default function Projects() {
  const { t, language } = useLanguage()
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({})

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true
    return project.category.includes(activeCategory as 'frontend' | 'backend' | 'uiux')
  })

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'frontend':
        return <Code className="h-4 w-4" />
      case 'backend':
        return <Server className="h-4 w-4" />
      case 'uiux':
        return <Palette className="h-4 w-4" />
      default:
        return null
    }
  }

  const handleImageHover = (projectId: number, imageIndex: number) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectId]: imageIndex,
    }))
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 loading-bar"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['all', 'frontend', 'backend', 'uiux'] as ProjectCategory[]).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`
                retro-button rounded-md 
                ${
                  activeCategory === category
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-primary/50 bg-background text-foreground hover:border-primary hover:bg-primary/10'
                }
                transition-all
              `}
            >
              <span className="flex items-center gap-2">
                {category !== 'all' && getCategoryIcon(category)}
                {t(`projects.${category}`)}
              </span>
            </Button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div
                className={`
                  w-full rounded-xl overflow-hidden
                  ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-2 border-primary/30 shadow-[0_0_15px_rgba(0,255,255,0.15)]'
                      : 'bg-white/80 border-2 border-primary/20 shadow-lg'
                  }
                  transition-all duration-300 hover:border-primary/60
                  ${theme === 'dark' ? 'hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]' : 'hover:shadow-xl'}
                `}
              >
                <div className="relative aspect-[21/9] w-full overflow-hidden">
                  {project.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        activeImageIndex[project.id] === idx ||
                        (activeImageIndex[project.id] === undefined && idx === 0)
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image || '/placeholder.svg'}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Image thumbnails */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeImageIndex[project.id] === idx ||
                          (activeImageIndex[project.id] === undefined && idx === 0)
                            ? 'bg-primary scale-125'
                            : 'bg-gray-300 hover:bg-primary/70'
                        }`}
                        onMouseEnter={() => handleImageHover(project.id, idx)}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Category badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className={`
                          flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium
                          ${
                            theme === 'dark'
                              ? 'bg-gray-900/80 text-primary backdrop-blur-sm'
                              : 'bg-white/80 text-primary backdrop-blur-sm'
                          }
                        `}
                      >
                        {getCategoryIcon(cat as ProjectCategory)}
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-6">
                    {language === 'es' ? project.descriptionEs : project.descriptionEn}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`
                          px-3 py-1 rounded-md text-sm font-medium
                          ${theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.demoUrl && (
                      <Button
                        variant="default"
                        className="retro-button group relative overflow-hidden rounded-md border-2 border-primary bg-primary px-4 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <span className="relative z-10 flex items-center gap-2">
                            {t('projects.viewProject')}
                            <ExternalLink className="h-4 w-4" />
                          </span>
                          <span className="absolute inset-0 h-full w-full translate-y-9 bg-primary-foreground/20 transition-transform duration-300 group-hover:translate-y-0"></span>
                        </a>
                      </Button>
                    )}

                    {project?.codeUrlFrontend && (
                      <Button
                        variant="outline"
                        className="retro-button group relative overflow-hidden rounded-md border-2 border-primary/50 bg-background px-4 py-2 font-medium text-primary transition-all hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.codeUrlFrontend} target="_blank" rel="noopener noreferrer">
                          <span className="relative z-10 flex items-center gap-2">
                            {t('projects.viewCode')}
                            <Github className="h-4 w-4" />
                          </span>
                          <span className="absolute inset-0 h-full w-full translate-y-9 bg-primary transition-transform duration-300 group-hover:translate-y-0"></span>
                        </a>
                      </Button>
                    )}

                    {project.codeUrlFrontend && (
                      <Button
                        variant="outline"
                        className="retro-button group relative overflow-hidden rounded-md border-2 border-primary/50 bg-background px-4 py-2 font-medium text-primary transition-all hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.codeUrlFrontend} target="_blank" rel="noopener noreferrer">
                          <span className="relative z-10 flex items-center gap-2">
                            {t('projects.viewCode')}
                            <Github className="h-4 w-4" />
                          </span>
                        </a>
                      </Button>
                    )}

                    {/* Figma button for UI/UX projects */}
                    {project.figmaUrl && project.category.includes('uiux') && (
                      <Button
                        variant="outline"
                        className="retro-button group relative overflow-hidden rounded-md border-2 border-pink-400/50 bg-background px-4 py-2 font-medium text-pink-400 transition-all hover:text-primary-foreground hover:border-pink-400"
                        asChild
                      >
                        <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                          <span className="relative z-10 flex items-center gap-2">
                            Figma
                            <Figma className="h-4 w-4" />
                          </span>
                          <span className="absolute inset-0 h-full w-full translate-y-9 bg-pink-400 transition-transform duration-300 group-hover:translate-y-0"></span>
                        </a>
                      </Button>
                    )}

                    <Button
                      variant="ghost"
                      className="ml-auto text-primary hover:text-primary/80 hover:bg-primary/5"
                      asChild
                    >
                      <Link href={`/projects/${project.id}`} className="flex items-center gap-1">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
