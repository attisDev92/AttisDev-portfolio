'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/language-provider'
import { Button } from '@/components/ui/Button'
import { Moon, Sun, Menu, X, PcCaseIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-2' : 'bg-transparent py-4',
      )}
    >
      <div className="flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <PcCaseIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block tracking-tight">
            Attis Dev <span className="text-primary">| Christian Burnham Masabanda</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/#home" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            {t('nav.home')}
          </Link>
          <Link href="/#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            {t('nav.about')}
          </Link>
          <Link href="/#projects" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            {t('nav.projects')}
          </Link>
          <Link href="/#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            {t('nav.contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-md border-2 border-primary/50 hover:border-primary"
          >
            <span className="font-bold">{language === 'en' ? 'ES' : 'EN'}</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-md border-2 border-primary/50 hover:border-primary"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden rounded-md border-2 border-primary/50 hover:border-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background backdrop-blur-md border-b">
          <nav className="container flex flex-col py-4 gap-4">
            <Link
              href="#home"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="#projects"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
