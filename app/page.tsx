import About from '@/@/components/sections/about'
import Skills from '@/@/components/sections/skills'
import Projects from '@/@/components/sections/projects'
import Landing from '@/@/components/sections/landing'

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
