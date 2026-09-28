import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Components/Header/Header'
import NowPlaying from './Components/NowPlaying/NowPlaying'
import Slide from './Components/Slide/Slide'
import About from './Components/About/About'
import SignUpForm from './Components/SignUp/SignUpForm'
import Footer from './Components/Footer/Footer'
import { nowPlaying, projects, signup } from './content/home'
import shows from './content/nowPlaying.json'

function App() {
  const { hash } = useLocation()

  // Arriving at a link like /#about (or the old /about page) scrolls to that slide.
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
        <h2 className="visually-hidden">Projects</h2>
        {projects.map((project) => <Slide key={project.id} {...project} />)}
      </div>
      <About />
      <SignUpForm {...signup} />
    </main>
    <Footer />
    </>
  )
}

export default App
