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
        The mobile Nav is 14 units high, so pt-14 pushes content down on mobile.
        On desktop (md), the sidebar is fixed, so we use ml-64/lg:ml-[280px] to push the main content right.
      */}
      <main className="flex-1 w-full relative overflow-x-hidden pt-14 md:pt-0 md:ml-64 lg:ml-[280px]">
        <Hero />
      <Metrics />
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
