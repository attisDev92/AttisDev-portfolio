import About from '@/components/About'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <main>
        <Banner />
        <About />
      </main>
    </div>
  )
}
