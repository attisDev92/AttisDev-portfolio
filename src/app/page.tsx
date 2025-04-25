import About from '@/components/About'
import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 px-10">
      <main>
        <Banner />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
