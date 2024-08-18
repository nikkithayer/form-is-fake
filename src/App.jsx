import Section from './Components/Section'
import Columns from './Components/Columns'
import SignUpForm from './Components/SignUpForm'
import './App.css'

function App() {

  const BeachEpisode = {
    title: "Beach Episode",
    description: "A one sheet TTRPG about the balance between self care and being down for the cause.",
    image: "../public/beachepisode.png",
    link: "https://formisfake.itch.io/beach-episode",
    linkText: "Download on itch.io"
  }

  const IronCity = {
    title: "Iron City",
    description: "Iron City is an immersive experience that takes place in a world where the fey have returned and you need to help a lawfirm dealing with magical contract law. Guests will explore a world of fairies, magic, and legal jargon in our first ever open to the public immersive show. It's as much fun as you can have with the legal profession...Legally!",
    image: "../public/ironcity.png",
    link: "https://formisfake.itch.io/iron-city",
    linkText: "I'm intrigued and wish to subscribe to your newsletter."
  }

  const aboutUs = {
    title: "What on earth?",
    description: "We’re a team of interdisciplinary writers, coders, and artists who make events, games, and spectacles by smushing mediums and genres together.",
    link: "https://formisfake.itch.io/",
    linkText: "What does that even mean?"
  }

  return (
    <>
    <div className='header'><img src="../public/formisfakelogo.png" alt="" /></div>
    <div>
      <Section ProjectInfo={aboutUs} />
      <Section ProjectInfo={IronCity} />
      <Section ProjectInfo={BeachEpisode} />
      <Columns />
      <SignUpForm />
    </div>
    </>
  )
}

export default App
