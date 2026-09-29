import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import NowPlaying from './components/NowPlaying/NowPlaying'
import Section from './components/Section/Section'
import AngledSection from './components/AngledSection/AngledSection'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import SignUpForm from './components/SignUp/SignUpForm'
import Footer from './components/Footer/Footer'
import { nowPlaying, projectsHeading, projects, signup } from './content/home'
import shows from './content/nowPlaying.json'
import { useArrowKeySections } from './utils/useArrowKeySections'

function App() {
  const { hash } = useLocation()
  useArrowKeySections()

  // Arriving at a link like /#about (or the old /about page) scrolls to that section.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
    <Header />
    <main>
      <h1 className="visually-hidden">Form is Fake</h1>
      <NowPlaying shows={shows} {...nowPlaying} />
      <div id="projects">
        <AngledSection id="previous-projects" className="section-divider">
          <h2 className="visually-hidden">{projectsHeading}</h2>
          <Marquee edge="inline" items={Array(10).fill(projectsHeading)} decorative className="marquee-label section-divider-marquee" />
        </AngledSection>
        {projects.map((project) => <Section key={project.id} {...project} />)}
      </div>
      <About />
      <SignUpForm {...signup} />
    </main>
    <Footer />
    </>
  )
}

export default App
