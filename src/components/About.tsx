'use client'

import { useLanguage } from '@/context/language-provider'
import { motion } from 'framer-motion'
import {
  Code,
  Server,
  ImageMinus as Palette,
  Cpu,
  Layers,
  Globe,
  Database,
  PictureInPicture as Api,
  Smartphone,
  Download,
  Brain,
  GitBranch,
  Database as Sql,
} from 'lucide-react'
import { useRef } from 'react'
import { Button } from './ui/Button'

export default function About() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: 'HTML/CSS', icon: <Code className="h-5 w-5" />, progress: 0.9 },
    { name: 'JavaScript', icon: <Code className="h-5 w-5" />, progress: 0.8 },
    { name: 'React', icon: <Layers className="h-5 w-5" />, progress: 0.8 },
    { name: 'Next.js', icon: <Globe className="h-5 w-5" />, progress: 0.8 },
    { name: 'Node.js', icon: <Server className="h-5 w-5" />, progress: 0.8 },
    { name: 'Nest.js', icon: <Server className="h-5 w-5" />, progress: 0.8 },
    { name: 'GraphQL', icon: <Database className="h-5 w-5" />, progress: 0.7 },
    { name: 'API REST', icon: <Api className="h-5 w-5" />, progress: 0.9 },
    { name: 'React Native', icon: <Smartphone className="h-5 w-5" />, progress: 0.6 },
    { name: 'UI/UX Design', icon: <Palette className="h-5 w-5" />, progress: 0.6 },
    { name: 'AI Tools Handling', icon: <Brain className="h-5 w-5" />, progress: 0.8 },
    { name: 'Git and GitHub', icon: <GitBranch className="h-5 w-5" />, progress: 0.9 },
    { name: 'SQL and NoSQL Databases', icon: <Sql className="h-5 w-5" />, progress: 0.7 },
    { name: 'Model Context Protocol', icon: <Brain className="h-5 w-5" />, progress: 0.5 },
  ]

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'QuinDev S.A.S',
      period: '2023 - Present Freelance',
      descriptionEn:
        'Designed and developed reusable React/TypeScript component library. Integrated Microsoft Power Platform for enterprise process automation. Currently developing mobile app with React Native & Expo',
      descriptionEs:
        'Arquitectura y desarrollo de componentes reutilizables en React/TypeScript. Integración con Microsoft Power Platform para automatización de procesos empresariales. Desarrollo mobile app con React Native y Expo.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Instituto de Fomento a la Creatividad y la Innovación',
      period: '2023 - Present Full Time',
      descriptionEn:
        'Technical leadership in the development of Ecuador Film Commission and CinemaEc platform. Geolocation system for film locations. Front-end design with REACT, controlled forms with Formik, validations with Yup. Implementation of i18n for English/Spanish support. Design of REST API for integration with front-end.',
      descriptionEs:
        'Liderazgo técnico en el desarrollo de Ecuador Film Commission y plataforma CinemaEc con sistema de geolocalización de locaciones, diseño de front-end con REACT, formularios controlados con Formik, validaciones con Yup. Implementación de i18n para soporte inglés/español. Diseño de API REST para integración con front-end.',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden mx-auto max-w-4xl">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 arcade-text">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 loading-bar"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">{t('about.description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 arcade-text">
              <Cpu className="h-6 w-6 text-primary" />
              {t('about.experience')}
            </h3>

            <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[2.25rem] w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  <div className="p-4 rounded-lg border-2 border-primary/20 bg-background hover:border-primary/50 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{exp.title}</h4>
                      <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-md">{exp.period}</span>
                    </div>
                    <p className="text-foreground/70 text-sm mb-2">{exp.company}</p>
                    <p className="text-foreground/80">{language === 'en' ? exp.descriptionEn : exp.descriptionEs}</p>
                  </div>
                </motion.div>
              ))}

              <div className="absolute -bottom-4 -left-[0.5625rem] w-4 h-4 bg-primary rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 arcade-text">
              <Layers className="h-6 w-6 text-primary" />
              {t('about.skills')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-3 w-full bg-muted rounded-sm overflow-hidden bit-progress-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress * 100}%` }}
                      transition={{ duration: 1.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-sm bit-progress-fill"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
      </div>
    </section>
  )
}
