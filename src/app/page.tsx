import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Metrics from '@/components/sections/Metrics'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Publications from '@/components/sections/Publications'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden md:pl-20">
      <Nav />
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </main>
  )
}
