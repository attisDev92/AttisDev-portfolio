'use client'

import { useLanguage } from '@/context/language-provider'
import { PcCase, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 w-max-3xl mx-auto">
      <div className="container w-max-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <PcCase className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl tracking-tight">
                Attis Dev <span className="text-primary">| Christian Burnham Masabanda</span>
              </span>
            </Link>
            <p className="text-foreground/70 text-sm max-w-md text-center md:text-left">
              Creating modern, responsive, and user-friendly web applications with clean code and creative solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/attisDev92/"
                target="_blank"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/burnhamchristian92/"
                target="_blank"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:attis.alejandro@gmail.com"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-foreground/70 text-sm">
              © {currentYear} {t('footer.rights')}
            </p>
            <p className="text-foreground/70 text-sm">{t('footer.madeWith')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
