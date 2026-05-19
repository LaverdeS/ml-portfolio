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
    <div className="flex min-h-screen bg-bg">
      <Nav />
      {/* 
        The sidebar is now a sticky element in the flex layout, pushing main naturally.
      */}
      <main className="flex-1 min-w-0 relative overflow-x-hidden pt-14 md:pt-0">
        <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
      </main>
    </div>
  )
}
