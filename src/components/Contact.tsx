'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useLanguage } from '@/context/language-provider'

export default function Contact() {
  const { language } = useLanguage()

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {language === 'es' ? '¿Te interesa trabajar juntos?' : 'Interested in working together?'}
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Siempre estoy en busca de nuevos proyectos, ideas creativas u oportunidades para ayudarte a alcanzar tu visión.'
              : 'I&apos;m always looking for new projects, creative ideas or opportunities to help you achieve your vision.'}
          </p>

          <Button
            size="lg"
            className="retro-button group relative overflow-hidden rounded-md border-2 border-primary bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90"
            asChild
          >
            <Link href="/#contact">
              <span className="relative z-10">{language === 'es' ? 'Contactame' : 'Let&apos;s connect'}</span>
              <span className="absolute inset-0 h-full w-full translate-y-9 bg-primary-foreground/20 transition-transform duration-300 group-hover:translate-y-0"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
